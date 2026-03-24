import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <>
      <PageTransition>
        <main>
          <section className="bg-white px-6 py-16 md:py-24 lg:py-[96px] xl:py-[140px] text-[#2B2B2B]">
            <Container>
              <div className="mx-auto max-w-5xl">
                {/* Header / top-left brand */}
                <div
                  className="mb-10 whitespace-nowrap font-display text-xl tracking-[0.22em] md:text-2xl"
                >
                  STUDIO SDK
                </div>

                {/* Main hero */}
                <div className="max-w-3xl">
                  <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl">
                    Contact us
                  </h1>
                  <p className="mt-6 text-3xl font-light leading-[1.2] md:text-4xl">
                    We&apos;d love to hear from you, so here&apos;s how to get in
                    touch.
                  </p>
                </div>

                {/* Information grid */}
                <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
                  {/* Left: Location */}
                  <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">
                      Studio SDK
                    </h2>
                    <p className="mt-4 text-lg text-[#2B2B2B]/90">
                      United Kingdom.
                    </p>
                    <p className="mt-3 text-lg text-[#2B2B2B]/90">
                      Availability: Worldwide, remote-first
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=United%20Kingdom"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block text-lg font-medium underline underline-offset-4"
                    >
                      View map
                    </a>
                  </div>

                  {/* Right: Talk to us */}
                  <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">
                      Talk to us
                    </h2>
                    <p className="mt-4 text-lg text-[#2B2B2B]/90">
                      <a
                        href="mailto:sav@studiosdk.art"
                        className="underline underline-offset-4"
                      >
                        sav@studiosdk.art
                      </a>
                    </p>
                    <p className="mt-4 text-lg text-[#2B2B2B]/90">
                      <a
                        href="https://www.instagram.com/studiosdk.art"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4"
                      >
                        https://www.instagram.com/studiosdk.art
                      </a>
                    </p>
                  </div>
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
