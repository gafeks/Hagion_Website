"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, PlayFilledAlt } from "@carbon/icons-react";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function PortfolioHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] overflow-hidden">
      <div className="max-w-[1231px] mx-auto px-6">
        <motion.div
          className="flex items-center gap-[50px] py-10 bg-white dark:bg-transparent rounded-2xl mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left Content */}
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
                <span className="text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
                  Our Portfolio
                </span>
              </div>

              {/* Heading */}
              <motion.h1
                className="mt-3 text-[48px] font-semibold leading-[150%] capitalize text-[#2D2555] dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Engineering Impact Through Intelligent <span className="text-[#068653]">Digital Solutions</span>
              </motion.h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              className="text-[24px] font-normal leading-[170%] text-[#676665] dark:text-[#94A3B8] max-w-[660px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              At Hagion International Ltd, we build scalable, secure, and performance-driven digital systems that solve rea operational challenges.
            </motion.p>

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-7">
              {/* Play Button */}
              <div className="relative w-[50px] h-[50px]">
                <div
                  className="absolute inset-0 rounded-full border-[1.5px] border-[#2D2555]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(108.72deg, #2D2555 25.38%, #6351BB 115.56%)" }}
                >
                  <ArrowRight size={18} className="text-white" />
                </div>
              </div>
              <span className="text-[21px] font-medium leading-[150%] capitalize text-[#2D2555] dark:text-white">
                Start a Project
              </span>
            </div>
          </div>

          {/* Right Image Card — purple color blend over image */}
          <motion.div
            className="shrink-0 w-[443px] h-[410px] rounded-2xl overflow-hidden relative flex flex-row items-end p-6 gap-5"
            style={{
              background:
                "linear-gradient(0deg, #2D2555, #2D2555), url('/images/portfolio-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "color, normal",
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glass tag */}
            <motion.div
              className="flex items-center justify-center px-[14px] py-[10px] bg-white/20 backdrop-blur-[10px] rounded-[10px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="text-[14px] font-normal leading-[150%] capitalize text-white whitespace-nowrap">
                Web Development
              </span>
            </motion.div>

            {/* View Project button */}
            <motion.div
              className="flex-1 flex items-center justify-end gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Link
                href="#projects"
                className="flex items-center gap-2 group"
              >
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-white/90 transition-colors">
                  <ArrowUpRight size={20} className="text-[#0F0F0F]" />
                </div>
                <span className="text-[16px] font-medium leading-[150%] capitalize text-white">
                  View Blog
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
