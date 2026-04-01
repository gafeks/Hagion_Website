"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Location, Phone, Email, Time, LogoFacebook, LogoLinkedin, LogoInstagram, LogoX } from "@carbon/icons-react";

const contactCards = [
  {
    Icon: Location,
    title: "Office Address",
    lines: ["19B Ada George Road, Opposite Father's House, Adjacent to 4GeeS Port Harcourt, Rivers State, Nigeria"],
  },
  {
    Icon: Phone,
    title: "Phone Numbers",
    lines: ["+234 902 501 3289"],
  },
  {
    Icon: Email,
    title: "Email Address",
    lines: ["info@hagionintl.com", "proposals@hagionintl.com"],
  },
  {
    Icon: Time,
    title: "Business Hours",
    lines: ["Monday - Friday: 8:00 AM – 6:00 PM WAT", "Saturday: 9:00 AM – 2:00 PM WAT", "Sunday: Closed"],
  },
];

const socials = [
  { Icon: LogoFacebook, href: "#", label: "Facebook" },
  { Icon: LogoLinkedin, href: "#", label: "LinkedIn" },
  { Icon: LogoInstagram, href: "https://www.instagram.com/hagioninternationalltd/", label: "Instagram" },
  { Icon: LogoX, href: "https://x.com/HagionL62712", label: "X" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-white dark:bg-[#0B0F1A] py-12 lg:py-20">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left — Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#2D2555]/5 dark:bg-[#1A2035] rounded-xl p-6 lg:p-8">
              <h2 className="text-[20px] lg:text-[24px] font-semibold leading-[32px] tracking-[-0.6px] text-[#2D2555] dark:text-white">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Full Name *</label>
                    <input name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleChange}
                      className="h-10 px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Email Address *</label>
                    <input name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange}
                      className="h-10 px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Phone Number</label>
                    <input name="phone" placeholder="+234 123 456 7890" value={formData.phone} onChange={handleChange}
                      className="h-10 px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Company Name</label>
                    <input name="companyName" placeholder="Your Company Ltd" value={formData.companyName} onChange={handleChange}
                      className="h-10 px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Subject *</label>
                  <input name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange}
                    className="h-10 px-3 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold leading-[20px] text-[#0F1729] dark:text-white">Message *</label>
                  <textarea name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange} rows={5}
                    className="px-3 py-2 bg-white border border-[#E1E7EF] dark:border-white/20 rounded-md text-[14px] text-gray-900 placeholder:text-[#717182] outline-none resize-none min-h-[80px]" />
                </div>

                <button type="submit"
                  className="w-[217px] lg:w-[192px] mx-auto lg:mx-0 flex items-center justify-center gap-2 h-12 bg-[#2D2555] dark:bg-[#068653] text-white text-[14px] font-medium tracking-[0.4px] capitalize rounded-md hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — Contact Info Cards */}
          <motion.div
            className="w-full lg:w-[424px] shrink-0 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactCards.map((card) => (
              <div key={card.title} className="flex items-start gap-4 p-6 bg-[#2D2555]/5 dark:bg-[#1A2035] rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg shrink-0">
                  <card.Icon size={24} className="text-[#10B981]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold leading-[24px] tracking-[-0.4px] text-[#0F1729] dark:text-white">
                    {card.title}
                  </h3>
                  <div className="flex flex-col">
                    {card.lines.map((line) => (
                      <span key={line} className="text-[12px] lg:text-[14px] leading-[20px] text-[#65758B] dark:text-[#94A3B8]">
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Follow Us */}
            <div className="flex flex-col gap-4 p-6 bg-[#2D2555] rounded-xl">
              <h3 className="text-[16px] font-bold leading-[24px] tracking-[-0.4px] text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <Link key={social.label} href={social.href}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <social.Icon size={20} className="text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
