"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>

            <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white text-center max-w-[303px] lg:max-w-[577px] pt-1 lg:pt-2">
              The rules and guidelines governing your use of Hagion International Ltd&apos;s website and services.
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
              <p>These Terms and Conditions govern your use of the Hagion International Ltd website and services.</p>
              <p>By accessing our website, you agree to comply with these terms.</p>
            </PolicySection>

            <PolicySection number="2" title="Use of Website">
              <p>You agree to:</p>
              <BulletList items={["Use the website lawfully", "Provide accurate information", "Not misuse or disrupt the platform"]} />
            </PolicySection>

            <PolicySection number="3" title="Services">
              <p>Hagion provides services including but not limited to:</p>
              <BulletList items={["Software development", "IT consulting", "Digital solutions", "System automation", "Technology infrastructure services"]} />
              <p>All services are subject to individual agreements or contracts.</p>
            </PolicySection>

            <PolicySection number="4" title="Request for Quote">
              <p>When submitting a request:</p>
              <BulletList items={["You agree that all information provided is accurate", "Hagion reserves the right to accept or decline requests", "Quotes are non-binding until formal agreement"]} />
            </PolicySection>

            <PolicySection number="5" title="Intellectual Property">
              <p>All content on this website including:</p>
              <BulletList items={["Text", "Graphics", "Logos", "Designs", "Software"]} />
              <p>is the property of Hagion International Ltd unless otherwise stated.</p>
              <p className="font-semibold text-[#2D2555] dark:text-[#10B981]">Unauthorized use is strictly prohibited.</p>
            </PolicySection>

            <PolicySection number="6" title="Portfolio and Case Studies">
              <p>Projects displayed in the portfolio:</p>
              <BulletList items={["May include client work (with permission)", "Are for demonstration purposes only", "Do not grant replication rights"]} />
            </PolicySection>

            <PolicySection number="7" title="Blog and Content Usage">
              <p>Blog content is for informational purposes only.</p>
              <p>Users may not:</p>
              <BulletList items={["Reproduce content without permission", "Use content for commercial purposes without consent"]} />
            </PolicySection>

            <PolicySection number="8" title="Limitation of Liability">
              <p>Hagion is not liable for:</p>
              <BulletList items={["Any indirect or consequential damages", "Loss of data or profits", "Service interruptions"]} />
              <p className="italic text-[13px]">Use of our website and services is at your own risk.</p>
            </PolicySection>

            <PolicySection number="9" title="Third-Party Services">
              <p>We may integrate third-party tools/services.</p>
              <p>We are not responsible for:</p>
              <BulletList items={["Their performance", "Their terms or policies"]} />
            </PolicySection>

            <PolicySection number="10" title="Payment and Transactions">
              <p>Where applicable:</p>
              <BulletList items={["Payments are governed by project agreements", "Refund policies are defined per contract", "Failure to pay may result in service suspension"]} />
            </PolicySection>

            <PolicySection number="11" title="Termination">
              <p>We reserve the right to:</p>
              <BulletList items={["Suspend or terminate access", "Refuse service"]} />
              <p>if users violate these terms.</p>
            </PolicySection>

            <PolicySection number="12" title="Governing Law">
              <p>These Terms are governed by the laws of:</p>
              <p className="font-semibold text-[#2D2555] dark:text-white">Federal Republic of Nigeria</p>
            </PolicySection>

            <PolicySection number="13" title="Changes to Terms">
              <p>We may update these Terms at any time. Continued use of the website implies acceptance of changes.</p>
            </PolicySection>

            <PolicySection number="14" title="Contact Information">
              <p>For inquiries:</p>
              <div className="mt-2 p-5 bg-[#F9FAFB] dark:bg-[#1A2035] border border-[#E5E7EB] dark:border-white/10 rounded-xl">
                <p className="font-semibold text-[#2D2555] dark:text-white text-[15px]">Hagion International Ltd</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p>
                    Email:{" "}
                    <a href="mailto:info@hagionintltd.com" className="text-[#068653] hover:underline">info@hagionintltd.com</a>
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
