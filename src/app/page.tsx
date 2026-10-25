import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PrizesSection from "@/components/home/PrizesSection";
import ThemeSection from "@/components/home/ThemeSection";
import ArtMediaSection from "@/components/home/ArtMediaSection";
import AIPolicySection from "@/components/home/AIPolicySection";
import HowToParticipateSection from "@/components/home/HowToParticipateSection";
import DeadlineSection from "@/components/home/DeadlineSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <PrizesSection />
        <ThemeSection />
        <ArtMediaSection />
        <AIPolicySection />
        <HowToParticipateSection />
        <DeadlineSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
