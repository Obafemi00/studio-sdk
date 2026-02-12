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
