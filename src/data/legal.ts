import {
  contactUrl,
  legalAbn,
  legalAcn,
  legalAddress,
  legalEmail,
  legalEntity,
  legalTradingName,
} from './site';

type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] };

export interface LegalPageData {
  path: string;
  title: string;
  description: string;
  heading: string;
  lede: string;
  sections: Array<{
    id: string;
    title: string;
    blocks: LegalBlock[];
  }>;
}

const eulaHref = '/eula';
const termsHref = '/terms';
const privacyHref = '/privacy-policy';
const refundHref = '/refund-policy';
const mail = `<a href="mailto:${legalEmail}">${legalEmail}</a>`;
const entityLine = `${legalEntity} (ABN ${legalAbn}, ACN ${legalAcn}), trading as ${legalTradingName}`;

export const eulaPage: LegalPageData = {
  path: eulaHref,
  title: 'End User Licence Agreement | DingoDocs',
  description: 'Licence terms for commercial DingoDocs software supplied by Yuma IT, including customer-controlled and AWS Marketplace deployments.',
  heading: 'End User Licence Agreement',
  lede: 'This agreement governs commercial DingoDocs software supplied under an order or marketplace offer.',
  sections: [
    {
      id: 'scope',
      title: '1. Scope and provider',
      blocks: [
        { type: 'p', text: `This End User Licence Agreement (<strong>EULA</strong>) is between you and ${entityLine}. Our registered address is ${legalAddress}.` },
        { type: 'p', text: `This EULA applies to a commercial DingoDocs build, image, update, documentation, or support entitlement supplied under a quote, order form, private offer, marketplace listing, or other ordering document (an <strong>Order</strong>). It should be read with the <a href="${termsHref}">Terms and Conditions</a>, <a href="${privacyHref}">Privacy Policy</a>, and <a href="${refundHref}">Refund Policy</a>.` },
        { type: 'p', text: 'The DingoDocs community source distribution is licensed separately under the Apache License 2.0. This EULA does not remove rights granted under an applicable open-source licence. Commercial images, marketplace entitlement features, support, services, and branding may have additional rights and restrictions under this EULA and the Order.' },
      ],
    },
    {
      id: 'acceptance',
      title: '2. Acceptance and authority',
      blocks: [
        { type: 'p', text: 'You accept this EULA by accepting an Order, subscribing through a marketplace, downloading, deploying, accessing, or using commercial DingoDocs. If you act for an organisation, you confirm that you have authority to bind it.' },
        { type: 'p', text: 'If you do not accept this EULA, do not deploy or use the commercial software. Contact us before use if an authorised procurement document requires different terms.' },
      ],
    },
    {
      id: 'licence',
      title: '3. Licence grant',
      blocks: [
        { type: 'p', text: 'During the licence term, subject to payment and the Order, we grant you a limited, non-exclusive, non-transferable licence to install, run, and use commercial DingoDocs for your internal professional security-assessment, reporting, remediation, and related business activities.' },
        { type: 'p', text: 'The licence is limited to the organisations, accounts, environments, users, capacity, regions, and deployment model stated in the Order. Your employees and contractors may use DingoDocs on your behalf if they follow this EULA and you remain responsible for their use.' },
      ],
    },
    {
      id: 'restrictions',
      title: '4. Licence restrictions',
      blocks: [
        { type: 'p', text: 'Except where an applicable open-source licence or law expressly permits it, you must not:' },
        { type: 'ul', items: [
          'copy, resell, rent, lease, sublicense, distribute, or commercially host the commercial software for a third party;',
          'circumvent marketplace entitlement, licence validation, identity, tenant, approval, audit, or security controls;',
          'reverse engineer or decompile proprietary portions of a commercial build, except to the limited extent law does not allow this restriction;',
          'remove ownership, licence, attribution, or security notices;',
          'use DingoDocs to access, test, collect from, or interfere with systems without authority; or',
          'use our names, marks, or commercial materials in a way that suggests endorsement or ownership.',
        ] },
      ],
    },
    {
      id: 'customer-systems',
      title: '5. Customer systems and authorised use',
      blocks: [
        { type: 'p', text: 'DingoDocs is designed for customer-controlled deployment. Unless an Order assigns a responsibility to us, you are responsible for infrastructure, configuration, backups, identity, access, network controls, credentials, integrations, retention, recovery, and updates.' },
        { type: 'p', text: 'You must obtain all permissions required for each assessment, target, evidence item, scanner import, client collaboration, and remediation activity. DingoDocs supports professional work but does not grant testing authority or replace legal, risk, or security judgement.' },
      ],
    },
    {
      id: 'data',
      title: '6. Customer Data',
      blocks: [
        { type: 'p', text: 'You retain ownership of scope records, evidence, findings, reports, configurations, and other content submitted to DingoDocs (<strong>Customer Data</strong>). You grant us only the rights reasonably needed to provide support or services requested under an Order.' },
        { type: 'p', text: 'We do not receive Customer Data merely because you deploy DingoDocs in your own environment. If you provide Customer Data for support or engage us to host or manage DingoDocs, the Order, documented instructions, applicable law, and any data processing agreement govern that handling.' },
      ],
    },
    {
      id: 'third-parties',
      title: '7. Third-party services and open source',
      blocks: [
        { type: 'p', text: 'DingoDocs can connect to identity, storage, email, scanner, AI, cloud, marketplace, and other third-party services. You are responsible for their accounts, fees, permissions, configuration, and terms.' },
        { type: 'p', text: 'Open-source components are governed by their own licence notices. If an open-source licence gives you broader rights for that component, those rights continue.' },
      ],
    },
    {
      id: 'updates',
      title: '8. Updates, support, and changes',
      blocks: [
        { type: 'p', text: 'We may provide fixes, security updates, and new versions during the term. You must apply supported security updates within a reasonable time. Support scope and response targets are limited to the Order.' },
        { type: 'p', text: 'We may change features to address security, law, third-party dependencies, or product development. We will not materially reduce paid functionality during a fixed term without reasonable notice, unless an urgent security or legal issue requires faster action.' },
      ],
    },
    {
      id: 'fees-term',
      title: '9. Fees, term, and renewal',
      blocks: [
        { type: 'p', text: 'Fees, taxes, licence term, metering, capacity, renewal, and payment are set out in the Order or marketplace offer. A subscription renews only as stated there.' },
        { type: 'p', text: 'Marketplace billing and cancellation are also subject to the marketplace provider’s terms and processes. Our posted Refund Policy preserves rights that cannot lawfully be excluded.' },
      ],
    },
    {
      id: 'warranties',
      title: '10. Consumer guarantees and warranties',
      blocks: [
        { type: 'p', text: 'Nothing in this EULA excludes, restricts, or modifies a guarantee, right, warranty, or remedy that cannot lawfully be excluded, including under the Australian Consumer Law.' },
        { type: 'p', text: 'Except for non-excludable rights and an express promise in an Order, commercial DingoDocs is supplied as available. We do not promise uninterrupted or error-free operation, compatibility with every environment or integration, detection of every issue, or achievement of a certification, security, compliance, or business outcome.' },
      ],
    },
    {
      id: 'liability',
      title: '11. Liability',
      blocks: [
        { type: 'p', text: 'Neither party excludes liability that cannot lawfully be excluded. Subject to that, neither party is liable for indirect or consequential loss, or loss of profit, revenue, opportunity, goodwill, anticipated savings, or data, except to the extent caused by its breach of confidentiality, privacy obligations, fraud, or wilful misconduct.' },
        { type: 'p', text: 'To the extent permitted by law, each party’s total aggregate liability connected with an Order is limited to fees paid or payable under that Order in the 12 months before the event giving rise to the claim. This limit does not apply where law does not permit it, to unpaid fees, or to infringement of the other party’s intellectual property.' },
        { type: 'p', text: 'Where law permits a remedy to be limited, our liability is limited, at our option, to resupplying the affected goods or services, paying the cost of resupply, repairing or replacing the affected goods, or paying the cost of repair or replacement.' },
      ],
    },
    {
      id: 'termination',
      title: '12. Suspension and termination',
      blocks: [
        { type: 'p', text: 'We may suspend licence services we control where reasonably necessary to address a security threat, unlawful use, material breach, marketplace entitlement failure, or undisputed overdue fees after notice. We will limit suspension where practical.' },
        { type: 'p', text: 'Either party may terminate for a material breach not remedied within 20 business days after written notice, or immediately for insolvency. When the Order ends, commercial licence rights end, accrued fees remain payable, and you remain responsible for exporting and deleting data from customer-controlled systems.' },
      ],
    },
    {
      id: 'general',
      title: '13. General',
      blocks: [
        { type: 'p', text: 'The Order prevails over this EULA to the extent of a direct conflict. A marketplace term applies to marketplace billing or fulfilment unless it expressly changes another contract term. If a term is unenforceable, it is read down or severed and the remainder continues.' },
        { type: 'p', text: 'This EULA is governed by the laws of the Australian Capital Territory, Australia. The parties submit to the non-exclusive jurisdiction of its courts. Mandatory laws elsewhere continue where they cannot be excluded.' },
        { type: 'p', text: `Questions and notices may be sent to ${mail}, ${legalAddress}, or through <a href="${contactUrl}">our contact page</a>.` },
      ],
    },
  ],
};

