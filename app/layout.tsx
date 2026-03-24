import type { Metadata } from "next";
import { Inter, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import PillNav from "@/components/PillNav";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-display-alt",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio SDK",
  description: "Premium minimal portfolio",
  icons: {
    icon: "/light-logo.png",
    shortcut: "/light-logo.png",
    apple: "/light-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-frame.jpg" as="image" type="image/jpeg" />
        <link
          rel="preload"
          href="/client-logos/beauty-creations_BLACK.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/client-logos/beauty-creations.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/client-logos/Meta_lockup_positive%20primary_RGB.png"
          as="image"
          type="image/png"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfairDisplay.variable} ${bodoniModa.variable} antialiased`}
        style={{
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
        <PillNav />
      </body>
    </html>
  );
}
