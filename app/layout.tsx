import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import QueryProvider from "@/lib/queryProvider";
import { Navbar } from "@/components/layout/navbar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: "Infitech Innovation",
    template: "%s | Infitech Innovation",
  },
  description:
    "Infitech Innovation builds modern digital systems, AI-powered workflows, ERP SaaS tools, and custom software for teams that need technology to move with clarity.",
  keywords: [
    "Infitech Innovation",
    "digital transformation",
    "ERP SaaS",
    "custom software development",
    "AI automation",
    "technology consulting",
  ],
  authors: [{ name: "Infitech Innovation" }],
  creator: "Infitech Innovation",
  publisher: "Infitech Innovation",
  icons: {
    icon: "/icon1.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Infitech Innovation",
    description:
      "Modern digital systems, AI-powered workflows, ERP SaaS tools, and custom software built for growing teams.",
    url: "/",
    siteName: "Infitech Innovation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infitech Innovation",
    description:
      "Modern digital systems, AI-powered workflows, ERP SaaS tools, and custom software built for growing teams.",
  },
  // robots: {
  //   index: true,
  //   nocache: false,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-snippet": -1,
  //     "max-image-preview": "large",
  //     "max-video-preview": -1
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider></body>
    </html>
  );
}
