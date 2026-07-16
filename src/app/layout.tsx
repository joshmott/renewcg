import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { services, site } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Remedial Builders Sydney | Renew Construction Group",
    template: "%s — Renew Construction Group",
  },
  description: site.description,
  keywords: [
    "remedial builder Sydney",
    "remedial building Sydney",
    "concrete cancer repair Sydney",
    "waterproofing Sydney",
    "facade upgrades Sydney",
    "combustible cladding replacement Sydney",
    "heritage restoration Sydney",
    "strata building repairs",
    "building maintenance Sydney",
    "NSW licensed builder",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
      "@id": `${site.url}/#business`,
      name: site.name,
      description: site.description,
      url: site.url,
      telephone: site.contact.phoneE164,
      email: site.contact.email,
      image: `${site.url}/opengraph-image`,
      logo: `${site.url}/icon.png`,
      slogan: "Renewing Australia's History",
      foundingDate: site.foundingYear,
      founder: { "@type": "Person", name: site.founder },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      areaServed: site.areasServed.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
      knowsAbout: [
        ...services.map((s) => s.title),
        "Concrete cancer repair",
        "Waterproofing",
        "Combustible cladding rectification",
        "Remedial building",
        "Strata building repairs",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      identifier: [
        { "@type": "PropertyValue", name: "ABN", value: site.credentials.abnNumber },
        {
          "@type": "PropertyValue",
          name: "NSW Builders Licence",
          value: site.credentials.licenceNumber,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Building Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            url: `${site.url}/services/${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#business` },
      inLanguage: "en-AU",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={instrument.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-[10px] focus:bg-blue focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
