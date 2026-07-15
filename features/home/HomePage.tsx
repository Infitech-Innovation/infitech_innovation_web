import { Link } from "@/i18n/routing";
import ServicesPage from "./ServicesPage";

export default function HomePage() {
    const carouselCards = [
        {
            title: "AI Automation",
            kicker: "Smart systems",
            description: "Automate bookings, support, reporting, and repeat workflows with practical AI tools.",
            tags: ["AI", "Booking", "Support", "Ops"],
            color: "from-infitech-orange via-infitech-gold to-infitech-ink",
            href: "/ai-automation-booking",
        },
        {
            title: "ERP SaaS",
            kicker: "Business hub",
            description: "Connect inventory, sales, finance, teams, and approvals in one clean operating system.",
            tags: ["ERP", "SaaS", "Finance", "Teams"],
            color: "from-infitech-turquoise via-infitech-cyan to-infitech-ink",
            href: "/erp-saas",
        },
        {
            title: "Digital Growth",
            kicker: "Launch room",
            description: "Build modern web experiences, campaigns, and digital journeys that convert visitors.",
            tags: ["Web", "SEO", "Launch", "Brand"],
            color: "from-infitech-olive via-infitech-turquoise to-infitech-ink",
            href: "/digital-transform",
        },
        {
            title: "Custom Build",
            kicker: "Product lab",
            description: "Design and ship custom portals, dashboards, and internal tools around your workflow.",
            tags: ["Apps", "Portals", "API", "Data"],
            color: "from-infitech-gold via-infitech-orange to-infitech-ink",
            href: "/custom-develop",
        },
        {
            title: "Innovation",
            kicker: "Founder desk",
            description: "Turn early ideas into validated prototypes, technical roadmaps, and scalable products.",
            tags: ["MVP", "Strategy", "UX", "Scale"],
            color: "from-infitech-ink via-infitech-olive to-infitech-ink",
            href: "/innovation",
        },
    ] as const;

    return (
        <main className="flex flex-1 flex-col bg-infitech-cyan text-infitech-ink">
            <section className="relative isolate min-h-screen overflow-hidden pb-10 pt-28 sm:pt-32 lg:pb-0 lg:pt-0">
                <div className="grid min-h-screen items-start lg:grid-cols-2">
                    <div className="relative z-10 flex w-full justify-center px-4 sm:px-8 lg:min-h-screen lg:px-10">
                        <div className="w-full max-w-[640px] py-8 sm:py-12 lg:py-0 lg:pt-44 xl:pt-48">
                            <h1 className="max-w-[640px] text-[2.45rem] font-black leading-[1] tracking-normal text-infitech-ink min-[390px]:text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-[4.9rem]">
                                Digital systems built for ambitious teams.
                            </h1>
                            <p className="mt-4 max-w-[620px] text-sm font-semibold leading-6 text-infitech-ink sm:text-base sm:leading-7 lg:text-[1.15rem] lg:leading-7">
                                Infitech Innovation designs websites, ERP SaaS platforms, custom systems, and AI-powered workflows that help businesses operate faster and serve customers better.
                            </p>
                            <div className="mt-5 grid w-full max-w-[360px] gap-2 sm:max-w-[420px]">
                                <Link
                                    href="/digital-transform"
                                    className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-full bg-infitech-ink px-4 text-sm font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink sm:min-h-12"
                                >
                                    Start a project
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex min-h-[390px] items-center justify-center px-4 sm:min-h-[500px] sm:px-8 md:min-h-[560px] lg:min-h-screen lg:items-start lg:px-10">
                        <div className="relative h-[360px] w-full max-w-[360px] overflow-hidden bg-transparent min-[390px]:h-[390px] sm:h-[460px] sm:max-w-[520px] md:h-[520px] md:max-w-[640px] lg:h-screen lg:max-h-none lg:min-h-screen lg:max-w-[680px]">
                            <div className="infitech-hero-card-track flex">
                                {[...carouselCards, ...carouselCards].map((card, index) => (
                                    <div
                                        key={`${card.title}-${index}`}
                                        className="h-[360px] w-full shrink-0 basis-full px-2 min-[390px]:h-[390px] sm:h-[460px] sm:px-3 md:h-[520px] lg:h-[72vh] lg:max-h-[720px] lg:min-h-[560px] lg:px-0 lg:py-3"
                                    >
                                        <Link
                                            href={card.href}
                                            className={`relative flex h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-br ${card.color} p-5 text-infitech-surface sm:rounded-[36px] sm:p-7 md:rounded-[42px] lg:rounded-[48px] lg:p-12`}
                                        >
                                            {/* <p className="absolute inset-x-0 bottom-5 z-20 text-center font-mono text-sm font-black tracking-[0.06em] text-infitech-surface sm:text-lg">
                                            {card.kicker}. Built by Infitech Innovation.
                                        </p> */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-infitech-ink/20 to-transparent" />
                                            <div className="relative z-10 flex w-full items-center justify-center">
                                                <div className="grid w-full max-w-[620px] items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                                                    <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                                                        <p className="font-mono text-[0.7rem] font-black uppercase tracking-[0.16em] text-infitech-gold sm:text-xs lg:text-sm">
                                                            {card.kicker}
                                                        </p>
                                                        <h2 className="text-3xl font-black leading-[0.96] min-[390px]:text-4xl sm:text-5xl">
                                                            {card.title}
                                                        </h2>
                                                        <p className="max-w-sm text-sm font-bold leading-6 text-infitech-surface/82 sm:text-base sm:leading-7 lg:text-lg">
                                                            {card.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.1em] text-infitech-surface/75 sm:gap-x-5 sm:text-xs lg:text-sm">
                                                            {card.tags.map((tag) => (
                                                                <span key={tag}>{tag}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="relative hidden min-h-[300px] items-center justify-center md:flex lg:min-h-[430px]">
                                                        <div className="absolute h-52 w-52 rounded-full bg-infitech-surface/12 lg:h-72 lg:w-72" />
                                                        <div className="absolute h-36 w-36 rotate-12 rounded-[28px] border-8 border-infitech-gold/80 lg:h-48 lg:w-48 lg:rounded-[36px]" />
                                                        <div className="absolute left-8 top-12 h-16 w-16 rounded-full bg-infitech-turquoise lg:top-16 lg:h-24 lg:w-24" />
                                                        <div className="absolute bottom-12 right-10 h-20 w-20 rounded-full bg-infitech-orange lg:bottom-16 lg:h-28 lg:w-28" />
                                                        <div className="absolute bottom-20 left-14 h-3 w-40 rotate-[-18deg] rounded-full bg-infitech-surface lg:bottom-28 lg:left-20 lg:h-4 lg:w-56" />
                                                        <div className="absolute right-16 top-20 h-3 w-32 rotate-[24deg] rounded-full bg-infitech-surface/70 lg:right-24 lg:top-28 lg:h-4 lg:w-44" />
                                                        <div className="relative text-center text-7xl font-black leading-none text-infitech-surface lg:text-8xl">
                                                            {index % 5 + 1}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesPage />
        </main>
    );
}
