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
    v.play().catch(() => {});
  }, [showVideo, prefersReducedMotion]);

  useEffect(() => {
    if (!showVideo || prefersReducedMotion) return;
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      if (!v.duration || !Number.isFinite(v.duration)) return;
      if (v.currentTime > v.duration - 0.28) {
        v.currentTime = 0.08;
      }
    };

    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, [showVideo, prefersReducedMotion]);

  const showPosterOnly = prefersReducedMotion || !showVideo;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#141414]">
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
