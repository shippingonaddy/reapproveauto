import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* ─── FONT (next/font eliminates render-blocking @import) ─── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/* ─── VIEWPORT ─── */
export const viewport: Viewport = {
  themeColor: "#00C896",
  width: "device-width",
  initialScale: 1,
};

/* ─── GLOBAL METADATA ─── */
export const metadata: Metadata = {
  metadataBase: new URL("https://reapproveauto.com"),
  title: {
    default:
      "Buy Here Pay Here DFW | $999 Down Bad Credit Cars | ReApprove Auto",
    template: "%s | ReApprove Auto",
  },
  description:
    "Pre-qualify in 60 seconds for buy here pay here cars in DFW. Bad credit, no credit, repo OK. In-house financing from $999 down. Dallas · Fort Worth · Arlington.",
  keywords: [
    "buy here pay here DFW",
    "bad credit car loans Dallas",
    "BHPH dealers Fort Worth Texas",
    "in-house financing cars Texas",
    "$999 down cars bad credit",
    "no credit check cars DFW",
    "second chance car financing Texas",
    "car lots that work with bad credit near me",
    "subprime auto loans Dallas TX",
  ],
  authors: [{ name: "ReApprove Auto", url: "https://reapproveauto.com" }],
  creator: "ReApprove Auto",
  openGraph: {
    title: "Buy Here Pay Here DFW | $999 Down | ReApprove Auto",
    description:
      "Pre-qualify in 60 seconds. No bank. No BS. Bad credit, repo, first-time buyer — all welcome. DFW's fintech-powered in-house auto financing.",
    url: "https://reapproveauto.com",
    siteName: "ReApprove Auto",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReApprove Auto — Buy Here Pay Here DFW · $999 Down",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Here Pay Here DFW | $999 Down | ReApprove Auto",
    description:
      "Pre-qualify in 60 seconds. No bank. Bad credit, repo, first-time buyer welcome.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://reapproveauto.com" },
};

/* ─── JSON-LD SCHEMAS ─── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoDealer", "FinancialService", "Organization"],
      "@id": "https://reapproveauto.com/#organization",
      name: "ReApprove Auto",
      url: "https://reapproveauto.com",
      logo: {
        "@type": "ImageObject",
        url: "https://reapproveauto.com/logo.png",
        width: 400,
        height: 120,
      },
      description:
        "ReApprove Auto is DFW's fintech-powered buy here pay here platform. We connect subprime buyers with in-house financing, $999 down options, and fast approvals for bad credit, no credit, and repo situations.",
      telephone: "+14694350306", // TODO: replace with your real number
      email: "YOUR_EMAIL@reapproveauto.com", // TODO: replace with your real email
      areaServed: [
        { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Arlington", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Garland", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Irving", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Grand Prairie", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Mesquite", containedInPlace: { "@type": "State", name: "Texas" } },
      ],
      sameAs: [
        "YOUR_FACEBOOK_URL",   // TODO: replace with ReApprove Auto Facebook page
        "YOUR_INSTAGRAM_URL",  // TODO: replace with ReApprove Auto Instagram
        "YOUR_TIKTOK_URL",     // TODO: replace with ReApprove Auto TikTok
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "In-House Auto Financing Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "FinancialProduct",
              name: "Buy Here Pay Here Financing (BHPH)",
              description:
                "In-house auto financing for DFW buyers with bad credit, no credit, or past repossessions. Down payments starting at $999.",
              feesAndCommissionsSpecification: "Down payments starting at $999",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "500",
                description: "Minimum down payment",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "FinancialProduct",
              name: "Subprime Auto Loan",
              description:
                "Subprime auto financing connecting DFW buyers with lenders who specialize in bad credit car loans and second-chance financing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "FinancialProduct",
              name: "No Credit Check Auto Financing",
              description:
                "Auto financing options that do not require a hard credit pull. Income-based approval for DFW buyers.",
            },
          },
        ],
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://reapproveauto.com/#website",
      name: "ReApprove Auto",
      url: "https://reapproveauto.com",
      publisher: { "@id": "https://reapproveauto.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://reapproveauto.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
