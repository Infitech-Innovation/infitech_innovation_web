import { Activity, Code2, Rocket, SmilePlus } from "lucide-react";
import FAQ from "./FAQ";

export const portfolioStats = [
    {
        value: "25+",
        label: "Projects Delivered",
        description: "Web apps, SaaS platforms, ERP systems, and business websites.",
    },
    {
        value: "15+",
        label: "Happy Clients",
        description: "Businesses and startups across different industries.",
    },
    {
        value: "99.9%",
        label: "System Uptime",
        description: "Reliable cloud deployments with continuous monitoring.",
    },
    {
        value: "6+",
        label: "Technologies",
        description: "React, Next.js, Django, Node.js, Flutter, and AI solutions.",
    },
];

const statStyles = [
    {
        icon: Rocket,
        className: "bg-infitech-cyan text-infitech-ink lg:translate-y-10",
        badge: "Launches",
    },
    {
        icon: SmilePlus,
        className: "bg-infitech-surface text-infitech-ink lg:-translate-y-4",
        badge: "Trust",
    },
    {
        icon: Activity,
        className: "bg-infitech-ink text-infitech-surface lg:translate-y-6",
        badge: "Reliability",
    },
    {
        icon: Code2,
        className: "bg-infitech-gold text-infitech-ink lg:-translate-y-8",
        badge: "Stack",
    },
];

export default function StatsPage() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-infitech-ink px-4 py-14 text-infitech-surface sm:px-6 sm:py-16 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
                    <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                        <h2 className="mt-4 text-[2.25rem] font-black leading-[1] tracking-normal text-infitech-surface min-[390px]:text-4xl sm:text-5xl lg:text-[4rem]">
                            Proof of Infitech work in motion
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-6 text-infitech-surface/72 sm:text-base sm:leading-7 lg:mx-0">
                            A quick look at the delivery, reliability, and technical range Infitech brings into each project.
                        </p>

                        <div className="mt-7 rounded-[28px] border border-infitech-surface/12 bg-infitech-surface/8 p-5 text-left shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-black text-infitech-gold">Delivery signal</p>
                                    <p className="mt-1 text-xs font-semibold leading-5 text-infitech-surface/62 sm:text-sm">
                                        From first build to cloud deployment, the focus stays on practical results.
                                    </p>
                                </div>
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-infitech-cyan text-infitech-ink">
                                    <Activity className="h-7 w-7" strokeWidth={2.7} />
                                </div>
                            </div>
                            <div className="mt-5 h-3 overflow-hidden rounded-full bg-infitech-surface/12">
                                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-infitech-cyan via-infitech-gold to-infitech-orange" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                        {portfolioStats.map((stat, index) => {
                            const style = statStyles[index];
                            const Icon = style.icon;

                            return (
                                <article
                                    key={stat.label}
                                    className={`relative min-h-[230px] overflow-hidden rounded-[30px] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.22)] sm:p-6 lg:min-h-[270px] ${style.className}`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="rounded-full bg-current/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em]">
                                            {style.badge}
                                        </span>
                                        <div className="grid h-12 w-12 place-items-center rounded-full bg-infitech-surface/20">
                                            <Icon className="h-6 w-6" strokeWidth={2.6} />
                                        </div>
                                    </div>

                                    <p className="mt-9 text-[3.4rem] font-black leading-none tracking-normal sm:text-[4rem] lg:text-[4.6rem]">
                                        {stat.value}
                                    </p>
                                    <h3 className="mt-3 text-xl font-black leading-tight sm:text-2xl">
                                        {stat.label}
                                    </h3>
                                    <p className="mt-3 text-sm font-semibold leading-6 opacity-75">
                                        {stat.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
            <FAQ />
        </>
    );
}
