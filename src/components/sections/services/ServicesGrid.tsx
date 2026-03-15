"use client";

import { motion } from "framer-motion";
import {
  Application,
  Cloud,
  Devices,
  MobileAdd,
  Bot,
  Security,
  ColorPalette,
  ShoppingCart,
  Api,
  Analytics,
  Education,
  Checkmark,
} from "@carbon/icons-react";

const services = [
  {
    icon: Application,
    title: "Enterprise Software Solutions",
    description:
      "We build custom enterprise software systems that streamline internal operations, automate workflows, and improve organizational efficiency, designed to integrate seamlessly with existing business processes.",
    leftDeliverables: [
      "CRM & ERP systems",
      "HR & payroll management systems",
      "Vendor management systems",
    ],
    rightDeliverables: [
      "Internal workflow automation systems",
      "Loan & financial management platforms",
      "Multi-branch operational systems",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Services",
    description:
      "We design and deploy secure cloud-based infrastructure optimized for performance, scalability, and reliability. Our cloud solutions ensure minimal downtime, data integrity, and operational resilience.",
    leftDeliverables: [
      "Cloud architecture design",
      "Hosting optimization",
      "Disaster recovery planning",
    ],
    rightDeliverables: [
      "Server deployment & configuration",
      "Infrastructure monitoring",
      "DevOps pipeline setup",
    ],
  },
  {
    icon: Devices,
    title: "Digital Platform Development",
    description:
      "We design and build scalable digital platforms that power businesses, ecosystems and enterprise operations. From concept validation to deployment, Hagion develops integrated digital environments.",
    leftDeliverables: [
      "End-to-end platform architecture",
      "Payment & wallet integrations",
      "Vendor & admin dashboards",
    ],
    rightDeliverables: [
      "Multi-user role management systems",
      "Secure API frameworks",
      "Marketplace & service-based platforms",
    ],
  },
  {
    icon: MobileAdd,
    title: "Web & Mobile App Development",
    description:
      "We create secure, high-performance web and mobile applications designed for usability, speed, and long-term scalability. Our approach combines intuitive UI/UX with enterprise-grade backend systems.",
    leftDeliverables: [
      "Responsive corporate websites",
      "Android & iOS applications",
      "Admin dashboard systems",
    ],
    rightDeliverables: [
      "Progressive Web Applications (PWAs)",
      "Cross-platform mobile development",
      "E-commerce & payment-enabled platforms",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation & Smart Workflow",
    description:
      "We integrate AI-driven automation systems that eliminate repetitive tasks and enhance decision-making through intelligent workflows, reducing operational cost and increasing productivity.",
    leftDeliverables: [
      "Chatbot & virtual assistant integration",
      "Automated document processing",
      "AI-powered analytics dashboards",
    ],
    rightDeliverables: [
      "Smart scheduling & task management",
      "Predictive business intelligence",
      "Process automation frameworks",
    ],
  },
  {
    icon: Security,
    title: "Cybersecurity & Data Protection",
    description:
      "We implement comprehensive security frameworks that protect digital assets, ensure compliance with regulatory requirements, and safeguard against evolving cyber threats.",
    leftDeliverables: [
      "Security audits & vulnerability assessment",
      "Data encryption & access control",
      "Compliance management systems",
    ],
    rightDeliverables: [
      "Threat detection & monitoring",
      "Incident response planning",
      "Security awareness training",
    ],
  },
  {
    icon: ColorPalette,
    title: "UI/UX Design & Digital Branding",
    description:
      "We craft intuitive, visually compelling user experiences and brand identities that connect with audiences and drive engagement across digital touchpoints.",
    leftDeliverables: [
      "User research & journey mapping",
      "Interface design & prototyping",
      "Design system creation",
    ],
    rightDeliverables: [
      "Brand identity development",
      "Interactive motion design",
      "Usability testing & optimization",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Digital Marketplace Solutions",
    description:
      "We build robust e-commerce platforms and digital marketplaces that enable seamless transactions, vendor management, and customer experiences at scale.",
    leftDeliverables: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory management systems",
    ],
    rightDeliverables: [
      "Multi-vendor marketplace platforms",
      "Order tracking & fulfillment",
      "Customer loyalty & rewards systems",
    ],
  },
  {
    icon: Api,
    title: "API Development & System Integration",
    description:
      "We design and build secure, scalable APIs and integration layers that connect disparate systems, enabling seamless data flow and operational efficiency.",
    leftDeliverables: [
      "RESTful & GraphQL API design",
      "Third-party service integrations",
      "Data migration & synchronization",
    ],
    rightDeliverables: [
      "Webhook & event-driven systems",
      "API gateway management",
      "Legacy system modernization",
    ],
  },
  {
    icon: Analytics,
    title: "IT Consulting & Digital Strategy",
    description:
      "We provide strategic technology consulting that helps organizations align their digital initiatives with business goals, ensuring sustainable growth and competitive advantage.",
    leftDeliverables: [
      "Technology roadmap development",
      "Digital maturity assessment",
      "Vendor & tool selection guidance",
    ],
    rightDeliverables: [
      "IT governance frameworks",
      "Change management support",
      "Innovation workshop facilitation",
    ],
  },
  {
    icon: Education,
    title: "Training, Support & Managed Services",
    description:
      "We offer ongoing technical support, training programs, and managed services that ensure your systems remain secure, up-to-date, and performing at peak efficiency.",
    leftDeliverables: [
      "Staff onboarding & technical training",
      "24/7 system monitoring & support",
      "Performance optimization",
    ],
    rightDeliverables: [
      "Software updates & patch management",
      "SLA-backed managed services",
      "Knowledge base & documentation",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex-1 h-full rounded-[14px] border border-black/10 hover:border-[#068653]/50 bg-transparent hover:bg-[#068653]/5 p-[32px_32px_24px] transition-colors duration-300 cursor-pointer"
    >
      {/* Top row: icon + number/title */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-[56px] h-[56px] flex items-center justify-center rounded-[14px] bg-[#2D2555]/5 group-hover:bg-white transition-colors duration-300">
          <Icon size={28} className="text-[#2D2555] group-hover:text-[#068653] transition-colors duration-300" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs leading-4 text-[#2D2555]">
            {number}
          </span>
          <h3 className="text-xl leading-7 font-normal group-hover:font-medium text-[#101828] group-hover:text-[#068653] transition-colors duration-300">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-5 text-[#4A5565]">
        {service.description}
      </p>

      {/* What We Deliver */}
      <div className="mt-4">
        <span className="text-xs uppercase font-normal group-hover:font-medium text-[#5A5A5A] transition-all duration-300" style={{ letterSpacing: "0.6px" }}>
          What We Deliver
        </span>

        <div className="mt-3 flex gap-0">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-1.5">
            {service.leftDeliverables.map((item, i) => (
              <div key={`l-${i}`} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full border border-[#2D2555] group-hover:border-[#068653] flex items-center justify-center transition-colors duration-300">
                  <Checkmark size={8} className="text-[#2D2555] group-hover:text-[#068653] transition-colors duration-300" />
                </div>
                <span className="text-[14px] leading-5 text-[#4A5565]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="flex-1 flex flex-col gap-1.5">
            {service.rightDeliverables.map((item, i) => (
              <div key={`r-${i}`} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-[14px] h-[14px] rounded-full border border-[#2D2555] group-hover:border-[#068653] flex items-center justify-center transition-colors duration-300">
                  <Checkmark size={8} className="text-[#2D2555] group-hover:text-[#068653] transition-colors duration-300" />
                </div>
                <span className="text-[14px] leading-5 text-[#4A5565]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  // Build rows of 2 cards each
  const rows: (typeof services)[] = [];
  for (let i = 0; i < services.length; i += 2) {
    rows.push(services.slice(i, i + 2));
  }

  return (
    <section className="py-20">
      <div className="max-w-[1231px] mx-auto px-6">
        <h2
          className="text-[38px] font-semibold uppercase mb-12"
          style={{ color: "#2D2555" }}
        >
          OUR SERVICES
        </h2>

        <div className="flex flex-col gap-[30px]">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-[30px] ${row.length === 1 ? "justify-center" : ""}`}
            >
              {row.map((service, colIndex) => (
                <div
                  key={rowIndex * 2 + colIndex}
                  className={`${row.length === 1 ? "w-[calc(50%-15px)]" : "flex-1"} flex`}
                >
                  <ServiceCard
                    service={service}
                    index={rowIndex * 2 + colIndex}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
