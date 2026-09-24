import {
    ArrowRight,
    Bot,
    Compass,
    MonitorSmartphone,
    Network,
    Workflow,
} from "lucide-react";
import { Link, type AppPathname } from "@/i18n/routing";
import Industries from "./Industries";

const whatWeDoCards = [
    {
        title: "Digital Transformation",
        description:
            "Bring people, processes, data, and technology together to modernize how your organization works.",
        cta: "Explore Digital Transformation",
        href: "/we-do/capability/digital-transform",
        icon: Workflow,
    },
    {
        title: "AI & Automation",
        description:
            "Apply AI and automation to customer service, internal workflows, and repetitive processes to reduce manual work and help teams operate more efficiently.",
        cta: "Explore AI & Automation",
        href: "/we-do/capability/ai-intelligent-automation",
        icon: Bot,
    },
    {
        title: "Business Systems",
        description:
            "Connect finance, sales, inventory, operations, and customer information through ERP and business systems that give your teams better visibility and control.",
        cta: "Explore Business Systems",
        href: "/we-do/capability/business-systems",
        icon: Network,
    },
    {
        title: "Digital Experiences",
        description:
            "Design and build websites, customer portals, and digital platforms that make it easier for people to discover, trust, and do business with your organization.",
        cta: "Explore Digital Experiences",
        href: "/we-do/capability/digital-experiences",
        icon: MonitorSmartphone,
    },
    {
        title: "Technology Consulting",
        description:
            "Make better technology decisions by understanding what your organization needs, what to prioritize, and where investment can create the most value.",
        cta: "Explore Technology Consulting",
        href: "/we-do/capability/technology-consulting",
        icon: Compass,
    },
] satisfies Array<{
    title: string;
    description: string;
    cta: string;
    href: AppPathname;
    icon: typeof Workflow;
}>;

export default function WhatWeDo() {
    return (
        <>
            <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-24">
                <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                    <div>
                        <p className="uppercase text-infitech-orange pb-4">
                            What We Do
                        </p>
                        <h1 className="mt-5 max-w-[15ch] text-[#1f1f24]">
                            Technology should solve a business problem.
                        </h1>
                    </div>

                    <div className="max-w-3xl lg:pt-16">
                        <p className="text-infitech-ink">
                            We help organizations improve how they operate, serve customers, and grow by applying technology where it can create the most value.
                        </p>
                        <Link
                            href="/we-do/capability"
                            className="mt-10 inline-flex items-center gap-4 text-infitech-orange transition hover:text-infitech-ink"
                        >
                            Explore All Capabilities
                            <ArrowRight className="h-6 w-6" strokeWidth={1.8} />
                        </Link>
                    </div>
                </div>

                <div className="pt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:pt-12 xl:grid-cols-5">
                    {whatWeDoCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={card.title}
                                href={card.href}
                                className="group flex min-h-[100px] flex-col justify-between rounded-[6px] border border-black/20 bg-white p-4 text-infitech-ink transition duration-300 hover:border-infitech-orange focus-visible:border-infitech-orange focus-visible:bg-[#f1f1ef] focus-visible:outline-none lg:min-h-[300px]"
                            >
                                <div>
                                    <h3 className="text-[#24242a]">
                                        {card.title}
                                    </h3>
                                    <p className="mt-5 max-h-0 overflow-hidden text-black/70 opacity-0 transition-all duration-300 group-hover:max-h-50 group-hover:opacity-100 group-focus-visible:max-h-50 group-focus-visible:opacity-100 pt-2">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="group">
                                    <span className="mt-5 hidden items-center gap-2 text-infitech-orange group-hover:inline-flex group-focus-visible:inline-flex">
                                        {card.cta}
                                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                                    </span>

                                    <div className="flex items-end justify-between gap-5 pt-8 group-hover:hidden group-focus-visible:hidden">
                                        <Icon
                                            className="h-12 w-12 text-infitech-ink transition group-hover:text-infitech-orange group-focus-visible:text-infitech-orange"
                                            strokeWidth={1.5}
                                        />
                                        <ArrowRight
                                            className="h-8 w-8 text-infitech-orange transition group-hover:translate-x-1 group-focus-visible:translate-x-1"
                                            strokeWidth={1.6}
                                        />
                                    </div>
                                </div>

                            </Link>
                        );
                    })}
                </div>
            </section>
            <Industries /></>
    );
}
