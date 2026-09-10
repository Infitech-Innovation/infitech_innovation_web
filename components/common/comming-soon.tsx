"use client";

import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
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
    <main className="flex min-h-screen items-center justify-center bg-[#f4f5f1] px-5 py-12 text-infitech-ink">
      <section className="w-full max-w-2xl rounded-3xl bg-infitech-surface px-6 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-10">
        <Image
          src="/icon0.svg"
          alt="Infitech Innovation logo"
          width={100}
          height={100}
          className="mx-auto h-16 w-16 object-contain"
        />

        <p className="pt-8 uppercase text-infitech-orange">
          Coming soon
        </p>
        <h3 className="pt-3 font-black leading-tight">
          {t("title", { page: pageTitle })}
        </h3>
        <p className="mx-auto pt-4 max-w-lg leading-7 text-black/60 sm:text-lg">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-infitech-ink px-6 sm-text text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
          >
            <Home className="h-5 w-5" strokeWidth={2} />
            {t("home")}
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white sm-text px-6  text-infitech-ink transition hover:border-infitech-orange hover:text-infitech-orange"
          >
            <ArrowLeft className="h-5 w-5" />
            {t("back")}
          </button>
        </div>
      </section>
    </main>
  );
}
