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
    <section className="w-full bg-white py-[71px] border-t border-b border-[#10B981]/20">
      <div className="max-w-[1064px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[40px] font-semibold leading-[35px] text-center text-[#2D2555]">
            Industries We Serve
          </h2>
          <p className="text-[17.5px] font-normal leading-[24px] text-center text-[#5A5A5A]">
            We deliver specialized digital solutions across diverse industries
          </p>
        </motion.div>

        {/* Industry Pills */}
        <motion.div
          className="flex justify-center gap-[14px] mt-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="flex items-center justify-center px-[21px] w-[166px] h-[74px] shrink-0 bg-[#10B981]/10 border border-[#10B981]/20 rounded-[12.75px]"
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
      </div>
    </section>
  );
}
