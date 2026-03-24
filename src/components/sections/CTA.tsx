"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@carbon/icons-react";

export default function CTA() {
  return (
    <section
      className="w-full py-10 lg:py-20"
      style={{
        background: "linear-gradient(90deg, #1B143D 0%, #0A1628 100%)",
      }}
    >
      <div className="max-w-[896px] mx-auto px-5 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading + Subtitle */}
          <div className="flex flex-col items-center gap-2.5 lg:gap-6">
            <h2 className="text-[24px] lg:text-[32.9px] font-normal leading-[40px] text-white text-center">
              Ready to Start Your Project?
            </h2>

            <p className="text-[12px] lg:text-[18.4px] font-normal leading-[16px] lg:leading-[28px] text-white/90 text-center">
              Let&apos;s discuss how we can help transform your business with
              innovative technology solutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 lg:gap-4 w-full lg:w-auto">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-4 h-[40px] bg-[#ECEEF2] rounded-lg text-[13px] font-medium leading-[20px] text-[#2D2555] hover:bg-[#dfe1e6] transition-colors"
            >
              Request for Quote
              <ArrowRight size={16} className="text-[#2D2555]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[23.8px] h-[40px] border border-[#068653] rounded-lg text-[12.9px] font-medium leading-[20px] text-[#068653] hover:bg-[#068653]/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
