"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import { projects } from "@/lib/projects";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";

export default function PortfolioGridSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-20 md:py-24 lg:py-32">
      <Container>
        <h1 className="text-h2 mb-12 tracking-tight md:mb-16">Work</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {projects.map((item) => {
            const youtubePreview =
              item.mediaType === "video"
                ? buildYouTubeEmbedUrl(item.mediaSrc, {
                    autoplay: false,
                    mute: true,
                    loop: true,
                    controls: false,
                  })
                : null;

            return (
              <Link
                key={item.id}
                href={`/work/${item.slug}`}
                className="group block overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F7F7]">
                  {item.mediaType === "image" ? (
                    <Image
                      src={item.mediaSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : youtubePreview ? (
                    <iframe
                      src={youtubePreview}
                      title={item.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    >
                      <source src={item.mediaSrc} type="video/mp4" />
                    </video>
                  )}
                </div>
                <h2 className="mt-5 text-h4">{item.title}</h2>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
