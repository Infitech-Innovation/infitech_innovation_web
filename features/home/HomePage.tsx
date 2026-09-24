import { Link } from "@/i18n/routing";
import HeroTechBackground from "./HeroTechBackground";
import WhatWeDo from "./WhatWeDo";

export default function HomePage() {
    const carouselCards = [
        {
            title: "Start With Your Business",
            kicker: "UNDERSTAND",
            description: "We learn how you work, where you're going, and what's getting in the way.",
            color: "",
            href: "/ai-automation-booking",
            // #from-infitech-orange via-infitech-gold to-infitech-ink
        },
        {
            title: "Focus on What Matters",
            kicker: "PRIORITIZE",
            description: "We identify where technology can make the biggest difference to your business.",
            color: "infitech-ink",
            //  from-infitech-turquoise via-infitech-cyan to-infitech-ink
            href: "/erp-saas",
        },
        {
            title: "Bring Your Business Together",
            kicker: "CONNECT",
            description: "We connect people, processes, systems, and information so work moves more smoothly.",
            color: "infitech-ink",
            // from-infitech-olive via-infitech-turquoise to-infitech-ink
            href: "/digital-transform",
        },
        {
            title: "Make Work Easier",
            kicker: "IMPROVE",
            description: "We simplify repetitive work, improve visibility, and help teams work more efficiently.",
            color: "infitech-ink",
            // from-infitech-gold via-infitech-orange to-infitech-ink
            href: "/custom-develop",
        },
        {
            title: "Build for What's Next",
            kicker: "INNOVATE",
            description: "We help you explore new ideas and technology as your business and market evolve.",
            color: "infitech-ink",
            //from-infitech-ink via-infitech-olive to-infitech-ink
            href: "/innovation",
        },
    ] as const;

    return (
        <>
            {/* HERO SECTION */}
            <main className="flex flex-1 flex-col overflow-x-hidden text-infitech-ink">
                <section
                    data-infitech-hero
                    className="relative isolate min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-[6.5rem] lg:px-10 lg:pb-16 lg:pt-28"
                >
                    <HeroTechBackground />

                    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8.5rem)] w-full max-w-[1320px] items-center gap-10 sm:gap-12 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">

                        {/* LEFT — HERO CONTENT */}
                        <div className="relative z-10 flex w-full items-center">
                            <div className="w-full max-w-[700px] py-4 sm:py-6 lg:py-0">

                                {/* Eyebrow */}
                                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-infitech-ink/65">
                                    DIGITAL TRANSFORMATION & INNOVATION
                                </p>

                                {/* Hero H1 */}
                                <h1 className="max-w-[680px] pt-5 text-infitech-ink">
                                    Your Business Is Changing.
                                    <br />
                                    Is Your Technology Keeping Up?
                                </h1>

                                {/* Supporting Copy */}
                                <p className="mt-7 max-w-[560px] text-infitech-ink/70">
                                    We help organizations work better, serve customers better,
                                    and grow with the right technology.
                                </p>

                                {/* Primary CTA */}
                                <div className="mt-9 flex">
                                    <Link
                                        href="/contact"
                                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-infitech-ink px-7 text-infitech-surface transition-colors duration-300 hover:bg-infitech-orange hover:text-infitech-ink"
                                    >
                                        Start a Conversation →
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT — MOVING CARDS */}
                        <div className="relative flex min-h-[350px] items-center justify-center sm:min-h-[440px] md:min-h-[500px] lg:min-h-0">

                            <div className="infitech-hero-card-window relative h-[320px] w-full max-w-[320px] bg-transparent min-[390px]:h-[350px] min-[390px]:max-w-[360px] sm:h-[400px] sm:max-w-[440px] md:h-[460px] md:max-w-[490px] lg:h-[58vh] lg:max-h-[570px] lg:min-h-[460px] lg:max-w-[500px]">

                                <div className="infitech-hero-card-track flex">

                                    {[...carouselCards, ...carouselCards].map((card, index) => (

                                        <div
                                            key={`${card.title}-${index}`}
                                            className="h-[320px] w-full shrink-0 basis-full min-[390px]:h-[350px] sm:h-[400px] md:h-[460px] lg:h-[58vh] lg:max-h-[570px] lg:min-h-[460px]"
                                        >
                                            <div
                                                className={`relative flex h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-br ${card.color} p-5 text-infitech-surface sm:rounded-[30px] sm:p-6 md:rounded-[34px] lg:rounded-[38px] lg:p-8`}
                                            >
                                                {/* Black Card Background */}
                                                <div className="absolute inset-0 bg-infitech-ink" />

                                                <div className="relative z-10 flex w-full items-center justify-center">

                                                    <div className="grid w-full max-w-[600px] items-center gap-5 md:grid-cols-[0.92fr_1.08fr] md:gap-7">

                                                        {/* CARD COPY */}
                                                        <div className="space-y-3 sm:space-y-4">

                                                            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-infitech-gold">
                                                                {card.kicker}
                                                            </p>

                                                            <h2 className="pt-3 text-[26px] font-semibold leading-[1.12] tracking-[-0.025em] sm:text-[28px] lg:text-[32px]">
                                                                {card.title}
                                                            </h2>

                                                            <p className="max-w-[290px] pt-3 text-[15px] font-normal leading-[1.55] text-infitech-surface/70 lg:text-[16px]">
                                                                {card.description}
                                                            </p>

                                                        </div>

                                                        {/* CARD GRAPHIC */}
                                                        <div className="relative hidden min-h-[250px] items-center justify-center md:flex lg:min-h-[320px]">

                                                            <div className="absolute h-44 w-44 rounded-full bg-infitech-surface/12 lg:h-52 lg:w-52" />

                                                            <div className="absolute h-32 w-32 rotate-12 rounded-[24px] border-8 border-infitech-gold/80 lg:h-36 lg:w-36 lg:rounded-[28px]" />

                                                            <div className="absolute left-8 top-12 h-14 w-14 rounded-full bg-infitech-gold/80 lg:top-14 lg:h-16 lg:w-16" />

                                                            <div className="absolute bottom-12 right-10 h-16 w-16 rounded-full bg-infitech-orange lg:bottom-14 lg:h-20 lg:w-20" />

                                                            <div className="absolute bottom-20 left-14 h-3 w-32 rotate-[-18deg] rounded-full bg-infitech-surface lg:bottom-20 lg:left-16 lg:w-40" />

                                                            <div className="absolute right-16 top-20 h-3 w-28 rotate-[24deg] rounded-full bg-infitech-surface/70 lg:right-16 lg:top-20 lg:w-32" />

                                                            <div className="relative text-center text-5xl font-semibold leading-none text-infitech-surface lg:text-6xl">
                                                                {index % 5 + 1}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <main className="flex flex-1 flex-col overflow-x-hidden text-infitech-ink">
                <section data-infitech-hero className="relative isolate min-h-screen overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-[6.5rem] lg:px-10 lg:pb-10 lg:pt-28">
                    <HeroTechBackground />
                    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8.5rem)] w-full max-w-[1280px] items-center gap-8 sm:gap-10 lg:min-h-[calc(100vh-9.5rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
                        <div className="relative z-10 flex w-full items-center justify-center">
                            <div className="w-full max-w-[640px] py-4 sm:py-6 lg:py-0">
                                <p>DIGITAL TRANSFORMATION & INNOVATION</p>
                                <h1 className="max-w-[680px] font-black tracking-normal text-infitech-ink pt-4 pb-4">
                                    Your business is growing.
                                    Your technology should grow with it.

                                </h1>
                                <p className="mt-4 max-w-[620px] text-infitech-ink">
                                    We help organizations improve how they work, serve their customers, and make decisions by bringing the right technology into the business at the right time.
                                </p>
                                <div className="mt-5 flex w-full max-w-[360px] flex-col gap-2 lg:max-w-[520px] lg:flex-row">
                                    <Link
                                        href="/contact"
                                        className="inline-flex min-h-11 min-w-0 sm-text flex-1 items-center justify-center rounded-full bg-infitech-ink px-4 font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink sm:min-h-12"
                                    >
                                        Start a Conversation
                                    </Link>
                                    <Link
                                        href="/we-do/capability"
                                        className="inline-flex min-h-11 min-w-0 sm-text flex-1 items-center justify-center rounded-full border bg-infitech-orange px-4 font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink sm:min-h-12"
                                    >
                                        Explore What We Do
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[460px] md:min-h-[520px] lg:min-h-0">
                            <div className="infitech-hero-card-window relative h-[320px] w-full max-w-[320px] bg-transparent min-[390px]:h-[350px] min-[390px]:max-w-[360px] sm:h-[400px] sm:max-w-[440px] md:h-[460px] md:max-w-[500px] lg:h-[62vh] lg:max-h-[620px] lg:min-h-[480px] lg:max-w-[560px]">
                                <div className="infitech-hero-card-track flex">
                                    {[...carouselCards, ...carouselCards].map((card, index) => (
                                        <div
                                            key={`${card.title}-${index}`}
                                            className="h-[320px] w-full shrink-0 basis-full min-[390px]:h-[350px] sm:h-[400px] md:h-[460px] lg:h-[62vh] lg:max-h-[620px] lg:min-h-[480px]"
                                        >
                                            <div
                                                className={`relative flex h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-br ${card.color} p-5 text-infitech-surface sm:rounded-[30px] sm:p-6 md:rounded-[34px] lg:rounded-[38px] lg:p-9`}
                                            >
                                                <div className="absolute inset-0 bg-infitech-ink" />
                                                <div className="relative z-10 flex w-full items-center justify-center">
                                                    <div className="grid w-full max-w-[620px] items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                                                        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                                                            <p className="font-mono font-black uppercase text-infitech-gold">
                                                                {card.kicker}
                                                            </p>
                                                            <h2 className="font-black pt-4">
                                                                {card.title}
                                                            </h2>
                                                            <p className="max-w-sm font-bold text-infitech-surface/82 pt-4">
                                                                {card.description}
                                                            </p>
                                                        </div>
                                                        <div className="relative hidden min-h-[260px] items-center justify-center md:flex lg:min-h-[360px]">
                                                            <div className="absolute h-44 w-44 rounded-full bg-infitech-surface/12 lg:h-60 lg:w-60" />
                                                            <div className="absolute h-32 w-32 rotate-12 rounded-[24px] border-8 border-infitech-gold/80 lg:h-40 lg:w-40 lg:rounded-[30px]" />
                                                            <div className="absolute left-8 top-12 h-14 w-14 rounded-full bg-infitech-gold/80 lg:top-14 lg:h-20 lg:w-20" />
                                                            <div className="absolute bottom-12 right-10 h-16 w-16 rounded-full bg-infitech-orange lg:bottom-14 lg:h-24 lg:w-24" />
                                                            <div className="absolute bottom-20 left-14 h-3 w-32 rotate-[-18deg] rounded-full bg-infitech-surface lg:bottom-24 lg:left-18 lg:w-48" />
                                                            <div className="absolute right-16 top-20 h-3 w-28 rotate-[24deg] rounded-full bg-infitech-surface/70 lg:right-20 lg:top-24 lg:w-36" />
                                                            <div className="relative text-center text-6xl font-black leading-none text-infitech-surface lg:text-7xl">
                                                                {index % 5 + 1}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main> */}
            <WhatWeDo />
        </>
    );
}
