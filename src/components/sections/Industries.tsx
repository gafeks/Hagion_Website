"use client";

import { motion } from "framer-motion";

const industries = [
  "Government & Public Sector",
  "Real Estate & Property Development",
  "Waste & Environmental Services",
  "Financial Services",
  "SMEs & Startups",
  "Healthcare & Private Institutions",
];

export default function Industries() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-10 lg:py-[71px] border-t border-b border-[#10B981]/20 dark:border-[#10B981]/10">
      <div className="max-w-[1064px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col items-center gap-3 lg:gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[20px] lg:text-[40px] font-bold lg:font-semibold leading-[48px] lg:leading-[35px] tracking-[-1.2px] lg:tracking-normal text-center text-[#0F172A] lg:text-[#2D2555] dark:text-white">
            Industries We Serve
          </h2>
          <p className="text-[12px] lg:text-[17.5px] font-normal leading-[16px] lg:leading-[24px] text-center text-[#5A5A5A] dark:text-[#94A3B8]">
            We deliver specialized digital solutions across diverse industries
          </p>
        </motion.div>

        {/* Industry Pills — Desktop centered, Mobile horizontal scroll */}
        <motion.div
          className="hidden lg:flex justify-center gap-[14px] mt-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="flex items-center justify-center px-[21px] w-[166px] h-[74px] shrink-0 bg-[#10B981]/10 dark:bg-[#10B981]/15 border border-[#10B981]/20 rounded-[12.75px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
            >
              <span className="text-[12px] font-normal leading-[18px] text-center text-[#10B981]">
                {industry}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Pills — Mobile horizontal scroll */}
        <div className="lg:hidden mt-5 -mx-5 overflow-x-auto scrollbar-hide">
          <div className="flex gap-[10px] px-5 w-max">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="flex items-center justify-center px-[10px] w-[166px] h-[74px] shrink-0 bg-[#10B981]/10 dark:bg-[#10B981]/15 border border-[#10B981]/20 rounded-[12.75px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <span className="text-[10px] font-normal leading-[18px] text-center text-[#10B981]">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
