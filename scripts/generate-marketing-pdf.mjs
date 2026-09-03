import { spawn } from "node:child_process";
import { createReadStream, existsSync } from "node:fs";
import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { tmpdir } from "node:os";

const root = new URL("..", import.meta.url);
const publicDir = new URL("./public/", root);
const htmlPath = "/marketing/dingodocs-marketing.html";
const pdfPublic = new URL("./public/marketing/dingodocs-marketing.pdf", root);
const pdfOutput = new URL("./output/pdf/dingodocs-marketing.pdf", root);
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cdpClient(ws) {
  let id = 0;
  const pending = new Map();
  const listeners = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id != null && pending.has(message.id)) {
      const settle = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) settle.reject(new Error(message.error.message));
      else settle.resolve(message.result);
    }
    if (message.method && listeners.has(message.method)) {
      for (const fn of listeners.get(message.method)) fn(message.params, message.sessionId);
    }
  });
  return {
    send(method, params, sessionId) {
      const thisId = ++id;
      return new Promise((resolve, reject) => {
        pending.set(thisId, { resolve, reject });
        const payload = { id: thisId, method, params };
        if (sessionId) payload.sessionId = sessionId;
        ws.send(JSON.stringify(payload));
      });
    },
    on(method, fn) {
      if (!listeners.has(method)) listeners.set(method, []);
      listeners.get(method).push(fn);
    },
  };
}

async function waitForDevtools(port) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still starting.
    }
    await sleep(100);
  }
  throw new Error("Chrome DevTools did not start");
}

const server = createServer(async (req, res) => {
  const reqUrl = new URL(req.url || "/", "http://127.0.0.1");
  const file = join(publicDir.pathname, decodeURIComponent(reqUrl.pathname).replace(/^\//, ""));
  if (!file.startsWith(publicDir.pathname) || !existsSync(file) || (await stat(file)).isDirectory()) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "content-type": mime[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const pageUrl = `http://127.0.0.1:${port}${htmlPath}`;
const debugPort = 9333 + Math.floor(Math.random() * 200);
const profile = join(tmpdir(), `dingodocs-pdf-${debugPort}`);

const child = spawn(
  chrome,
  [
    "--headless=new",
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${profile}`,
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1600,2260",
    "about:blank",
  ],
  { stdio: "ignore" },
);

try {
  const version = await waitForDevtools(debugPort);
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve);
    ws.addEventListener("error", reject);
  });
  const client = cdpClient(ws);
  const { targetId } = await client.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await client.send("Target.attachToTarget", { targetId, flatten: true });
  const send = (method, params) => client.send(method, params, sessionId);

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.setLifecycleEventsEnabled", { enabled: true });
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1600,
    height: 2260,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Emulation.setAutoDarkModeOverride", { enabled: false });
  await send("Emulation.setEmulatedMedia", {
    media: "print",
    features: [{ name: "prefers-color-scheme", value: "light" }],
  });

  const idle = Promise.race([
    new Promise((resolve) => {
      client.on("Page.lifecycleEvent", (params) => {
        if (params.name === "networkIdle") resolve();
      });
    }),
    sleep(8000),
  ]);
  await send("Page.navigate", { url: pageUrl });
  await idle;
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
  await sleep(600);

  const { data } = await send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
    paperWidth: 8.27,
    paperHeight: 11.69,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    displayHeaderFooter: false,
  });
  await mkdir(new URL("./public/marketing/", root), { recursive: true });
  await writeFile(pdfPublic.pathname, Buffer.from(data, "base64"));
  ws.close();
} finally {
  child.kill("SIGTERM");
  server.close();
}

await mkdir(new URL("./output/pdf/", root), { recursive: true });
await copyFile(pdfPublic.pathname, pdfOutput.pathname);
console.log(`wrote ${pdfPublic.pathname}`);
console.log(`wrote ${pdfOutput.pathname}`);
