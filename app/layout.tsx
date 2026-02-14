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
