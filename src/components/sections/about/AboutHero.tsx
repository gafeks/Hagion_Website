"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[833px] bg-white overflow-hidden">
      {/* Hero background image (entire composition) */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-[1231px] mx-auto px-6">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/about-hero.png"
            alt="About Hagion"
            fill
            className="object-contain object-center"
          />
        </motion.div>
      </div>

      {/* Content — aligned with nav */}
      <div className="max-w-[1231px] mx-auto px-6 h-full relative">
        <motion.div
          className="absolute w-[500px] right-6 top-[263px] pr-[30px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              Who are we?
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-[30px] text-[48px] font-semibold leading-[58px] text-[#1D1D1D]">
            We Are Experts{"\n"}in Building Solutions
          </h1>

          {/* Description */}
          <p className="mt-[20px] text-[16px] font-normal leading-[160%] text-[#737373]">
            Hagion International Ltd is a technology and digital transformation
            company committed to building innovative, scalable, and impact
            digital solutions across Africa.
          </p>

          {/* CTA Button */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center mt-[24px] w-[170px] h-[54px] bg-[#2D2555] border border-[#050752] rounded-[10px] text-[18px] font-medium leading-[22px] text-white hover:bg-[#2D2555]/90 transition-colors"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
