"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import { useReducedMotion } from "@/lib/motion";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  // Defer video until after first paint; respect reduced motion via matchMedia (sync with OS)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;

    const sync = () => {
      if (mq.matches) {
        setShowVideo(false);
      } else {
        rafId = requestAnimationFrame(() => setShowVideo(true));
      }
    };

    sync();
    mq.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(rafId);
      mq.removeEventListener("change", sync);
    };
  }, []);

  // Ensure playback when the video mounts (autoplay + Safari quirks)
  useEffect(() => {
    if (!showVideo || prefersReducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      /* autoplay policy — muted + playsInline usually succeeds */
    });
  }, [showVideo, prefersReducedMotion]);

  const showPosterOnly = prefersReducedMotion || !showVideo;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#2B2B2B]">
      {/* Base + poster when video is off or reduced motion */}
      <div className="absolute inset-0 z-0 bg-neutral-950" aria-hidden />
      {showPosterOnly && (
        <>
          {!posterFailed ? (
            // eslint-disable-next-line @next/next/no-img-element -- hero poster fallback; no layout shift
            <img
              src="/images/reel-poster.jpg"
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover"
              onError={() => setPosterFailed(true)}
            />
          ) : (
            <div
              className="absolute inset-0 z-0 bg-neutral-950"
              aria-hidden
            />
          )}
        </>
      )}

      {/* Background video — not on first paint; never when reduced motion */}
      {showVideo && !prefersReducedMotion && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full scale-[1.05] object-cover will-change-transform"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/reel-poster.jpg"
          >
            <source src="/videos/reels.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Readability overlay — above video, below content (slight top tint for light logo contrast) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/40 to-black/15"
        aria-hidden
      />

      {/* Top-left logo (non-sticky; scrolls with page) */}
      <div className="absolute left-6 top-6 z-20 md:left-6 md:top-6">
        <Image
          src="/Studio SDK White Transparent BG.png"
          alt="Studio SDK Logo"
          width={180}
          height={60}
          className="h-32 w-auto md:h-48"
          priority
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="text-h1 mb-6 tracking-tight">
              Crafting Digital Excellence
            </h1>
            <p className="text-body mb-8 max-w-xl text-white/80">
              We create minimal, powerful experiences that resonate.
            </p>
            <Link href="/contact">
              <Button variant="primary">Start a Project</Button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
