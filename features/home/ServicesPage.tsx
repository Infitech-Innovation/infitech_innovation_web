"use client";

import { Link, type AppPathname } from "@/i18n/routing";
import Image from "next/image";
import { useState } from "react";
import AboutPage from "./AboutPage";

const services = [
    {
        label: "Digital Transformation",
        href: "/digital-transform",
        title: "Modernize your business workflows",
        description:
            "Turn manual processes into connected digital journeys across your website, customers, operations, and internal teams.",
        visualTitle: "Digital hub",
        visualItems: ["Process mapping", "Customer portals", "Team dashboards"],
        tags: ["Strategy", "Web", "Workflow", "Growth"],
    },
    {
        label: "Erp Saas",
        href: "/erp-saas",
        title: "Run operations from one SaaS system",
        description:
            "Connect inventory, sales, finance, approvals, and reporting in a practical ERP platform built around your team.",
        visualTitle: "ERP suite",
        visualItems: ["Stock control", "Finance reports", "Role access"],
        tags: ["ERP", "Finance", "Reports", "Teams"],
    },
    {
        label: "Custom Development",
        href: "/custom-develop",
        title: "Build software around your exact workflow",
        description:
            "Design and ship custom portals, dashboards, booking tools, APIs, and internal systems that fit how your business works.",
        visualTitle: "Custom build",
        visualItems: ["Web apps", "Dashboards", "API systems"],
        tags: ["Apps", "Portals", "API", "Data"],
    },
    {
        label: "AI Consultation",
        href: "/ai-automation-booking",
        title: "Automate decisions, booking, and support",
        description:
            "Use AI to speed up repetitive tasks, improve response time, structure data, and support customers with less friction.",
        visualTitle: "AI flow",
        visualItems: ["Smart booking", "Chat support", "Auto reports"],
        tags: ["AI", "Automation", "Support", "Ops"],
    },
    {
        label: "Marketing",
        href: "/marketing",
        title: "Launch clearer digital campaigns",
        description:
            "Create conversion-focused pages, content systems, campaign funnels, and analytics loops that help people find you.",
        visualTitle: "Growth mix",
        visualItems: ["Campaign pages", "SEO setup", "Analytics"],
        tags: ["SEO", "Content", "Funnels", "Brand"],
    },
    {
        label: "Innovation",
        href: "/innovation",
        title: "Shape ideas into scalable products",
        description:
            "Validate concepts, plan technical roadmaps, prototype faster, and turn early product ideas into reliable systems.",
        visualTitle: "Innovation lab",
        visualItems: ["MVP planning", "Prototype", "Roadmap"],
        tags: ["MVP", "Strategy", "UX", "Scale"],
    },
] satisfies Array<{
    label: string;
    href: AppPathname;
    title: string;
    description: string;
    visualTitle: string;
    visualItems: string[];
    tags: string[];
}>;

export default function ServicesPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];

    return (
        <>
            <section className="relative isolate overflow-hidden bg-infitech-ink px-4 py-12 text-infitech-surface sm:px-6 sm:py-16 lg:min-h-screen lg:px-12 lg:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-9 md:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                    <div className="relative mx-auto w-full max-w-[560px]">
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-[24px] bg-infitech-surface p-3 min-[390px]:max-w-[300px] sm:max-w-[360px] sm:rounded-[28px] md:max-w-[400px] lg:max-w-[460px] lg:rounded-[32px] lg:p-4">
                            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-infitech-surface sm:rounded-[24px]">
                                <Image
                                    src="/infitectlogo.jpg"
                                    alt="Infitech brand visual"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 88vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center gap-2 sm:gap-3 lg:pointer-events-none lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:flex-col lg:gap-4 xl:right-8">
                            {activeService.tags.slice(0, 3).map((item) => (
                                <div
                                    key={item}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-infitech-gold text-[0.58rem] font-black text-infitech-ink sm:h-12 sm:w-12 sm:text-[0.64rem] md:h-14 md:w-14 md:text-[0.72rem] lg:h-16 lg:w-16 lg:text-xs"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:text-left">
                        <div className="-mx-4 flex max-w-[100vw] gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                            {services.map((service, index) => {
                                const active = index === activeIndex;

                                return (
                                    <button
                                        key={service.href}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className={`shrink-0 rounded-full px-3 py-2 text-xs font-black transition sm:px-4 sm:text-sm ${active
                                            ? "bg-infitech-gold text-infitech-ink"
                                            : "bg-infitech-surface/15 text-infitech-surface hover:bg-infitech-surface/25"
                                            }`}
                                        aria-pressed={active}
                                    >
                                        {service.label}
                                    </button>
                                );
                            })}
                        </div>

                        <h1 className="mt-6 text-2xl font-black leading-[1.04] text-infitech-cyan min-[390px]:text-3xl sm:mt-7 sm:text-4xl md:text-5xl lg:text-[4.35rem] lg:leading-[1]">
                            {activeService.title}
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-infitech-surface sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
                            {activeService.description}
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                            {activeService.tags.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-infitech-surface/15 px-3 py-2 text-xs font-black text-infitech-surface sm:px-4 sm:text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <Link
                            href={activeService.href}
                            className="mt-7 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-infitech-gold px-6 text-sm font-black text-infitech-ink transition hover:bg-infitech-orange sm:w-auto sm:min-w-[280px] sm:text-base"
                        >
                            Explore {activeService.label}
                        </Link>
                    </div>
                </div>
            </section>
            {/* About Page */}
            <AboutPage />
        </>
    );
}
