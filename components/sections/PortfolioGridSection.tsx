"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import { projects } from "@/lib/projects";

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/").filter(Boolean)[1];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export default function PortfolioGridSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <h1 className="text-h2 mb-16 tracking-tight">Work</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((item) => (
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
                ) : getYouTubeEmbedUrl(item.mediaSrc) ? (
                  <iframe
                    src={getYouTubeEmbedUrl(item.mediaSrc) || undefined}
                    title={item.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.mediaSrc} type="video/mp4" />
                  </video>
                )}
              </div>
              <h2 className="mt-4 text-h4">{item.title}</h2>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
