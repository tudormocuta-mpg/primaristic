import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsCards } from "@/components/home/BenefitsCards";
import { AudienceGrid } from "@/components/home/AudienceGrid";
import { ContactCTA } from "@/components/shared/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsCards />
      <AudienceGrid />
      <ContactCTA />
    </>
  );
}
