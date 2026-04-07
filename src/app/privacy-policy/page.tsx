import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Buzz Alarmas",
  description: "Privacy policy and legal notice for Buzz Alarmas — how we collect, use and protect your personal data.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-white/90 mb-2">{title}</h3>
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navbar-style header */}
      <header className="border-b border-white/5 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo-white.png" alt="Buzz Alarmas" width={160} height={56} className="h-12 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-orange transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <div className="w-16 h-1 bg-orange rounded-full mb-4" />
          <p className="text-white/40 text-sm">Last updated: 2024 · www.buzzalarmas.com</p>
        </div>

        {/* Aviso Legal heading */}
        <div className="bg-orange/10 border border-orange/20 rounded-2xl px-6 py-4 mb-10">
          <p className="text-orange font-bold text-lg">Aviso Legal</p>
        </div>

        <Section title="1. Object and Acceptance">
          <p>
            The present legal notice regulates use of the website www.buzzalarmas.com. Navigation implies full acceptance of all provisions in this Legal Notice, which may be modified. Users must use the site correctly per laws, good faith, public order, and traffic customs. Users are responsible to Buzz Alarmas and third parties for damages resulting from non-compliance.
          </p>
        </Section>

        <Section title="2. Conditions of Access and Use">
          <p>
            The website and services are freely and openly accessible. Users guarantee authenticity and currency of provided data and bear sole responsibility for false or inaccurate statements. Users commit to appropriate use and prohibit:
          </p>
          <ul className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li>Distributing illegal, violent, pornographic, racist, xenophobic, offensive content, or terrorism apologia</li>
            <li>Introducing computer viruses or actions causing errors/damage to documents, data, or systems</li>
            <li>Attempting unauthorized access to restricted computer system areas</li>
            <li>Violating intellectual property rights or information confidentiality</li>
            <li>Impersonating other users, public administrations, or third parties</li>
            <li>Reproducing, copying, distributing, or publicly communicating content without authorization</li>
            <li>Collecting data for advertising/commercial purposes without prior consent</li>
          </ul>
          <p>
            All site content — texts, photographs, graphics, images, icons, technology, software, design, and source code — belongs to Buzz Alarmas. Users may only view content and make private copies not shared with third parties, installed on networked servers, or commercially exploited.
          </p>
          <p>
            All trademarks and distinctive signs appearing on the site belong to Buzz Alarmas. Distribution, modification, cession, or public communication of content without express authorization is prohibited.
          </p>
        </Section>

        <Section title="3. Privacy Policy">
          <SubSection title="Data Collection">
            <p>
              When requiring information, Buzz Alarmas requests voluntary provision through web forms. If providing others&apos; personal data, users commit to informing those individuals of this policy beforehand. For minor data provided by minors themselves, Buzz Alarmas presumes parental/guardian consent, exempting itself from liability for non-compliance.
            </p>
            <p>
              Per LOPDGDD article 4, users commit to providing truthful, exact, complete, current data. Data collected through forms and email requesting service information enters the automated &ldquo;USUARIOS WEB&rdquo; file, for which Buzz Alarmas is responsible, treating data confidentially exclusively for offering requested services and transmitting service/project information, with all legal and security guarantees imposed by EU Regulation 2016/679 (GDPR), Organic Law 3/2018 (LOPDGDD), and Law 34/2002 (LSSI-CE).
            </p>
          </SubSection>

          <SubSection title="Treatment Purposes">
            <p>
              Buzz Alarmas informs users of personal data treatment created from webpage data. Treatment purposes:
            </p>
            <ul className="list-[upper-roman] list-inside space-y-2 pl-2">
              <li>Enabling user navigation, allowing access to information and platform content</li>
              <li>Contacting users, responding to requests, petitions, or consultations from platform form usage</li>
              <li>Adopting applicable protection measures per current regulations, including possible anonymization/pseudonymization of personal data using appropriate techniques</li>
            </ul>
            <p>The file facilitates service provision information.</p>
          </SubSection>

          <SubSection title="Retention Periods">
            <p>Personal data is conserved per these criteria:</p>
            <ul className="list-[upper-roman] list-inside space-y-2 pl-2">
              <li>Generally conserved as long as necessary for proper navigation and platform use and content access. Regarding profile navigation data and accepted analytical cookies, per cookie policy.</li>
              <li>As long as necessary for properly addressing specific petitions/requests per case.</li>
              <li>While treating personal data, including conservation during legal timeframes, regardless of treatment legitimacy basis.</li>
            </ul>
          </SubSection>

          <SubSection title="Legitimation">
            <p>
              The legal basis for treating user personal data is contractual relationship and the interested party&apos;s consent.
            </p>
            <ul className="space-y-2 pl-2">
              <li><strong className="text-white/80">Navigation enabling:</strong> User consent and, per cases, satisfaction of legitimate interest associated with adequate platform management, maintenance, development, evolution, tools, network, information systems, correct functioning, functionalities, content/service access, and general security.</li>
              <li><strong className="text-white/80">User contact/consultation response:</strong> User consent.</li>
              <li><strong className="text-white/80">Protection measures/pseudonymization/anonymization:</strong> Legal obligation compliance (European Data Protection Regulation/GDPR).</li>
            </ul>
          </SubSection>

          <SubSection title="Recipients">
            <p>
              Data collected via web forms is communicated to companies acting as personal data treatment handlers, treating data only per Buzz Alarmas&apos; strict indications. Data remains within European Union space exclusively for previously indicated purposes.
            </p>
            <p>
              Within indicated communications, international data transfers to third countries/international organizations with European Commission adequacy decisions may occur.
            </p>
          </SubSection>

          <SubSection title="User Rights">
            <p>Buzz Alarmas guarantees users rights established in Personal Data Protection legislation:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Right to obtain confirmation whether Buzz Alarmas treats concerning personal data</li>
              <li>Right accessing personal data and requesting rectification of inaccurate data or, where applicable, requesting suppression when data no longer serves collection purposes</li>
              <li>Right opposing personal data treatment, causing Buzz Alarmas to cease treatment unless legitimate, compelling reasons exist or possible claim exercise/defense requires it</li>
              <li>Faculty requesting Buzz Alarmas limit personal data treatments when EU Regulation 2016/679 (GDPR) requirements are met</li>
              <li>Right receiving in structured, commonly-used, machine-readable format concerning personal data provided to Buzz Alarmas or requesting direct transmission to another controller when technically possible</li>
              <li>Any interested party may lodge a complaint with the Spanish Data Protection Authority (Agencia Española de Protección de Datos)</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="3.1 Contact Form">
          <p>
            Buzz Alarmas informs users that email addresses are introduced into automated files to provide service/project information or requested email information. Buzz Alarmas commits to not ceding, communicating, or sharing data with third parties without express approval.
          </p>
          <p>
            Buzz Alarmas cancels or rectifies data when inaccurate, incomplete, or no longer necessary/pertinent per EU Regulation 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD) provisions.
          </p>
        </Section>

        <Section title="4. Procedure for Illicit Activities">
          <p>
            If any user or third party believes facts/circumstances reveal unlawful content use or activity on included/accessible webpages, they must send notification to Buzz Alarmas with proper identification, specifying supposed infractions, and expressly declaring under responsibility that notification information is accurate.
          </p>
        </Section>

        <Section title="5. Contact Information">
          <p>All user-Buzz Alarmas notifications and communications are considered effective through postal mail, email, or telephone communication.</p>
          <div className="bg-dark-2 border border-white/5 rounded-xl p-5 space-y-1.5 mt-4">
            <p><strong className="text-white/80">Address:</strong> C/ Montaña Clara 5, Local 8, 38679 Fañabé, Adeje, Tenerife</p>
            <p><strong className="text-white/80">Telephone:</strong> <a href="tel:+34922099200" className="text-orange hover:underline">922 099 200</a></p>
            <p><strong className="text-white/80">Data Protection contact:</strong> <a href="mailto:dpo@buzzalarmas.com" className="text-orange hover:underline">dpo@buzzalarmas.com</a></p>
          </div>
        </Section>

        <Section title="6. Policy Modification and Update">
          <p>
            This policy may be modified anytime, properly published on this site, due to legal requirement changes, jurisprudential changes, and general Buzz Alarmas action/strategy changes. User publication/access occurs through this site, understanding that pre-change established relations are governed by rules existing when accessing the site for establishment.
          </p>
        </Section>

        {/* Bottom nav */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm">
          <Link href="/terms-and-conditions" className="text-orange hover:underline">
            Terms &amp; Conditions →
          </Link>
          <Link href="/" className="text-white/40 hover:text-white transition-colors">
            ← Back to buzzalarmas.com
          </Link>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-white/5 py-6 text-center text-white/25 text-xs">
        © {new Date().getFullYear()} Buzz Alarmas. All rights reserved. · R.N.S.P. Certified · DGP 4557
      </footer>
    </div>
  );
}
