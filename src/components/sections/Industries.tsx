"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  Building,
  Enterprise,
  Recycle,
  Launch,
  Finance,
  Hospital,
} from "@carbon/icons-react";

const industries = [
  {
    title: "Real Estate & Property Development",
    description: "Smart platforms for property management, listings, and transactions.",
    icon: Building,
    bg: "#ECFDF5", darkBg: "rgba(16,185,129,0.1)",
    border: "#D1FAE5", darkBorder: "rgba(16,185,129,0.2)",
    iconBorder: "#D1FAE5", darkIconBg: "rgba(16,185,129,0.15)",
    iconColor: "#059669",
    gradient: "linear-gradient(90deg, #10B981 0%, #059669 100%)",
  },
  {
    title: "Government & Public Sector",
    description: "Empowering public institutions with transparent, efficient digital infrastructure.",
    icon: Enterprise,
    bg: "#EFF6FF", darkBg: "rgba(37,99,235,0.1)",
    border: "#DBEAFE", darkBorder: "rgba(37,99,235,0.2)",
    iconBorder: "#DBEAFE", darkIconBg: "rgba(37,99,235,0.15)",
    iconColor: "#2563EB",
    gradient: "linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)",
  },
  {
    title: "Waste & Environmental Services",
    description: "Sustainable solutions for waste tracking, compliance, and reporting.",
    icon: Recycle,
    bg: "#F0FDF4", darkBg: "rgba(22,163,74,0.1)",
    border: "#DCFCE7", darkBorder: "rgba(22,163,74,0.2)",
    iconBorder: "#DCFCE7", darkIconBg: "rgba(22,163,74,0.15)",
    iconColor: "#16A34A",
    gradient: "linear-gradient(90deg, #22C55E 0%, #16A34A 100%)",
  },
  {
    title: "SMEs & Startups",
    description: "Agile digital products that help growing businesses move faster.",
    icon: Launch,
    bg: "#FFF7ED", darkBg: "rgba(234,88,12,0.1)",
    border: "#FFEDD5", darkBorder: "rgba(234,88,12,0.2)",
    iconBorder: "#FFEDD5", darkIconBg: "rgba(234,88,12,0.15)",
    iconColor: "#EA580C",
    gradient: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
  },
  {
    title: "Financial Services",
    description: "Secure, scalable tools for fintech, banking, and financial operations.",
    icon: Finance,
    bg: "#F5F3FF", darkBg: "rgba(124,58,237,0.1)",
    border: "#EDE9FE", darkBorder: "rgba(124,58,237,0.2)",
    iconBorder: "#EDE9FE", darkIconBg: "rgba(124,58,237,0.15)",
    iconColor: "#7C3AED",
    gradient: "linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)",
  },
  {
    title: "Healthcare & Private Institutions",
    description: "Patient-centered digital systems for modern healthcare providers.",
    icon: Hospital,
    bg: "#FFF1F2", darkBg: "rgba(225,29,72,0.1)",
    border: "#FFE4E6", darkBorder: "rgba(225,29,72,0.2)",
    iconBorder: "#FFE4E6", darkIconBg: "rgba(225,29,72,0.15)",
    iconColor: "#E11D48",
    gradient: "linear-gradient(90deg, #F43F5E 0%, #E11D48 100%)",
  },
];

export default function Industries() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-10 lg:py-[71px]">
      <div className="max-w-[1162px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col items-center gap-3 lg:gap-[14px] mb-8 lg:mb-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[24px] lg:text-[40px] font-semibold leading-[35px] text-center">
            <span className="text-[#068653]">Industries</span> We Serve
          </h2>
          <p className="text-[14px] lg:text-[17.5px] font-normal leading-[24px] text-center text-[#5A5A5A] dark:text-[#94A3B8]">
            We deliver specialized digital solutions across diverse sectors, tailored to each industry's unique challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                className="relative overflow-hidden rounded-2xl h-[228px]"
                style={{
                  backgroundColor: isDark ? industry.darkBg : industry.bg,
                  border: `1px solid ${isDark ? industry.darkBorder : industry.border}`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                whileHover={{ y: -4, boxShadow: isDark ? "0px 8px 24px rgba(0,0,0,0.3)" : "0px 8px 24px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="absolute top-0 left-px right-px h-1 rounded-t-2xl"
                  style={{ background: industry.gradient }}
                />
                <div className="p-6 pt-7">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                    style={{
                      backgroundColor: isDark ? industry.darkIconBg : "#FFFFFF",
                      border: `1px solid ${isDark ? industry.darkBorder : industry.iconBorder}`,
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Icon size={24} style={{ fill: industry.iconColor, color: industry.iconColor }} />
                  </div>
                  <h3 className="text-[18px] font-semibold leading-[28px] text-[#1E293B] dark:text-white mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[23px] text-[#64748B] dark:text-[#94A3B8]">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