export const termsPage: LegalPageData = {
  path: termsHref,
  title: 'Terms and Conditions | DingoDocs',
  description: 'Terms governing the DingoDocs website, orders, support, and professional services supplied by Yuma IT.',
  heading: 'Terms and conditions',
  lede: 'These terms govern this website, DingoDocs orders, support, and related services.',
  sections: [
    {
      id: 'provider',
      title: '1. Provider and contract',
      blocks: [
        { type: 'p', text: `DingoDocs is provided by ${entityLine}. Our registered address is ${legalAddress}. Contact us at ${mail} or through <a href="${contactUrl}">our contact page</a>.` },
        { type: 'p', text: `These terms should be read with the applicable quote, order form, statement of work, marketplace offer, or other ordering document (an <strong>Order</strong>), the <a href="${eulaHref}">EULA</a>, <a href="${privacyHref}">Privacy Policy</a>, and <a href="${refundHref}">Refund Policy</a>. Together they form the contract.` },
      ],
    },
    {
      id: 'website',
      title: '2. Website use',
      blocks: [
        { type: 'p', text: 'You may use this website to learn about DingoDocs, review legal terms, inspect public project material, and contact us. You must not misuse the website, attempt unauthorised access, interfere with its operation, or use its content unlawfully.' },
        { type: 'p', text: 'Website material is general information, not legal, security, financial, or professional advice. Product capabilities and availability may change. An Order defines what we commit to supply.' },
      ],
    },
    {
      id: 'orders',
      title: '3. Orders and priority',
      blocks: [
        { type: 'p', text: 'An Order may describe the licence or subscription term, deployment, capacity, support, professional services, fees, and special terms. It becomes binding when accepted by both parties or when we make paid DingoDocs materials available in response to it.' },
        { type: 'p', text: 'If documents conflict, the Order applies first, followed by a signed statement of work, the EULA for software use, these terms, then referenced policies. Marketplace terms also govern marketplace billing and fulfilment.' },
      ],
    },
    {
      id: 'services',
      title: '4. Support and professional services',
      blocks: [
        { type: 'p', text: 'We will provide support and professional services with reasonable care and skill and within the scope, assumptions, dependencies, and timetable in the Order.' },
        { type: 'p', text: 'You must give timely access, information, decisions, and authorised contacts needed for delivery. A delay or incorrect instruction from you may change timing and reasonable cost.' },
      ],
    },
    {
      id: 'fees',
      title: '5. Fees and taxes',
      blocks: [
        { type: 'p', text: 'Fees, currency, payment dates, usage measures, and taxes are set out in the Order. Unless stated otherwise, fees exclude GST. Undisputed overdue amounts may incur reasonable recovery costs and interest permitted by law.' },
        { type: 'p', text: 'Refunds, credits, and cancellations are governed by the Order, our Refund Policy, the marketplace process where applicable, and non-excludable law.' },
      ],
    },
    {
      id: 'customer-data',
      title: '6. Customer Data and confidentiality',
      blocks: [
        { type: 'p', text: 'You retain ownership of Customer Data. Each party must protect the other party’s non-public business, technical, security, and commercial information using reasonable care and may use it only for the contract.' },
        { type: 'p', text: 'Confidential information excludes material lawfully known without restriction, independently developed, publicly available without breach, or lawfully received from another source. Legally compelled disclosure is allowed after notice where lawful.' },
      ],
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual property',
      blocks: [
        { type: 'p', text: 'We and our licensors retain intellectual property rights in commercial DingoDocs materials, documentation, branding, and materials developed independently of Customer Data. Community source and third-party open-source components remain governed by their stated licences.' },
        { type: 'p', text: 'Deliverables made specifically for you are governed by the statement of work. Feedback may be used without identifying you or disclosing confidential information.' },
      ],
    },
    {
      id: 'consumer-rights',
      title: '8. Consumer rights and warranties',
      blocks: [
        { type: 'p', text: 'Nothing in the contract excludes, restricts, or modifies a right, guarantee, warranty, or remedy that cannot lawfully be excluded, including under the Australian Consumer Law.' },
        { type: 'p', text: 'Except for non-excludable rights and express commitments in an Order, website material and services are supplied as available. We do not guarantee a particular security, compliance, procurement, certification, or commercial outcome.' },
      ],
    },
    {
      id: 'liability',
      title: '9. Liability',
      blocks: [
        { type: 'p', text: 'Neither party excludes liability that cannot lawfully be excluded. Subject to that, the liability limits and exclusions in the EULA apply to the contract. If no EULA applies, each party’s aggregate liability is limited to fees paid or payable for the affected Order in the 12 months before the event giving rise to the claim.' },
      ],
    },
    {
      id: 'termination',
      title: '10. Termination',
      blocks: [
        { type: 'p', text: 'Either party may terminate an Order for material breach if it is not remedied within 20 business days after written notice, or immediately if the other party becomes insolvent. Convenience termination applies only where an Order permits it.' },
        { type: 'p', text: 'When an Order ends, accrued amounts remain payable. Terms that should continue by nature survive, including confidentiality, privacy, intellectual property, payment, liability, disputes, and governing law.' },
      ],
    },
    {
      id: 'changes',
      title: '11. Changes',
      blocks: [
        { type: 'p', text: 'We may update these terms for future Orders. For an existing fixed term, we will give at least 30 days’ notice of a materially adverse change. If you reject that change before it takes effect, you may terminate the affected Order and receive a pro-rata refund of prepaid fees for the unused period.' },
      ],
    },
    {
      id: 'law',
      title: '12. Disputes and governing law',
      blocks: [
        { type: 'p', text: 'Before court proceedings, each party must describe the dispute in writing and try in good faith to resolve it for 20 business days. Either party may seek urgent relief. This process does not restrict consumer or regulator rights.' },
        { type: 'p', text: 'The contract is governed by the laws of the Australian Capital Territory, Australia. The parties submit to the non-exclusive jurisdiction of its courts. If a term is unenforceable, it is read down or severed and the remainder continues.' },
      ],
    },
  ],
};

