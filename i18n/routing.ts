import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "sw", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const pathnames = {
  "/": "/",
  "/ai-automation-booking": {
    en: "/ai-automation-booking",
    fr: "/reservation-automatisation-ia",
    sw: "/miadi-otomatiki-ai",
    de: "/ki-automatisierung-buchen",
  },
  "/chatbot": {
    en: "/chatbot",
    fr: "/chatbot-ia",
    sw: "/chatbot-ai",
    de: "/ki-chatbot",
  },
  "/custom-develop": {
    en: "/custom-develop",
    fr: "/developpement-sur-mesure",
    sw: "/utengenezaji-maalum",
    de: "/individuelle-entwicklung",
  },
  "/digital-transform": {
    en: "/digital-transform",
    fr: "/transformation-numerique",
    sw: "/mageuzi-ya-kidijitali",
    de: "/digitale-transformation",
  },
  "/erp-saas": "/erp-saas",
  "/innovation": {
    en: "/innovation",
    fr: "/innovation",
    sw: "/ubunifu",
    de: "/innovation",
  },
  "/marketing": {
    en: "/marketing",
    fr: "/marketing",
    sw: "/masoko",
    de: "/marketing",
  },
} as const;

export type AppPathname = keyof typeof pathnames;

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
