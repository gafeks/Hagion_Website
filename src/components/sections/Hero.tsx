"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckmarkOutline } from "@carbon/icons-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const stats = [
  { value: "20+", label: "Digital Projects Delivered" },
  { value: "5+", label: "Enterprise Clients" },
  { value: "89%", label: "Project Success Rate" },
  { value: "check", label: "Verified & Trusted" },
];

// Connector line paths — each traces a route along the grid
const connectorPaths = [
  {
    // Top-left area: moves right then down then right
    d: "M 80 160 L 280 160 L 280 320 L 480 320",
    delay: 0,
    duration: 4,
  },
  {
    // Top-right: moves left then down
    d: "M 1360 120 L 1060 120 L 1060 280 L 860 280",
    delay: 2,
    duration: 5,
  },
  {
    // Bottom-left: moves up then right then up
    d: "M 160 700 L 160 520 L 400 520 L 400 380",
    delay: 1,
    duration: 4.5,
  },
  {
    // Bottom-right: zigzag up-left
    d: "M 1280 680 L 1280 500 L 1000 500 L 1000 340",
    delay: 3,
    duration: 5,
  },
  {
    // Center-left sweep
    d: "M 200 400 L 420 400 L 420 260 L 620 260",
    delay: 1.5,
    duration: 4,
  },
  {
    // Center-right sweep
    d: "M 1240 440 L 1020 440 L 1020 300 L 820 300",
    delay: 3.5,
    duration: 4.5,
  },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative w-full h-[820px] bg-white dark:bg-[#0B0F1A] overflow-hidden">
      {/* Background image (grid + sparkles) */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hg-hero-bg.png')" }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: isDark ? 0.08 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Animated connector lines tracing the grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connectorPaths.map((path, i) => (
          <g key={`connector-${i}`}>
            {/* Faint trail */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="#699EF4"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.15, 0.15, 0] }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
            {/* Bright moving head */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="url(#connectorGlow)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="30 1000"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 0.8, 0.8, 0] }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
            {/* Dot at start */}
            <motion.circle
              cx={path.d.split(" ")[1]}
              cy={path.d.split(" ")[2]}
              r="3"
              fill="#699EF4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.6, 0.6, 0], scale: [0, 1, 1, 0] }}
              transition={{
                duration: path.duration,
                delay: path.delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
        <defs>
          <linearGradient id="connectorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#699EF4" stopOpacity="0" />
            <stop offset="80%" stopColor="#699EF4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#699EF4" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow orb behind content */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#699EF4]/5 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[56px]"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(15,22,41,0.2) -43.84%, #0F1629 81.51%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.2) -43.84%, #F5F8FF 81.51%)",
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center pt-12 pb-20 px-8 gap-6 max-w-[1018px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="w-full max-w-[1008px] text-[62px] font-semibold leading-[74px] text-center text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering <span className="text-[#068753]">Digital</span>
            <br />
            <span className="text-[#068753]">Transformation</span> for the Future
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-[802px] text-[20px] font-normal leading-[34px] text-center text-[#5A5A5A] dark:text-[#94A3B8]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We design, develop, and scale intelligent digital platforms,
            enterprise software, and AI-powered systems that help businesses
            operate smarter, faster, and more securely.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center items-start gap-4 pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/request-quote"
                className="flex items-center justify-center gap-2 w-[203px] h-[50px] bg-[#2D2555] dark:bg-[#068653] text-white text-[13.2px] font-medium leading-[20px] rounded-lg hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/portfolio"
                className="flex items-center justify-center w-[151px] h-[49px] bg-white dark:bg-white/10 border border-[#2D2555] dark:border-white/20 text-[#2D2555] dark:text-white text-[13.5px] font-medium leading-[20px] rounded-lg hover:bg-[#f8f7fc] dark:hover:bg-white/15 transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center items-center gap-10 pt-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-1"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {stat.value === "check" ? (
                  <CheckmarkOutline size={35} className="text-[#2D2555] dark:text-white" />
                ) : (
                  <span className="text-[26px] font-semibold leading-[36px] text-[#2D2555] dark:text-white">
                    {stat.value}
                  </span>
                )}
                <span className="text-[10px] font-semibold leading-[16px] tracking-[0.6px] uppercase text-[#5A5A5A] dark:text-[#94A3B8]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
