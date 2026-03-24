"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { src: "/images/wastewise-logo.png", alt: "WasteWise", width: 84, height: 83 },
  { src: "/images/partner-naanovo.jpeg", alt: "Naanovo", width: 163, height: 84 },
];

export default function FeaturedClients() {
  return (
    <section className="w-full bg-[#030350]/10 py-14 lg:py-16">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col items-center gap-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-[28px] lg:text-[46px] font-bold leading-[150%] text-[#04041B] dark:text-white text-center max-w-[980px]">
            Certifications
          </h2>

          {/* Client Cards */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 w-full">
            {clients.map((client, i) => (
              <motion.div
                key={client.alt}
                className="flex-1 flex items-center justify-center p-8 lg:p-[30px] h-[120px] lg:h-[143px] bg-white rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
