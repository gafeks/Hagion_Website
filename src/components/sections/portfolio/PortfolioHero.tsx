"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "@carbon/icons-react";

export default function PortfolioHero() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] overflow-hidden">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-[50px] py-5 lg:py-10 bg-white dark:bg-transparent rounded-2xl mt-2 lg:mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Image Card — top on mobile, right on desktop */}
          <motion.div
            className="order-first lg:order-last shrink-0 w-full lg:w-[443px] h-[314px] lg:h-[410px] rounded-2xl overflow-hidden relative flex flex-row items-end p-6 gap-5"
            style={{
              background:
                "linear-gradient(0deg, #2D2555, #2D2555), url('/images/portfolio-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "color, normal",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-5 w-full">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 lg:w-9 h-6 lg:h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowUpRight size={16} className="text-[#0F0F0F]" />
                </div>
                <span className="text-[14px] lg:text-[16px] font-normal leading-[150%] uppercase text-white">
                  View Blog
                </span>
              </div>
              <div className="flex items-center justify-center px-[14px] py-[10px] bg-white/20 backdrop-blur-[10px] rounded-[10px]">
                <span className="text-[14px] font-normal leading-[150%] capitalize text-white whitespace-nowrap">
                  Web Development
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content — below image on mobile, left on desktop */}
          <div className="flex flex-col justify-center items-start gap-5 flex-1 min-w-0">
            {/* Label */}
            <motion.div
              className="flex flex-col gap-[2px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
                <span className="text-[10px] lg:text-[14px] font-semibold leading-[20px] tracking-[2.4px] lg:tracking-[1.4px] uppercase text-[#068653]">
                  Our Portfolio
                </span>
              </div>

              {/* Heading */}
              <motion.h1
                className="mt-3 text-[32px] lg:text-[48px] font-semibold leading-[130%] lg:leading-[150%] tracking-[0.01em] capitalize text-[#2D2555] dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Engineering Impact Through Intelligent <span className="text-[#068653]">Digital Solutions</span>
              </motion.h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              className="text-[12px] lg:text-[24px] font-normal leading-[170%] tracking-[0.01em] text-[#676665] dark:text-[#94A3B8] lg:max-w-[660px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              At Hagion International Ltd, we build scalable, secure, and performance-driven digital systems that solve real operational challenges.
            </motion.p>

            {/* CTA Button */}
            <div className="flex items-center gap-[10px] lg:gap-7">
              <div className="relative w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]">
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#2D2555]" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] lg:w-9 lg:h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(108.72deg, #2D2555 25.38%, #6351BB 115.56%)" }}
                >
                  <ArrowRight size={10} className="text-white lg:hidden" />
                  <ArrowRight size={18} className="text-white hidden lg:block" />
                </div>
              </div>
              <span className="text-[16px] lg:text-[21px] font-medium leading-[150%] tracking-[0.01em] capitalize text-[#2D2555] dark:text-white">
                Start a Project
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
