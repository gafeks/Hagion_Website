"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

const steps = [
  { number: "01", title: "Strategic Discovery & Requirement Analysis" },
  { number: "02", title: "Scalable System Architecture Design" },
  { number: "03", title: "Agile Development & Iteration" },
  { number: "04", title: "Security Testing & Optimization" },
  { number: "05", title: "Deployment & Performance Monitoring" },
  { number: "06", title: "Ongoing Support & Enhancement" },
];

export default function ExecutionApproach() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-16 overflow-hidden">
      <div className="max-w-[1231px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[48px] font-semibold leading-[36px] text-center text-[#101828] dark:text-white">
            Project <span className="text-[#068653]">Execution</span> Approach
          </h2>
          <p className="text-[16px] font-normal leading-[30px] text-center text-[#5A5A5A] dark:text-[#94A3B8]">
            Every project delivered by Hagion follows a structured six-stage
            process.
          </p>
        </motion.div>

        {/* Steps Grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-3 gap-x-[26px] gap-y-[26px] mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-start p-5 gap-2 bg-[#2D2555]/5 dark:bg-[#1A2035] rounded-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{
                y: -4,
                backgroundColor: isDark
                  ? "rgba(6,134,83,0.08)"
                  : "rgba(45,37,85,0.08)",
              }}
            >
              <span
                className="text-[30px] font-normal leading-[36px]"
                style={{
                  background: "linear-gradient(90deg, #091234 0%, #05084E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: isDark ? undefined : "transparent",
                  backgroundClip: "text",
                  color: isDark ? "#068653" : undefined,
                }}
              >
                {step.number}
              </span>
              <span className="text-[16px] font-medium leading-[24px] text-[#2D2555] dark:text-white">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
