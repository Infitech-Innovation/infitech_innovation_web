import { Link } from "@/i18n/routing";
import type { AppPathname } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type FooterLink =
    | {
        label: string;
        href: AppPathname;
        external?: false;
    }
    | {
        label: string;
        href: `https://${string}`;
        external: true;
    };

const footerGroups = [
    {
        title: "Company",
        links: [
            { label: "About Infitech", href: "/we-are/about-infitech" },
            { label: "Our Story", href: "/we-are/our-story" },
            { label: "Leadership", href: "/we-are/leadership" },
            { label: "Insights", href: "/we-are/insights" },
            { label: "Community", href: "/contact" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "What We Do",
        links: [
            { label: "Digital Transformation", href: "/we-do/capability/digital-transform" },
            { label: "AI & Automation", href: "/we-do/capability/ai-intelligent-automation" },
            { label: "Business Systems", href: "/we-do/capability/business-systems" },
            { label: "Digital Experiences", href: "/we-do/capability/digital-experiences" },
            { label: "Technology Consulting", href: "/we-do/capability/technology-consulting" },
        ],
    },
    {
        title: "Industries",
        links: [
            { label: "Manufacturing", href: "/we-do/industry/manufacturing" },
            { label: "Financial Services", href: "/we-do/industry/financial-services" },
            { label: "Logistics & Supply Chain", href: "/we-do/industry/logistics-supply-chain" },
            { label: "Hospitality & Tourism", href: "/we-do/industry/hospitality-tourism" },
            { label: "Healthcare", href: "/we-do/industry/healthcare" },
            { label: "View All Industries", href: "/we-do/industry" },
        ],
    },

    {
        title: "Products",
        links: [
            { label: "Hypechain", href: "/products" },
            { label: "InfiSaaS", href: "/erp-saas" },
        ],
    },
    {
        title: "Innovation",
        links: [
            { label: "Innovation Lab", href: "/we-do/innovation/innovation-lab" },
            { label: "Research & Development", href: "/we-do/innovation/research-development" },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
            { label: "Instagram", href: "https://www.instagram.com", external: true },
        ],
    },
] satisfies Array<{ title: string; links: FooterLink[] }>;

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/privacy" },
] as const;

function FooterLinkLabel({ label }: { label: string }) {
    return (
        <p className="inline-flex items-center gap-2">
            <span>{label}</span>
            <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 -translate-x-1 translate-y-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                strokeWidth={2.2}
            />
        </p>
    );
}

function FooterTextLink({ item }: { item: FooterLink }) {
    const className = "group block text-white/82 transition-colors hover:text-infitech-orange";

    if (item.external) {
        return (
            <a href={item.href} className={className} target="_blank" rel="noreferrer">
                <FooterLinkLabel label={item.label} />
            </a>
        );
    }

    return (
        <Link href={item.href} className={className}>
            <FooterLinkLabel label={item.label} />
        </Link>
    );
}

function InfitechWordmark() {
    return (
        <Link
            href="/"
            aria-label="Infitech Innovation home"
            className="block w-fit transition-opacity hover:opacity-80"
        >
            <Image
                src="/icon0.svg"
                alt="Infitech Innovation"
                width={220}
                height={220}
                className="h-32 w-32 object-contain sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            />
        </Link>
    );
}

export default function FooterSection() {
    return (
        <footer className="bg-infitech-ink text-white">
            <div className="mx-auto grid w-full max-w-[1728px] gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(220px,0.72fr)_1.8fr] lg:gap-24 lg:px-11 lg:py-[70px]">
                <InfitechWordmark />

                <div className="grid gap-x-24 gap-y-20 sm:grid-cols-2 xl:grid-cols-3">
                    {footerGroups.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h4 className="font-semibold text-white">{group.title}</h4>
                            <ul className="mt-5 space-y-3">
                                {group.links.map((item) => (
                                    <li key={item.label}>
                                        <FooterTextLink item={item} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/14">
                <div className="mx-auto flex w-full max-w-[1728px] flex-col gap-5 px-6 py-7 sm:px-10 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-24 lg:px-11">
                    <p className="text-white/86">&copy; Infitech Innovation</p>
                    {legalLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="group text-white/86 transition-colors hover:text-infitech-orange"
                        >
                            <FooterLinkLabel label={item.label} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
