"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckmarkOutline, Add, ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";

const projects = [
  {
    title: "WasteWise – Smart Waste Management Platform",
    category: "Category",
    subcategory: "Web App/Analytics Dashboard",
    duration: "6 Months",
    description:
      "A digital waste management ecosystem designed to streamline vendor coordination, service tracking, and financial reporting. Built to solve manual waste collection tracking inefficiencies.",
    image: "/images/wastewise.png",
    features: [
      "Vendor registration & verification system",
      "Real-time waste collection tracking",
      "Earnings dashboard for collectors",
      "Admin analytics dashboard",
    ],
    impact: [
      "Improved operational accountability",
      "Centralized reporting visibility",
      "Enhanced revenue tracking",
      "Reduced manual administrative processes",
    ],
  },
  {
    title: "Picadailys – FinTech & Digital Rewards Platform",
    category: "Category",
    subcategory: "Web Design",
    duration: "6 Months",
    description:
      "A FinTech-driven digital engagement platform designed to revolutionize brandinteraction and financial services through gamified experiences and integrated walletsystems.",
    image: "/images/picadailys.png",
    features: [
      "Digital wallet infrastructure",
      "Secure user onboarding & verification",
      "Brand engagement gamification engine",
      "API-based financial integration framework",
    ],
    impact: [
      "Structured digital engagement ecosystem",
      "Integrated financial reward management",
      "Real-time financial reporting capabilities",
      "Scalable platform architecture ready for expansion",
    ],
  },
  {
    title: "Vendor & Service Marketplace Platform",
    category: "Category",
    subcategory: "Web App/Analytics Dashboard",
    duration: "6 Months",
    description:
      "A structured service marketplace connecting users with professionals and service providers through a centralized digital support system with comprehensive admin controls.",
    image: "/images/vendor-service.png",
    features: [
      "User registration & authentication",
      "Service provider onboarding",
      "Order & service tracking",
      "Administrative control dashboard",
    ],
    impact: [
      "Scalable ecosystem for service delivery",
      "Centralized monitoring and performance tracking",
      "Improved vendor accountability",
      "Streamlined order management",
    ],
  },
];

const filterCategories = [
  "All Projects",
  "FinTech",
  "Environmental",
  "Real Estate",
  "Enterprise",
  "Marketplace",
];

const projectTabs = [
  "All Categories",
  "Web Design",
  "Web Development",
  "Marketing",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [activeTab, setActiveTab] = useState("All Categories");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-[#0B0F1A] py-10 overflow-hidden"
    >
      <div className="max-w-[1231px] mx-auto px-6">
        {/* Small Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`flex items-center justify-center px-4 py-2 rounded-full text-[14px] font-normal leading-[20px] transition-colors ${
                  isActive
                    ? "bg-[#2D2555] dark:bg-[#068653] text-white"
                    : "bg-[#F3F4F6] dark:bg-white/10 text-[#4A5565] dark:text-[#94A3B8] hover:bg-[#E5E7EB] dark:hover:bg-white/15"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Projects Bar */}
        <motion.div
          className="flex items-center justify-between py-10 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Heading */}
          <h2 className="text-[38px] font-semibold leading-[46px] uppercase text-[#2D2555] dark:text-white flex-1">
            Projects <span className="text-[#068653]">Showcase</span>
          </h2>

          {/* Tabs */}
          <div className="flex items-start gap-[10px]">
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center justify-center px-5 py-[14px] rounded-[40px] text-[14px] font-medium leading-[150%] capitalize transition-colors ${
                    isActive
                      ? "bg-[#2D2555] dark:bg-[#068653] text-white"
                      : "border border-[#2D2555] dark:border-white/30 text-[#2D2555] dark:text-[#94A3B8] hover:bg-[#2D2555]/5 dark:hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Showcase Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex items-center rounded-[19px] gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Info Card */}
              <motion.div
                className="flex-1 flex flex-col items-start p-6 gap-4 bg-white dark:bg-[#1A2035] border border-[#d0d0d0]/30 dark:border-white/10 rounded-[13px] h-[347px]"
                whileHover={{
                  y: -4,
                  boxShadow: isDark
                    ? "0px 8px 24px rgba(6,134,83,0.1)"
                    : "0px 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Title */}
                <h3 className="text-[20px] font-semibold leading-[150%] capitalize text-[#2D2555] dark:text-white">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-col items-start gap-[9px]">
                  <div className="flex items-center px-[13px] py-[7px] gap-[6px] bg-[#2D2555]/10 dark:bg-white/10 rounded-full">
                    <span className="text-[14px] font-normal leading-[150%] text-[#3D3837] dark:text-[#94A3B8]">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#068653]" />
                    <span className="text-[14px] font-medium leading-[150%] text-[#2D2555] dark:text-white">
                      {project.subcategory}
                    </span>
                  </div>
                  <div className="flex items-center justify-center px-[14px] py-[7px] gap-[6px] border border-[#2D2555]/20 dark:border-white/20 rounded-full">
                    <span className="text-[12px] font-normal leading-[150%] text-[#3D3837]/50 dark:text-[#94A3B8]/50">
                      Time Taken
                    </span>
                    <ArrowRight size={12} className="text-[#068653]" />
                    <span className="text-[12px] font-medium leading-[150%] text-[#2D2555]/50 dark:text-white/50">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] font-normal leading-[160%] text-[#5A5A5A] dark:text-[#94A3B8]">
                  {project.description}
                </p>
              </motion.div>

              {/* Image */}
              <div
                className="flex-1 h-[347px] rounded-[13px]"
                style={{
                  background: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Features + Impact + CTA */}
              <div className="flex-1 flex flex-col items-center gap-[9px]">
                {/* Key Features & Impact — single card */}
                <motion.div
                  className="w-full flex flex-col items-start p-7 gap-[15px] bg-white dark:bg-[#1A2035] border border-[#d0d0d0]/30 dark:border-white/10 rounded-[9px]"
                  whileHover={{
                    y: -3,
                    boxShadow: isDark
                      ? "0px 6px 20px rgba(6,134,83,0.08)"
                      : "0px 6px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Key Features */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <span className="text-[11px] font-normal leading-[15px] tracking-[0.56px] uppercase text-[#5A5A5A] dark:text-[#94A3B8]">
                      Key Features
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-[7px]"
                        >
                          <CheckmarkOutline
                            size={13}
                            className="text-[#2D2555] dark:text-[#068653] shrink-0"
                          />
                          <span className="text-[13px] font-normal leading-[19px] text-[#4A5565] dark:text-[#94A3B8]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex flex-col gap-[11px] w-full pt-2">
                    <span className="text-[11px] font-normal leading-[15px] tracking-[0.56px] uppercase text-[#5A5A5A] dark:text-[#94A3B8]">
                      Impact
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      {project.impact.map((item) => (
                        <div key={item} className="flex items-center gap-[7px]">
                          <CheckmarkOutline
                            size={13}
                            className="text-[#2D2555] dark:text-[#068653] shrink-0"
                          />
                          <span className="text-[13px] font-normal leading-[19px] text-[#4A5565] dark:text-[#94A3B8]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-center w-full py-[13px] bg-[#2D2555] dark:bg-[#068653] rounded-[7px] text-[13px] font-medium leading-[150%] uppercase text-white hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
