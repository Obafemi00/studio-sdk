import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import ThreeWordsSection from "@/components/sections/ThreeWordsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import MillionUsersCtaSection from "@/components/sections/MillionUsersCtaSection";
import GiantWordmarkSection from "@/components/sections/GiantWordmarkSection";

export default function Home() {
  return (
    <>
      <PageTransition>
        <main>
          <HeroSection />
          <FeaturedWorkSection />
          <ThreeWordsSection />
          <ClientsSection />
          <MillionUsersCtaSection />
          <GiantWordmarkSection/>
        </main> 
      </PageTransition>
      <Footer />
    </>
  );
}
