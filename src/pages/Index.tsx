import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import JourneySection from "@/components/JourneySection";
import ToolsSection from "@/components/ToolsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BeyondSection from "@/components/BeyondSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <CompetenciesSection />
      <JourneySection />
      <ToolsSection />
      <CertificationsSection />
      <BeyondSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
