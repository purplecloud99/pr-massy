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
  },    title: "Anjoma Zone Party Rentals",
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
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "PartyEquipmentRental",
  "name": "Anjoma Zone Party Rental",
  "image": "https://www.anjomazone.com/images/anjoma-cover.webp",
  "logo": "https://www.anjomazone.com/images/logo.png",
  "description": "Anjoma Zone Party Rental delivers inflatable bounce houses, water slides, and party equipment rentals across Orange County and nearby cities. Known for fun, clean setups and friendly service, we bring the party to you.",
  "url": "https://www.anjomazone.com",
  "telephone": "+1-951-498-0377",
  "email": "contact@anjomazone.com",
  "priceRange": "$99 - $499",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "23412 Moulton Pkwy Suite 140",
    "addressLocality": "Laguna Hills",
    "addressRegion": "CA",
    "postalCode": "92653",
    "addressCountry": "US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@anjomazone",
    creator: "@anjomazone",
    images: ["https://anjomazone.com/images/hero-bg.png"]
  },
  "areaServed": {
    "@type": "Place",
    "name": ["Orange County","Los Angeles County","Riverside County","San Bernardino County","South Bay"]
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.6125,
    "longitude": -117.7144
  },
  "sameAs": [
    "https://youtube.com/@anjomazone?si=Cp-ceTTsbtc-DNe-",
    "https://www.instagram.com/anjomazone/",
    "https://x.com/anjomazone/",
    "https://www.facebook.com/anjomazone/",
    "https://www.tiktok.com/@anjomazone",
    "https://g.co/kgs/gfmyNGU"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "06:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "05:00",
      "closes": "22:00"
    }
  ]
}
</script>      </body>
    </html>
  );
}
