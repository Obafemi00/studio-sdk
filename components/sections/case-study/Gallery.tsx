"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

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
  const imageItems = useMemo(() => items.filter((i) => i.mediaType === "image"), [items]);

  const [activeId, setActiveId] = useState<string | null>(imageItems[0]?.id ?? null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (imageItems.length === 0) return;

    let rafId = 0;

    const computeClosestToCenter = () => {
      const scrollerRect = scroller.getBoundingClientRect();
      const scrollerCenterX = scrollerRect.left + scrollerRect.width / 2;

      let closestId: string | null = activeId;
      let closestDistance = Number.POSITIVE_INFINITY;

      scroller.querySelectorAll<HTMLElement>("[data-gallery-item-id]").forEach((el) => {
        const id = el.dataset.galleryItemId ?? null;
        if (!id) return;

        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(elCenterX - scrollerCenterX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveId((prev) => (prev === closestId ? prev : closestId));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(computeClosestToCenter);
    };

    computeClosestToCenter();
    scroller.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageItems, prefersReducedMotion]);

  return (
    <section className="bg-[#FAFAFA]">
      <Container>
        <div ref={scrollerRef} className="horizontal-gallery">
          {imageItems.map((item) => {
            const isActive = activeId === item.id || (prefersReducedMotion && imageItems[0]?.id === item.id);

            return (
              <div
                key={item.id}
                data-gallery-item-id={item.id}
                className={`gallery-item transition-transform duration-500 ease-out will-change-transform ${
                  prefersReducedMotion ? "scale-100" : isActive ? "scale-100" : "scale-[0.95]"
                }`}
              >
                <Image
                  src={item.mediaSrc}
                  alt={item.alt || "Gallery image"}
                  width={832}
                  height={468}
                  className="mx-auto h-auto w-full max-w-full object-contain"
                  priority={item.id === imageItems[0]?.id}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
