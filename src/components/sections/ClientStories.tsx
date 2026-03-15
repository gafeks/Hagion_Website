"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StarFilled } from "@carbon/icons-react";

const testimonials = [
  {
    quote:
      "Hagion transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture is truly unmatched.",
    name: "Nkese Kelvin",
    role: "CTO · FinanceCore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
    badge: "✦ 3x faster processing",
    badgeBg: "rgba(59, 130, 246, 0.1)",
    badgeColor: "#3B82F6",
  },
  {
    quote:
      "The team delivered our healthcare platform ahead of schedule. Their attention to security and compliance was exceptional throughout.",
    name: "Emmanuel Gift",
    role: "VP Engineering · MedTech Labs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
    badge: "✦ 40% cost reduction",
    badgeBg: "rgba(2, 231, 2, 0.15)",
    badgeBorder: "rgba(2, 231, 2, 0.25)",
    badgeColor: "#068653",
  },
  {
    quote:
      "Working with Hagion has been a game-changer. They don't just build software — they build solutions that drive real growth.",
    name: "Amina Okafor",
    role: "CEO · RetailPulse",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
    badge: "✦ 2x revenue growth",
    badgeBg: "rgba(168, 85, 247, 0.1)",
    badgeColor: "#A855F7",
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={t.name}
      className="flex-1 relative rounded-[24px] p-[32.89px] bg-white dark:bg-[#1A2035] border border-[#E2E8F0] dark:border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-[24px] transition-opacity duration-500 ease-in-out pointer-events-none"
        style={{
          background:
            "linear-gradient(156.17deg, #050752 0%, #0A0E8A 60%, #050752 100%)",
          opacity: hovered ? 1 : 0,
          boxShadow: hovered
            ? "0px 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "none",
        }}
      />

      {/* Quote icon */}
      <div className="absolute top-[24.89px] right-[24.89px] w-[56px] h-[56px] z-10">
        <Image
          src="/images/testimonial-quote.png"
          alt=""
          width={56}
          height={56}
          className={`transition-all duration-500 ${hovered ? "brightness-0 invert" : ""}`}
        />
      </div>

      {/* Stars */}
      <div className="relative z-10 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarFilled
            key={i}
            size={16}
            className="text-[#FBBF24] fill-[#FBBF24]"
            style={{ fill: "#FBBF24" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="relative z-10 mt-[20px] text-[14px] font-normal leading-[24px] transition-colors duration-500"
        style={{ color: hovered ? "#E2E8F0" : "#475569" }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Badge */}
      <div className="relative z-10 mt-[24px]">
        <span
          className="inline-flex items-center px-4 py-2 rounded-full text-[11.1px] font-bold leading-[16px] transition-all duration-500"
          style={{
            background: hovered ? "rgba(2, 231, 2, 0.15)" : t.badgeBg,
            color: hovered ? "#068653" : t.badgeColor,
            border:
              hovered
                ? "1px solid rgba(2, 231, 2, 0.25)"
                : t.badgeBorder
                  ? `1px solid ${t.badgeBorder}`
                  : "1px solid transparent",
          }}
        >
          {t.badge}
        </span>
      </div>

      {/* Divider + Person */}
      <div
        className="relative z-10 flex items-center gap-3 mt-[20px] pt-[20px] transition-all duration-500"
        style={{
          borderTop: hovered
            ? "0.89px solid rgba(255, 255, 255, 0.1)"
            : "0.89px solid #F1F5F9",
        }}
      >
        {/* Avatar */}
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 shadow-[0px_0px_0px_2px_rgba(59,130,246,0.5)]">
          <Image
            src={t.avatar}
            alt={t.name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name & Role */}
        <div className="flex flex-col gap-[2px]">
          <span
            className="text-[13.5px] font-bold leading-[20px] transition-colors duration-500"
            style={{ color: hovered ? "#FFFFFF" : "#0F172A" }}
          >
            {t.name}
          </span>
          <span
            className="text-[10.9px] font-normal leading-[16px] transition-colors duration-500"
            style={{ color: hovered ? "#94A3B8" : "#5C5E61" }}
          >
            {t.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ClientStories() {
  return (
    <section className="w-full bg-[#F1F7FC] dark:bg-[#0F1629] py-20">
      <div className="max-w-[1232px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label with dividers */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[13.2px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653] text-center">
              Client Stories
            </span>
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#0F172A] dark:text-white text-center">
            Trusted by industry leaders
          </h2>

          {/* Subtitle */}
          <p className="text-[24px] font-normal leading-[29px] text-[#5C5E61] dark:text-[#94A3B8] max-w-[829px] text-center">
            Don&apos;t take our word for it — hear from the teams we&apos;ve
            helped transform.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="flex gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.name} t={t} index={index} />
          ))}
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          className="flex items-center justify-between p-[31.89px] mt-10 bg-white dark:bg-[#1A2035] border border-[#E2E8F0] dark:border-white/10 rounded-[24px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Left text */}
          <div className="flex flex-col gap-[3.34px]">
            <span className="text-[24px] font-semibold leading-[32px] text-[#0F172A] dark:text-white">
              Join 50+ enterprises worldwide
            </span>
            <span className="text-[13.1px] font-normal leading-[20px] text-[#64748B]">
              that trust Hagion for their technology needs
            </span>
          </div>

          {/* Right: avatars + count */}
          <div className="flex items-center gap-4">
            {/* Overlapping avatars */}
            <div className="flex items-center">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=88&h=88&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=88&h=88&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=88&h=88&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=88&h=88&fit=crop&crop=face",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-[44px] h-[44px] rounded-full overflow-hidden shadow-[0px_0px_0px_2px_#FFFFFF] shrink-0"
                  style={{ marginLeft: i === 0 ? 0 : -12 }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Count */}
            <div className="flex flex-col">
              <span className="text-[15.8px] font-black leading-[24px] text-[#0F172A] dark:text-white">
                +45 more
              </span>
              <span className="text-[11.1px] font-normal leading-[16px] text-[#64748B]">
                happy clients
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
