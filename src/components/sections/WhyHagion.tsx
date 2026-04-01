"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Enterprise,
  Growth,
  Security,
  TaskComplete,
  Partnership,
  Bot,
} from "@carbon/icons-react";

const features = [
  {
    title: "Enterprise-Grade Architecture",
    Icon: Enterprise,
    iconBg: "rgba(245, 158, 11, 0.12)",
    iconColor: "#F59E0B",
  },
  {
    title: "Scalable & Future-Ready Solutions",
    Icon: Growth,
    iconBg: "rgba(59, 130, 246, 0.12)",
    iconColor: "#3B82F6",
  },
  {
    title: "Security-First Development Approach",
    Icon: Security,
    iconBg: "rgba(168, 85, 247, 0.12)",
    iconColor: "#A855F7",
  },
  {
    title: "Transparent Project Management",
    Icon: TaskComplete,
    iconBg: "rgba(2, 231, 2, 0.12)",
    iconColor: "#068653",
  },
  {
    title: "Long-Term Technical Partnership",
    Icon: Partnership,
    iconBg: "rgba(2, 231, 2, 0.12)",
    iconColor: "#068653",
  },
  {
    title: "AI-Integrated Systems",
    Icon: Bot,
    iconBg: "rgba(168, 85, 247, 0.12)",
    iconColor: "#A855F7",
  },
];

export default function WhyHagion() {
  return (
    <section className="w-full bg-[#F1F8FF] dark:bg-[#0F1629] py-12 lg:py-20">
      <div className="max-w-[1232px] mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-[80px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:gap-[30px] w-full lg:w-[575px] shrink-0">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:gap-[20px]">
              {/* Label with divider */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
                <span className="text-[14px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
                  Why Hagion
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[20px] lg:text-[46px] font-bold leading-[22px] lg:leading-[48px] tracking-[-1.2px] text-[#0F172A] dark:text-white">
                Why Businesses Choose Hagion International Ltd
              </h2>

              {/* Subtitle */}
              <p className="text-[12px] lg:text-[16px] font-normal leading-[16px] lg:leading-[29px] text-[#5C5E61] dark:text-[#94A3B8]">
                We combine deep technical expertise with a consultative approach
                to deliver solutions that drive real, measurable business
                outcomes.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-[10px]">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-4 px-0 lg:px-[19.89px] py-1 lg:py-[12px] bg-[rgba(249,250,251,0.6)] dark:bg-white/5 border border-[#F1F5F9] dark:border-white/10 rounded-2xl h-[50px] lg:h-auto"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.08 * index }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl shrink-0 ml-1 lg:ml-0"
                    style={{ background: feature.iconBg }}
                  >
                    <feature.Icon
                      size={20}
                      style={{ color: feature.iconColor }}
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-[14px] lg:text-[15.1px] font-semibold lg:font-bold leading-[24px] text-[#0F172A] dark:text-white">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Image */}
          <motion.div
            className="flex-1 w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/why-hagion.jpeg"
              alt="Team collaboration"
              width={575}
              height={520}
              className="w-full h-auto rounded-[23px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
