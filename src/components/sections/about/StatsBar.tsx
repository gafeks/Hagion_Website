"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "Projects Completed" },
  { number: "45+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-black py-5">
      <div className="max-w-[1235px] mx-auto px-6">
        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex-1 flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <span className="text-[34px] font-semibold leading-[48px] text-white">
                {stat.number}
              </span>
              <span className="text-[14px] font-normal leading-[24px] text-white/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
