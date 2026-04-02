"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[239px] lg:h-[433px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ background: "url('/images/request-quote-hero.png') center / cover, #302451" }}
        />
        <div className="absolute inset-0 bg-[#21153A]/80" />

        <div className="relative z-10 h-full flex items-center justify-center px-5 lg:px-[282px]">
          <motion.div
            className="flex flex-col items-center gap-[10px] lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 lg:gap-3">
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-[#10B981] rounded-full" />
              <span className="text-[10px] lg:text-[14px] font-semibold leading-[13px] lg:leading-[20px] tracking-[0.88px] lg:tracking-[1.4px] uppercase text-[#10B981]">
                Legal
              </span>
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-[#10B981] rounded-full" />
            </div>

            <h1 className="text-[24px] lg:text-[48px] font-semibold leading-[30px] lg:leading-[60px] text-white text-center">
              Privacy Policy
            </h1>

            <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white text-center max-w-[303px] lg:max-w-[577px] pt-1 lg:pt-2">
              How we collect, use, and protect your information at Hagion International Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white dark:bg-[#0B0F1A] py-12 lg:py-20">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <PolicySection number="1" title="Introduction">
              <p>
                Hagion International Ltd (&quot;Hagion&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and personal data of all users who interact with our website, services, and digital platforms.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Information We Collect">
              <p>We may collect the following categories of data:</p>
              <SubSection title="2.1 Personal Information">
                <BulletList items={["Full name", "Email address", "Phone number", "Company/organization name", "Location/address"]} />
              </SubSection>
              <SubSection title="2.2 Service-Related Information">
                <BulletList items={["Project details submitted via \"Request a Quote\"", "Business requirements", "Uploaded documents"]} />
              </SubSection>
              <SubSection title="2.3 Technical Data">
                <BulletList items={["IP address", "Browser type", "Device information", "Pages visited and session duration"]} />
              </SubSection>
            </PolicySection>

            <PolicySection number="3" title="How We Collect Information">
              <p>We collect data through:</p>
              <BulletList items={["Website forms (Contact, Request Quote)", "Email communications", "Newsletter/blog subscriptions", "Cookies and analytics tools"]} />
            </PolicySection>

            <PolicySection number="4" title="How We Use Your Information">
              <p>We use your information to:</p>
              <BulletList items={["Respond to inquiries and requests", "Provide and manage our services", "Process project requests and quotations", "Improve website functionality and user experience", "Send updates, newsletters, or service-related communications", "Ensure security and prevent fraud"]} />
            </PolicySection>

            <PolicySection number="5" title="Cookies and Tracking Technologies">
              <p>We use cookies to:</p>
              <BulletList items={["Improve website performance", "Analyze user behavior", "Personalize user experience"]} />
              <p>You can disable cookies via your browser settings.</p>
            </PolicySection>

            <PolicySection number="6" title="Data Sharing and Disclosure">
              <p className="font-semibold text-[#2D2555] dark:text-[#10B981]">We do not sell your personal data.</p>
              <p>We may share information with:</p>
              <BulletList items={["Internal teams and authorized personnel", "Trusted third-party service providers (hosting, analytics, email systems)", "Legal authorities when required by law"]} />
            </PolicySection>

            <PolicySection number="7" title="Data Security">
              <p>We implement industry-standard security measures including:</p>
              <BulletList items={["Secure servers", "Encryption protocols", "Access control systems"]} />
              <p className="italic text-[13px]">However, no system is 100% secure, and users share data at their own risk.</p>
            </PolicySection>

            <PolicySection number="8" title="Data Retention">
              <p>We retain your data only as long as necessary to:</p>
              <BulletList items={["Fulfill service obligations", "Comply with legal requirements", "Resolve disputes"]} />
            </PolicySection>

            <PolicySection number="9" title="Your Rights">
              <p>You have the right to:</p>
              <BulletList items={["Access your personal data", "Request correction or deletion", "Withdraw consent", "Opt out of marketing communications"]} />
              <p>
                Requests can be sent via our{" "}
                <Link href="/contact" className="text-[#068653] hover:underline font-medium">Contact page</Link>.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Third-Party Links">
              <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
            </PolicySection>

            <PolicySection number="11" title="Updates to This Policy">
              <p>We may update this Privacy Policy periodically. Changes will be reflected with a revised &quot;Effective Date.&quot;</p>
            </PolicySection>

            <PolicySection number="12" title="Contact Us">
              <p>For privacy-related inquiries:</p>
              <div className="mt-2 p-5 bg-[#F9FAFB] dark:bg-[#1A2035] border border-[#E5E7EB] dark:border-white/10 rounded-xl">
                <p className="font-semibold text-[#2D2555] dark:text-white text-[15px]">Hagion International Ltd</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p>
                    Email:{" "}
                    <a href="mailto:info@hagionintltd.com" className="text-[#068653] hover:underline">info@hagionintltd.com</a>
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://hagionintltd.com" target="_blank" rel="noopener noreferrer" className="text-[#068653] hover:underline">hagionintltd.com</a>
                  </p>
                </div>
              </div>
            </PolicySection>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function PolicySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeIn} transition={{ duration: 0.4 }} className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2D2555]/10 dark:bg-[#068653]/15 text-[#2D2555] dark:text-[#10B981] text-[13px] font-bold shrink-0">
          {number}
        </span>
        <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#0F172A] dark:text-white leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 pl-11 text-[14px] lg:text-[15px] leading-[1.7] text-[#4A5565] dark:text-[#94A3B8]">
        {children}
      </div>
    </motion.div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[15px] font-semibold text-[#2D2555] dark:text-[#E2E8F0]">{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative before:content-[''] before:absolute before:left-[-16px] before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#068653]">
          {item}
        </li>
      ))}
    </ul>
  );
}
