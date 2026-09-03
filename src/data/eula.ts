import {
  contactUrl,
  legalAbn,
  legalAcn,
  legalAddress,
  legalEmail,
  legalEntity,
  legalTradingName,
  siteUrl,
} from './site';
import type { LegalPageData } from './legal';

const termsHref = '/terms';
const privacyHref = '/privacy-policy';
const refundHref = '/refund-policy';
const mail = `<a href="mailto:${legalEmail}">${legalEmail}</a>`;
const entityLine = `${legalEntity} (ABN ${legalAbn}, ACN ${legalAcn}), trading as ${legalTradingName}`;
const eulaUrl = new URL('eula', siteUrl).href;

export const eulaPage: LegalPageData = {
  path: '/eula',
  title: 'End User Licence Agreement | DingoDocs',
  description: 'End user licence for customer-hosted DingoDocs purchased through AWS Marketplace as a container product, and for commercial DingoDocs supplied under an order.',
  heading: 'End User Licence Agreement',
  lede: 'This EULA covers customer-hosted DingoDocs purchased through AWS Marketplace as a container product. The software runs in the subscriber’s environment. It also applies to other commercial DingoDocs supplied under an order.',
  sections: [
    {
      id: 'status',
      title: '1. Status and marketplace contract',
      blocks: [
        { type: 'p', text: `DingoDocs is supplied by ${entityLine}. Our registered address is ${legalAddress}. Contact us at ${mail} or through <a href="${contactUrl}">our contact page</a>.` },
        { type: 'p', text: 'If the listing uses the AWS Standard Contract for Marketplace (SCMP), SCMP controls where it conflicts with this document. Otherwise this EULA, the accepted Marketplace offer, and the <a href="' + termsHref + '">Terms and conditions</a> form the contract for that purchase.' },
        { type: 'p', text: `Use this page as the Marketplace EULA URL: <a href="${eulaUrl}">${eulaUrl}</a>.` },
        { type: 'p', text: 'The DingoDocs community source distribution is licensed separately under the Apache License 2.0. This EULA does not remove rights granted under an applicable open-source licence. Commercial images, marketplace entitlement features, support, services, and branding may have additional rights and restrictions under this EULA and the Order.' },
      ],
    },
    {
      id: 'grant',
      title: '2. Grant',
      blocks: [
        { type: 'p', text: 'The publisher grants the subscribing organisation a non-exclusive, non-transferable right to run the DingoDocs container images for the term and quantity of the active AWS Marketplace agreement. Each agreement is identified by the Marketplace license, not by AWS account ID.' },
        { type: 'p', text: 'For a direct Order, during the licence term and subject to payment, we grant you a limited, non-exclusive, non-transferable licence to install, run, and use commercial DingoDocs for your internal professional security-assessment, reporting, remediation, and related business activities, limited to the organisations, accounts, environments, users, capacity, regions, and deployment model in the Order.' },
        { type: 'p', text: 'No ownership of DingoDocs transfers to the subscriber. Open-source components remain governed by their licences. Employees and contractors may use DingoDocs on your behalf if they follow this EULA and you remain responsible for their use.' },
      ],
    },
    {
      id: 'scope',
      title: '3. Scope',
      blocks: [
        { type: 'p', text: 'DingoDocs supports security-assessment delivery: scope, evidence, findings, reporting, client collaboration, remediation tracking, and retesting. It does not provide legal advice, accreditation, certification, IRAP status, testing authority, or government endorsement.' },
        { type: 'p', text: 'Use is limited to the organisations, environments, users, capacity, and deployment model in the Marketplace agreement or other Order.' },
      ],
    },
    {
      id: 'customer',
      title: '4. Customer responsibilities',
      blocks: [
        { type: 'ul', items: [
          'Deploy and operate the software in your environment or AWS account, including VPC, database, storage, identity, backups, and updates.',
          'Configure identity, users, roles, integrations, and client access correctly.',
          'Obtain all permissions required for each assessment, target, evidence item, scanner import, client collaboration, and remediation activity.',
          'Review generated or AI-assisted output before relying on it or sharing it with a client.',
          'Maintain a valid AWS Marketplace agreement where the software was obtained that way. Unsubscribed accounts must not continue to run the images.',
        ] },
        { type: 'p', text: 'DingoDocs supports professional work but does not grant testing authority or replace legal, risk, or security judgement.' },
      ],
    },
    {
      id: 'publisher',
      title: '5. Publisher responsibilities',
      blocks: [
        { type: 'ul', items: [
          'Publish signed or versioned container images and deployment guidance.',
          'Check Marketplace entitlement from the running tasks using AWS License Manager.',
          `Provide support through ${mail} according to the selected support tier.`,
        ] },
        { type: 'p', text: 'The publisher does not operate the subscriber’s production environment and does not host subscriber assessment evidence in a publisher SaaS tenant under this listing.' },
      ],
    },
    {
      id: 'billing',
      title: '6. Marketplace billing',
      blocks: [
        { type: 'p', text: 'Purchases, taxes, invoices, refunds, and cancellations follow AWS Marketplace processes and the accepted offer, including private offers. See the <a href="' + refundHref + '">Refund policy</a>.' },
        { type: 'p', text: 'Fees, taxes, licence term, metering, capacity, renewal, and payment for a direct Order are set out in that Order. A subscription renews only as stated there.' },
      ],
    },
    {
      id: 'privacy',
      title: '7. Privacy',
      blocks: [
        { type: 'p', text: `The canonical privacy policy is the <a href="${privacyHref}">DingoDocs Privacy Policy</a>. Customer-controlled deployments keep user, assessment, evidence, finding, report, identity, and integration data in the subscriber’s environment unless the subscriber intentionally provides it for support.` },
        { type: 'p', text: 'You retain ownership of scope records, evidence, findings, reports, configurations, and other content submitted to DingoDocs (<strong>Customer Data</strong>). You grant us only the rights reasonably needed to provide support or services requested under an Order.' },
      ],
    },
    {
      id: 'restrictions',
      title: '8. Restrictions',
      blocks: [
        { type: 'p', text: 'Except where an applicable open-source licence or law expressly permits it, users must not:' },
        { type: 'ul', items: [
          'copy, resell, rent, lease, sublicense, distribute, or commercially host the commercial software for a third party;',
          'circumvent marketplace entitlement, licence validation, identity, tenant, approval, audit, or security controls;',
          'reverse engineer or decompile proprietary portions of a commercial build, except to the limited extent law does not allow this restriction;',
          'remove ownership, licence, attribution, or security notices;',
          'use DingoDocs to access, test, collect from, or interfere with systems without authority;',
          'upload malware, misuse the service, or violate law or third-party rights; or',
          'use our names, marks, or commercial materials in a way that suggests endorsement or ownership.',
        ] },
      ],
    },
    {
      id: 'warranties',
      title: '9. Consumer guarantees and warranties',
      blocks: [
        { type: 'p', text: 'Nothing in this EULA excludes, restricts, or modifies a guarantee, right, warranty, or remedy that cannot lawfully be excluded, including under the Australian Consumer Law.' },
        { type: 'p', text: 'Except for non-excludable rights and an express promise in an Order, commercial DingoDocs is supplied as available. We do not promise uninterrupted or error-free operation, compatibility with every environment or integration, detection of every issue, or achievement of a certification, security, compliance, or business outcome.' },
      ],
    },
    {
      id: 'liability',
      title: '10. Liability',
      blocks: [
        { type: 'p', text: 'Neither party excludes liability that cannot lawfully be excluded. Subject to that, neither party is liable for indirect or consequential loss, or loss of profit, revenue, opportunity, goodwill, anticipated savings, or data, except to the extent caused by its breach of confidentiality, privacy obligations, fraud, or wilful misconduct.' },
        { type: 'p', text: 'To the extent permitted by law, each party’s total aggregate liability connected with an Order is limited to fees paid or payable under that Order in the 12 months before the event giving rise to the claim. This limit does not apply where law does not permit it, to unpaid fees, or to infringement of the other party’s intellectual property.' },
        { type: 'p', text: 'Where law permits a remedy to be limited, our liability is limited, at our option, to resupplying the affected goods or services, paying the cost of resupply, repairing or replacing the affected goods, or paying the cost of repair or replacement.' },
      ],
    },
    {
      id: 'termination',
      title: '11. Suspension and termination',
      blocks: [
        { type: 'p', text: 'We may suspend licence services we control where reasonably necessary to address a security threat, unlawful use, material breach, marketplace entitlement failure, or undisputed overdue fees after notice. We will limit suspension where practical.' },
        { type: 'p', text: 'Either party may terminate for a material breach not remedied within 20 business days after written notice, or immediately for insolvency. When the Order ends, commercial licence rights end, accrued fees remain payable, and you remain responsible for exporting and deleting data from customer-controlled systems.' },
      ],
    },
    {
      id: 'general',
      title: '12. General',
      blocks: [
        { type: 'p', text: 'The Order prevails over this EULA to the extent of a direct conflict. A marketplace term applies to marketplace billing or fulfilment unless it expressly changes another contract term. If a term is unenforceable, it is read down or severed and the remainder continues.' },
        { type: 'p', text: 'This EULA is governed by the laws of the Australian Capital Territory, Australia. The parties submit to the non-exclusive jurisdiction of its courts. Mandatory laws elsewhere continue where they cannot be excluded.' },
        { type: 'p', text: `Questions and notices may be sent to ${mail}, ${legalAddress}, or through <a href="${contactUrl}">our contact page</a>.` },
      ],
    },
  ],
};
