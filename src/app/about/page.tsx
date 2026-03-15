import { AboutHero, StatsBar, CoreValues, OurHistory, MissionVision, Team } from "@/components/sections/about";
import { CTA } from "@/components/sections";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <StatsBar />
      <CoreValues />
      <OurHistory />
      <MissionVision />
      <Team />
      <CTA />
    </div>
  );
}
