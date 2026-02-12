import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import IntroStatement from "@/components/sections/about/IntroStatement";
import StudioPhilosophy from "@/components/sections/about/StudioPhilosophy";
import TeamGrid from "@/components/sections/about/TeamGrid";
import ServicesList from "@/components/sections/about/ServicesList";

export default function About() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <IntroStatement />
          <StudioPhilosophy />
          <TeamGrid />
          <ServicesList />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
