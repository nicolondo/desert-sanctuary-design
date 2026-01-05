import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SyrasSection from "@/components/SyrasSection";
import SanctuarySection from "@/components/SanctuarySection";
import FragrancesSection from "@/components/FragrancesSection";
import RitualSection from "@/components/RitualSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <SyrasSection />
      <SanctuarySection />
      <FragrancesSection />
      <RitualSection />
      <Footer />
    </main>
  );
};

export default Index;
