import Image from 'next/image';
import { X } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { navLinks, whatWeDoCapabilityLinks, whoWeAreLinks } from "./NavLinks";

type MobileNavBarProps = {
    onClose: () => void;
};

export default function MobileNavBar({ onClose }: MobileNavBarProps) {
    const t = useTranslations("Navbar");
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    };

    return (
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
                        onClick={onClose}
                        aria-label={t("toggleMenu")}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-y-2 overflow-y-auto text-2xl font-black">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                onClick={onClose}
                                className={`rounded-3xl px-5 py-4 transition hover:bg-infitech-olive/20 ${active ? "bg-infitech-olive/25 text-infitech-ink" : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <div className="mt-4 border-t border-black/10 pt-4">
                        <p className="px-5 pb-2 text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                            What We Do
                        </p>
                        {whatWeDoCapabilityLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block rounded-3xl px-5 py-3 transition hover:bg-infitech-olive/20"
                            >
                                <span className="block text-lg font-black">
                                    {link.label}
                                </span>
                                <span className="block text-sm font-semibold text-black/50">
                                    {link.description}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-4 border-t border-black/10 pt-4">
                        <p className="px-5 pb-2 text-sm font-bold uppercase tracking-[0.18em] text-black/45">
                            Who We Are
                        </p>
                        {whoWeAreLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block rounded-3xl px-5 py-3 transition hover:bg-infitech-olive/20"
                            >
                                <span className="block text-lg font-black">
                                    {link.label}
                                </span>
                                <span className="block text-sm font-semibold text-black/50">
                                    {link.description}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid gap-3 border-t border-infitech-olive/70 pt-5">
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="inline-flex h-14 items-center justify-center rounded-full bg-infitech-ink px-6 text-base font-black text-white"
                    >
                        Start a Conversation
                    </Link>
                </div>
            </div>
        </div>
    )
}
