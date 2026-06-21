import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  CapabilitiesSection,
  TeamSection,
  DemoSection,
  ProcessSection,
  ContactSection,
} from "./components/sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <TeamSection />
        <DemoSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
