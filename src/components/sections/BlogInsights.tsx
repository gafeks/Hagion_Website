"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar } from "@carbon/icons-react";

const blogPosts = [
  {
    title: "Approach to eco-friendly product development",
    description:
      "Discover how sustainable practices are reshaping the way we build digital products for a greener future.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    category: "SOFTWARE Development",
    date: "April 5, 2025",
  },
  {
    title: "Approach to eco-friendly product development",
    description:
      "Discover how sustainable practices are reshaping the way we build digital products for a greener future.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "SOFTWARE Development",
    date: "April 5, 2025",
  },
  {
    title: "Approach to eco-friendly product development",
    description:
      "Discover how sustainable practices are reshaping the way we build digital products for a greener future.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    category: "SOFTWARE Development",
    date: "April 5, 2025",
  },
];

export default function BlogInsights() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-12 lg:py-20">
      {/* Header - aligned with page content */}
      <div className="max-w-[1232px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-3 lg:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label with dividers */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[13.2px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              Blog / Insights
            </span>
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-[20px] lg:text-[46px] font-bold leading-[30px] lg:leading-[48px] tracking-[-1.2px] text-[#04041B] dark:text-white text-center">
            Insights & Industry <span className="text-[#068653]">Updates</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[12px] lg:text-[24px] font-normal leading-[16px] lg:leading-[32px] text-[#5C5E61] dark:text-[#94A3B8] max-w-[345px] lg:max-w-[686px] text-center">
            Stay ahead with expert insights on digital transformation, AI automation, cybersecurity, and enterprise system design.
          </p>
        </motion.div>
      </div>

      {/* Cards - Full width horizontal scroll */}
      <div
        className="flex gap-[11px] lg:gap-[23.2px] overflow-x-auto mt-4 lg:mt-12 pb-4 scrollbar-hide"
        style={{ paddingLeft: "max(24px, calc((100% - 1232px) / 2 + 24px))" }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="w-[299px] lg:w-[540.57px] h-[322px] lg:h-[583px] shrink-0 bg-[#1B143D] rounded-[8.68px] lg:rounded-[15.7px] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
          >
            {/* Image */}
            <div className="mx-[4.65%] mt-[14px] lg:mt-[25.14px] h-[161px] lg:h-[292.29px] relative rounded-[5.2px] lg:rounded-[9.43px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Category & Date row */}
            <div className="flex items-center justify-between px-[14px] lg:px-[25.14px] mt-[12px] lg:mt-[20px]">
              <span
                className="px-[7px] lg:px-[12.57px] py-[3.5px] lg:py-[6.29px] bg-white/5 rounded-[3.5px] lg:rounded-[6.29px] text-[6px] lg:text-[11px] font-normal leading-[9px] lg:leading-[16px] tracking-[0.24px] lg:tracking-[0.44px] uppercase text-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {post.category}
              </span>
              <div className="flex items-center gap-[2.6px] lg:gap-[4.71px]">
                <Calendar size={9} className="text-white lg:hidden" />
                <Calendar size={16} className="text-white hidden lg:block" />
                <span
                  className="text-[7px] lg:text-[12.57px] leading-[10px] lg:leading-[19px] text-white/70"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {post.date}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="px-[14px] lg:px-[25.14px] mt-[8px] lg:mt-[14px] text-[13px] lg:text-[24px] font-semibold leading-[19px] lg:leading-[35px] tracking-[-0.14px] lg:tracking-[-0.25px] text-white">
              {post.title}
            </h3>

            {/* Description */}
            <p className="px-[14px] lg:px-[25.14px] mt-[6px] lg:mt-[10px] text-[7px] lg:text-[14px] font-normal leading-[10px] lg:leading-[19px] text-white/70">
              {post.description}
            </p>

            {/* Read More */}
            <div className="px-[14px] lg:px-[25.14px] mt-auto pb-[14px] lg:pb-[25.14px] flex items-center gap-1.5 lg:gap-2">
              <Link
                href="/blog"
                className="text-[7px] lg:text-[12.57px] font-medium leading-[10px] lg:leading-[19px] text-white hover:text-white/80 transition-colors"
              >
                Read More
              </Link>
              <div className="w-[10px] lg:w-[18.86px] h-[10px] lg:h-[18.86px] rounded-full bg-white/[0.06] backdrop-blur-[5.8px] lg:backdrop-blur-[10.5px] flex items-center justify-center shadow-[inset_0px_0.58px_0.58px_rgba(255,255,255,0.15),inset_0px_0px_8.7px_rgba(255,255,255,0.05)]">
                <ArrowRight size={6} className="text-white lg:hidden" />
                <ArrowRight size={10} className="text-white hidden lg:block" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button - aligned with page content */}
      <div className="max-w-[1232px] mx-auto px-6">
        <motion.div
          className="flex justify-center mt-4 lg:mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 w-[204px] h-[40px] lg:h-[54px] border border-[#050752] dark:border-white/20 rounded-lg lg:rounded-[12px] text-[13.2px] font-bold leading-[20px] text-[#050752] dark:text-white hover:bg-[#050752]/5 dark:hover:bg-white/5 transition-colors"
          >
            Read More Articles
            <ArrowUpRight size={16} className="text-[#050752] dark:text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
