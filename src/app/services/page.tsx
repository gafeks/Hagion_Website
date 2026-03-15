import { ServicesHero, ServicesGrid } from "@/components/sections/services";
import { Industries, CTA } from "@/components/sections";

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <ServicesHero />
      <Industries />
      <ServicesGrid />
      <CTA />
    </div>
  );
}
