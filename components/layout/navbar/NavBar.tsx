"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
    Link,
    type AppPathname,
    usePathname,
} from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "Digital Transformation", href: "/digital-transform" },
    { label: "Erp Saas", href: "/erp-saas" },
    { label: "Custom Development", href: "/custom-develop" },
    { label: "AI Consultation", href: "/ai-automation-booking" },
    { label: "Marketing", href: "/marketing" },
    { label: "Innovation", href: "/innovation" },
] satisfies Array<{ label: string; href: AppPathname }>;

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [pastHero, setPastHero] = useState(false);
    const t = useTranslations("Navbar");
    const pathname = usePathname();

    const isActive = (href: string) => {
        return (
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`))
        );
    };

    // Locale switching is paused for now; English is the default display language.
    // const renderLanguageSelect = () => null;

    useEffect(() => {
        const hero = document.querySelector<HTMLElement>("[data-infitech-hero]");
        let animationFrame = 0;

        const setPastHeroOnFrame = (value: boolean) => {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = window.requestAnimationFrame(() => {
                setPastHero(value);
            });
        };

        if (!hero) {
            setPastHeroOnFrame(true);
            return () => window.cancelAnimationFrame(animationFrame);
        }

        const updateNavbarPosition = () => {
            setPastHeroOnFrame(hero.getBoundingClientRect().bottom <= 0);
        };

        updateNavbarPosition();
        window.addEventListener("scroll", updateNavbarPosition, { passive: true });
        window.addEventListener("resize", updateNavbarPosition);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", updateNavbarPosition);
            window.removeEventListener("resize", updateNavbarPosition);
        };
    }, [pathname]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300 ease-out ${
                pastHero
                    ? "px-0 py-0"
                    : "px-4 py-4 sm:px-6 lg:px-8 lg:py-10"
            }`}
        >
            <nav
                className={`mx-auto flex items-center justify-between bg-infitech-surface px-5 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 sm:px-7 ${
                    pastHero
                        ? "w-full max-w-none rounded-none"
                        : "max-w-7xl rounded-full"
                }`}
            >
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5 text-lg font-black text-infitech-ink transition hover:text-infitech-orange sm:text-xl"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/icon0.svg"
                        alt={t("logoAlt")}
                        width={72}
                        height={72}
                        className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                    />
                    {/* <span className="hidden max-w-[180px] truncate leading-tight sm:inline-block md:max-w-none">
                        Infitech Innovation
                    </span> */}
                </Link>

                <div className="hidden items-center justify-center gap-x-2 text-sm font-bold text-infitech-ink lg:flex xl:text-base">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`whitespace-nowrap rounded-xl px-6 py-3 transition hover:bg-infitech-olive/25 ${link.label === "Templates" ? "bg-infitech-olive/25" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    {/* <div className="hidden h-14 items-center rounded-full bg-infitech-cyan px-6 text-base font-black text-infitech-ink lg:flex">
                        English
                    </div> */}

                    <button
                        type="button"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-infitech-ink text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink lg:hidden"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={t("toggleMenu")}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="fixed inset-0 z-50 bg-infitech-ink/45 backdrop-blur-sm lg:hidden">
                    <div className="infitech-mobile-drawer ml-auto flex h-full w-full flex-col bg-infitech-surface px-6 py-5 text-infitech-ink">
                        <div className="mb-8 flex items-center justify-between">
                            <Image
                                src="/icon0.svg"
                                alt={t("logoAlt")}
                                width={72}
                                height={72}
                                className="h-14 w-14 shrink-0 object-contain"
                            />
                            <button
                                type="button"
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-infitech-ink text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
                                onClick={() => setOpen(false)}
                                aria-label={t("toggleMenu")}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex flex-1 flex-col gap-y-2 text-2xl font-black">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        aria-current={active ? "page" : undefined}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-3xl px-5 py-4 transition hover:bg-infitech-olive/20 ${active ? "bg-infitech-olive/25 text-infitech-ink" : ""
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="border-t border-infitech-olive/70 pt-5">
                            {/* <div className="inline-flex h-14 items-center rounded-full bg-infitech-cyan px-6 text-base font-black text-infitech-ink">
                                English
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
