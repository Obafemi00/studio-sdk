"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface GalleryItem {
  id: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

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

export default function Gallery({ items }: GalleryProps) {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-[#F7F7F7]">
      <Container>
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.id} className="relative w-full overflow-hidden bg-[#E6E6E6]">
              {item.mediaType === "image" ? (
                <Image
                  src={item.mediaSrc}
                  alt={item.alt || "Gallery image"}
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              ) : getYouTubeEmbedUrl(item.mediaSrc) ? (
                <iframe
                  src={getYouTubeEmbedUrl(item.mediaSrc) || undefined}
                  title={item.alt || "Gallery video"}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-auto w-full"
                >
                  <source src={item.mediaSrc} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
