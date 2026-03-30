"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";

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
  const prefersReducedMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const galleryItems = useMemo(() => items, [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || galleryItems.length === 0) return;

    let rafId = 0;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const computeActiveIndex = () => {
      const scrollerRect = scroller.getBoundingClientRect();
      const centerX = scrollerRect.left + scrollerRect.width / 2;
      const children = Array.from(scroller.querySelectorAll<HTMLElement>("[data-gallery-index]"));

      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - centerX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(computeActiveIndex);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      isDragging = true;
      startX = event.clientX;
      startScrollLeft = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
      scroller.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = event.clientX - startX;
      scroller.scrollLeft = startScrollLeft - deltaX;
    };

    const onPointerUp = () => {
      isDragging = false;
      scroller.style.cursor = "grab";
    };

    computeActiveIndex();
    scroller.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointerleave", onPointerUp);

    return () => {
      cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointerleave", onPointerUp);
    };
  }, [galleryItems]);

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current;
    const target = scroller?.querySelector<HTMLElement>(`[data-gallery-index="${index}"]`);
    if (!scroller || !target) return;
    scroller.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  if (galleryItems.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-white">
      <Container>
        <div className="relative overflow-hidden group">
          <div
            ref={scrollerRef}
            className="flex h-[90vh] overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ touchAction: "pan-x" }}
          >
            {galleryItems.map((item, index) => {
              const youtubeEmbed =
                item.mediaType === "video"
                  ? buildYouTubeEmbedUrl(item.mediaSrc, {
                      autoplay: true,
                      mute: true,
                      loop: true,
                      controls: false,
                    })
                  : null;

              return (
                <div
                  key={item.id}
                  data-gallery-index={index}
                  className="relative snap-start h-full min-w-[90vw] shrink-0 overflow-hidden"
                >
                  {item.mediaType === "image" ? (
                    <Image
                      src={item.mediaSrc}
                      alt={item.alt || "Gallery image"}
                      fill
                      className="object-cover"
                    />
                  ) : youtubeEmbed ? (
                    <iframe
                      src={youtubeEmbed}
                      title={item.alt || `Gallery video ${index + 1}`}
                      className="absolute inset-0 h-full w-full"
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
                      className="absolute inset-0 h-full w-full object-cover"
                    >
                      <source src={item.mediaSrc} type="video/mp4" />
                    </video>
                  )}
                </div>
              );
            })}
          </div>

          {activeIndex > 0 && (
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-none border border-[#E6E6E6] bg-white/80 text-[#2B2B2B] md:opacity-0 md:group-hover:opacity-100"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {activeIndex < galleryItems.length - 1 && (
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-none border border-[#E6E6E6] bg-white/80 text-[#2B2B2B] md:opacity-0 md:group-hover:opacity-100"
              aria-label="Next image"
            >
              →
            </button>
          )}

          <div className="pointer-events-none absolute bottom-4 right-4 text-[12px] uppercase tracking-[0.32em] font-sans text-[#4A4A4A]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
          </div>
        </div>
      </Container>
    </section>
  );
}