export const privacyPage: LegalPageData = {
  path: privacyHref,
  title: 'Privacy Policy | DingoDocs',
  description: 'How Yuma IT collects, uses, stores, discloses, and protects personal information connected with DingoDocs.',
  heading: 'Privacy policy',
  lede: 'This policy explains how Yuma IT handles personal information connected with DingoDocs and this website.',
  sections: [
    {
      id: 'scope',
      title: '1. Scope and responsibility',
      blocks: [
        { type: 'p', text: `This policy applies to ${entityLine} when we collect or hold personal information through this website, enquiries, sales, contracting, support, managed services, professional services, or DingoDocs administration.` },
        { type: 'p', text: 'DingoDocs is primarily customer-controlled software. When a customer runs DingoDocs in its own environment, that customer controls user, assessment, evidence, finding, report, identity, and integration data stored there. We do not receive that data merely because DingoDocs is used.' },
      ],
    },
    {
      id: 'information',
      title: '2. Information we collect',
      blocks: [
        { type: 'p', text: 'Depending on how you deal with us, we may collect:' },
        { type: 'ul', items: [
          'identity and business contact details, including name, employer, role, email, phone number, and address;',
          'account and access details, including organisation, role, authentication events, and support permissions;',
          'commercial records, including enquiries, demonstrations, quotes, Orders, invoices, marketplace identifiers, and payment status;',
          'communications, feedback, support requests, diagnostics, meeting notes, and correspondence;',
          'website and security data, including IP address, browser, device, timestamps, requested pages, referral information, and protective service logs; and',
          'Customer Data an authorised customer intentionally gives us for hosting, support, investigation, or professional services.',
        ] },
        { type: 'p', text: 'Customer Data may contain confidential assessment material, security evidence, credentials, or personal and sensitive information. Customers should provide only material that is necessary and authorised.' },
      ],
    },
    {
      id: 'collection',
      title: '3. How we collect information',
      blocks: [
        { type: 'p', text: 'We usually collect information directly from you when you contact us, arrange a demonstration, accept an Order, request support, or work with us. We may also receive it from your employer, an authorised partner, AWS Marketplace, public business records, or services you ask us to use.' },
        { type: 'p', text: 'If we receive personal information we did not request, we assess whether we could lawfully have collected it. If not, we destroy or de-identify it where lawful and reasonable.' },
      ],
    },
    {
      id: 'purposes',
      title: '4. Why we use information',
      blocks: [
        { type: 'p', text: 'We use personal information to:' },
        { type: 'ul', items: [
          'respond to enquiries, arrange demonstrations, and manage relationships;',
          'prepare and administer Orders, subscriptions, invoices, marketplace entitlements, and support;',
          'provide hosting, professional services, security response, and requested technical assistance;',
          'operate, secure, diagnose, maintain, and improve our website and services;',
          'meet legal, accounting, insurance, audit, and regulatory duties; and',
          'send relevant business communications where permitted, with an unsubscribe option for marketing.',
        ] },
        { type: 'p', text: 'We do not sell personal information. We do not use Customer Data to train general-purpose AI models.' },
      ],
    },
    {
      id: 'disclosure',
      title: '5. Disclosure and service providers',
      blocks: [
        { type: 'p', text: 'We may disclose personal information to staff and contractors who need it, professional advisers, insurers, payment and marketplace providers, hosting and security providers, communication providers, and authorities where required or authorised by law.' },
        { type: 'p', text: 'We require service providers to use information only for the agreed service and to protect it appropriately. A customer controls disclosures from its own DingoDocs deployment.' },
      ],
    },
    {
      id: 'overseas',
      title: '6. Overseas handling',
      blocks: [
        { type: 'p', text: 'Some providers may store or process business contact, marketplace, support, or website data outside Australia, including in the United States and other locations selected by the customer or provider. Countries can change as providers update their services.' },
        { type: 'p', text: 'Where Australian privacy law applies, we take reasonable steps required by law before disclosing personal information overseas. Customers choose the regions and providers used for customer-controlled DingoDocs deployments.' },
      ],
    },
    {
      id: 'website',
      title: '7. Website data and cookies',
      blocks: [
        { type: 'p', text: 'Our website and infrastructure may record standard request and security logs needed to deliver pages, prevent abuse, diagnose faults, and understand aggregate use. We do not use third-party advertising cookies on this site.' },
        { type: 'p', text: 'Your browser can block or delete cookies. Essential security or preference functions may not work if required storage is disabled.' },
      ],
    },
    {
      id: 'security-retention',
      title: '8. Security and retention',
      blocks: [
        { type: 'p', text: 'We use administrative, technical, and physical safeguards appropriate to the information and risk. No internet transmission or storage system is completely secure.' },
        { type: 'p', text: 'We retain personal information only while needed for the purpose collected, legal and accounting obligations, security, disputes, and contract administration. We then delete or de-identify it where lawful. Customer-controlled deployment retention is set and operated by the customer.' },
      ],
    },
    {
      id: 'access',
      title: '9. Access and correction',
      blocks: [
        { type: 'p', text: `You may ask to access or correct personal information we hold about you by contacting ${mail}. We may need to verify your identity. If law permits us to refuse, we will explain the reason and available complaint path where required.` },
        { type: 'p', text: 'For information held in a customer-controlled DingoDocs deployment, contact the customer that operates that deployment first.' },
      ],
    },
    {
      id: 'complaints',
      title: '10. Privacy complaints',
      blocks: [
        { type: 'p', text: `Send privacy questions or complaints to ${mail} with enough detail for us to investigate. We will acknowledge the complaint and respond within a reasonable time.` },
        { type: 'p', text: 'If you are not satisfied, you may contact the Office of the Australian Information Commissioner. Other privacy regulators may also have jurisdiction depending on your location.' },
      ],
    },
    {
      id: 'changes-contact',
      title: '11. Changes and contact',
      blocks: [
        { type: 'p', text: 'We may update this policy when our practices, providers, products, or legal obligations change. The effective date on this page identifies the current version.' },
        { type: 'p', text: `Contact: ${legalEntity}, ${legalAddress}; ${mail}; or <a href="${contactUrl}">our contact page</a>.` },
      ],
    },
  ],
};

