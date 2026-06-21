import { Header, Footer } from "./components/layout";
import {
  HeroSection,
  CapabilitiesSection,
  TeamSection,
  DemoSection,
  ProcessSection,
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
      </main>
      <Footer />
    </>
  );
}

export default App;
