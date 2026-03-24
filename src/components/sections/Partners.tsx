"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTheme } from "@/components/ui/ThemeProvider";

const partners = [
  { src: "/images/fmcide.png", alt: "FMCIDE", width: 223, height: 80 },
  { src: "/images/nitda.png", alt: "NITDA", width: 202, height: 90 },
  { src: "/images/3mtt.jpg", alt: "3MTT", width: 179, height: 100 },
  { src: "/images/partner-naanovo.jpeg", alt: "Naanovo", width: 200, height: 80 },
  { src: "/images/partner-daar.jpeg", alt: "Daar", width: 200, height: 80 },
];

export default function Partners() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col items-center gap-1 lg:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[10px] lg:text-[13.9px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              Trusted Brands
            </span>
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
          </div>

          <h2 className="text-[20px] lg:text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#0F172A] dark:text-white text-center">
            OUR PARTNERS
          </h2>
        </motion.div>
      </div>

      <motion.div
        className="mt-6 lg:mt-10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Marquee
          speed={40}
          gradient
          gradientColor={isDark ? "#0B0F1A" : "white"}
          gradientWidth={100}
          pauseOnHover
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="mx-6 lg:mx-12 flex items-center justify-center h-[60px] lg:h-[100px]"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain dark:invert dark:opacity-80 max-h-[50px] lg:max-h-full w-auto"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
