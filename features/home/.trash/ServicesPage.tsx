"use client";

import { Link, type AppPathname } from "@/i18n/routing";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AboutPage from "../AboutPage";
import { motion, useScroll, useTransform } from "motion/react";

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
    const [isWideScreen, setIsWideScreen] = useState(false);
    const activeService = services[activeIndex];

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const updateScreenSize = () => setIsWideScreen(mediaQuery.matches);

        updateScreenSize();
        mediaQuery.addEventListener("change", updateScreenSize);

        return () => mediaQuery.removeEventListener("change", updateScreenSize);
    }, []);

    const imageWidth = useTransform(scrollYProgress, [0, 1], ["100vw", isWideScreen ? "48vw" : "100vw"]);
    const imageHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["100vh", isWideScreen ? "100vh" : "42vh"]
    );
    const imageLeft = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
    const imageTop = useTransform(scrollYProgress, [0, 1], ["0rem", "0rem"]);
    const imageRadius = useTransform(scrollYProgress, [0, 1], [0, 0]);

    const textOpacity = useTransform(scrollYProgress, [0.45, 1], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.45, 1], [42, 0]);

    return (
        <>
            <section ref={sectionRef} className="relative isolate m-0 h-[200vh] w-full overflow-visible bg-infitech-ink p-0 text-infitech-surface">
                <div className="sticky top-0 m-0 h-screen w-full overflow-hidden">
                    <motion.div
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                            left: imageLeft,
                            top: imageTop,
                            borderRadius: imageRadius,
                        }}
                        className="absolute m-0 overflow-hidden"
                    >
                        <Image
                            src="/service.avif"
                            alt="Infitech brand visual"
                            fill
                            priority
                            sizes="100vw"
                            className="m-0 object-cover"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        className="absolute inset-x-0 bottom-0 z-10 flex h-[58vh] min-h-[22rem] w-full items-center bg-infitech-ink/88 px-4 py-8 backdrop-blur-sm sm:px-6 lg:inset-x-auto lg:bottom-0 lg:right-0 lg:top-[5.5rem] lg:h-auto lg:max-w-[52vw] lg:px-12"
                    >
                        <div className="mx-auto w-full max-w-3xl text-left">
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

                            <h1 className="mt-6 text-xl font-black leading-[1.1] text-infitech-cyan min-[390px]:text-2xl sm:mt-7 sm:text-3xl md:text-[2.15rem] lg:text-[2.55rem] lg:leading-[1.08] xl:text-[2.85rem]">
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
                    </motion.div>
                </div>
            </section>
            {/* About Page */}
            <AboutPage />
        </>
    );
}
