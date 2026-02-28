import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutPillars from "@/components/sections/about/AboutPillars";
import AboutSplit from "@/components/sections/about/AboutSplit";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutQuote from "@/components/sections/about/AboutQuote";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutTrustedBy from "@/components/sections/about/AboutTrustedBy";
import AboutFinalCta from "@/components/sections/about/AboutFinalCta";

export default function About() {
  return (
    <>
      <PageTransition>
        <main>
          <AboutHero />
          <AboutPillars />
          <AboutSplit />
          <AboutServices />
          <AboutValues />
          <AboutQuote />
          <AboutTeam />
          <AboutTrustedBy />
          <AboutFinalCta />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
