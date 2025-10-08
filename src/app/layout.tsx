import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoinX — Playful Memecoin Landing Page for Fun Today",
  description: "Join MemeCoinX, the playful memecoin built by the community. Clear buy steps, transparent tokenomics, and a vibe that keeps the laughs while you trade.",
  keywords: ["memecoin","memecoinx","community-token","buy-memecoin","tokenomics","degen-friendly","crypto-meme","wallet"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemeCoinX — The Meme Coin You Can Actually Hold Today",
    description: "A playful memecoin built for laughs and real on-chain momentum. Simple buy steps, transparent tokenomics, and vibes that never quit.",
    url: "/",
    siteName: "MemeCoinX",
    type: "website",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759919623094-051721c4.jpg",
      width: 1200,
      height: 630,
      alt: "MemeCoinX Hero Section",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeCoinX — Playful Memecoin Landing Page for Fun Today",
    description: "Join MemeCoinX, the playful memecoin built by the community. Clear buy steps, transparent tokenomics, and a vibe that keeps the laughs while you trade.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759919623094-051721c4.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}