"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "@carbon/icons-react";

const serviceTags = [
  "Website Design",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
];

export default function ServicesHero() {
  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] pt-20 pb-10">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:h-[612px]">
          {/* Image — top on mobile, right on desktop */}
          <motion.div
            className="order-first lg:order-last flex-none lg:flex-[443] relative rounded-r-[16px] lg:rounded-l-none overflow-hidden flex items-end p-6 h-[401px] lg:h-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                "linear-gradient(0deg, #2D2555, #2D2555), url(/images/services-hero.png)",
              backgroundBlendMode: "color, normal",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Bottom content */}
            <div className="flex items-center gap-5 w-full">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-6 lg:w-9 h-6 lg:h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowUpRight size={16} className="text-[#0F0F0F] lg:hidden" />
                  <ArrowUpRight size={20} className="text-[#0F0F0F] hidden lg:block" />
                </div>
                <span className="text-[14px] lg:text-[16px] font-normal leading-[150%] uppercase text-white">
                  View Blog
                </span>
              </div>
              <Link
                href="/request-quote"
                className="flex items-center justify-center px-[14px] py-[10px] bg-white/20 backdrop-blur-[10px] rounded-[10px] text-[14px] font-normal leading-[150%] capitalize text-white hover:bg-white/30 transition-colors shrink-0"
              >
                Web Development
              </Link>
            </div>
          </motion.div>

          {/* Content — below image on mobile, left on desktop */}
          <motion.div
            className="relative flex-[782] flex flex-col items-start gap-5 lg:pr-[100px] pt-5 lg:pt-0 pb-5 lg:pb-[90px] lg:rounded-l-[16px] bg-white dark:bg-[#0B0F1A]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
              <span className="text-[10px] lg:text-[14px] font-semibold leading-[20px] tracking-[2.4px] lg:tracking-[1.4px] uppercase text-[#068653]">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] lg:text-[50px] font-semibold leading-[130%] tracking-[0.01em] capitalize text-[#09090B] dark:text-white lg:max-w-[556px]">
              Engineering Intelligent <span className="text-[#068653]">Digital Infrastructure</span> for Growth
            </h1>

            {/* Description */}
            <p className="text-[12px] lg:text-[24px] font-normal leading-[170%] tracking-[0.01em] text-[#676665] dark:text-[#94A3B8] lg:max-w-[683px]">
              11 specialized technology service areas designed to cover every stage of your digital transformation journey
            </p>

            {/* CTA */}
            <div className="flex items-center gap-[10px] lg:gap-7">
              <div className="relative w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]">
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#2D2555]" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] lg:w-9 lg:h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(108.72deg, #2D2555 25.38%, #6351BB 115.56%)" }}
                >
                  <ArrowRight size={10} className="text-white lg:hidden" />
                  <ArrowRight size={18} className="text-white hidden lg:block" />
                </div>
              </div>
              <span className="text-[16px] lg:text-[21px] font-medium leading-[150%] tracking-[0.01em] capitalize text-[#2D2555] dark:text-white">
                Start a Project
              </span>
            </div>

            {/* Bottom Bar — absolute on desktop, static on mobile */}
            <div
              className="w-full lg:absolute lg:bottom-0 lg:left-0 lg:w-[724px] h-[70px] flex items-center justify-center px-4 lg:rounded-bl-[16px]"
              style={{
                background: "linear-gradient(180deg, #2D2555 0%, #574F7F 115%)",
              }}
            >
              {/* Desktop: single row */}
              <div className="hidden lg:flex items-center gap-4">
                {serviceTags.map((tag) => (
                  <div key={tag} className="flex items-center gap-[10px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#068653] shrink-0" />
                    <span className="text-[14px] font-normal leading-[150%] capitalize text-white whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
              {/* Mobile: 2x2 grid */}
              <div className="flex lg:hidden flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                  {serviceTags.slice(0, 2).map((tag) => (
                    <div key={tag} className="flex items-center gap-[10px]">
                      <div className="w-[7px] h-[7px] rounded-full bg-[#068653] shrink-0" />
                      <span className="text-[12px] font-normal leading-[150%] tracking-[0.01em] capitalize text-white whitespace-nowrap">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {serviceTags.slice(2).map((tag) => (
                    <div key={tag} className="flex items-center gap-[10px]">
                      <div className="w-[7px] h-[7px] rounded-full bg-[#068653] shrink-0" />
                      <span className="text-[12px] font-normal leading-[150%] tracking-[0.01em] capitalize text-white whitespace-nowrap">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
