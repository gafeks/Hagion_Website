"use client";

import { motion } from "framer-motion";

export default function RequestHero() {
  return (
    <section className="relative w-full h-[400px] lg:h-[485px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: "url('/images/request-quote-hero.png') center / cover, #302451" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#21153A]/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-5 lg:px-[282px]">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
            <span className="text-[10px] lg:text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#10B981]">
              Start Your Digital Transformation Journey
            </span>
            <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-[28px] lg:text-[48px] font-semibold leading-[36px] lg:leading-[60px] text-white text-center whitespace-nowrap">
            Request a <span className="text-[#10B981]">Project Consultation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] lg:text-[20px] font-normal leading-[22px] lg:leading-[28px] text-white text-center max-w-[796px] pt-2">
            Tell us about your project, and our team will provide a structured proposal tailored to your business needs.
          </p>

          {/* Secondary text */}
          <p className="text-[12px] lg:text-[16px] font-normal leading-[18px] lg:leading-[24px] text-[#E5E5E5] text-center max-w-[748px]">
            At Hagion International Ltd, we evaluate every project strategically — considering scalability, security performance, and long-term growth potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
