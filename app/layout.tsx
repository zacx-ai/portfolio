import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Osama Alshammari | AI Engineer",
  description:
    "AI Engineer at SDAIA. Building Arabic AI systems, real-time AI companions, and production-grade LLM applications.",
  keywords: [
    "AI Engineer",
    "SDAIA",
    "Arabic AI",
    "LLM",
    "Machine Learning",
    "Osama Alshammari",
  ],
  authors: [{ name: "Osama Alshammari" }],
  openGraph: {
    title: "Osama Alshammari | AI Engineer",
    description:
      "AI Engineer at SDAIA. Building Arabic AI systems, real-time AI companions, and production-grade LLM applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
