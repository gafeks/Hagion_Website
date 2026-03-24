"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search, Close } from "@carbon/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="w-full sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F1A]/90 backdrop-blur-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-[1231px] mx-auto flex items-center justify-between h-16 lg:h-16 px-5 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[2.6px]">
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/images/hagion-logo.png"
                alt="Hagion"
                width={60}
                height={60}
                className="w-[39px] h-[39px] lg:w-[60px] lg:h-[60px]"
              />
            </motion.div>
            <span className="text-[15.5px] lg:text-[24px] font-semibold leading-[21px] lg:leading-[32px] text-[#2D2555] dark:text-white">
              Hagion
            </span>
          </Link>

          {/* Desktop Nav Links */}
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
                      ? "text-[#2D2555] dark:text-white"
                      : "text-[#4A5565] hover:text-[#2D2555] dark:text-[#94A3B8] dark:hover:text-white"
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
                      className="absolute bottom-0 left-3 right-3 h-[0.8px] bg-[#2D2555] dark:bg-white"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center w-[167px] h-[37px]">
            <motion.button
              onClick={toggleTheme}
              className="flex items-start pt-2 pb-2 pl-2 pr-6 h-[36px]"
              whileHover={{ rotate: -20 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-[#4A5565]" />
              )}
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/get-started"
                className="flex items-center justify-center w-[115px] h-[37px] px-3 bg-[#2D2555] dark:bg-[#068653] text-white text-[13.3px] font-medium leading-[20px] rounded-lg hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-[#4A5565]" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1"
            >
              {mobileMenuOpen ? (
                <Close size={20} className="text-[#4A5565] dark:text-white" />
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.33 5H16.67" stroke="#4A5565" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M3.33 10H16.67" stroke="#4A5565" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M3.33 15H16.67" stroke="#4A5565" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-white dark:bg-[#0B0F1A] lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-3 text-[16px] font-medium rounded-lg transition-colors ${
                        isActive
                          ? "text-[#2D2555] dark:text-white bg-[#2D2555]/5 dark:bg-white/5"
                          : "text-[#4A5565] dark:text-[#94A3B8]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full h-[48px] bg-[#2D2555] dark:bg-[#068653] text-white text-[15px] font-medium rounded-lg hover:bg-[#231d45] dark:hover:bg-[#057a4a] transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
