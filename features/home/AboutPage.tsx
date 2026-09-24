"use client";

import Image, { type StaticImageData } from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowUpRight, Bot } from "lucide-react";
import { motion } from "motion/react";
import ClientStory from "./ClientStory";
import hypechainScreenshot from "@/public/hyperchain.png";
import infisaasScreenshot from "@/public/infisaas.jpeg";


const aboutCapabilities = [
    {
        title: "Hypechain",
        subtitle: "Built for the creator economy.",
        description: "Hypechain helps brands understand creator influence and make better decisions about who they work with, while giving creators a clearer way to show the value they bring.",
        screenshot: hypechainScreenshot,
        layout: "sm:col-span-2",
        // cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px]",
        cardClass:
            "min-h-[270px] sm:min-h-[320px] bg-infitech-ink text-infitech-surface",
        iconClass: "bg-infitech-cyan text-infitech-ink",
        accentClass: "",
        href: "https://hypechain.infi-saas.com/",
        btntitle: "Explore Hypechain",
        flip: true,
        // bg-infitech-gold
    },
    {
        title: "InfiSaaS",
        subtitle: "Bring your business together.",
        description: "A cloud-based ERP platform that connects core business operations, workflows, teams, and information in one place.",
        screenshot: infisaasScreenshot,
        layout: "sm:col-span-2",
        // cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px]",
        cardClass:
            "min-h-[260px] sm:min-h-[300px] bg-infitech-ink text-infitech-surface",
        iconClass: "bg-infitech-ink text-infitech-cyan",
        accentClass: "",
        href: "https://infitech.infi-saas.com/",
        btntitle: "Explore InfiSaaS",
        flip: true,
        // bg-infitech-surface
    },
    {
        title: "Coming Soon",
        subtitle: "Something new is taking shape.",
        description: "New products are being developed through the Infitech Innovation Lab.",
        screenshot: Bot,
        layout: "",
        // cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px] ",
        cardClass:
            "min-h-[180px] sm:min-h-[220px] bg-infitech-surface text-infitech-ink border border-black/15",
        iconClass: "bg-infitech-surface text-infitech-ink",
        accentClass: "",
        btntitle: "Explore Innovation",
        href: "/we-do/innovation/innovation-lab",
        flip: false,
        // bg-infitech-ink
    },
];

