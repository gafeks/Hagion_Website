"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { src: "/images/certificate1.jpeg", alt: "Certification 1", width: 400, height: 180 },
  { src: "/images/certificate2.jpeg", alt: "Certification 2", width: 400, height: 180 },
];

export default function FeaturedClients() {
  return (
    <section className="w-full bg-[#030350]/10 py-10 lg:py-16">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <motion.div
          className="flex flex-col items-center gap-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-[20px] lg:text-[46px] font-bold leading-[150%] text-[#04041B] dark:text-white text-center max-w-[980px]">
            Certifications
          </h2>

          {/* Client Cards */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-6 lg:gap-10 w-full max-w-[900px]">
            {clients.map((client, i) => (
              <motion.div
                key={client.alt}
                className="w-full sm:w-[320px] lg:w-[420px] flex items-center justify-center p-3 lg:p-4 h-[160px] lg:h-[220px] bg-white rounded-2xl border border-[#F1F5F9] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 20px 40px rgba(6, 134, 83, 0.12)",
                  borderColor: "#068653"
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
