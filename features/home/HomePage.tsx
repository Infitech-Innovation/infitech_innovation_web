import { Link } from "@/i18n/routing";

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
            <section className="relative isolate min-h-screen overflow-hidden pb-8 pt-32 lg:pb-0 lg:pt-0">
                <div className="grid min-h-screen items-start lg:grid-cols-2">
                    <div className="relative z-10 flex min-h-[560px] w-full justify-center px-5 sm:px-8 lg:min-h-screen lg:px-10">
                        <div className="w-full max-w-[640px] pt-10 sm:pt-16 lg:pt-44 xl:pt-48">
                            <h1 className="max-w-[640px] text-4xl font-black leading-[0.98] tracking-normal text-infitech-ink sm:text-5xl lg:text-[4.25rem] xl:text-[4.9rem]">
                                Digital systems built for ambitious teams.
                            </h1>
                            <p className="mt-4 max-w-[620px] text-base font-semibold leading-7 text-infitech-ink sm:text-lg lg:text-[1.15rem] lg:leading-7">
                                Infitech Innovation designs websites, ERP SaaS platforms, custom systems, and AI-powered workflows that help businesses operate faster and serve customers better.
                            </p>
                            <div className="mt-5 grid w-full max-w-[560px] gap-2 sm:grid-cols-[minmax(0,1fr)_160px]">
                                <Link
                                    href="/digital-transform"
                                    className="inline-flex min-h-12 min-w-0 items-center justify-center rounded-full bg-infitech-ink px-4 text-sm font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink"
                                >
                                    Start a project
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex min-h-[560px] items-center justify-center px-5 sm:px-8 lg:min-h-screen lg:items-start lg:px-10">
                        <div className="relative h-[520px] w-full max-w-[680px] overflow-hidden bg-transparent sm:h-[600px] lg:h-screen lg:max-h-none lg:min-h-screen">
                            <div className="infitech-hero-card-track flex gap-5 lg:gap-6">
                                {[...carouselCards, ...carouselCards].map((card, index) => (
                                    <Link
                                        key={`${card.title}-${index}`}
                                        href={card.href}
                                        className={`relative flex h-[520px] w-full shrink-0 overflow-hidden rounded-[48px] bg-gradient-to-br ${card.color} p-8 text-infitech-surface sm:h-[600px] lg:h-[72vh] lg:max-h-[720px] lg:min-h-[560px] lg:p-12`}
                                    >
                                        {/* <p className="absolute inset-x-0 bottom-5 z-20 text-center font-mono text-sm font-black tracking-[0.06em] text-infitech-surface sm:text-lg">
                                            {card.kicker}. Built by Infitech Innovation.
                                        </p> */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-infitech-ink/20 to-transparent" />
                                        <div className="relative z-10 flex w-full items-center justify-center">
                                            <div className="grid w-full max-w-[620px] items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
                                                <div className="space-y-5">
                                                    <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-infitech-gold">
                                                        {card.kicker}
                                                    </p>
                                                    <h2 className="text-4xl font-black leading-[0.95] sm:text-5xl">
                                                        {card.title}
                                                    </h2>
                                                    <p className="max-w-sm text-base font-bold leading-7 text-infitech-surface/82 sm:text-lg">
                                                        {card.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm font-black uppercase tracking-[0.12em] text-infitech-surface/75">
                                                        {card.tags.map((tag) => (
                                                            <span key={tag}>{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="relative hidden min-h-[430px] items-center justify-center md:flex">
                                                    <div className="absolute h-72 w-72 rounded-full bg-infitech-surface/12" />
                                                    <div className="absolute h-48 w-48 rotate-12 rounded-[36px] border-8 border-infitech-gold/80" />
                                                    <div className="absolute left-8 top-16 h-24 w-24 rounded-full bg-infitech-turquoise" />
                                                    <div className="absolute bottom-16 right-10 h-28 w-28 rounded-full bg-infitech-orange" />
                                                    <div className="absolute bottom-28 left-20 h-4 w-56 rotate-[-18deg] rounded-full bg-infitech-surface" />
                                                    <div className="absolute right-24 top-28 h-4 w-44 rotate-[24deg] rounded-full bg-infitech-surface/70" />
                                                    <div className="relative text-center text-8xl font-black leading-none text-infitech-surface">
                                                        {index % 5 + 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
