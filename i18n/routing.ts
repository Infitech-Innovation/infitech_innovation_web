import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "sw", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const pathnames = {
  "/": "/",
  "/we-do": "/we-do",
  "/we-do/capability": "/we-do/capability",
  "/we-do/capability/digital-transform": "/we-do/capability/digital-transform",
  "/we-do/capability/ai-intelligent-automation": "/we-do/capability/ai-intelligent-automation",
  "/we-do/capability/business-systems": "/we-do/capability/business-systems",
  "/we-do/capability/digital-experiences": "/we-do/capability/digital-experiences",
  "/we-do/capability/technology-consulting": "/we-do/capability/technology-consulting",
  "/we-do/industry": "/we-do/industry",
  "/we-do/industry/manufacturing": "/we-do/industry/manufacturing",
  "/we-do/industry/financial-services": "/we-do/industry/financial-services",
  "/we-do/industry/logistics-supply-chain": "/we-do/industry/logistics-supply-chain",
  "/we-do/industry/hospitality-tourism": "/we-do/industry/hospitality-tourism",
  "/we-do/industry/healthcare": "/we-do/industry/healthcare",
  "/we-do/industry/real-estate-construction": "/we-do/industry/real-estate-construction",
  "/we-do/industry/ngos-development-organizations": "/we-do/industry/ngos-development-organizations",
  "/we-do/industry/legal-professional-services": "/we-do/industry/legal-professional-services",
  "/we-do/industry/government-public-sector": "/we-do/industry/government-public-sector",
  "/we-do/innovation": "/we-do/innovation",
  "/we-do/innovation/innovation-lab": "/we-do/innovation/innovation-lab",
  "/we-do/innovation/research-development": "/we-do/innovation/research-development",
  "/we-are": "/we-are",
  "/we-are/about-infitech": "/we-are/about-infitech",
  "/we-are/our-story": "/we-are/our-story",
  "/we-are/purpose-vision-mission": "/we-are/purpose-vision-mission",
  "/we-are/leadership": "/we-are/leadership",
  "/we-are/insights": "/we-are/insights",
  "/we-are/careers": "/we-are/careers",
  "/products": "/products",
  "/community": "/community",
  "/contact": "/contact",
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
