"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckmarkOutline, Add, ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";

const projects = [
  {
    title: "Runo Dayspring School Management System",
    category: "EdTech",
    subcategory: "Web App / Remote Learning",
    duration: "2020",
    description:
      "A comprehensive digital learning platform developed during the COVID-19 pandemic to ensure academic continuity. Enabled 100% remote learning during lockdowns and digitized legacy school operations.",
    image: "/images/wastewise.png",
    features: [
      "Online classrooms",
      "Assignment submission system",
      "Result portals",
      "Google Classroom integration",
    ],
    impact: [
      "100% remote learning during lockdowns",
      "Digitized legacy school operations",
      "Improved academic continuity",
      "Seamless teacher-student interaction",
    ],
    link: "https://www.runodayspringsch.com",
  },
  {
    title: "3MTT Training Program (NITDA & FMCIDE)",
    category: "EdTech",
    subcategory: "Human Capital Development",
    duration: "2023",
    description:
      "Hagion served as an official training provider for the 3 Million Technical Talent initiative with ID Number TP/23/70673683. Trained 100+ participants with ALC coordination and Hackathon management.",
    image: "/images/picadailys.png",
    features: [
      "Training for 100+ participants",
      "ALC coordination",
      "Hackathon management",
      "Technical talent development",
    ],
    impact: [
      "Awarded \u20A6500,000 in prizes",
      "Strengthened Nigeria\u2019s digital workforce",
      "Upskilled emerging tech talent",
      "Contributed to national digital agenda",
    ],
    link: "https://www.3mtt.nitda.gov.ng/",
  },
  {
    title: "Autospheres Business Platform",
    category: "Corporate & Enterprise",
    subcategory: "ERP / Business Management",
    duration: "2017",
    description:
      "An all-in-one business management platform comparable to Bitrix24. Centralized company operations and significantly improved team productivity.",
    image: "/images/vendor-service.png",
    features: [
      "Integrated CRM",
      "Project Management tools",
      "HR tools & automation",
      "Marketing automation",
    ],
    impact: [
      "Centralized company operations",
      "Significantly improved team productivity",
      "Streamlined internal workflows",
      "Reduced operational overhead",
    ],
    link: "https://www.autospheres.com",
  },
  {
    title: "Picadailys \u2013 Digital Rewards Platform",
    category: "Corporate & Enterprise",
    subcategory: "Brand Engagement",
    duration: "2023",
    description:
      "A multi-functional ecosystem combining brand rewards and financial services. Enhanced brand-user interaction through a digitized rewards economy.",
    image: "/images/picadailys.png",
    features: [
      "Android App (v1.1)",
      "Admin Dashboard",
      "Gamified user engagement",
      "Digital wallet integration",
    ],
    impact: [
      "Enhanced brand-user interaction",
      "Digitized rewards economy",
      "Scalable engagement platform",
      "Real-time financial reporting",
    ],
    link: "https://play.google.com/store/apps/details?id=com.picadaily.app",
  },
  {
    title: "Softgap Loan Management System",
    category: "FinTech",
    subcategory: "Financial Technology",
    duration: "2025",
    description:
      "A web-based system designed to automate the lifecycle of micro-lending. Improved financial transparency and reduced manual processing errors.",
    image: "/images/vendor-service.png",
    features: [
      "Loan tracking system",
      "Automated repayment schedules",
      "Financial reporting dashboard",
      "User management portal",
    ],
    impact: [
      "Improved financial transparency",
      "Reduced manual processing errors",
      "Automated loan lifecycle management",
      "Enhanced borrower experience",
    ],
    link: "https://www.softgapng.com",
  },
  {
    title: "Genphet Technical Services Platform",
    category: "Industrial",
    subcategory: "Oil & Gas / Energy",
    duration: "2020",
    description:
      "Digital infrastructure for an industrial water drilling firm serving the Oil & Gas sector. Strengthened digital security and enabled scalable communication for field operations.",
    image: "/images/wastewise.png",
    features: [
      "Corporate cloud hosting",
      "Cybersecurity training",
      "Managed email systems",
      "Secure communication infrastructure",
    ],
    impact: [
      "Strengthened digital security",
      "Scalable field communication",
      "Modernized IT infrastructure",
      "Improved operational efficiency",
    ],
    link: "https://www.genphettechnicalsltd.com",
  },
  {
    title: "PPLegals Website",
    category: "Legal & Professional",
    subcategory: "Legal Tech",
    duration: "2017",
    description:
      "A professional portal for legal document management and identity presentation. Enhanced digital accessibility and professional credibility for legal practitioners.",
    image: "/images/picadailys.png",
    features: [
      "Secure file upload system",
      "Digital signature integration",
      "Professional identity portal",
      "Document management system",
    ],
    impact: [
      "Enhanced digital accessibility",
      "Improved professional credibility",
      "Streamlined document workflows",
      "Secure client communications",
    ],
    link: "https://www.pplegals.com",
  },
  {
    title: "CBD Health & Wellness Store",
    category: "Health & Wellness",
    subcategory: "E-commerce / Health",
    duration: "2017",
    description:
      "A full-scale wellness platform based in Abuja. Successfully transitioned a physical wellness brand into the digital marketplace.",
    image: "/images/vendor-service.png",
    features: [
      "Product showcase system",
      "Secure checkout",
      "Cloud deployment",
      "Inventory management",
    ],
    impact: [
      "Successful digital transition",
      "Expanded market reach",
      "Streamlined product management",
      "Enhanced customer experience",
    ],
    link: "https://www.cbdhealthwellnessstore.com",
  },
  {
    title: "Interfrq \u2013 Global Football Fan Platform",
    category: "Innovation",
    subcategory: "Sports Tech / Big Data",
    duration: "2018",
    description:
      "A world-class authentication and engagement system for global football communities. Created a structured identity system for fanbases, enabling data-driven sports marketing.",
    image: "/images/wastewise.png",
    features: [
      "Fan registration system",
      "Club-based analytics",
      "Sponsor data insights",
      "Community engagement tools",
    ],
    impact: [
      "Structured fanbase identity system",
      "Data-driven sports marketing",
      "Enhanced sponsor visibility",
      "Scalable community platform",
    ],
    link: "https://www.interfrq.com",
  },
  {
    title: "WasteWise \u2013 Smart Waste Platform",
    category: "Civic Tech",
    subcategory: "Sustainability / Smart City",
    duration: "2025",
    description:
      "An ecosystem connecting households and businesses with recyclers and waste managers. Promoted environmental sustainability and improved municipal waste collection efficiency.",
    image: "/images/wastewise.png",
    features: [
      "Mobile App",
      "Vendor onboarding system",
      "Admin logistics dashboard",
      "Real-time tracking",
    ],
    impact: [
      "Promoted environmental sustainability",
      "Improved waste collection efficiency",
      "Streamlined municipal operations",
      "Connected recyclers with households",
    ],
    link: "https://www.wastewiseinc.com",
  },
  {
    title: "Dear Communication Radio Training",
    category: "Media",
    subcategory: "Media Capacity Building",
    duration: "2018",
    description:
      "Digital literacy and software training for media professionals. Modernized the digital capabilities of radio and media staff.",
    image: "/images/picadailys.png",
    features: [
      "Graphics design training",
      "Computer literacy modules",
      "Digital media workshops",
      "Professional certification",
    ],
    impact: [
      "Modernized media staff capabilities",
      "Improved digital literacy",
      "Enhanced content production quality",
      "Upskilled broadcasting professionals",
    ],
  },
];

