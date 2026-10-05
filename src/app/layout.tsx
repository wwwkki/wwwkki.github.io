import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wwwkki.vercel.app"),
  title: {
    default: "wwwkki — Full-Stack Developer & Researcher",
    template: "%s | wwwkki",
  },
  description:
    "wwwkki's personal portfolio showcasing technical expertise, learning milestones, articles, and academic research. Passionate about Web development and artificial intelligence.",
  keywords: [
    "wwwkki",
    "Full-Stack Development",
    "Frontend Development",
    "React",
    "Next.js",
    "AI",
    "NLP",
    "Personal Portfolio",
    "Blog",
    "Technical Blog",
  ],
  authors: [{ name: "wwwkki", url: "https://github.com/wwwkki" }],
  creator: "wwwkki",
  publisher: "wwwkki",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wwwkki.vercel.app",
    siteName: "wwwkki Portfolio",
    title: "wwwkki — Full-Stack Developer & Researcher",
    description: "Full-Stack Developer & AI Researcher | Personal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "wwwkki Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wwwkki — Full-Stack Developer & Researcher",
    description: "Full-Stack Developer & AI Researcher | Personal Portfolio",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ZRI2rHXbt55jTljEAx5eVIOjVgFBsbIBn4XhynoI3ws",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
