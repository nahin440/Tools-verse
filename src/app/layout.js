import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://filefusion.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FileFusion — Free Online File Converter & PDF Tools",
    template: "%s | FileFusion",
  },
  description:
    "Merge, split, compress, and convert PDFs, images, documents, audio, and video — free, private, and no install required. Every file is processed in your browser.",
  keywords: [
    "pdf converter",
    "merge pdf",
    "compress pdf",
    "pdf to word",
    "image converter",
    "file converter online",
  ],
  openGraph: {
    type: "website",
    siteName: "FileFusion",
    title: "FileFusion — Free Online File Converter & PDF Tools",
    description:
      "Merge, split, compress, and convert PDFs, images, documents, audio, and video — free, private, and no install required.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "FileFusion — Free Online File Converter & PDF Tools",
    description: "Free, private file conversion that runs entirely in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
