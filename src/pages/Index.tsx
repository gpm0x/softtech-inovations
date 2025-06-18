
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import StatsSection from "@/components/StatsSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioHighlights from "@/components/sections/PortfolioHighlights";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <TechCarousel />
      <ProcessSection />
      <StatsSection />
      <PortfolioHighlights />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
