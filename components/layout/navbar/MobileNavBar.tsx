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
            <div className="infitech-mobile-drawer ml-auto flex h-full w-full flex-col bg-infitech-surface px-5 py-4 text-infitech-ink">
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
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-infitech-ink text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
                        onClick={onClose}
                        aria-label={t("toggleMenu")}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-1 flex-col gap-y-1.5 overflow-y-auto sm-text font-black">
                    {navLinks.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                onClick={onClose}
                                className={`rounded-2xl px-4 py-3 transition hover:bg-infitech-olive/20 ${active ? "bg-infitech-olive/25 text-infitech-ink" : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <div className=" border-t border-black/10 pt-3">
                        <p className="px-4 pb-2 sm-text uppercase tracking-[0.16em] text-black/45">
                            What We Do
                        </p>
                        {whatWeDoCapabilityLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block rounded-2xl px-4 py-2.5 transition hover:bg-infitech-olive/20"
                            >
                                <span className="block sm-text font-black">
                                    {link.label}
                                </span>
                                <span className="block text-xs text-black/50">
                                    {link.description}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-3 border-t border-black/10 pt-3">
                        <p className="px-4 pb-2 sm-text uppercase tracking-[0.16em] text-black/45">
                            Who We Are
                        </p>
                        {whoWeAreLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block rounded-2xl px-4 py-2.5 transition hover:bg-infitech-olive/20"
                            >
                                <span className="block sm-text font-black">
                                    {link.label}
                                </span>
                                <span className="block text-xs text-black/50">
                                    {link.description}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid gap-3 border-t border-infitech-olive/70 pt-4">
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
    )
}
