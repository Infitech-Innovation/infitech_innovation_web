import type { Metadata } from "next";
import HomePage from "@/features/home/HomePage";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isLocale, locales } from "@/i18n/routing";
import { notFound } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://infitech-innovation-web.vercel.app";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage.metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/opengraph-image.jpg"],
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      images: ["/opengraph-image.jpg"],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePage />
}