export const refundPage: LegalPageData = {
  path: refundHref,
  title: 'Refund Policy | DingoDocs',
  description: 'DingoDocs refund and cancellation policy for direct and AWS Marketplace purchases, including Australian Consumer Law remedies.',
  heading: 'Refund policy',
  lede: 'This policy explains refund and cancellation rights for direct and marketplace DingoDocs purchases.',
  sections: [
    {
      id: 'scope',
      title: '1. Scope',
      blocks: [
        { type: 'p', text: `This policy applies to paid DingoDocs software, subscriptions, support, and services supplied by ${entityLine}. It forms part of our <a href="${termsHref}">Terms and Conditions</a>.` },
        { type: 'p', text: 'The applicable Order identifies whether billing is direct or through a marketplace. Marketplace purchases also follow the marketplace provider’s billing, refund, and cancellation process.' },
      ],
    },
    {
      id: 'consumer-law',
      title: '2. Australian Consumer Law',
      blocks: [
        { type: 'p', text: 'Nothing in this policy excludes, restricts, or modifies rights or remedies that cannot lawfully be excluded, including consumer guarantees under the Australian Consumer Law.' },
        { type: 'p', text: 'If goods or services fail a non-excludable guarantee, available remedies depend on the nature of the failure and may include correction, repair, replacement, resupply, cancellation, refund, or compensation. Contact us so we can assess the issue promptly.' },
      ],
    },
    {
      id: 'direct-orders',
      title: '3. Direct Orders',
      blocks: [
        { type: 'p', text: 'For a direct Order, fees are non-refundable once the licence term or service has started, except where the Order says otherwise, we agree to a refund, or law requires a remedy.' },
        { type: 'p', text: 'You may cancel renewal using the notice method and deadline in the Order. Cancellation stops future renewal but does not ordinarily refund the current committed term.' },
        { type: 'p', text: 'If we end a prepaid Order for convenience or make a materially adverse contract change that you reject as allowed by the Terms, we will refund the prepaid fee for the unused period on a pro-rata basis.' },
      ],
    },
    {
      id: 'marketplace',
      title: '4. AWS Marketplace purchases',
      blocks: [
        { type: 'p', text: 'AWS Marketplace processes marketplace charges, cancellations, and approved refunds. Review the offer and AWS Marketplace terms before subscribing.' },
        { type: 'p', text: 'Under the current AWS Marketplace process, cancelling an eligible non-private offer subscription within 48 hours of purchase results in a full software-charge refund. After 48 hours, refund requests are assessed under this policy, the offer, and applicable law. Private-offer refunds require our authorisation.' },
        { type: 'p', text: 'Usage-based subscriptions can generally be cancelled through the AWS Marketplace console. Contract or upfront agreements may require an AWS Customer Service request or the agreement process shown in the console. Cancellation of future invoices does not itself refund charges already invoiced.' },
      ],
    },
    {
      id: 'eligible',
      title: '5. When we may approve a refund',
      blocks: [
        { type: 'p', text: 'In addition to mandatory legal remedies, we may approve a full or partial refund where:' },
        { type: 'ul', items: [
          'you were charged more than once for the same entitlement;',
          'a verified billing or metering error caused an incorrect software charge;',
          'we cannot provide a material paid entitlement and cannot correct the issue within a reasonable time;',
          'the Order expressly provides a refund right; or',
          'we agree that exceptional circumstances make a refund fair and reasonable.',
        ] },
      ],
    },
    {
      id: 'not-eligible',
      title: '6. When a refund is not ordinarily available',
      blocks: [
        { type: 'p', text: 'Subject to non-excludable law, we do not ordinarily provide a refund for change of mind, unused capacity, failure to cancel renewal in time, customer infrastructure or configuration problems, unsupported changes, third-party outages, or use outside the Order and documentation.' },
        { type: 'p', text: 'Professional services already performed and reasonable committed costs are not refundable unless the service fails an applicable guarantee or the Order says otherwise.' },
      ],
    },
    {
      id: 'request',
      title: '7. How to request a refund',
      blocks: [
        { type: 'p', text: `Email ${mail} or use <a href="${contactUrl}">our contact page</a>. Include your organisation, Order or AWS agreement identifier, invoice, purchase date, amount, reason, relevant diagnostics, and requested remedy. Do not send passwords, access keys, exploit material, or confidential evidence.` },
        { type: 'p', text: 'For an AWS Marketplace purchase, you may also need to start or approve the applicable request in the AWS Marketplace console or through AWS Customer Service.' },
      ],
    },
    {
      id: 'assessment',
      title: '8. Assessment and payment',
      blocks: [
        { type: 'p', text: 'We will acknowledge a complete request, may ask for reasonable evidence, and will provide an outcome within a reasonable time. Complex marketplace, technical, or legal issues can take longer.' },
        { type: 'p', text: 'Approved direct refunds are returned through the original payment method where practical. Marketplace refunds are processed by the marketplace provider and timing depends on its systems, invoice status, tax treatment, and payment method.' },
      ],
    },
    {
      id: 'contact',
      title: '9. Contact',
      blocks: [
        { type: 'p', text: `${legalEntity}, ${legalAddress}; ${mail}; or <a href="${contactUrl}">our contact page</a>.` },
      ],
    },
  ],
};
