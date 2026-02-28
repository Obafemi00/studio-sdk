"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Silently handle autoplay restrictions
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#2B2B2B]">
      {/* Top-left logo */}
      <div className="fixed top-6 left-6 z-50 md:top-6 md:left-6">
        <Image
          src="/logo-dark.png"
          alt="Studio SDK"
          width={720}
          height={240}
          className="h-32 w-auto md:h-48"
          priority
        />
      </div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-[#2B2B2B]/40" />
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div className="max-w-3xl text-white">
            <h1 className="text-h1 mb-6 tracking-tight">
              Crafting Digital Excellence
          </h1>
            <p className="text-body mb-8 text-white/80 max-w-xl">
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
