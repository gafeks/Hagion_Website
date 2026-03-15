"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Application,
  Enterprise,
  Cloud,
  Security,
  Bot,
  Headset,
  Platforms,
  Analytics,
  TaskStar,
  ArrowUpRight,
} from "@carbon/icons-react";

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "Custom-built web applications and cross-platform mobile solutions designed for performance, security, and user experience.",
    iconBg: "rgba(59, 130, 246, 0.1)",
    iconBorder: "rgba(59, 130, 246, 0.2)",
    iconColor: "#155DFC",
    Icon: Application,
    hover: {
      cardBg: "#E0EDFE",
      iconBg: "#050752",
      iconBorder: "rgba(59, 130, 246, 0.3)",
      iconColor: "#FFFFFF",
      titleColor: "#050752",
      descColor: "#050752",
    },
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Robust enterprise systems that streamline operations, improve workflow efficiency, and enhance decision-making.",
    iconBg: "rgba(168, 85, 247, 0.1)",
    iconBorder: "rgba(168, 85, 247, 0.2)",
    iconColor: "#8B5CF6",
    Icon: Enterprise,
    hover: {
      cardBg: "#EBE9FE",
      iconBg: "#A855F7",
      iconBorder: "rgba(168, 85, 247, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#3B076C",
      descColor: "#3B076C",
    },
  },
  {
    title: "Cloud & Infrastructure Services",
    description:
      "Secure cloud architecture, hosting, and infrastructure optimization built for reliability and scalability.",
    iconBg: "rgba(16, 185, 129, 0.1)",
    iconBorder: "rgba(16, 185, 129, 0.2)",
    iconColor: "#10B981",
    Icon: Cloud,
    hover: {
      cardBg: "#DBF3F2",
      iconBg: "#10B981",
      iconBorder: "rgba(16, 185, 129, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#10B981",
      descColor: "#10B981",
    },
  },
  {
    title: "Cybersecurity & Data Protection",
    description:
      "Security-first system design with proactive threat monitoring, encryption standards, and compliance-ready frameworks.",
    iconBg: "rgba(239, 68, 68, 0.1)",
    iconBorder: "rgba(239, 68, 68, 0.2)",
    iconColor: "#EF4444",
    Icon: Security,
    hover: {
      cardBg: "#FAEBEB",
      iconBg: "#EF4444",
      iconBorder: "rgba(239, 68, 68, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#EF4444",
      descColor: "#EF4444",
    },
  },
  {
    title: "AI Automation & Smart Workflows",
    description:
      "We integrate AI-powered automation to eliminate manual processes, reduce costs, and increase productivity.",
    iconBg: "rgba(139, 92, 246, 0.1)",
    iconBorder: "rgba(139, 92, 246, 0.2)",
    iconColor: "#8B5CF6",
    Icon: Bot,
    hover: {
      cardBg: "#EBE9FE",
      iconBg: "#8B5CF6",
      iconBorder: "rgba(139, 92, 246, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#3B076C",
      descColor: "#3B076C",
    },
  },
  {
    title: "IT Outsourcing & Managed Support",
    description:
      "Dedicated IT support and managed services that ensure your systems operate efficiently without interruption.",
    iconBg: "rgba(245, 158, 11, 0.1)",
    iconBorder: "rgba(245, 158, 11, 0.2)",
    iconColor: "#E79100",
    Icon: Headset,
    hover: {
      cardBg: "#FEF3C7",
      iconBg: "#E79100",
      iconBorder: "rgba(245, 158, 11, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#92400E",
      descColor: "#92400E",
    },
  },
  {
    title: "Digital Platform Development",
    description:
      "We architect and build scalable digital ecosystems tailored to your business goals — from idea validation to full deployment.",
    iconBg: "rgba(139, 92, 246, 0.1)",
    iconBorder: "rgba(139, 92, 246, 0.2)",
    iconColor: "#2D2555",
    Icon: Platforms,
    hover: {
      cardBg: "#EBE9FE",
      iconBg: "#2D2555",
      iconBorder: "rgba(139, 92, 246, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#3B076C",
      descColor: "#3B076C",
    },
  },
  {
    title: "Data Analytics & Reporting Dashboards",
    description:
      "Advanced analytics systems and real-time dashboards that turn data into actionable business insights.",
    iconBg: "rgba(245, 158, 11, 0.1)",
    iconBorder: "rgba(245, 158, 11, 0.2)",
    iconColor: "#E79100",
    Icon: Analytics,
    hover: {
      cardBg: "#FEF3C7",
      iconBg: "#E79100",
      iconBorder: "rgba(245, 158, 11, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#92400E",
      descColor: "#92400E",
    },
  },
  {
    title: "Software Project Management",
    description:
      "Agile-driven project execution with structured timelines, transparent reporting, and milestone-based delivery.",
    iconBg: "rgba(239, 68, 68, 0.1)",
    iconBorder: "rgba(239, 68, 68, 0.2)",
    iconColor: "#EF4444",
    Icon: TaskStar,
    hover: {
      cardBg: "#FAEBEB",
      iconBg: "#EF4444",
      iconBorder: "rgba(239, 68, 68, 0.2)",
      iconColor: "#FFFFFF",
      titleColor: "#EF4444",
      descColor: "#EF4444",
    },
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { hover } = service;

  return (
    <motion.div
      className="flex flex-col justify-center w-[395px] h-[240px] rounded-3xl px-8 py-7 gap-6 shrink-0 cursor-pointer transition-colors duration-300"
      style={{
        background: hovered ? hover.cardBg : "#F2F9FF",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-[60px] h-[60px] rounded-2xl shadow-sm transition-colors duration-300"
        style={{
          background: hovered ? hover.iconBg : service.iconBg,
          border: `1px solid ${hovered ? hover.iconBorder : service.iconBorder}`,
        }}
      >
        <service.Icon
          size={28}
          style={{ color: hovered ? hover.iconColor : service.iconColor }}
          className="transition-colors duration-300"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3
          className="text-[16px] font-bold leading-[28px] transition-colors duration-300"
          style={{ color: hovered ? hover.titleColor : "#0F172A" }}
        >
          {service.title}
        </h3>
        <p
          className="text-[12px] font-normal leading-[23px] transition-colors duration-300"
          style={{ color: hovered ? hover.descColor : "#64748B" }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

function ServiceCardsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 425; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-10">
      {/* Left Arrow */}
      <motion.button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white border border-gray-200 shadow-md text-[#050752] hover:bg-gray-50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white border border-gray-200 shadow-md text-[#050752] hover:bg-gray-50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight size={20} />
      </motion.button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        <div className="flex items-center gap-[30px] pl-[calc((100%-1232px)/2+24px)] pr-8 py-4 w-max">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#F5F8FF] py-20">
      <div className="max-w-[1232px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center gap-4 max-w-[470px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Label with dividers */}
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[13.9px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              What We Do
            </span>
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#0F172A] text-center">
            OUR CORE SERVICES
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] font-normal leading-[29px] text-center text-[#5C5E61]">
            Comprehensive Technology Solutions Built for Scale
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 w-[204px] h-[54px] border border-[#050752] rounded-xl text-[13.2px] font-bold leading-[20px] text-[#050752] hover:bg-[#050752]/5 transition-colors"
            >
              Explore All Services
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Cards — Horizontal Scroll */}
      <ServiceCardsSlider />
    </section>
  );
}