export default function AboutPage() {
    return (
        <>
            <section className="relative isolate overflow-hidden px-4 py-14 text-infitech-ink sm:px-6 sm:py-16 lg:px-12 lg:py-20">
                <motion.div
                    aria-hidden="true"
                    className="absolute left-[-18%] top-10 z-0 h-28 w-[72%] skew-x-[-18deg] border-y border-infitech-ink/10"
                    animate={{
                        x: ["-8%", "20%", "-8%"],
                        opacity: [0.18, 0.42, 0.18],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    aria-hidden="true"
                    className="absolute bottom-8 right-[-20%] z-0 h-24 w-[68%] skew-x-[16deg] border-y border-infitech-orange/20"
                    animate={{
                        x: ["8%", "-18%", "8%"],
                        opacity: [0.16, 0.38, 0.16],
                    }}
                    transition={{
                        duration: 24,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-8">

                    <motion.div
                        className="mx-auto w-full max-w-2xl  px-4 py-5 text-center sm:px-6 sm:py-7 lg:mx-0 lg:text-left"
                        initial={{ opacity: 0, y: 34 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                    >
                        <p>
                            PRODUCTS
                        </p>
                        <h1 className="pt-4 font-black"> <span className="block text-infitech-ink"> We don&apos;t just use </span> <span className="block bg-[linear-gradient(90deg,#ff8a00_0%,#ffa500_34%,#f6b216_56%,#000000_100%)] bg-clip-text text-transparent"> technology. </span> <span className="block text-infitech-ink"> We build it. </span> </h1>
                        <p className="mx-auto pt-5 max-w-2xl text-infitech-ink/75">
                            Our products come from problems and opportunities we believe technology can address in a better way.
                        </p>

                        <Link
                            href="/products"
                            className="mt-8 sm-text inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-infitech-ink px-6 font-black text-infitech-surface shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition hover:bg-infitech-gold hover:text-infitech-ink sm:min-h-14 sm:w-auto sm:min-w-[270px]"
                        >
                            Explore Our Products
                            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                        </Link>
                    </motion.div>

                    <div className="grid w-full gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
                        {aboutCapabilities.map((item, index) => {
                            const hasScreenshotImage = typeof item.screenshot === "object" && item.screenshot !== null && "src" in item.screenshot;
                            const screenshotImage = hasScreenshotImage ? (item.screenshot as StaticImageData) : null;
                            const ScreenshotIcon = typeof item.screenshot === "function" ? item.screenshot : Bot;

                            return (
                                <motion.article
                                    key={item.title}
                                    className={`group ${item.layout} ${index === 0 ? "sm:col-start-2" : ""}`}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                        ease: "easeOut",
                                    }}
                                >
                                    {item.flip ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block h-full [perspective:1200px]"
                                        >
                                            <div className="relative h-full min-h-[340px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:min-h-[300px]">
                                                {/* Front */}
                                                <div className="absolute inset-0 [backface-visibility:hidden]">
                                                    <div
                                                        className={`flex h-full w-full flex-col justify-between rounded-[20px] p-5 sm:rounded-[24px] sm:p-6 ${item.cardClass}`}
                                                    >
                                                        <div>
                                                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-infitech-orange">
                                                                Product
                                                            </p>

                                                            <h2 className="pt-3 font-black">
                                                                {item.title}
                                                            </h2>

                                                            <h4 className="pt-3">
                                                                {item.subtitle}
                                                            </h4>

                                                            <p className="pt-3 font-normal text-infitech-surface/70">
                                                                {item.description}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center justify-between pt-6">
                                                            <span className="text-sm font-semibold text-infitech-orange">
                                                                {item.btntitle}
                                                            </span>

                                                            <ArrowRight
                                                                className="h-5 w-5 text-infitech-orange transition-transform duration-300 group-hover:translate-x-1"
                                                                strokeWidth={2}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Back */}
                                                <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#111] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:rounded-[24px]">
                                                    {screenshotImage ? (
                                                        <Image
                                                            src={screenshotImage}
                                                            alt={`${item.title} product interface`}
                                                            fill
                                                            className="object-cover object-top"
                                                        />
                                                    ) : (
                                                        <div className="flex h-full w-full items-center justify-center bg-infitech-ink text-infitech-cyan">
                                                            <ScreenshotIcon className="h-16 w-16" strokeWidth={1.5} />
                                                        </div>
                                                    )}

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-black/80 px-4 py-2 text-white">
                                                        <span className="text-sm font-semibold">
                                                            Explore {item.title}
                                                        </span>

                                                        <ArrowUpRight
                                                            className="h-4 w-4 text-infitech-orange"
                                                            strokeWidth={2.5}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="flex min-h-[180px] flex-col justify-between rounded-[20px] p-5 transition duration-300 hover:-translate-y-1 hover:border-infitech-orange sm:min-h-[220px] sm:rounded-[24px] sm:p-6"
                                        >
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-infitech-orange">
                                                    Innovation
                                                </p>

                                                <h2 className="pt-3 font-black">
                                                    {item.title}
                                                </h2>

                                                <h4 className="pt-3 font-semibold">
                                                    {item.subtitle}
                                                </h4>
                                            </div>

                                            <div className="flex items-center justify-between pt-6">
                                                <span className="text-sm font-semibold">
                                                    {item.btntitle}
                                                </span>

                                                <ArrowRight
                                                    className="h-5 w-5 text-infitech-orange"
                                                    strokeWidth={2}
                                                />
                                            </div>
                                        </a>
                                    )}
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            < ClientStory />
        </>
    );
}
