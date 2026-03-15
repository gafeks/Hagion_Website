"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-12 overflow-hidden isolate">
      {/* Decorative blur */}
      <div className="absolute w-[500px] h-[500px] right-0 bottom-[160px] bg-[#050752]/[0.04] blur-[90px] rounded-full z-0" />

      <div className="max-w-[1231px] mx-auto px-6 relative z-[1]">
        {/* Section Heading */}
        <motion.h2
          className="text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#050752]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mission & Vision
        </motion.h2>

        {/* Row 1 — Image left, Text right */}
        <motion.div
          className="flex items-center mt-10 -mb-[84px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Container */}
          <div
            className="shrink-0 w-[472px] h-[444px] rounded-t-[44px] rounded-b-[18px] overflow-hidden relative isolate"
            style={{
              background:
                "linear-gradient(106.06deg, rgba(5,7,82,0.05) -29.45%, rgba(5,7,82,0) 27.86%), linear-gradient(267.5deg, #050752 40.67%, rgba(5,7,82,0) 99.81%)",
              transform: "scaleX(-1)",
            }}
          >
            <div className="pt-[53px] px-[36px]" style={{ transform: "scaleX(-1)" }}>
              <div className="w-full aspect-square rounded-t-[44px] overflow-hidden">
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
          <div className="flex-1 pl-10 flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-medium leading-[150%] text-[#050752]">
              Our Mission
            </h3>
            <p className="text-[24px] font-normal leading-[150%] text-[#5C5E61]">
              To design and deploy secure, intelligent, and scalable digital systems that empower organizations and accelerate Africa’s digital transform
            </p>
          </div>
        </motion.div>

        {/* Row 2 — Text left, Image right */}
        <motion.div
          className="flex items-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div className="flex-1 pr-10 flex flex-col gap-[10px]">
            <h3 className="text-[32px] font-medium leading-[150%] text-[#050752]">
              Our Vision
            </h3>
            <p className="text-[24px] font-normal leading-[160%] text-[#5C5E61]">
              To become a leading African technology powerhouse delivering enterprise-grade digital infrastructure that competes on a global scale.
            </p>
          </div>

          {/* Image Container */}
          <div
            className="shrink-0 w-[473px] h-[434px] rounded-t-[43px] rounded-b-[17px] overflow-hidden relative isolate"
            style={{
              background:
                "linear-gradient(106.06deg, rgba(5,7,82,0.05) -29.45%, rgba(5,7,82,0) 27.86%), linear-gradient(267.5deg, #050752 40.67%, rgba(5,7,82,0) 99.81%)",
            }}
          >
            <div className="pt-[52px] px-[35px]">
              <div className="w-full h-[382px] rounded-t-[43px] overflow-hidden">
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
