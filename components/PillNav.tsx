"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function PillNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    if (path === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
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
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#2B2B2B]/80 px-3 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150 sm:gap-1.5 sm:px-5 sm:py-2.5">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          onKeyDown={(e) => handleKeyDown(e, "/")}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-200 sm:h-10 sm:w-10 ${
            isActive("/")
              ? "bg-white/15 ring-1 ring-white/20"
              : "hover:bg-white/10"
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
            className="h-[18px] w-[18px] sm:h-5 sm:w-5"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>

        <Link
          href="/work"
          onClick={(e) => handleNavClick(e, "/work")}
          onKeyDown={(e) => handleKeyDown(e, "/work")}
          className={`rounded-full px-3.5 py-2 text-sm font-medium text-white transition-all duration-200 sm:px-5 sm:text-base ${
            isActive("/work")
              ? "bg-white/15 ring-1 ring-white/20"
              : "hover:bg-white/10"
          }`}
        >
          Work
        </Link>

        <Link
          href="/about"
          onClick={(e) => handleNavClick(e, "/about")}
          onKeyDown={(e) => handleKeyDown(e, "/about")}
          className={`rounded-full px-3.5 py-2 text-sm font-medium text-white transition-all duration-200 sm:px-5 sm:text-base ${
            isActive("/about")
              ? "bg-white/15 ring-1 ring-white/20"
              : "hover:bg-white/10"
          }`}
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={(e) => handleNavClick(e, "/contact")}
          onKeyDown={(e) => handleKeyDown(e, "/contact")}
          className={`rounded-full px-3.5 py-2 text-sm font-medium text-white transition-all duration-200 sm:px-5 sm:text-base ${
            isActive("/contact")
              ? "bg-white/15 ring-1 ring-white/20"
              : "hover:bg-white/10"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
