"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  LogoFacebook,
  LogoTwitter,
  LogoGithub,
  LogoLinkedin,
} from "@carbon/icons-react";

const team = [
  {
    name: "Afekemor Gift",
    role: "Founder & MD/CEO",
    bio: "Afekemor Gift is a technology entrepreneur, software developer, and digital transformation strategist with over a decade of experience in building scalable digital platforms and enterprise systems. ",
    image: "/images/team-gift.jpeg",
  },
  {
    name: "Edum Kiikpoye",
    role: "Technical Lead",
    bio: "Edum Kiikpoye serves as the Technical Lead at Hagion International Ltd, overseeing system architecture, software engineering standards, and product scalability frameworks.",
    image: "/images/team-kikpoye.jpeg",
  },
  {
    name: "Prosper Ikiriko",
    role: "Head of Operations",
    bio: "Prosper Ikiriko leads operational strategy, internal workflow optimization, and project coordination at Hagion International Ltd.",
    image: "/images/team-prosper.jpeg",
  },
  {
    name: "Nwaerema Jacob",
    role: "Back End Developer",
    bio: "Nwaerema Cyprian Jacob serves as a Back End Developer at Hagion International Ltd, responsible for building and maintaining server-side applications, APIs, and database systems.",
    image: "/images/team-jacob.jpeg",
  },
  {
    name: "Oshor Blessing",
    role: "Human Resource Manager (HRM)",
    bio: "Oshor Blessing serves as the Human Resource Manager at Hagion International Ltd, overseeing talent acquisition, staff development, performance management, and workplace culture.",
    image: "/images/team-blessing.jpeg",
  },
];

const socialIcons = [LogoFacebook, LogoTwitter, LogoLinkedin, LogoGithub];

export default function Team() {
  return (
    <section className="w-full bg-[#F9FAFB] dark:bg-[#0F1629] pt-10 lg:pt-16 pb-12 lg:pb-24">
      <div className="max-w-[1231px] mx-auto px-5 lg:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[24px] lg:text-[46px] font-bold leading-[48px] tracking-[-1.2px] text-[#050752] dark:text-white text-center capitalize">
            Leadership & Management Team
          </h2>
          <p className="text-[10px] lg:text-[24px] font-normal leading-[150%] text-[#6B7280] dark:text-[#94A3B8] text-center">
            At Hagion International Ltd, our leadership team combines technical
            expertise, strategic vision, and operational excellence to deliver
            enterprise-grade digital solutions across Africa.
          </p>
          <p className="text-[10px] lg:text-[24px] font-normal leading-[150%] text-[#6B7280] dark:text-[#94A3B8] text-center">
            Our management structure ensures strong governance, technical depth,
            and sustainable growth.
          </p>
        </motion.div>
      </div>

      {/* Team Cards — horizontal scroll on mobile, wrapped grid on desktop */}
      <div className="max-w-[1231px] mx-auto px-0 lg:px-6 mt-5 lg:mt-16">
        {/* Desktop grid */}
        <div className="hidden lg:flex flex-wrap gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="w-[calc(25%-24px)] flex flex-col bg-white dark:bg-[#1A2035] rounded-lg shadow-[0px_10px_10px_rgba(0,0,0,0.04)] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -6, boxShadow: "0px 16px 24px rgba(0,0,0,0.08)" }}
            >
              <div className="p-4 pb-0">
                <div className="w-full h-[192px] bg-[#E1EFFE] rounded-lg overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex flex-col p-6 pt-6 gap-4 flex-1">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold leading-[150%] text-[#233876] dark:text-[#699EF4]">
                      {member.name}
                    </span>
                    <span className="text-[14px] font-medium leading-[150%] text-[#262626] dark:text-white">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-[14px] font-normal leading-[150%] text-[#6B7280] dark:text-[#94A3B8]">
                    {member.bio}
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  {socialIcons.map((Icon, i) => (
                    <Icon
                      key={i}
                      size={22}
                      className="text-[#6B7280] dark:text-[#94A3B8] hover:text-[#233876] dark:hover:text-[#699EF4] transition-colors cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-5 w-max">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="w-[304px] shrink-0 flex flex-col bg-white dark:bg-[#1A2035] rounded-lg shadow-[0px_10px_10px_rgba(0,0,0,0.04)] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="p-4 pb-0">
                  <div className="w-full h-[192px] bg-[#E1EFFE] rounded-lg overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-4 pt-6 gap-4 flex-1">
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold leading-[150%] text-[#233876] dark:text-[#699EF4]">
                        {member.name}
                      </span>
                      <span className="text-[14px] font-medium leading-[150%] text-[#262626] dark:text-white">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-[14px] font-normal leading-[150%] text-[#6B7280] dark:text-[#94A3B8]">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {socialIcons.map((Icon, i) => (
                      <Icon
                        key={i}
                        size={22}
                        className="text-[#6B7280] dark:text-[#94A3B8] hover:text-[#233876] dark:hover:text-[#699EF4] transition-colors cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
