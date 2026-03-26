"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import { useReducedMotion } from "@/lib/motion";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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

  useEffect(() => {
    if (!showVideo || prefersReducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [showVideo, prefersReducedMotion]);

  useEffect(() => {
    const heading = headingRef.current;
    const subtext = subtextRef.current;
    const cta = ctaRef.current;
    if (!heading || !subtext || !cta) return;

    if (prefersReducedMotion) {
      [heading, subtext, cta].forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      return;
    }

    [heading, subtext, cta].forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition =
        "opacity var(--duration-slow, 1s) var(--ease-premium, cubic-bezier(0.22, 1, 0.36, 1)), transform var(--duration-slow, 1s) var(--ease-premium, cubic-bezier(0.22, 1, 0.36, 1))";
    });

    const headingId = window.setTimeout(() => {
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, 80);
    const subtextId = window.setTimeout(() => {
      subtext.style.opacity = "1";
      subtext.style.transform = "translateY(0)";
    }, 180);
    const ctaId = window.setTimeout(() => {
      cta.style.opacity = "1";
      cta.style.transform = "translateY(0)";
    }, 300);

    return () => {
      window.clearTimeout(headingId);
      window.clearTimeout(subtextId);
      window.clearTimeout(ctaId);
    };
  }, [prefersReducedMotion]);

  // Failsafe if native loop does not fire or stalls
  useEffect(() => {
    if (!showVideo || prefersReducedMotion) return;
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      v.currentTime = 0;
      v.play().catch(() => {});
    };

    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [showVideo, prefersReducedMotion]);

  const showPosterOnly = prefersReducedMotion || !showVideo;

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-x-clip overflow-y-visible bg-[#141414]">
      <div className="absolute inset-0 z-0 bg-[#141414]" aria-hidden />
      {showPosterOnly && (
        <>
          {!posterFailed ? (
            // eslint-disable-next-line @next/next/no-img-element -- full-bleed poster; path is static
            <img
              src="/hero-frame.jpg"
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover"
              onError={() => setPosterFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 z-0 bg-[#141414]" aria-hidden />
          )}
        </>
      )}

      {showVideo && !prefersReducedMotion && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full scale-[1.05] object-cover will-change-transform transition-opacity duration-1000 ease-out ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-frame.jpg"
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
          >
            <source src="/videos/reels.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/40 to-black/15"
        aria-hidden
      />

      <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8">
        <Image
          src="/Studio SDK White Transparent BG.png"
          alt="Studio SDK Logo"
          width={180}
          height={60}
          className="h-32 w-auto md:h-48"
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center justify-center text-center">
        <Container className="w-full">
          <div className="mx-auto max-w-3xl text-white">
            <h1 ref={headingRef} className="text-h1 mb-6 tracking-tight">
              Crafting Digital Excellence
            </h1>
            <p ref={subtextRef} className="text-body mx-auto mb-8 max-w-xl text-white/80">
              We create minimal, powerful experiences that resonate.
            </p>
            <div ref={ctaRef} className="flex justify-center">
              <Link href="/contact">
                <Button variant="primary">Start a Project</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
