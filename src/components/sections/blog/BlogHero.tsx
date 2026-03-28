"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0B0F1A] overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -left-40 -bottom-60 w-80 h-80 rounded-full bg-[#2D2555] opacity-20 blur-3xl pointer-events-none hidden lg:block" />
      <div className="absolute right-0 -top-10 w-80 h-80 rounded-full bg-[#2D2555] opacity-20 blur-3xl pointer-events-none hidden lg:block" />

      <div className="max-w-[1231px] mx-auto px-5 lg:px-6 pt-5 lg:pt-10 pb-5 lg:pb-16">
        <div className="flex flex-col gap-5">
          {/* Hero image card */}
          <motion.div
            className="relative w-full h-[320px] lg:h-[509px] rounded-2xl overflow-hidden"
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

            {/* Heading overlay */}
            <motion.h1
              className="absolute left-5 lg:left-10 top-[44px] lg:top-1/2 lg:-translate-y-1/2 text-[32px] lg:text-[64px] font-semibold leading-[39px] lg:leading-[1.2] uppercase text-white opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our <span className="text-[#10B981]">Blogs</span>
            </motion.h1>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
