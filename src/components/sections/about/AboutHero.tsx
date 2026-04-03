"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0B0F1A] overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden lg:block relative h-[833px]">
        <div className="absolute inset-y-0 left-0 right-0 max-w-[1231px] mx-auto px-6">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/hagion-hero-about-image.png"
              alt="About Hagion"
              fill
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <div className="max-w-[1231px] mx-auto px-6 h-full relative">
          <motion.div
            className="absolute w-[500px] right-6 top-[263px] pr-[30px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
              <span className="text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
                Who are we?
              </span>
            </div>

            <h1 className="mt-[30px] text-[48px] font-semibold leading-[58px] text-[#1D1D1D]">
              We Are Experts{"\n"}in Building Solutions
            </h1>

            <p className="mt-[20px] text-[16px] font-normal leading-[160%] text-[#737373] dark:text-[#94A3B8]">
              Hagion International Ltd is a technology and digital transformation
              company committed to building innovative, scalable, and impact
              digital solutions across Africa.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center justify-center mt-[24px] w-[170px] h-[54px] bg-[#2D2555] dark:bg-[#068653] border border-[#050752] dark:border-[#068653] rounded-[10px] text-[18px] font-medium leading-[22px] text-white hover:bg-[#2D2555]/90 dark:hover:bg-[#057a4a] transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile layout — image has gradient card built in, position content over it */}
      <div className="lg:hidden px-5 pt-6 pb-6">
        <motion.div
          className="relative w-full aspect-[353/520]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/mobile-about-hero.png"
            alt="About Hagion"
            fill
            className="object-contain"
          />

          {/* Content positioned over the gradient card area (bottom ~45% of image) */}
          <motion.div
            className="absolute bottom-[6%] left-[7%] right-[10%] top-[53%] flex flex-col justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Label */}
            <div className="flex items-center gap-[6.6px]">
              <div className="w-[18px] h-[1.1px] bg-[#068653] rounded-full" />
              <span className="text-[7.7px] font-semibold leading-[11px] tracking-[0.77px] uppercase text-[#068653]">
                Who are we?
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-1 text-[20px] font-semibold leading-[25px] text-[#1D1D1D]">
              We Are Experts in Building Solutions
            </h1>

            {/* Description */}
            <p className="mt-1 text-[9px] font-normal leading-[150%] text-[#737373]">
              Hagion International Ltd is a technology and digital transformation
              company committed to building innovative, scalable, and impact
              digital solutions across Africa.
            </p>

            {/* CTA Button */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center mt-1.5 w-[86px] h-[34px] bg-[#2D2555] border border-[#050752] rounded-[5.5px] text-[9px] font-medium leading-[12px] text-white"
            >
              Read More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
