import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <>
      <PageTransition>
        <main>
          <section className="bg-white py-20 text-left text-[#2B2B2B] md:py-28 lg:py-32">
            <Container>
              <div className="max-w-[720px]">
                <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                  Contact us
                </h1>

                <p className="mt-6 text-lg font-normal leading-relaxed text-[#2B2B2B]/78 md:text-xl md:leading-[1.6]">
                  We&apos;d love to hear from you, so here&apos;s how to get in touch.
                </p>

                <div className="mt-10 md:mt-12">
                  <h2 className="text-lg font-semibold tracking-tight text-[#2B2B2B] md:text-xl">
                    Studio SDK
                  </h2>
                  <p className="mt-4 text-base font-normal leading-relaxed text-[#2B2B2B]/85 md:text-lg">
                    United Kingdom.
                  </p>
                  <p className="mt-4 text-base font-normal leading-relaxed text-[#2B2B2B]/85 md:text-lg">
                    Availability: Worldwide, remote-first
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=United%20Kingdom"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-base font-medium text-[#2B2B2B] underline decoration-[#2B2B2B]/35 underline-offset-[5px] transition-opacity hover:opacity-70 md:text-lg"
                  >
                    View map
                  </a>
                </div>

                <div className="mt-10 md:mt-12">
                  <h2 className="text-lg font-semibold tracking-tight text-[#2B2B2B] md:text-xl">
                    Talk to us
                  </h2>
                  <p className="mt-4 text-base leading-relaxed md:text-lg">
                    <a
                      href="mailto:sav@studiosdk.art"
                      className="font-medium text-[#2B2B2B] underline decoration-[#2B2B2B]/35 underline-offset-[5px] transition-opacity hover:opacity-70"
                    >
                      sav@studiosdk.art
                    </a>
                  </p>
                  <p className="mt-4 text-base font-normal leading-relaxed text-[#2B2B2B]/85 md:text-lg">
                    <a
                      href="https://www.instagram.com/studiosdk.art"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#2B2B2B]/25 underline-offset-[5px] transition-opacity hover:text-[#2B2B2B] hover:opacity-80"
                    >
                      Instagram — @studiosdk.art
                    </a>
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <a
                    href="mailto:sav@studiosdk.art?subject=Project%20inquiry"
                    className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] bg-[#2B2B2B] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#2B2B2B]"
                  >
                    Start a project
                  </a>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
