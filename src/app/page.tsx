import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { TeaCeremonyExperience } from "@/components/home/TeaCeremonyExperience";
import { FeaturedTeas } from "@/components/home/FeaturedTeas";
import { WagashiPairing } from "@/components/home/WagashiPairing";
import { SeasonalGarden } from "@/components/home/SeasonalGarden";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <TeaCeremonyExperience />
      <FeaturedTeas />
      <WagashiPairing />
      <SeasonalGarden />
      <FAQ />
      <CTA />
    </>
  );
}
