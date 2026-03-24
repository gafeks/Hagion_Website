"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0B0F1A] overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -left-40 -bottom-60 w-80 h-80 rounded-full bg-[#2D2555] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 -top-10 w-80 h-80 rounded-full bg-[#2D2555] opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-[1231px] mx-auto px-6 pt-10 pb-16">
        {/* Hero image card */}
        <motion.div
          className="relative w-full h-[320px] sm:h-[420px] md:h-[509px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/images/blog-hero.png"
            alt="Blog"
            fill
            className="object-cover"
            priority
          />

          {/* Heading overlay — vertically centered */}
          <motion.h1
            className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 text-[36px] sm:text-[48px] md:text-[64px] font-semibold leading-[1.2] uppercase text-white opacity-70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our <span className="text-[#10B981]">Blogs</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
