import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PortfolioGridSection from "@/components/sections/PortfolioGridSection";

export default function Portfolio() {
  return (
    <>
      <PageTransition>
      <main>
        <PortfolioGridSection />
      </main>
      </PageTransition>
      <Footer />
    </>
  );
}
