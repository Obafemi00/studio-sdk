import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ThreeWordsSection from "@/components/sections/ThreeWordsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <HeroSection />
          <FeaturedWorkSection />
          <ThreeWordsSection />
          <ServicesSection />
          <ProcessSection />
          <ClientsSection />
          <CTABand />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
