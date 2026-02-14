import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ThreeWordsSection from "@/components/sections/ThreeWordsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import BigCtaSection from "@/components/sections/BigCtaSection";
import GiantWordmarkSection from "@/components/sections/GiantWordmarkSection";

export default function Home() {
  return (
    <>
      <PageTransition>
        <main>
          <HeroSection />
          <FeaturedWorkSection />
          <ThreeWordsSection />
          <ServicesSection />
          <ClientsSection />
          <BigCtaSection />
          <GiantWordmarkSection/>
        </main> 
      </PageTransition>
      <Footer />
    </>
  );
}
