import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ShadowSection } from "@/components/shadow-section";
import { AbuMtrSection } from "@/components/abu-mtr-section";
import { EspcnSection } from "@/components/espcn-section";
import { SkillsSection } from "@/components/skills-section";
import { WorkSection } from "@/components/work-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseOverlay } from "@/components/noise-overlay";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NoiseOverlay />
      <SmoothScroll />

      <main className="relative">
        <Navbar />
        <HeroSection />
        <ShadowSection />
        <AbuMtrSection />
        <EspcnSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
