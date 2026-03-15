"use client";

import { motion } from "framer-motion";
import { Idea, Partnership, Trophy, Growth } from "@carbon/icons-react";

const values = [
  {
    icon: Idea,
    title: "Innovation",
    description:
      "Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Partnership,
    title: "Collaboration",
    description:
      "Working closely with clients as partners to achieve shared success.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "Commitment to delivering the highest quality in every project we undertake.",
  },
  {
    icon: Growth,
    title: "Growth",
    description:
      "Focused on continuous improvement and helping our clients scale their businesses.",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#F8FCFF] py-20">
      <div className="max-w-[1231px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[46px] font-bold leading-[40px] text-[#101828] text-center">
            Our Core <span className="text-[#2D2555]">Values</span>
          </h2>
          <p className="text-[24px] font-normal leading-[28px] text-[#4A5565] text-center">
            The principles that guide everything we do
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex-1 relative bg-white border border-[#d0d0d0]/30 rounded-[14px] px-6 pt-6 pb-6 min-h-[226px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -6, boxShadow: "0px 12px 24px rgba(0,0,0,0.08)" }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#EFF6FF] rounded-full">
                <value.icon size={32} className="text-[#2D2555]" />
              </div>

              {/* Title */}
              <div className="flex justify-center mt-4">
                <span className="text-[20px] font-medium leading-[28px] text-[#101828] text-center">
                  {value.title}
                </span>
              </div>

              {/* Description */}
              <div className="flex justify-center mt-2">
                <p className="text-[13px] font-normal leading-[20px] text-[#4A5565] text-center">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
