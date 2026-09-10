import Image from 'next/image';
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
    navLinks,
    whatWeDoCapabilityLinks,
    whatWeDoCategories,
    whatWeDoIndustryLinks,
    whatWeDoInnovationLinks,
    whoWeAreLinks,
} from "./NavLinks";

type MobileNavBarProps = {
    onClose: () => void;
};

export default function MobileNavBar({ onClose }: MobileNavBarProps) {
    const t = useTranslations("Navbar");
    const pathname = usePathname();
    const [expandedSection, setExpandedSection] = useState<"what-we-do" | "who-we-are" | null>(null);
    const [expandedCategory, setExpandedCategory] = useState("Capabilities");

    const isActive = (href: string) => {
        return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    };

    const getWhatWeDoLinks = (category: string) => {
        if (category === "Industries") return whatWeDoIndustryLinks;
        if (category === "Innovation") return whatWeDoInnovationLinks;
        return whatWeDoCapabilityLinks;
    };

    return (
        <div className="fixed inset-0 z-50 bg-infitech-ink/45 backdrop-blur-sm lg:hidden">
            <div className="infitech-mobile-drawer ml-auto flex h-full w-full flex-col bg-[#f3f3f1] px-5 py-4 text-infitech-ink">
                <div className="mb-6 flex items-center justify-between">
                    <Image
                        src="/icon0.svg"
                        alt={t("logoAlt")}
                        width={84}
                        height={84}
                        className="h-11 w-11 shrink-0 object-contain"
                    />
                    <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-infitech-ink text-white transition hover:bg-infitech-orange hover:text-infitech-ink"
                        onClick={onClose}
                        aria-label={t("toggleMenu")}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-y-2 overflow-y-auto sm-text font-black">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        if (link.menu === "what-we-do" || link.menu === "who-we-are") {
                            const isOpen = expandedSection === link.menu;

                            return (
                                <div key={link.href} className="space-y-1">
                                    <button
                                        type="button"
                                        onClick={() => setExpandedSection(isOpen ? null : link.menu ?? null)}
                                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${isOpen ? "bg-[#111111] text-white" : "text-infitech-ink hover:bg-black/[0.03]"
                                            }`}
                                    >
                                        <span>{link.label}</span>
                                        <ChevronRight
                                            className={`h-4 w-4 transition-transform font-bold ${isOpen ? "rotate-90" : ""}`}
                                            strokeWidth={2.5}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="space-y-2 px-3 pb-3 pt-2">
                                            {link.menu === "what-we-do" ? (
                                                <>
                                                    {whatWeDoCategories.map((category) => {
                                                        const categoryLinks = getWhatWeDoLinks(category.label);
                                                        const isCategoryOpen = expandedCategory === category.label;

                                                        return (
                                                            <div key={category.label} className="border-b border-black/8 pb-2 last:border-b-0 last:pb-0">
                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setExpandedCategory(isCategoryOpen ? "" : category.label)
                                                                    }
                                                                    className="flex w-full items-center justify-between px-1 py-2 text-left"
                                                                >
                                                                    <span className="sm-text text-infitech-ink">
                                                                        {category.label}
                                                                    </span>
                                                                    <ChevronDown
                                                                        className={`h-4 w-4 text-black/60 transition-transform ${isCategoryOpen ? "rotate-180" : ""
                                                                            }`}
                                                                        strokeWidth={2}
                                                                    />
                                                                </button>

                                                                {isCategoryOpen && (
                                                                    <div className="space-y-1 px-1 pb-1 pt-1">
                                                                        {categoryLinks.map((item) => (
                                                                            <Link
                                                                                key={item.href}
                                                                                href={item.href}
                                                                                onClick={onClose}
                                                                                className="block rounded-lg px-2 py-2 text-sm font-medium text-black/75 transition hover:bg-black/[0.03] hover:text-infitech-ink"
                                                                            >
                                                                                {item.label}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </>
                                            ) : (
                                                <div className="space-y-1">
                                                    {whoWeAreLinks.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            onClick={onClose}
                                                            className="block rounded-lg px-2 py-2 text-sm font-medium text-black/75 transition hover:bg-black/[0.03] hover:text-infitech-ink"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                onClick={onClose}
                                className={`rounded-2xl px-4 py-3 transition hover:bg-black/[0.03] ${active ? "bg-[#111111] text-white" : "text-infitech-ink"}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="grid gap-3 border-t border-black/10 pt-4">
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-infitech-ink px-5 sm-text font-black text-white"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </div>
        </div>
    );
}
