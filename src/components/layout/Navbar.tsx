"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon } from "@carbon/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Request Quote", href: "/request-quote" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-[1231px] mx-auto flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center gap-1">
          <motion.div
            whileHover={{ rotate: 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image
              src="/images/hagion-logo.png"
              alt="Hagion"
              width={60}
              height={60}
            />
          </motion.div>
          <span className="text-[24px] font-semibold leading-[32px] text-[#2D2555]">
            Hagion
          </span>
        </Link>

        <div className="hidden lg:flex items-center justify-center w-[700px] h-16 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isContact = link.href === "/contact";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center justify-center h-[36px] py-2 px-3 text-[13px] font-normal leading-[20px] whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-[#2D2555]"
                    : "text-[#4A5565] hover:text-[#2D2555]"
                } ${isContact ? "rounded-lg" : ""}`}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {link.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-[0.8px] bg-[#2D2555]"
                    layoutId="activeNavLink"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center w-[167px] h-[37px]">
          <motion.button
            className="flex items-start pt-2 pb-2 pl-2 pr-6 h-[36px]"
            whileHover={{ rotate: -20 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Moon size={20} className="text-[#4A5565]" />
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              href="/get-started"
              className="flex items-center justify-center w-[115px] h-[37px] px-3 bg-[#2D2555] text-white text-[13.3px] font-medium leading-[20px] rounded-lg hover:bg-[#231d45] transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
