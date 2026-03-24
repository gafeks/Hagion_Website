"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "@carbon/icons-react";
import Image from "next/image";

const categories = [
  "All",
  "AI & Automation",
  "Cybersecurity",
  "Digital Transformation",
  "Enterprise Systems",
  "Cloud Infrastructure",
  "FinTech",
];

const featuredPost = {
  title: "The Rise of AI Automation in Enterprise Systems",
  tags: [
    { label: "Category", value: "Digital Transformation" },
    { label: "Read Time", value: "6 Mins" },
    { label: "Author", value: "Afekemor Gift" },
  ],
  description:
    "How AI-powered workflows are transforming organizational efficiency, decision-making, and operational productivity across Africa's growing digital economy.",
  date: "7th February 2026",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
};

const blogPosts = [
  {
    title: "Cybersecurity Best Practices for Growing Businesses",
    tags: [
      { label: "Category", value: "Cybersecurity" },
      { label: "Author", value: "Edum Kiikpoye" },
    ],
    description:
      "A strategic guide to building security-first digital infrastructure in an evolving threat landscape — what every business leader needs to know.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    title: "Digital Transformation: From Strategy to Execution",
    tags: [
      { label: "Category", value: "Digital Transformation" },
      { label: "Author", value: "Prosper Ikiriko" },
    ],
    description:
      "Key steps for organizations ready to modernize operations, deploy future-ready technology solutions, and unlock new operational capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Cloud Infrastructure: Building for Reliability and Scale",
    tags: [
      { label: "Category", value: "Cloud Infrastructure" },
      { label: "Author", value: "Tiki" },
    ],
    description:
      "Why cloud-first architecture is no longer optional for enterprises, and how to design systems that can handle growth, downtime, and data integrity.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    title: "Digital Transformation: From Strategy to Execution",
    tags: [
      { label: "Category", value: "Digital Transformation" },
      { label: "Author", value: "Prosper Ikiriko" },
    ],
    description:
      "Key steps for organizations ready to modernize operations, deploy future-ready technology solutions, and unlock new operational capabilities.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
  },
  {
    title: "Cybersecurity Best Practices for Growing Businesses",
    tags: [
      { label: "Category", value: "Cybersecurity" },
      { label: "Author", value: "Edum Kiikpoye" },
    ],
    description:
      "A strategic guide to building security-first digital infrastructure in an evolving threat landscape, what every business leader needs to know.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

function TagPill({ label, value }: { label: string; value: string }) {
  const isAuthor = label === "Author";
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-[7px] bg-[#068653]/10 rounded-full text-[13px] text-[#5A5A5A] min-w-0 max-w-full">
      <span className="font-normal shrink-0">{label}</span>
      <span className="w-1 h-1 rounded-full bg-[#068653]/60 shrink-0" />
      <span className={`truncate ${isAuthor ? "font-semibold" : "font-medium"}`}>{value}</span>
    </span>
  );
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-10">
      <div className="max-w-[1231px] mx-auto px-6 flex flex-col gap-6">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col gap-[2px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#10B981] rounded-full" />
            <span className="text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#10B981]">
              Knowledge Hub
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            className="mt-2 text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[140%] capitalize text-[#2D2555] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Insights & Industry <span className="text-[#10B981]">Updates</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="mt-2 text-[16px] sm:text-[20px] md:text-[24px] font-normal leading-[170%] text-[#5A5A5A] dark:text-[#94A3B8] max-w-[686px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Stay ahead with expert insights on digital transformation, AI automation, cybersecurity, and enterprise system design.
          </motion.p>
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          className="flex items-center py-5 gap-2.5 rounded-xl overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex items-start gap-2.5 flex-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-[14px] font-medium capitalize transition-colors ${
                  activeCategory === cat
                    ? "bg-[#2D2555] text-white dark:bg-[#10B981]"
                    : "bg-white dark:bg-transparent border border-[#2D2555] dark:border-[#94A3B8]/30 text-[#5A5A5A] dark:text-[#94A3B8] hover:bg-[#2D2555]/5 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Search Bar ── */}
        <motion.div
          className="flex items-center bg-white dark:bg-[#1A1F2E] border border-[#D0D0D0]/50 rounded-full px-1 py-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-1 px-6 py-2.5 bg-transparent text-[16px] text-[#0A0A0A] dark:text-white placeholder:text-[#A1A2A4] outline-none"
          />
          <button className="shrink-0 w-[42px] h-[42px] bg-[#068653] rounded-full flex items-center justify-center hover:bg-[#057A4A] transition-colors">
            <Search size={16} className="text-white" />
          </button>
        </motion.div>

        {/* ── Featured Article ── */}
        <motion.div
          className="flex flex-col md:flex-row items-stretch gap-5 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Image */}
          <div className="relative w-full md:w-[420px] shrink-0 h-[260px] md:h-auto rounded-xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-start justify-center gap-8 p-6 md:p-10 bg-white dark:bg-[#1A1F2E] rounded-xl">
            <div className="flex flex-col gap-4">
              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[150%] uppercase text-black dark:text-white">
                {featuredPost.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-4">
                {featuredPost.tags.map((tag) => (
                  <TagPill key={tag.label} label={tag.label} value={tag.value} />
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-[150%] text-[#2E2E2E] dark:text-[#94A3B8]">
              {featuredPost.description}
            </p>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
              {/* Read More */}
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full bg-[#2D2555]/10 flex items-center justify-center">
                  <ArrowUpRight size={22} className="text-[#2D2555] dark:text-white" />
                </div>
                <span className="text-[15px] font-medium uppercase text-[#2E2E2E] dark:text-white">
                  Read Full Blog
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2.5">
                <span className="text-[15px] text-[#737373]">Published Date</span>
                <span className="text-[16px] sm:text-[19px] font-medium uppercase text-[#737373]">
                  {featuredPost.date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Blog Cards Grid ── */}
        {[0, 1].map((rowIdx) => (
          <motion.div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + rowIdx * 0.15 }}
          >
            {blogPosts.slice(rowIdx * 3, rowIdx * 3 + 3).map((post, i) => (
              <motion.div
                key={i}
                className="flex flex-col bg-white dark:bg-[#1A1F2E] border border-[#D0D0D0]/50 rounded-xl p-[15px] pb-7 gap-5"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Card Image */}
                <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-7 pr-4">
                  <div className="flex flex-col gap-2.5">
                    {/* Tags */}
                    <div className="flex flex-nowrap gap-3 overflow-hidden">
                      {post.tags.map((tag) => (
                        <TagPill key={tag.label} label={tag.label} value={tag.value} />
                      ))}
                    </div>

                    {/* Title */}
                    <h4 className="text-[18px] font-medium leading-[150%] uppercase text-[#0A0A0A] dark:text-white">
                      {post.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[14px] leading-[150%] text-[#737373] dark:text-[#94A3B8] line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#2D2555]/10 flex items-center justify-center">
                      <ArrowUpRight size={22} className="text-[#2D2555] dark:text-white" />
                    </div>
                    <span className="text-[13px] font-medium uppercase text-[#737373] font-mono">
                      Read Full Blog
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
