"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/images/fmcide.png", alt: "FMCIDE", width: 223, height: 80 },
  { src: "/images/nitda.png", alt: "NITDA", width: 202, height: 90 },
  { src: "/images/3mtt.jpg", alt: "3MTT", width: 179, height: 100 },
];

export default function Partners() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1232px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
            <span className="text-[13.9px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#068653]">
              Trusted Brands
            </span>
            <div className="w-8 h-[2px] bg-[#068653] rounded-full" />
          </div>

          <h2 className="text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#0F172A]">
            OUR PARTNERS
          </h2>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
