import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "../components/layout";
import {
  HeroSection,
  CapabilitiesSection,
  TeamSection,
  DemoSection,
  WorkSection,
  ProcessSection,
  ContactSection,
} from "../components/sections";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <TeamSection />
        <DemoSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
