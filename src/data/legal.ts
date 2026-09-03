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
  description: 'DingoDocs refund policy covering Australian Consumer Law remedies, subscriptions, AWS Marketplace purchases, and refund requests.',
  heading: 'Refund policy',
  lede: 'This policy explains when we provide refunds or other remedies for DingoDocs and how to make a request.',
  sections: [
    {
      id: 'scope',
      title: '1. Scope',
      blocks: [
        { type: 'p', text: `This policy applies to DingoDocs supplied by ${entityLine}. It forms part of the <a href="${termsHref}">Terms and conditions</a>. If an Order gives you a more favourable refund right, that right also applies.` },
        { type: 'p', text: 'Nothing in this policy excludes, restricts, or modifies rights or remedies that cannot lawfully be excluded, including under the Australian Consumer Law (ACL).' },
        { type: 'p', text: 'The applicable Order identifies whether billing is direct or through a marketplace. Marketplace purchases also follow the marketplace provider’s billing, refund, and cancellation process.' },
      ],
    },
    {
      id: 'acl',
      title: '2. Australian Consumer Law',
      blocks: [
        { type: 'p', text: 'Where the ACL applies, DingoDocs goods and services come with consumer guarantees. Depending on the failure, you may be entitled to correction, repair, replacement, resupply, cancellation, a refund for an unused portion, compensation for reduced value, or compensation for reasonably foreseeable loss.' },
        { type: 'p', text: 'A major failure can entitle a consumer to reject goods or cancel services and choose remedies available under the ACL. For a non-major failure, we may first have a reasonable opportunity to correct the problem. ACL rights can also apply to some business purchases.' },
      ],
    },
    {
      id: 'refunds',
      title: '3. When we provide a refund',
      blocks: [
        { type: 'p', text: 'We provide a refund or other remedy when required by law. We also refund:' },
        { type: 'ul', items: [
          'a duplicate payment or confirmed billing or metering error;',
          'fees paid for an Order we do not accept or never make available;',
          'prepaid fees for the unused period if we withdraw DingoDocs or terminate an Order for our convenience; and',
          'any amount an Order expressly says is refundable.',
        ] },
      ],
    },
    {
      id: 'change-of-mind',
      title: '4. Change of mind',
      blocks: [
        { type: 'p', text: 'We do not offer a general change-of-mind refund after DingoDocs has been made available or professional services have started, unless an Order says otherwise. This does not affect any ACL right.' },
        { type: 'p', text: 'If you cancel before we provide access, licence material, deployment work, or professional services, we will refund fees paid for that unused Order, less any non-recoverable marketplace charge clearly disclosed before purchase.' },
      ],
    },
    {
      id: 'subscriptions',
      title: '5. Subscriptions, direct Orders, and services',
      blocks: [
        { type: 'p', text: 'Prepaid fees cover the subscription or licence term in the Order. Stopping use or terminating early for convenience does not create a refund for unused time unless the Order or law says otherwise.' },
        { type: 'p', text: 'You may cancel renewal using the notice method and deadline in the Order. Cancellation stops future renewal but does not ordinarily refund the current committed term.' },
        { type: 'p', text: 'Professional services fees are refundable for work not performed if we cancel that work, or where law requires a remedy. Properly performed work is not refundable for change of mind.' },
      ],
    },
    {
      id: 'marketplaces',
      title: '6. Marketplace and partner purchases',
      blocks: [
        { type: 'p', text: 'If you buy through AWS or another marketplace, the marketplace may process the refund through its billing system. Tell both us and the marketplace about the request. A marketplace process does not remove any obligation we have as supplier under applicable law.' },
        { type: 'p', text: 'Under the current AWS Marketplace process, cancelling an eligible non-private offer subscription within 48 hours of purchase results in a full software-charge refund. After 48 hours, refund requests are assessed under this policy, the offer, and applicable law. Private-offer refunds require our authorisation.' },
        { type: 'p', text: 'Usage-based subscriptions can generally be cancelled through the AWS Marketplace console. Contract or upfront agreements may require an AWS Customer Service request or the agreement process shown in the console. Cancellation of future invoices does not itself refund charges already invoiced.' },
        { type: 'p', text: 'If a reseller or partner invoiced you, it may need to process the refund. We will reasonably cooperate with a valid claim relating to fees it paid us.' },
      ],
    },
    {
      id: 'request',
      title: '7. How to request a remedy',
      blocks: [
        { type: 'p', text: `Email ${mail} with the subject “DingoDocs refund” or use <a href="${contactUrl}">our contact page</a>. Include:` },
        { type: 'ol', items: [
          'your organisation and contact details;',
          'the Order, invoice, marketplace order number, or other proof of purchase;',
          'what you purchased and the deployment model;',
          'what went wrong and when, or why the Order was not used; and',
          'the remedy you seek.',
        ] },
        { type: 'p', text: 'Do not send credentials, live assessment evidence, access keys, exploit material, or sensitive logs by ordinary email. We will provide a secure transfer method if diagnostic material is needed.' },
        { type: 'p', text: 'For an AWS Marketplace purchase, you may also need to start or approve the applicable request in the AWS Marketplace console or through AWS Customer Service.' },
      ],
    },
    {
      id: 'assessment',
      title: '8. Assessment and payment',
      blocks: [
        { type: 'p', text: 'We will acknowledge a complete request within 5 business days and aim to give an outcome within 14 days after receiving information reasonably needed to assess it. Complex technical or marketplace claims may take longer; if so, we will explain why and provide an update.' },
        { type: 'p', text: 'Approved refunds are returned using the original payment route where practical. Marketplace timing is controlled by the marketplace. Bank and payment processing can take additional time after approval.' },
      ],
    },
    {
      id: 'complaints',
      title: '9. Disputes and contact',
      blocks: [
        { type: 'p', text: `If you disagree with an outcome, reply with the reasons and any new information. You may also write to ${legalAddress}. Nothing prevents you from using rights or complaint paths available under the ACL.` },
        { type: 'p', text: `Questions about this policy: ${mail}; or <a href="${contactUrl}">our contact page</a>.` },
      ],
    },
  ],
};
