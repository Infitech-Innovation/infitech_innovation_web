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
            "Modernize how your business works by bringing people, processes, data, and technology together around what matters most.",
        cta: "Explore Digital Transformation",
        href: "/we-do/capability/digital-transform",
        icon: Workflow,
    },
    {
        title: "AI & Automation",
        description:
            "Put AI and automation to practical use, reducing repetitive work, improving customer experiences, and helping your teams get more done.",
        cta: "Explore AI & Automation",
        href: "/we-do/capability/ai-intelligent-automation",
        icon: Bot,
    },
    {
        title: "Business Systems",
        description:
            "Connect the different parts of your business with systems that improve visibility, simplify operations, and support growth.",
        cta: "Explore Business Systems",
        href: "/we-do/capability/business-systems",
        icon: Network,
    },
    {
        title: "Digital Experiences",
        description:
            "Create websites, portals, platforms, and digital journeys that make it easier for customers to find you, trust you, and do business with you.",
        cta: "Explore Digital Experiences",
        href: "/we-do/capability/digital-experiences",
        icon: MonitorSmartphone,
    },
    {
        title: "Technology Consulting",
        description:
            "Make better technology decisions by understanding what your business needs today, what should come next, and where technology can create the most value.",
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
            {/* <div className="min-h-screen bg-infitech-surface  text-infitech-ink"> */}
                <section className="mx-auto w-full max-w-[1640px] px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                        <div>
                            <p className="uppercase text-infitech-orange pb-4">
                                What We Do
                            </p>
                            <h1 className="mt-5 max-w-[15ch] text-[#1f1f24]">
                                Technology should solve a business problem.
                            </h1>
                        </div>

                        <div className="max-w-3xl lg:pt-16">
                            <p className="text-[1.45rem] font-medium leading-9 text-infitech-ink sm:text-[1.8rem] sm:leading-[1.45]">
                                We help organizations improve how they work, serve their customers, and grow by putting the right technology to work.
                            </p>
                            <Link
                                href="/we-do/capability"
                                className="mt-10 inline-flex sm-text items-center gap-4 text-infitech-orange transition hover:text-infitech-ink"
                            >
                                Explore All Capabilities
                                <ArrowRight className="h-6 w-6" strokeWidth={1.8} />
                            </Link>
                        </div>
                    </div>

                    <div className="pt-10 grid gap-4 sm:grid-cols-2 lg:pt-12 lg:grid-cols-5">
                        {whatWeDoCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <Link
                                    key={card.title}
                                    href={card.href}
                                    className="group flex min-h-[100px] flex-col justify-between rounded-[6px] border border-black/20 bg-white p-4 text-infitech-ink transition duration-300 hover:border-infitech-orange focus-visible:border-infitech-orange focus-visible:bg-[#f1f1ef] focus-visible:outline-none lg:min-h-[280px]"
                                >
                                    <div>
                                        <h3 className="text-[#24242a]">
                                            {card.title}
                                        </h3>
                                        <p className="mt-5 max-h-0 overflow-hidden leading-7 text-black/70 opacity-0 transition-all duration-300 group-hover:max-h-44 group-hover:opacity-100 group-focus-visible:max-h-44 group-focus-visible:opacity-100 pt-2">
                                            {card.description}
                                        </p>
                                        {/* <span className="mt-5 hidden items-center gap-2 text-sm font-bold text-infitech-orange group-hover:inline-flex group-focus-visible:inline-flex">
                                            {card.cta}
                                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                                        </span> */}
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
            {/* </div> */}
            <Industries /></>
    );
}
