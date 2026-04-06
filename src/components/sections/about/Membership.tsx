"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@carbon/icons-react";


export default function Membership() {
  return (
    <section className="w-full bg-[#2D2555] py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Left — Text */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-6 max-w-[400px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] lg:text-[46px] font-bold leading-[36px] lg:leading-[58px] text-white">
              Professional Membership
            </h2>
            <p className="text-[14px] lg:text-[20px] font-normal leading-[150%] text-[#CDCDCD]">
              We engaged with top industry organizations to stay ahead of the game.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 w-[170px] h-[40px] bg-[#ECEEF2] rounded-lg text-[13px] font-medium leading-[20px] text-[#2D2555]"
              >
                Request for Quote
                <ArrowRight size={16} className="text-[#2D2555]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Logo Cards: staggered 2x2 on desktop, 2x2 grid on mobile */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Desktop layout — 764px × 345px grid */}
            <div className="hidden lg:flex flex-col gap-[25px] w-[764px] h-[345px]">
              {/* Row 1: NITDA + NCS */}
              <div className="flex gap-[44px]">
                <motion.div
                  className="flex flex-col items-center justify-center px-6 py-[7px] w-[345px] h-[160px] rounded-[4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Image src="/images/nitda-transparent.png" alt="NITDA" width={232} height={118} className="object-contain" />
                </motion.div>
                <motion.div
                  className="flex flex-col items-start justify-center px-6 py-[7px] w-[375px] h-[160px] rounded-[4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <Image src="/images/ncs-logo.png" alt="NCS" width={200} height={83} className="object-contain rounded-lg" />
                </motion.div>
              </div>
              {/* Row 2: CPN */}
              <div className="flex justify-center">
                <motion.div
                  className="flex flex-col items-center justify-center px-6 py-[7px] w-[345px] h-[160px] rounded-[4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                >
                  <Image src="/images/cpn-logo.png" alt="CPN" width={128} height={129} className="object-contain" />
                </motion.div>
              </div>
            </div>

            {/* Mobile grid */}
            <div className="lg:hidden flex flex-col gap-3">
              {[
                { src: "/images/cpn-logo.png", alt: "CPN", w: 128, h: 129 },
                { src: "/images/nitda-transparent.png", alt: "NITDA", w: 232, h: 118 },
                { src: "/images/ncs-logo.png", alt: "NCS", w: 200, h: 83, rounded: true },
              ].map((item, i) => (
                <motion.div
                  key={item.alt}
                  className="flex items-center justify-center px-6 py-[7px] h-[120px] rounded-[4px]"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <Image src={item.src} alt={item.alt} width={item.w} height={item.h} className={`object-contain ${item.rounded ? "rounded-lg" : ""}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
