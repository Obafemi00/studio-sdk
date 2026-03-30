"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/lib/motion";

export default function AboutHero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const videoOneRef = useRef<HTMLVideoElement>(null);
  const videoTwoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const videoOne = videoOneRef.current;
    const videoTwo = videoTwoRef.current;
    let timeoutId: number | undefined;

    const handleMetadata = () => {
      if (videoOne?.duration && videoTwo) {
        const delayMs = (videoOne.duration / 2) * 1000;
        timeoutId = window.setTimeout(() => {
          if (videoTwo) {
            videoTwo.currentTime = 0;
            videoTwo.play().catch(() => {});
          }
        }, delayMs);
      }
    };

    videoOne?.addEventListener("loadedmetadata", handleMetadata);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      videoOne?.removeEventListener("loadedmetadata", handleMetadata);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (headlineRef.current) {
        headlineRef.current.style.opacity = "1";
        headlineRef.current.style.transform = "translateY(0)";
      }
      if (sublineRef.current) {
        sublineRef.current.style.opacity = "1";
        sublineRef.current.style.transform = "translateY(0)";
      }
      return;
    }

    const tl = gsap.timeline();

    if (headlineRef.current) {
      gsap.set(headlineRef.current, { opacity: 0, y: 24 });
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      );
    }

    if (sublineRef.current) {
      gsap.set(sublineRef.current, { opacity: 0, y: 24 });
      tl.fromTo(
        sublineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "+=0.2",
      );
    }

    return () => {
      tl.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative h-screen w-screen min-h-screen overflow-hidden text-center"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <video
        ref={videoOneRef}
        src="/Studio SDK Website Reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={videoTwoRef}
        src="/Studio SDK Website Reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute left-6 top-4 z-10 text-left">
        <span
          className="text-sm uppercase tracking-[0.3em] text-white"
          style={{ fontFamily: "var(--sdk-font-display)" }}
        >
          STUDIO SDK
        </span>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-start px-6 pt-[40vh]">
        <div
          ref={headlineRef}
          style={{
            fontFamily: "var(--sdk-font-display)",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            fontWeight: 400,
            color: "#FFFFFF",
            maxWidth: "900px",
            margin: "0 auto",
            opacity: 0,
            transform: "translateY(24px)",
          }}
        >
          We make products
          <br />
          impossible to ignore.
        </div>

        <p
          ref={sublineRef}
          style={{
            fontFamily: "var(--sdk-font-body)",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            marginTop: "32px",
            opacity: 0,
            transform: "translateY(24px)",
          }}
        >
          CGI · PRODUCT FILM · VISUAL IDENTITY
        </p>
      </div>

      <div
        className="pointer-events-none absolute bottom-[40px] left-1/2 z-10 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)", opacity: scrolled ? 0 : 1, transition: "opacity 0.6s ease" }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.2em] text-white"
          style={{ fontFamily: "var(--sdk-font-body)", opacity: 0.7 }}
        >
          scroll
        </span>
        <div
          className="animate-scrollPulse"
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))",
          }}
        />
      </div>

      <style jsx>{`
        .animate-scrollPulse {
          animation: scrollPulse 1.5s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 1;
          }

          100% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
