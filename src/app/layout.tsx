import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/raw-form/Navbar";
import { Footer } from "@/components/raw-form/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://marshicollection.com"),
  title: {
    default: "Marshi Collection | Premium Fashion, Abayas & Custom Apparel Pakistan",
    template: "%s | Marshi Collection",
  },
  description: "Your complete fashion destination in Pakistan. Shop premium Ladies Dresses, Abayas, Kids Wear, and Custom Apparel online. Quality materials with nationwide delivery.",
  keywords: ["Pakistani dresses online", "buy abaya online Pakistan", "custom t-shirts Pakistan", "kids clothing brand Pakistan", "ladies suits online shopping", "Marshi Collection"],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://marshicollection.com",
    title: "Marshi Collection | Premium Fashion & Custom Apparel",
    description: "Shop premium Ladies Dresses, Abayas, Kids Wear, and Custom Apparel online in Pakistan.",
    siteName: "Marshi Collection",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marshi Collection | Premium Fashion Pakistan",
    description: "Shop premium Ladies Dresses, Abayas, Kids Wear, and Custom Apparel online in Pakistan.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700,400&f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] selection:bg-[var(--accent-red)] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FashionStore",
              "name": "Marshi Collection",
              "image": "https://marshicollection.com/logo.png",
              "telephone": "+923108736356",
              "url": "https://marshicollection.com",
              "owner": {
                "@type": "Person",
                "name": "Areesha Waheed"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
