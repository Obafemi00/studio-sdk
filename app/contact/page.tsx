import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <>
      <PageTransition>
        <main>
          <section className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center px-6 py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-h1 mb-10 md:mb-12 tracking-tight text-[#2B2B2B]">
                  Let&apos;s make your project a reality. We&apos;d love to hear
                  from you.
                </p>
                <p className="text-body text-lg md:text-xl text-[#2B2B2B]/90">
                  Talk to us{" "}
                  <a
                    href="mailto:sav@studiosdk.art"
                    className="font-medium text-[#2B2B2B] underline decoration-[#2B2B2B]/30 underline-offset-4 transition-colors hover:decoration-[#2B2B2B]"
                  >
                    sav@studiosdk.art
                  </a>
                </p>
              </div>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
