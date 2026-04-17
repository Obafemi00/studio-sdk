import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ClientsSection from "@/components/sections/ClientsSection";
import GiantWordmarkSection from "@/components/sections/GiantWordmarkSection";

export default function Home() {
  return (
    <>
      <PageTransition>
        <main>
          <HeroSection />
          <FeaturedWorkSection />
          <ClientsSection />
          <GiantWordmarkSection/>
        </main> 
      </PageTransition>
      <Footer />
    </>
  );
}
