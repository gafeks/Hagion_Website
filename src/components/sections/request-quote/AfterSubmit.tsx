"use client";

import { motion } from "framer-motion";
import { Email, Chat, DocumentBlank, Checkmark } from "@carbon/icons-react";

const steps = [
  {
    number: "01",
    Icon: Email,
    title: "Initial Review (Within 24–48 Hours)",
    description: "Our technical team evaluates your requirements.",
  },
  {
    number: "02",
    Icon: Chat,
    title: "Consultation Call",
    description: "We schedule a discovery session to align on scope and expectations.",
  },
  {
    number: "03",
    Icon: DocumentBlank,
    title: "Detailed Proposal",
    description: "You receive a structured quote with milestones, timelines, and deliverables.",
  },
  {
    number: "04",
    Icon: Checkmark,
    title: "Project Kickoff",
    description: "Once approved, we assign a dedicated team and begin development.",
  },
];

export default function AfterSubmit() {
  return (
    <section className="w-full bg-[#2D2555]/5 dark:bg-[#0F1629] py-12 lg:py-20">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-8">
        <motion.div
          className="flex flex-col gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <h2 className="text-[24px] lg:text-[48px] font-medium leading-[36px] lg:leading-[36px] text-[#101828] dark:text-white text-center">
            What Happens After You Submit?
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col gap-[10px] p-[25px] bg-white dark:bg-[#1A2035] rounded-[14px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col gap-3">
                  {/* Number */}
                  <span className="text-[30px] font-medium leading-[36px] text-[#2D2555] dark:text-white">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center bg-[#E8FFF7] dark:bg-[#10B981]/15 rounded-[10px]">
                    <step.Icon size={20} className="text-[#10B981]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] font-medium leading-[19px] text-[#101828] dark:text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] leading-[20px] text-[#4A5565] dark:text-[#94A3B8]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
