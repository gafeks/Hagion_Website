"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We analyze your business needs, technical requirements, and long-term goals. ",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design scalable system architecture and intuitive user experience flows.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our development team builds, tests, and refines using agile methodologies.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "We deploy securely and provide ongoing optimization, support, and growth strategies.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-20 relative overflow-visible">
      <div className="max-w-[1232px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label with divider */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[13.9px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#0F172A] dark:text-white">
            HOW WE WORK
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] font-normal leading-[22px] text-[#5C5E61] dark:text-[#94A3B8] max-w-[686px]">
            We follow a structured, results-driven development approach designed
            to reduce risk and maximize impact.
          </p>
        </motion.div>

        {/* Content: Image + Steps */}
        <motion.div
          className="flex items-center gap-[80px] mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Image with vector decoration */}
          <div className="w-[592px] h-[529px] shrink-0 relative overflow-visible">
            {/* Vector decoration — extends into next section */}
            <Image
              src="/images/how-we-work-vector.png"
              alt=""
              width={500}
              height={300}
              className="absolute -left-12 -bottom-16 z-0 pointer-events-none"
            />
            {/* Main image */}
            <div className="relative w-full h-full rounded-[10px_90px_10px_10px] overflow-hidden z-10">
              <Image
                src="/images/how-we-work.png"
                alt="How we work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-[40px]">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start gap-[34px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Number */}
                <span className="text-[34px] font-medium leading-[100%] text-[#068653] shrink-0">
                  {step.number}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-[2px]">
                  <h3 className="text-[24px] font-semibold leading-[28px] text-[#050752] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-[18px] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#94A3B8] font-[family-name:var(--font-poppins)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
