import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutSplit from "@/components/sections/about/AboutSplit";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutTrustedBy from "@/components/sections/about/AboutTrustedBy";
import AboutFinalCta from "@/components/sections/about/AboutFinalCta";

export default function About() {
  return (
    <>
      <PageTransition>
        <main>
          <AboutHero />
          <AboutSplit />
          <AboutServices />
          <AboutTrustedBy />
          <AboutFinalCta />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
