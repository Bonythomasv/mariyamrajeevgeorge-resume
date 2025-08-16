import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariyamrajeevgeorge-resume.vercel.app"),
  title: {
    default: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: `Professional resume of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "data engineer",
    "big data",
    "databricks",
    "apache spark",
    "python",
    "azure",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
    url: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mariyamrajeevgeorge-resume.vercel.app",
    siteName: `${RESUME_DATA.name}'s Resume`,
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: `Professional resume of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
    // No image specified to prevent social platforms from using a preview image
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
  twitter: {
    card: "summary",
    site: "@mariyamrajeevg",
    creator: "@mariyamrajeevg",
    title: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
    description: `Professional resume of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
    // No image specified to prevent social platforms from using a preview image
  },
  alternates: {
    canonical: "https://mariyamrajeevgeorge-resume.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
