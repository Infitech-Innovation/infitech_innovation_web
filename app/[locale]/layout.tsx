import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import QueryProvider from "@/lib/queryProvider";
import { Navbar } from "@/components/layout/navbar/NavBar";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://infitech-innovation-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infitech Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infitech Innovation",
    description:
      "Modern digital systems, AI-powered workflows, ERP SaaS tools, and custom software built for growing teams.",
    images: ["/opengraph-image.jpg"],
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return <LocaleLayout params={params}>{children}</LocaleLayout>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <NextIntlClientProvider>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </QueryProvider></body>
    </html>
  );
}
