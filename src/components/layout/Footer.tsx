import Link from "next/link";
import Image from "next/image";
import {
  Email,
  Phone,
  Location,
  LogoFacebook,
  LogoLinkedin,
  LogoInstagram,
  LogoX,
  ArrowUpRight,
} from "@carbon/icons-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "Cloud Solutions", href: "/services" },
  { label: "Cybersecurity", href: "/services" },
  { label: "AI Solutions", href: "/services" },
];

const contactInfo = [
  { Icon: Email, text: "info@hagionintltd.com", href: "mailto:info@hagionintltd.com" },
  { Icon: Phone, text: "+234 9025013289", href: "tel:+2349025013289" },
  {
    Icon: Location,
    text: "19b Ada George Road Opp Father's House, adjacent to 4Gees, Port Harcourt, Rivers State. Nigeria",
    href: "#",
  },
];

const socials = [
  { Icon: LogoFacebook, href: "#", label: "Facebook" },
  { Icon: LogoLinkedin, href: "#", label: "LinkedIn" },
  { Icon: LogoInstagram, href: "#", label: "Instagram" },
  { Icon: LogoX, href: "#", label: "X" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F0B23] dark:bg-[#060912]">
      <div className="max-w-[1055px] mx-auto px-5 py-16">
        <div className="flex flex-col gap-[53px]">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-3 w-[300px] shrink-0">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/hagion-logo.png"
                  alt="Hagion"
                  width={60}
                  height={58}
                />
                <span
                  className="text-[32px] leading-[23px] tracking-[-0.41px] text-white"
                  style={{ fontFamily: "var(--font-russo)" }}
                >
                  Hagion
                </span>
              </div>
              <p className="text-[10.88px] leading-[16px] text-[#94A3B8]">
                Hagion International Ltd is a technology and digital transformation
                company specializing in enterprise software development, AI
                automation, and secure digital infrastructure solutions.
              </p>

              <div className="flex gap-[13.7px] mt-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-[34px] h-[34px] bg-white/10 rounded-[7px] hover:bg-white/20 transition-colors"
                  >
                    <social.Icon size={17} className="text-white" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 w-[207px]">
              <h4 className="text-[10.88px] font-semibold leading-[16px] tracking-[0.58px] uppercase text-[#CBD5E1]">
                Company
              </h4>
              <div className="flex flex-col gap-[9.32px]">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="text-[10.88px] leading-[16px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 w-[218px]">
              <h4 className="text-[10.88px] font-semibold leading-[16px] tracking-[0.58px] uppercase text-[#CBD5E1]">
                Services
              </h4>
              <div className="flex flex-col gap-[9.32px]">
                {serviceLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-[10.88px] leading-[16px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1">
              <h4 className="text-[10.88px] font-semibold leading-[16px] tracking-[0.58px] uppercase text-[#CBD5E1]">
                Contact
              </h4>
              <div className="flex flex-col gap-[13.19px]">
                {contactInfo.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-start gap-2.5 text-[10.64px] leading-[16px] text-[#94A3B8] hover:text-white transition-colors"
                  >
                    <item.Icon size={13} className="text-[#068653] shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-[12px] leading-[16px] text-[#64748B]">
              &copy; 2026 Hagion International Ltd. All rights reserved.
            </p>
            <Link
              href="/request-quote"
              className="flex items-center gap-1 text-[12px] font-semibold leading-[16px] text-[#068653] hover:text-[#0a9e63] transition-colors"
            >
              Start a project
              <ArrowUpRight size={13} className="text-[#068653]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
