import { Hero, WhatWeDo, Partners, Industries, HowWeWork, WhyHagion, CaseStudies, BlogInsights, ClientStories, CTA } from "@/components/sections";

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
      <BlogInsights />
      <ClientStories />
      <CTA />
    </div>
  );
}
