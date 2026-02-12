"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PillNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (path === "/portfolio") {
      return pathname === "/portfolio" || pathname.startsWith("/portfolio/");
    }
    return pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (pathname === path) {
      // Already on this page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(path);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, path: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      target.click();
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2 pb-safe pb-4 sm:pb-6"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-1 rounded-full bg-[#2B2B2B] px-4 py-2 shadow-lg sm:gap-2 sm:px-6">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          onKeyDown={(e) => handleKeyDown(e, "/")}
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors sm:px-4 sm:text-base ${
            isActive("/")
              ? "bg-[#4A4A4A]"
              : "hover:bg-[#4A4A4A]/50"
          }`}
          aria-label="Home"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </Link>

        <Link
          href="/portfolio"
          onClick={(e) => handleNavClick(e, "/portfolio")}
          onKeyDown={(e) => handleKeyDown(e, "/portfolio")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors sm:px-4 sm:text-base ${
            isActive("/portfolio")
              ? "bg-[#4A4A4A]"
              : "hover:bg-[#4A4A4A]/50"
          }`}
        >
          Portfolio
        </Link>

        <Link
          href="/about"
          onClick={(e) => handleNavClick(e, "/about")}
          onKeyDown={(e) => handleKeyDown(e, "/about")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors sm:px-4 sm:text-base ${
            isActive("/about")
              ? "bg-[#4A4A4A]"
              : "hover:bg-[#4A4A4A]/50"
          }`}
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={(e) => handleNavClick(e, "/contact")}
          onKeyDown={(e) => handleKeyDown(e, "/contact")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors sm:px-4 sm:text-base ${
            isActive("/contact")
              ? "bg-[#4A4A4A]"
              : "hover:bg-[#4A4A4A]/50"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
