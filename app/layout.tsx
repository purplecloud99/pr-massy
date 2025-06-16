import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/style.css";
import "./styles/custom.css";
import RouteChangeLoader from "./components/RouterChangeLoader";
import BackTop from "./components/BackTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anjoma Zone Party Rentals | Bounce Houses & Water Slides in Orange County",
  description: "Premier inflatable rentals—bounce houses, water slides, and obstacle courses in Orange County & beyond. Same-day delivery & top-rated service.",
  keywords: [
    "inflatable rentals",
    "bounce house rental",
    "water slide rental",
    "party equipment delivery",
    "tents & canopies rental",
    "event rentals Orange County"
  ].join(","),
  metadataBase: new URL("https://anjomazone.com"),
  openGraph: {
    title: "Anjoma Zone Party Rentals",
    description: "Premier inflatable & bounce house rentals across Orange County & surrounding areas.",
    url: "https://anjomazone.com",
    siteName: "Anjoma Zone Party Rentals",
    images: [
      {
        url: "https://anjomazone.com/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Bounce into fun with Anjoma Zone Party Rentals"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouteChangeLoader />
        {children}
        <BackTop />
      </body>
    </html>
  );
}
