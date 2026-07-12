"use client";

import { Construction, Home } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface PageUnderDevelopmentProps {
  title?: string;
  titleKey?: string;
}

export default function PageUnderDevelopment({
  title = "Page",
  titleKey,
}: PageUnderDevelopmentProps) {
  const t = useTranslations("ComingSoon");
  const pageTitle = titleKey ? t(`pages.${titleKey}`) : title;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-infitech-surface px-6 text-infitech-ink">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,var(--infitech-cyan),var(--infitech-turquoise),var(--infitech-gold),var(--infitech-orange))]" />
      <div className="absolute h-80 w-80 rounded-full bg-infitech-cyan/20 blur-3xl" />
      <div className="absolute bottom-12 right-8 h-28 w-28 rounded-md bg-infitech-orange/75" />
      <div className="absolute left-8 top-24 h-24 w-24 rounded-md bg-infitech-olive/80" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 rounded-md border border-infitech-olive bg-infitech-cyan/15 p-4">
          <Construction
            className="h-12 w-12 text-infitech-orange"
            strokeWidth={1.5}
          />
        </div>
        <h1 className="mb-3 text-4xl font-bold text-infitech-ink">
          {t("title", { page: pageTitle })}
        </h1>
        <p className="mb-8 max-w-sm text-lg text-infitech-ink/70">
          {t("description")}
        </p>
        <div className="h-1 w-64 overflow-hidden rounded-full bg-infitech-olive/40">
          <div className="h-full w-1/2 rounded-full bg-[linear-gradient(90deg,var(--infitech-cyan),var(--infitech-gold),var(--infitech-orange))]" />
        </div>
      </div>

      <div className="relative flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-infitech-ink bg-infitech-ink px-4 py-2 font-semibold text-infitech-surface transition-all duration-200 hover:bg-infitech-orange hover:text-infitech-ink active:scale-95"
        >
          <Home className="h-5 w-5" strokeWidth={2} />
          {t("home")}
        </Link>
      </div>
    </div>
  );
}
