"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@carbon/icons-react";

const caseStudies = [
  {
    title: "Waste Management Digital Platform",
    description:
      "A smart vendor management and tracking system enabling real-time monitoring, financial reporting, and streamlined waste collection operations.",
    image: "/images/case-waste.png",
    tags: ["Real-time Tracking", "Financial Reporting", "Vendor Management"],
  },
  {
    title: "Enterprise CRM System",
    description:
      "Custom-built internal CRM for automated client management, analytics, and workflow automation.",
    image: "/images/case-crm.png",
    tags: ["CRM", "Analytics", "Automation"],
  },
  {
    title: "Property Management Portal",
    description:
      "A secure digital workspace with payment gateway integration, KPI dashboards, and property management tools.",
    image: "/images/case-property.png",
    tags: ["Payment Integration", "KPI Dashboard", "Property Management"],
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-[#F9FAFB] py-[53px]">
      <div className="max-w-[1064px] mx-auto px-6">
        <div className="flex flex-col items-center gap-[38px]">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[46px] font-bold leading-[35px] text-center text-[#101828]">
              Selected Case Studies
            </h2>
            <p className="text-[17.5px] font-normal leading-[24px] text-center text-[#4A5565] max-w-[672px]">
              Delivering measurable impact across industries through tailored
              digital solutions
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex gap-7">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="w-[336px] bg-white border border-black/10 rounded-[12.75px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -4 }}
              >
                {/* Image */}
                <div className="w-full h-[168px] bg-[#E2E8F0] relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-[21px] flex flex-col gap-[6px]">
                  <h3 className="text-[17.5px] font-medium leading-[24px] text-[#0A0A0A]">
                    {study.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[21px] text-[#4A5565]">
                    {study.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-[21.8px] pb-[21px] flex flex-wrap gap-[7px]">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-[10.5px] py-[3.5px] bg-[#EFF6FF] rounded-full text-[10.5px] leading-[14px] text-[#2D2555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-[12.8px] py-[7.75px] bg-white border border-[#2D2555] rounded-[6.75px] text-[12.25px] font-medium leading-[18px] text-[#2D2555] hover:bg-[#2D2555]/5 transition-colors"
            >
              View Full Portfolio
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
