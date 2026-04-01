"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurHistory() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-10 lg:py-[60px]">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-12">
          {/* Text */}
          <motion.div
            className="w-full lg:w-[625px] shrink-0 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[24px] lg:text-[46px] font-bold leading-[40px] text-[#101828] dark:text-white">
              Our History
            </h2>

            <div className="flex flex-col gap-[10px]">
              <p className="text-[12px] lg:text-[14px] font-normal leading-[24px] text-[#5A5A5A] dark:text-[#94A3B8]">
                Since 2016, Hagion has steadily grown under the strategic
                leadership of Afekemor Gift (MD/CEO), expanding its footprint
                across digital platform development, enterprise software
                solutions, AI-driven automation, and secure cloud
                infrastructure services. The company has consistently
                maintained a strong commitment to:
              </p>

              <p className="text-[12px] lg:text-[14px] font-normal leading-[24px] text-[#5A5A5A] dark:text-[#94A3B8]">
                Excellence in execution
                <br />
                Innovation-driven engineering
                <br />
                Security-first system architecture
                <br />
                Sustainable digital transformation
              </p>

              <div className="flex flex-col gap-[2px]">
                <p className="text-[12px] lg:text-[14px] font-normal leading-[24px] text-[#5A5A5A] dark:text-[#94A3B8]">
                  In 2022, Afekemor Gift was honored with the prestigious
                  African Techpreneur of the Year (Africa 2022) award,
                  recognizing his significant contribution to technology
                  innovation and entrepreneurial leadership across the
                  continent.
                </p>
                <p className="text-[12px] lg:text-[14px] font-normal leading-[24px] text-[#5A5A5A] dark:text-[#94A3B8]">
                  Hagion also received notable recognition through nomination
                  for the FOYA Awards, in partnership with Safaricom, the
                  largest telecommunications provider in Kenya. This nomination
                  further affirmed Hagion&apos;s rising influence within
                  Africa&apos;s technology ecosystem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:flex-1 h-[207px] lg:h-[384px] rounded-[10px] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/our-history.jpeg"
              alt="Team collaboration"
              width={567}
              height={384}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