const filterCategories = [
  "All Projects",
  "EdTech",
  "Corporate & Enterprise",
  "FinTech",
  "Industrial",
  "Health & Wellness",
  "Legal & Professional",
  "Innovation",
  "Civic Tech",
  "Media",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-[#0B0F1A] py-10 overflow-hidden"
    >
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        {/* Small Filter Tabs */}
        <motion.div
          className="flex overflow-x-auto lg:flex-wrap lg:justify-center items-center gap-[10px] lg:gap-2 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide"
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
                className={`flex items-center justify-center px-3 py-[5px] lg:py-2 rounded-full text-[12px] lg:text-[13px] font-normal leading-[20px] tracking-[0.01em] whitespace-nowrap transition-colors ${
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
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 py-5 lg:py-10 mt-5 lg:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Heading */}
          <h2 className="text-[24px] lg:text-[38px] font-semibold leading-[29px] lg:leading-[46px] tracking-[0.01em] uppercase text-[#2D2555] dark:text-white lg:flex-1">
            Projects <span className="text-[#068653]">Showcase</span>
          </h2>
        </motion.div>

        {/* Project Showcase Cards */}
        <div className="flex flex-col gap-6 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row lg:items-center rounded-[13px] lg:rounded-[19px] gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Info Card */}
              <motion.div
                className="flex-1 flex flex-col items-start p-4 lg:p-6 gap-4 bg-white dark:bg-[#1A2035] border border-[#d0d0d0]/30 dark:border-white/10 rounded-[13px] lg:h-[347px]"
                whileHover={{
                  y: -4,
                  boxShadow: isDark
                    ? "0px 8px 24px rgba(6,134,83,0.1)"
                    : "0px 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Title */}
                <h3 className="text-[16px] lg:text-[20px] font-semibold leading-[150%] tracking-[0.01em] capitalize text-[#2D2555] dark:text-white">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap items-start gap-[9px]">
                  <div className="flex items-center px-[13px] py-[7px] gap-[6px] bg-[#2D2555]/10 dark:bg-white/10 rounded-full">
                    <span className="text-[12px] lg:text-[14px] font-normal leading-[150%] text-[#3D3837] dark:text-[#94A3B8]">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#068653]" />
                    <span className="text-[12px] lg:text-[14px] font-medium leading-[150%] text-[#2D2555] dark:text-white">
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
                <p className="text-[12px] lg:text-[14px] font-normal leading-[160%] tracking-[0.01em] text-[#5A5A5A] dark:text-[#94A3B8]">
                  {project.description}
                </p>
              </motion.div>

              {/* Image */}
              <div
                className="w-full lg:flex-1 h-[283px] lg:h-[347px] rounded-[13px]"
                style={{
                  background: `url('${project.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Features + Impact + CTA */}
              <div className="w-full lg:flex-1 flex flex-col items-center gap-[9px]">
                {/* Key Features & Impact — single card */}
                <motion.div
                  className="w-full flex flex-col items-start p-4 lg:p-7 gap-[15px] bg-white dark:bg-[#1A2035] border border-[#d0d0d0]/30 dark:border-white/10 rounded-[9px]"
                  whileHover={{
                    y: -3,
                    boxShadow: isDark
                      ? "0px 6px 20px rgba(6,134,83,0.08)"
                      : "0px 6px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Key Features */}
                  <div className="flex flex-col gap-[11px] w-full">
                    <span className="text-[10px] lg:text-[11px] font-normal leading-[15px] tracking-[1.56px] lg:tracking-[0.56px] uppercase text-[#5A5A5A] dark:text-[#94A3B8]">
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
                          <span className="text-[12px] lg:text-[13px] font-normal leading-[19px] tracking-[0.01em] text-[#4A5565] dark:text-[#94A3B8]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex flex-col gap-[11px] w-full pt-2">
                    <span className="text-[10px] lg:text-[11px] font-normal leading-[15px] tracking-[1.56px] lg:tracking-[0.56px] uppercase text-[#5A5A5A] dark:text-[#94A3B8]">
                      Impact
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      {project.impact.map((item) => (
                        <div key={item} className="flex items-center gap-[7px]">
                          <CheckmarkOutline
                            size={13}
                            className="text-[#2D2555] dark:text-[#068653] shrink-0"
                          />
                          <span className="text-[12px] lg:text-[13px] font-normal leading-[19px] tracking-[0.01em] text-[#4A5565] dark:text-[#94A3B8]">
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
                    className="flex items-center justify-center w-full py-[13px] bg-[#2D2555] dark:bg-[#068653] rounded-[7px] text-[13px] font-medium leading-[150%] tracking-[0.01em] uppercase text-white hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
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
