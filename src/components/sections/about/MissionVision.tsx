"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative w-full bg-[#F8FAFC] dark:bg-[#0F1629] py-12 overflow-hidden isolate">
      {/* Decorative blur */}
      <div className="absolute w-[500px] h-[500px] right-0 bottom-[160px] bg-[#050752]/[0.04] dark:bg-[#068653]/[0.06] blur-[90px] rounded-full z-0" />

      <div className="max-w-[1231px] mx-auto px-5 lg:px-6 relative z-[1]">
        {/* Section Heading */}
        <motion.h2
          className="text-[24px] lg:text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#050752] dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mission & Vision
        </motion.h2>

        {/* Row 1 — Mission: Image + Text */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center mt-5 lg:mt-10 lg:-mb-[84px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Container */}
          <div
            className="shrink-0 w-full lg:w-[472px] h-[330px] lg:h-[444px] rounded-t-[33px] lg:rounded-t-[44px] rounded-b-[13px] lg:rounded-b-[18px] overflow-hidden relative isolate flex flex-col items-center"
            style={{
              background:
                "linear-gradient(106.06deg, rgba(5,7,82,0.05) -29.45%, rgba(5,7,82,0) 27.86%), linear-gradient(267.5deg, #050752 40.67%, rgba(5,7,82,0) 99.81%)",
              transform: "scaleX(-1)",
            }}
          >
            <div className="pt-[40px] lg:pt-[53px]" style={{ transform: "scaleX(-1)" }}>
              <div className="w-[290px] lg:w-[391px] aspect-square rounded-t-[33px] lg:rounded-t-[44px] overflow-hidden">
                <Image
                  src="/images/hagion-mission.png"
                  alt="Our mission"
                  width={391}
                  height={391}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 mt-5 lg:mt-0 lg:pl-10 flex flex-col gap-[10px]">
            <h3 className="text-[24px] lg:text-[32px] font-medium leading-[150%] text-[#050752] dark:text-white">
              Our Mission
            </h3>
            <p className="text-[12px] lg:text-[24px] font-normal leading-[150%] text-[#5C5E61] dark:text-[#94A3B8]">
              To design and deploy secure, intelligent, and scalable digital systems that empower organizations and accelerate Africa's digital transform
            </p>
          </div>
        </motion.div>

        {/* Row 2 — Vision: Image + Text (on mobile image first, desktop text first) */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-start lg:items-center mt-10 lg:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div className="flex-1 mt-5 lg:mt-0 lg:pr-10 flex flex-col gap-[10px]">
            <h3 className="text-[24px] lg:text-[32px] font-medium leading-[150%] text-[#050752] dark:text-white">
              Our Vision
            </h3>
            <p className="text-[12px] lg:text-[24px] font-normal leading-[160%] text-[#5C5E61] dark:text-[#94A3B8]">
              To become a leading African technology powerhouse delivering enterprise-grade digital infrastructure that competes on a global scale.
            </p>
          </div>

          {/* Image Container */}
          <div
            className="shrink-0 w-full lg:w-[473px] h-[324px] lg:h-[434px] rounded-t-[32px] lg:rounded-t-[43px] rounded-b-[13px] lg:rounded-b-[17px] overflow-hidden relative isolate flex flex-col items-center"
            style={{
              background:
                "linear-gradient(106.06deg, rgba(5,7,82,0.05) -29.45%, rgba(5,7,82,0) 27.86%), linear-gradient(267.5deg, #050752 40.67%, rgba(5,7,82,0) 99.81%)",
            }}
          >
            <div className="pt-[39px] lg:pt-[52px]">
              <div className="w-[301px] lg:w-[404px] h-[285px] lg:h-[382px] rounded-t-[32px] lg:rounded-t-[43px] overflow-hidden">
                <Image
                  src="/images/hagion-vision.png"
                  alt="Our vision"
                  width={404}
                  height={382}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
