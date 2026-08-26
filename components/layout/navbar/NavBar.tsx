"use client";

import {
    ChevronRight,
    Menu,
    X,
} from "lucide-react";
import Image from "next/image";
import {
    Link,
    usePathname,
} from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MegaMenuId, navLinks, whatWeDoCapabilityLinks, whatWeDoCategories, whatWeDoIndustryLinks, whatWeDoInnovationLinks, whoWeAreCategories, whoWeAreLinks } from "./NavLinks";
import MobileNavBar from "./MobileNavBar";


export function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuId | null>(null);
    const [selectedWhatWeDoCategory, setSelectedWhatWeDoCategory] = useState(
        whatWeDoCategories[0].label
    );
    const [pastHero, setPastHero] = useState(false);
    const t = useTranslations("Navbar");
    const pathname = usePathname();

    const selectedWhatWeDoLinks =
        selectedWhatWeDoCategory === "Industries"
            ? whatWeDoIndustryLinks
            : selectedWhatWeDoCategory === "Innovation"
                ? whatWeDoInnovationLinks
                : whatWeDoCapabilityLinks;
    const selectedMenuLinks =
        activeMegaMenu === "who-we-are" ? whoWeAreLinks : selectedWhatWeDoLinks;
    const menuSplitIndex = Math.ceil(selectedMenuLinks.length / 2);
    const firstColumnLinks = selectedMenuLinks.slice(0, menuSplitIndex);
    const secondColumnLinks = selectedMenuLinks.slice(menuSplitIndex);
    const selectedMenuCategories =
        activeMegaMenu === "who-we-are" ? whoWeAreCategories : whatWeDoCategories;

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
            className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300 ease-out ${pastHero
                ? "px-0 py-0"
                : "px-4 py-4 sm:px-6 lg:px-8 lg:py-5"
                }`}
            onMouseLeave={() => setActiveMegaMenu(null)}
        >
            <nav
                className={`mx-auto flex min-h-[86px] items-center justify-between gap-5 border border-black/5 bg-infitech-surface px-6 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-all duration-300 sm:px-8 lg:min-h-[102px] ${pastHero
                    ? "w-full max-w-none rounded-none"
                    : "max-w-[calc(100vw-3rem)] rounded-[8rem] xl:max-w-[calc(100vw-5rem)]"
                    }`}
            >
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5 text-lg font-black text-infitech-ink transition hover:opacity-80 sm:text-xl"
                    onClick={() => {
                        setOpen(false);
                        setActiveMegaMenu(null);
                    }}
                >
                    <Image
                        src="/icon0.svg"
                        alt={t("logoAlt")}
                        width={100}
                        height={100}
                        className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                    />
                </Link>

                <div className="hidden items-center justify-center gap-x-1 text-base font-semibold text-[#1f2330] lg:flex xl:gap-x-2 xl:text-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setActiveMegaMenu(link.menu ?? null)}
                            onFocus={() => setActiveMegaMenu(link.menu ?? null)}
                            className={`whitespace-nowrap rounded-xl px-5 py-4 transition hover:bg-[#eff0ed] xl:px-6 ${(link.menu && activeMegaMenu === link.menu) || isActive(link.href)
                                ? "bg-[#eff0ed] text-infitech-ink"
                                : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="/contact"
                        className="inline-flex h-[72px] items-center justify-center rounded-full bg-infitech-ink px-9 text-lg font-bold text-white transition hover:bg-infitech-orange hover:text-infitech-ink"
                    >
                        Start a Conversation
                    </Link>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        type="button"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2330] text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={t("toggleMenu")}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {activeMegaMenu && (
                <div
                    className="mx-auto hidden max-w-[calc(100vw-14rem)] pt-2 lg:block"
                    onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
                >
                    <div
                        className={`grid min-h-[300px] rounded-3xl bg-infitech-surface px-3 py-3 text-[#1f2330] shadow-[0_22px_60px_rgba(0,0,0,0.12)] xl:max-w-[1536px] ${secondColumnLinks.length > 0
                            ? "grid-cols-[1.05fr_1.12fr_1.15fr]"
                            : "grid-cols-[1.05fr_2.27fr]"
                            }`}
                    >
                        <div className="space-y-2 border-r border-black/10 pr-3">
                            {selectedMenuCategories.map((item) => {
                                const Icon = item.icon;
                                const active =
                                    activeMegaMenu === "who-we-are" ||
                                    selectedWhatWeDoCategory === item.label;

                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onMouseEnter={() => {
                                            if (activeMegaMenu === "what-we-do") {
                                                setSelectedWhatWeDoCategory(item.label);
                                            }
                                        }}
                                        onFocus={() => {
                                            if (activeMegaMenu === "what-we-do") {
                                                setSelectedWhatWeDoCategory(item.label);
                                            }
                                        }}
                                        className={`grid w-full grid-cols-[1.75rem_1fr_1rem] items-center gap-4 rounded-lg px-4 py-4 text-left text-lg font-semibold transition hover:bg-[#eff0ed] ${active ? "bg-[#eff0ed]" : ""
                                            }`}
                                    >
                                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                                        <span className="leading-tight">{item.label}</span>
                                        <ChevronRight className="h-4 w-4 text-black/35" />
                                    </button>
                                );
                            })}
                        </div>

                        <div className={`space-y-5 px-7 py-3 ${secondColumnLinks.length > 0 ? "border-r border-black/10" : ""}`}>
                            {firstColumnLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block rounded-lg transition hover:text-infitech-orange"
                                    onClick={() => setActiveMegaMenu(null)}
                                >
                                    <span className="block text-lg font-semibold leading-tight">
                                        {link.label}
                                    </span>
                                    <span className="mt-1.5 block text-sm font-medium leading-relaxed text-black/55">
                                        {link.description}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {secondColumnLinks.length > 0 && (
                            <div className="space-y-5 px-7 py-3">
                                {secondColumnLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block rounded-lg transition hover:text-infitech-orange"
                                        onClick={() => setActiveMegaMenu(null)}
                                    >
                                        <span className="block text-lg font-semibold leading-tight">
                                            {link.label}
                                        </span>
                                        <span className="mt-1.5 block text-sm font-medium leading-relaxed text-black/55">
                                            {link.description}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {open && (
                <MobileNavBar onClose={() => setOpen(false)} />
            )}
        </header>
    );
}
