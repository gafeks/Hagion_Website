import { Hero, WhatWeDo, Partners, Industries, HowWeWork, WhyHagion, CaseStudies } from "@/components/sections";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <Partners />
      <Industries />
      <HowWeWork />
      <WhyHagion />
      <CaseStudies />
    </div>
  );
}
