"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
    Link,
    locales,
    type AppPathname,
    type Locale,
    usePathname,
    useRouter,
} from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const navLinks = [
    { labelKey: "home", href: "/" },
    { labelKey: "digitalTransformation", href: "/digital-transform" },
    { labelKey: "erpSaas", href: "/erp-saas" },
    { labelKey: "customDevelopment", href: "/custom-develop" },
    { labelKey: "aiConsultation", href: "/ai-automation-booking" },
    { labelKey: "marketing", href: "/marketing" },
    { labelKey: "innovation", href: "/innovation" },
] satisfies Array<{ labelKey: string; href: AppPathname }>;

const languageLabels: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    sw: "Swahili",
    de: "Deutsch",
};

export function Navbar() {
    const [open, setOpen] = useState(false);
    const locale = useLocale();
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (href: string) => {
        return (
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`))
        );
    };

    const handleLocaleChange = (nextLocale: Locale) => {
        setOpen(false);
        router.replace(pathname, { locale: nextLocale });
    };

    const renderLanguageSelect = () => (
        <label className="inline-flex items-center gap-2 text-sm font-semibold text-infitech-ink">
            <span className="sr-only">{t("language")}</span>
            <select
                aria-label={t("language")}
                value={locale}
                onChange={(event) => handleLocaleChange(event.target.value as Locale)}
                className="h-10 rounded-md border border-infitech-olive bg-infitech-surface px-3 text-sm font-semibold text-infitech-ink outline-none transition hover:border-infitech-turquoise focus:border-infitech-orange focus:ring-2 focus:ring-infitech-orange/20"
            >
                {locales.map((item) => (
                    <option key={item} value={item}>
                        {languageLabels[item]}
                    </option>
                ))}
            </select>
        </label>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-infitech-olive bg-infitech-surface/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:px-8">

                {/* Logo Section - Flex Shrink 0 protects text from squeezing */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5 text-lg font-bold text-infitech-ink transition hover:text-infitech-turquoise sm:text-xl"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/icon0.svg"
                        alt={t("logoAlt")}
                        width={48}
                        height={48}
                        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                    />
                    <span className="hidden sm:inline-block truncate max-w-[180px] md:max-w-none leading-tight">
                        Infitech Innovation
                    </span>
                </Link>

                {/* Desktop Navigation Links - Dynamic gaps to protect 7 items on smaller monitors */}
                <div className="hidden items-center justify-center gap-x-4 text-sm font-medium text-infitech-ink/75 lg:flex xl:gap-x-6 xl:text-base">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`whitespace-nowrap transition hover:text-infitech-gold ${active ? "text-infitech-orange font-semibold" : ""
                                    }`}
                            >
                                {t(link.labelKey)}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden lg:block">{renderLanguageSelect()}</div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-infitech-olive text-infitech-ink transition hover:bg-infitech-olive/20 lg:hidden"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={t("toggleMenu")}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Dropdown */}
            {open && (
                <div className="border-t border-infitech-olive bg-infitech-surface px-4 py-3 shadow-md shadow-infitech-ink/5 lg:hidden">
                    <div className="mx-auto flex flex-col gap-y-1.5 text-sm font-medium text-infitech-ink/75">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    onClick={() => setOpen(false)}
                                    className={`rounded-md px-3 py-2 transition hover:bg-infitech-olive/20 hover:text-infitech-orange ${active ? "bg-infitech-cyan/15 text-infitech-ink font-semibold" : ""
                                        }`}
                                >
                                    {t(link.labelKey)}
                                </Link>
                            );
                        })}
                        <div className="mt-2 border-t border-infitech-olive/70 pt-3">
                            {renderLanguageSelect()}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
