import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import ExecutionApproach from "@/components/sections/portfolio/ExecutionApproach";
import { CTA } from "@/components/sections";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <ExecutionApproach />
      <CTA />
    </>
  );
}
