"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Digital Transformation", href: "/digital-transform" },
    { label: "ERP SaaS", href: "/erp-saas" },
    { label: "Custom Development", href: "/custom-develop" },
    { label: "AI Consultation", href: "/ai-automation-booking" },
    { label: "Marketing", href: "/marketing" },
    { label: "Innovation", href: "/innovation" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

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
                        alt="Infitech Innovation"
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
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-infitech-olive text-infitech-ink transition hover:bg-infitech-olive/20 lg:hidden"
                    onClick={() => setOpen((value) => !value)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
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
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}
