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
    <section className="w-full bg-white pt-20 pb-10">
      <div className="max-w-[1231px] mx-auto px-6">
        <div className="flex h-[612px]">
          {/* Left Side */}
          <motion.div
            className="relative flex-[782] flex flex-col items-start gap-5 pr-[100px] pt-0 pb-[90px] rounded-l-[16px] bg-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
              <span className="text-[14px] font-semibold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
                What We Offer
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[50px] font-semibold leading-[130%] capitalize text-[#09090B] max-w-[556px]">
              Engineering Intelligent <span className="text-[#068653]">Digital Infrastructure</span> for Growth 
            </h1>

            {/* Description */}
            <p className="text-[24px] font-normal leading-[170%] text-[#676665] max-w-[683px]">
              11 specialized technology service areas designed to cover every stage of your digital transformation journey
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center gap-7">
              {/* Play Button */}
              <div className="relative w-[50px] h-[50px]">
                <div
                  className="absolute inset-0 rounded-full border-[1.5px] border-[#2D2555]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(108.72deg, #2D2555 25.38%, #6351BB 115.56%)" }}
                >
                  <ArrowRight size={18} className="text-white" />
                </div>
              </div>
              <span className="text-[21px] font-medium leading-[150%] capitalize text-[#2D2555]">
                Start a Project
              </span>
            </div>

            {/* Bottom Bar — absolute at bottom */}
            <div
              className="absolute bottom-0 left-0 w-[724px] h-[70px] flex items-center justify-center px-4 rounded-bl-[16px]"
              style={{
                background:
                  "linear-gradient(180deg, #2D2555 0%, #574F7F 115%)",
              }}
            >
              <div className="flex items-center gap-4">
                {serviceTags.map((tag) => (
                  <div key={tag} className="flex items-center gap-[10px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#068653] shrink-0" />
                    <span className="text-[14px] font-normal leading-[150%] capitalize text-white whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side — Image */}
          <motion.div
            className="flex-[443] relative rounded-r-[16px] overflow-hidden flex items-end p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              {/* Arrow + text */}
              <div className="flex items-center gap-2 flex-1">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowUpRight size={20} className="text-[#0F0F0F]" />
                </div>
                <span className="text-[16px] font-normal leading-[150%] uppercase text-white">
                  View Blog
                </span>
              </div>

              {/* Frosted button */}
              <Link
                href="/request-quote"
                className="flex items-center justify-center px-[14px] py-[10px] bg-white/20 backdrop-blur-[10px] rounded-[10px] text-[14px] font-normal leading-[150%] capitalize text-white hover:bg-white/30 transition-colors shrink-0"
              >
                Web Development
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
