"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckmarkOutline, Email, Upload, Send } from "@carbon/icons-react";

const whyItems = [
  "Enterprise-grade system architecture",
  "Security-first development approach",
  "Transparent project milestones",
  "Scalable & future-ready solutions",
  "Dedicated technical consultation",
];

const serviceOptions = [
  "Web & Mobile App Development",
  "Enterprise Software Solutions",
  "Cloud & Infrastructure Services",
  "Cybersecurity & Data Protection",
  "AI Automation & Smart Workflows",
  "IT Outsourcing & Managed Support",
  "Digital Platform Development",
  "Data Analytics & Reporting",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelineOptions = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Ongoing",
];

const yesNoOptions = ["Yes", "No", "Not sure"];

export default function RequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    description: "",
    budget: "",
    timeline: "",
    ongoingSupport: "",
    existingSystems: "",
    complianceSupport: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-12 lg:py-20">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[373px] shrink-0 flex flex-col gap-6">
            {/* Why Work With Hagion */}
            <motion.div
              className="bg-[#F9FAFB] dark:bg-[#1A2035] border border-[#E5E7EB] dark:border-white/10 rounded-[13px] lg:rounded-[14px] p-[22px] lg:p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[19px] lg:text-[20px] font-semibold leading-[26px] lg:leading-[28px] text-[#2D2555] dark:text-white">
                Why Work With Hagion?
              </h3>
              <div className="flex flex-col gap-[11px] lg:gap-3 mt-[15px] lg:mt-4">
                {whyItems.map((item) => (
                  <div key={item} className="flex items-start gap-[11px] lg:gap-3">
                    <CheckmarkOutline size={15} className="text-[#10B981] mt-0.5 shrink-0 lg:hidden" />
                    <CheckmarkOutline size={16} className="text-[#10B981] mt-0.5 shrink-0 hidden lg:block" />
                    <span className="text-[13px] lg:text-[14px] leading-[19px] lg:leading-[20px] text-[#4A5565] dark:text-[#94A3B8]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E5E7EB] dark:border-white/10 mt-[15px] lg:mt-4 pt-[15px] lg:pt-4">
                <p className="text-[11px] lg:text-[12px] leading-[15px] lg:leading-[16px] text-[#6A7282] dark:text-[#94A3B8]">
                  Every request is reviewed by our strategy and technical team to ensure you receive a solution aligned with your objectives
                </p>
              </div>
            </motion.div>

            {/* Government Card */}
            <motion.div
              className="bg-[#10B981]/5 border border-[#BCFFE9] dark:border-[#10B981]/30 rounded-[13px] lg:rounded-[14px] p-[22px] lg:p-6 flex flex-col gap-[11px] lg:gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2">
                <Email size={19} className="text-[#10B981] lg:hidden" />
                <Email size={20} className="text-[#10B981] hidden lg:block" />
                <h3 className="text-[15px] lg:text-[16px] font-medium leading-[23px] lg:leading-[24px] text-[#2D2555] dark:text-white">
                  For Government & Large Organization
                </h3>
              </div>
              <p className="text-[13px] lg:text-[14px] leading-[19px] lg:leading-[20px] text-[#4A5565] dark:text-[#94A3B8]">
                If you are submitting a formal Request for Proposal (RFP), Expression of Interest (EOI), or institutional documentation, please email directly:
              </p>
              <a href="mailto:proposals@hagionintl.com" className="text-[13px] lg:text-[14px] leading-[19px] lg:leading-[20px] text-[#10B981] hover:underline">
                proposals@hagionintl.com
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            className="flex-1 bg-[#2D2555]/5 dark:bg-[#1A2035] rounded-[14px] p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Section 1: Contact Information */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] lg:text-[18px] font-semibold leading-[28px] text-[#101828] dark:text-white pb-2">
                  Section 1: Contact Information
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <FormField label="Full Name *" name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleChange} />
                  <FormField label="Company Name" name="companyName" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
                  <FormField label="Email Address *" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                  <FormField label="Phone Number" name="phone" placeholder="+234 xxx xxxx xxx" value={formData.phone} onChange={handleChange} />
                </div>
                <FormField label="Location" name="location" placeholder="City, State, Country" value={formData.location} onChange={handleChange} />
              </div>

              {/* Section 2: Project Information */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] lg:text-[18px] font-semibold leading-[28px] text-[#101828] dark:text-white pb-2">
                  Section 2: Project Information
                </h3>
                <SelectField label="Type of Service Required *" name="service" placeholder="Select a service" options={serviceOptions} value={formData.service} onChange={handleChange} />
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] lg:text-[14px] font-medium lg:font-semibold leading-[14px] text-[#2D2555] dark:text-white">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    placeholder="Briefly describe your project goals, challenges, and expected outcome."
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-lg text-[10px] lg:text-[14px] text-gray-900 placeholder:text-[#717182] outline-none resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <SelectField label="Estimated Budget Range" name="budget" placeholder="Select budget range" options={budgetOptions} value={formData.budget} onChange={handleChange} />
                  <SelectField label="Expected Timeline" name="timeline" placeholder="Select timeline" options={timelineOptions} value={formData.timeline} onChange={handleChange} />
                </div>
                <SelectField label="Do You Require Ongoing Support?" name="ongoingSupport" placeholder="Select an option" options={yesNoOptions} value={formData.ongoingSupport} onChange={handleChange} />
              </div>

              {/* Section 3: Additional Details */}
              <div className="flex flex-col gap-5">
                <h3 className="text-[14px] lg:text-[18px] font-semibold leading-[28px] text-[#101828] dark:text-white pb-2">
                  Section 3: Additional Details
                </h3>
                <SelectField label="Do you have existing systems to integrate?" name="existingSystems" placeholder="Select an option" options={yesNoOptions} value={formData.existingSystems} onChange={handleChange} />
                <SelectField label="Do you require compliance support?" name="complianceSupport" placeholder="Select an option" options={yesNoOptions} value={formData.complianceSupport} onChange={handleChange} />

                {/* File Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] lg:text-[14px] font-medium lg:font-semibold leading-[14px] text-[#2D2555] dark:text-white">
                    File Upload (Optional – PRD, RFQ Document, Concept Notes)
                  </label>
                  <div className="flex flex-col items-center justify-center py-5 px-6 bg-[#F9FAFB] dark:bg-[#1A2035] border border-dashed border-[#D1D5DC] dark:border-white/20 rounded-[10px]">
                    <Upload size={20} className="text-[#4A5565] dark:text-[#94A3B8] mb-2" />
                    <p className="text-[12px] lg:text-[14px] leading-[20px] text-[#4A5565] dark:text-[#94A3B8] text-center">
                      Drag and drop files here, or <span className="text-[#10B981]">browse</span>
                    </p>
                    <p className="text-[12px] leading-[16px] text-[#99A1AF] text-center">
                      PDF, DOC, DOCX up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 h-[48px] bg-[#2D2555] dark:bg-[#068653] text-white text-[12px] lg:text-[14px] font-medium lg:font-semibold rounded-lg hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
                >
                  Submit Request
                  <Send size={16} />
                </button>
                <p className="text-[10px] lg:text-[12px] leading-[16px] text-[#2D2555] dark:text-[#94A3B8] text-center">
                  By submitting this form, you agree to our privacy and data protection policies.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, type = "text", placeholder, value, onChange }: {
  label: string; name: string; type?: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] lg:text-[14px] font-medium leading-[14px] text-[#2D2555] dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-[36px] px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-lg text-[12px] lg:text-[14px] text-gray-900 placeholder:text-[#717182] outline-none"
      />
    </div>
  );
}

function SelectField({ label, name, placeholder, options, value, onChange }: {
  label: string; name: string; placeholder: string; options: string[]; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] lg:text-[14px] font-medium lg:font-semibold leading-[14px] text-[#2D2555] dark:text-white">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[36px] px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-lg text-[12px] lg:text-[14px] text-gray-900 appearance-none outline-none"
      >
        <option value="" disabled className="text-[#717182]">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
