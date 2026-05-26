import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Cursor from "./components/Cursor";
import NavLinks from "./components/NavLinks";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "KENNETH NOT KENNY",
  description: "Portfolio of Kenneth Fojas, brand strategist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} font-mono`}
        style={{ backgroundColor: "var(--bg)", color: "var(--ink)" }}
      >
        <Cursor />

        {/* ── Top-left: Name ─────────────────────────────────────── */}
        <div className="fixed top-0 left-0 z-50 p-6">
          <span className="text-[11px] font-bold tracking-widest uppercase">
            Kenneth<span style={{ letterSpacing: "-0.12em", marginRight: "0.25em" }}>——</span>Not<span style={{ letterSpacing: "-0.12em", marginRight: "0.25em" }}>——</span>Kenny
          </span>
        </div>

        {/* ── Top-right: Nav ─────────────────────────────────────── */}
        <NavLinks />

        {/* ── Bottom-left: Year ──────────────────────────────────── */}
        <div className="fixed bottom-0 left-0 z-50 p-6">
          <span className="text-[11px] opacity-50">©2026</span>
        </div>

        {/* ── Bottom-right: Email ────────────────────────────────── */}
        <div className="fixed bottom-0 right-0 z-50 p-6">
          <a
            href="mailto:kenneth@kennethnotkenny.co"
            className="text-[11px] opacity-50 underline hover:opacity-100 transition-opacity duration-150"
          >
            kenneth@kennethnotkenny.co
          </a>
        </div>

        {children}
      </body>
    </html>
  );
}
