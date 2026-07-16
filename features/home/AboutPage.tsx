import { Link } from "@/i18n/routing";
import { ArrowUpRight, Bot, Code2, Layers3, Workflow } from "lucide-react";
import PartnersPage from "./PartnersPage";

const aboutCapabilities = [
    {
        title: "Digital products",
        description: "Websites, portals, dashboards, and customer-facing platforms.",
        icon: Code2,
        layout: "sm:col-span-2",
        cardClass: "min-h-[150px] bg-infitech-ink text-infitech-surface sm:min-h-[175px]",
        iconClass: "bg-infitech-cyan text-infitech-ink",
        accentClass: "bg-infitech-gold",
    },
    {
        title: "AI automation",
        description: "Smarter booking, support, reports, and repeat operations.",
        icon: Bot,
        layout: "",
        cardClass: "min-h-[150px] bg-infitech-cyan text-infitech-ink sm:min-h-[175px]",
        iconClass: "bg-infitech-surface text-infitech-ink",
        accentClass: "bg-infitech-ink",
    },
    {
        title: "ERP SaaS",
        description: "Connected tools for inventory, finance, workflows, and teams.",
        icon: Layers3,
        layout: "",
        cardClass: "min-h-[150px] bg-infitech-gold text-infitech-ink sm:min-h-[175px]",
        iconClass: "bg-infitech-ink text-infitech-surface",
        accentClass: "bg-infitech-orange",
    },
    {
        title: "Custom systems",
        description: "Software shaped around how your business actually works.",
        icon: Workflow,
        layout: "sm:col-span-2",
        cardClass: "min-h-[150px] bg-infitech-turquoise text-infitech-ink sm:min-h-[175px]",
        iconClass: "bg-infitech-ink text-infitech-cyan",
        accentClass: "bg-infitech-surface",
    },
];

export default function AboutPage() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-infitech-olive/35 px-4 py-12 text-infitech-ink sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">

                    <div className="mx-auto mt-6 w-full max-w-2xl text-center lg:mx-0 lg:mt-0 lg:text-left">
                        <h2 className="mt-4 text-[2rem] font-black leading-[1] tracking-normal text-infitech-ink min-[390px]:text-4xl sm:text-[2.9rem] lg:text-[3.45rem] xl:text-[3.8rem]">
                            Digital systems built around your next move
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
                    </div>
                    <div className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
                        {aboutCapabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className={`relative flex overflow-hidden rounded-[22px] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.12)] sm:rounded-[28px] sm:p-5 ${item.layout} ${item.cardClass}`}
                                >
                                    <div className={`flex w-full ${item.layout ? "justify-between gap-4" : "flex-col items-center justify-center text-center"}`}>
                                        <div className={`${item.layout ? "max-w-[520px]" : ""}`}>
                                            <div className={`mb-3 grid h-11 w-11 place-items-center rounded-full ${item.iconClass} ${item.layout ? "" : "mx-auto"} sm:h-12 sm:w-12`}>
                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
                                            </div>
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
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PartnersPage />
        </>
    );
}
