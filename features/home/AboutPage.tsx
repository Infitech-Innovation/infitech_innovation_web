"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, ArrowUpRight, Bot, Code2, Layers3, Workflow } from "lucide-react";
import { motion } from "motion/react";
import ClientStory from "./ClientStory";

const aboutCapabilities = [
    {
        title: "Hypechain",
        description: "Hypechain is a creator-first platform that tracks the real value of creator influence.",
        icon: Code2,
        layout: "sm:col-span-2",
        cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px]",
        iconClass: "bg-infitech-cyan text-infitech-ink",
        accentClass: "",
        href: "https://hypechain.infi-saas.com/"
        // bg-infitech-gold
    },
    {
        title: "Coming Soon",
        description: " ",
        icon: Bot,
        layout: "",
        cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface blur-[4px] sm:min-h-[175px] ",
        iconClass: "bg-infitech-surface text-infitech-ink",
        accentClass: "",
        href: "#"
        // bg-infitech-ink
    },
    {
        title: "",
        description: "",
        icon: Layers3,
        layout: "",
        cardClass: "blur-[8px]",
        iconClass: "",
        accentClass: "",
        href: "#"
        // bg-infitech-orange
    },
    {
        title: "Infi-SaaS",
        description: "Infi-ERP SaaS Streamline your business processes with our cloud-based ERP solution, tailored for the Kenyan market.",
        icon: Workflow,
        layout: "sm:col-span-2",
        cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px]",
        iconClass: "bg-infitech-ink text-infitech-cyan",
        accentClass: "",
        href: "https://infitech.infi-saas.com/"
        // bg-infitech-surface
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

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">

                    <motion.div
                        className="mx-auto w-full max-w-2xl  px-4 py-5 text-center sm:px-6 sm:py-7 lg:mx-0 lg:text-left"
                        initial={{ opacity: 0, y: 34 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                    >
                        {/* <h2 className="mt-4 bg-[linear-gradient(180deg,#000000_0%,#000000_44%,#ff8a00_45%,#ffa500_72%,#f6b216_100%)] bg-clip-text text-[2rem] font-black leading-[1] tracking-normal text-transparent min-[390px]:text-4xl sm:text-[2.9rem] lg:text-[3.45rem] xl:text-[3.8rem]"> */}
                        {/* className="heading-rise font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.03em]" */}
                        <h2 className="mt-4 text-[2rem] font-black leading-[0.94] tracking-normal min-[390px]:text-4xl sm:text-[2.9rem] lg:text-[3.45rem] xl:text-[3.8rem]">
                            <span className="block text-infitech-ink">Digital systems</span>
                            <span className="block bg-[linear-gradient(90deg,#ff8a00_0%,#ffa500_34%,#f6b216_56%,#000000_100%)] bg-clip-text text-transparent">built around your next move</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-6 text-infitech-ink/75 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
                            Infitech Innovation designs and builds modern platforms for teams that want cleaner operations, stronger customer experiences, and software that can keep growing with the business.
                        </p>

                        <Link
                            href="/digital-transform"
                            className="mt-7 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-infitech-ink px-6 text-sm font-black text-infitech-surface shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition hover:bg-infitech-gold hover:text-infitech-ink sm:min-h-14 sm:w-auto sm:min-w-[270px] sm:text-base"
                        >
                            Build with Infitech
                            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                        </Link>
                    </motion.div>

                    <div className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                        {aboutCapabilities.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    className={`relative flex overflow-hidden rounded-[22px] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.12)] sm:rounded-[28px] sm:p-5 ${item.layout} ${item.cardClass}`}
                                    initial={{ opacity: 0, y: 44, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    whileHover={{ y: -6, scale: 1.015 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                                >
                                    <motion.div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-1 bg-infitech-surface/35"
                                        initial={{ scaleX: 0, transformOrigin: "left" }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.85, delay: 0.18 + index * 0.08, ease: "easeOut" }}
                                    />
                                    <div className={`flex w-full ${item.layout ? "flex flex-col items-end gap-4" : "flex-col items-center justify-center text-center"}`}>
                                        <div className={`${item.layout ? "max-w-[520px]" : ""}`}>
                                            <motion.div
                                                className={`mb-3 grid h-11 w-11 place-items-center rounded-full ${item.iconClass} ${item.layout ? "" : "mx-auto"} sm:h-12 sm:w-12`}
                                                animate={{
                                                    rotate: [0, 5, -5, 0],
                                                }}
                                                transition={{
                                                    duration: 7 + index,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                                            </motion.div>
                                            <h3 className="text-xl font-black leading-none sm:text-2xl">
                                                {item.title}
                                            </h3>
                                            <p className={`mt-2 text-xs font-black leading-5 opacity-75 ${item.layout ? "max-w-sm" : ""} sm:text-sm sm:leading-5`}>
                                                {item.description}
                                            </p>
                                        </div>


                                        {
                                            item.layout ? (
                                                <div>
                                                    <div className={`absolute right-4 top-4 h-2 w-12 rounded-full opacity-75 sm:right-5 sm:top-5 ${item.accentClass}`} />
                                                    <div className={`absolute bottom-4 right-4 h-9 w-9 rounded-full opacity-20 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 ${item.accentClass}`} />
                                                </div>

                                            ) : null
                                        }

                                        <a href={item.href} className="flex items-center gap-2 text-sm font-black text-infitech-orange transition hover:translate-x-1">
                                            Visit <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
                                        </a>
                                    </div>
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
