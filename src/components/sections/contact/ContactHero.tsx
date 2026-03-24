"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[350px] lg:h-[433px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: "url('/images/request-quote-hero.png') center / cover, #302451" }}
      />
      <div className="absolute inset-0 bg-[#21153A]/80" />

      <div className="relative z-10 h-full flex items-center justify-center px-5 lg:px-[282px]">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
            <span className="text-[10px] lg:text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#10B981]">
              Reach Out
            </span>
            <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
          </div>

          <h1 className="text-[28px] lg:text-[48px] font-semibold leading-[36px] lg:leading-[60px] text-white text-center whitespace-nowrap">
            Get in Touch
          </h1>

          <p className="text-[14px] lg:text-[20px] font-normal leading-[22px] lg:leading-[28px] text-white text-center max-w-[577px] pt-2">
            Have a question or want to work together? Our team is ready to discuss your digital transformation goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
