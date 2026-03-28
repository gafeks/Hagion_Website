"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[239px] lg:h-[433px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: "url('/images/request-quote-hero.png') center / cover, #302451" }}
      />
      <div className="absolute inset-0 bg-[#21153A]/80" />

      <div className="relative z-10 h-full flex items-center justify-center px-5 lg:px-[282px]">
        <motion.div
          className="flex flex-col items-center gap-[10px] lg:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-[#10B981] rounded-full" />
            <span className="text-[10px] lg:text-[14px] font-semibold leading-[13px] lg:leading-[20px] tracking-[0.88px] lg:tracking-[1.4px] uppercase text-[#10B981]">
              Reach Out
            </span>
            <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-[#10B981] rounded-full" />
          </div>

          <h1 className="text-[24px] lg:text-[48px] font-semibold leading-[30px] lg:leading-[60px] text-white text-center">
            Get in Touch
          </h1>

          <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white text-center max-w-[303px] lg:max-w-[577px] pt-1 lg:pt-2">
            Have a question or want to work together? Our team is ready to discuss your digital transformation goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
