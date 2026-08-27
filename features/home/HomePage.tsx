import { Link } from "@/i18n/routing";
import HeroTechBackground from "./HeroTechBackground";
import CapabilitiesPage from "./CapabilitiesPage";

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
            {/* Hero Section */}
            <main className="flex flex-1 flex-col text-infitech-ink">
                <section data-infitech-hero className="relative isolate min-h-screen overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-10 lg:pb-12 lg:pt-36">
                    <HeroTechBackground />
                    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-8 sm:gap-10 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
                        <div className="relative z-10 flex w-full items-center justify-center">
                            <div className="w-full max-w-[640px] py-4 sm:py-6 lg:py-0">
                                <p>DIGITAL TRANSFORMATION & INNOVATION</p>
                                <h1 className="max-w-[680px] text-[2.2rem] font-black leading-[1.04] tracking-normal text-infitech-ink min-[390px]:text-[2.45rem] sm:text-[2.7rem] lg:text-[2rem] xl:text-[3.25rem]">
                                    Your Business Is Growing.
                                    Your Technology Should Grow With It.

                                </h1>
                                <p className="mt-4 max-w-[620px] text-sm font-semibold leading-6 text-infitech-ink sm:text-base sm:leading-7 lg:text-[1.15rem] lg:leading-7">
                                   We help organizations improve how they work, serve their customers, and make decisions by bringing the right technology into the business at the right time.
                                </p>
                                <div className="mt-5 flex w-full max-w-[360px] flex-col gap-2 lg:max-w-[520px] lg:flex-row">
                                    <Link
                                        href="/digital-transform"
                                        className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full bg-infitech-ink px-4 text-sm font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink sm:min-h-12"
                                    >
                                        Start a Conversation
                                    </Link>
                                    <Link
                                        href="/digital-transform"
                                        className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full border bg-infitech-orange px-4 text-sm font-black text-infitech-surface transition hover:bg-infitech-orange hover:text-infitech-ink sm:min-h-12"
                                    >
                                        Explore What We Do
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[460px] md:min-h-[520px] lg:min-h-0">
                            <div className="infitech-hero-card-window relative h-[320px] w-full max-w-[390px] bg-transparent min-[390px]:h-[350px] min-[390px]:max-w-[390px] sm:h-[400px] sm:max-w-[460px] md:h-[460px] md:max-w-[560px] lg:h-[62vh] lg:max-h-[620px] lg:min-h-[480px] lg:max-w-[580px]">
                                <div className="infitech-hero-card-track flex">
                                    {[...carouselCards, ...carouselCards].map((card, index) => (
                                        <div
                                            key={`${card.title}-${index}`}
                                            className="h-[320px] w-full shrink-0 basis-full min-[390px]:h-[350px] sm:h-[400px] md:h-[460px] lg:h-[62vh] lg:max-h-[620px] lg:min-h-[480px]"
                                        >
                                            {/* <Link
                                                href={card.href} */}
                                            <div
                                                className={`relative flex h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-br ${card.color} p-5 text-infitech-surface sm:rounded-[30px] sm:p-6 md:rounded-[34px] lg:rounded-[38px] lg:p-9`}
                                            >
                                                {/* <p className="absolute inset-x-0 bottom-5 z-20 text-center font-mono text-sm font-black tracking-[0.06em] text-infitech-surface sm:text-lg">
                                            {card.kicker}. Built by Infitech Innovation.
                                        </p> */}
                                                <div className="absolute inset-0 bg-infitech-ink" /> {/*// gradient-to-r from-infitech-ink to-transparent */}
                                                <div className="relative z-10 flex w-full items-center justify-center">
                                                    <div className="grid w-full max-w-[620px] items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                                                        <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                                                            <p className="font-mono text-base font-black uppercase tracking-[0.16em] text-infitech-gold sm:text-lg lg:text-xl">
                                                                {card.kicker}
                                                            </p>
                                                            <h2 className="text-2xl font-black leading-[0.98] min-[390px]:text-3xl sm:text-4xl">
                                                                {card.title}
                                                            </h2>
                                                            <p className="max-w-sm text-sm font-bold leading-6 text-infitech-surface/82 sm:text-base sm:leading-7 lg:text-base">
                                                                {card.description}
                                                            </p>
                                                            {/* <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.1em] text-infitech-surface/75 sm:gap-x-5 sm:text-xs lg:text-sm">
                                                                {card.tags.map((tag) => (
                                                                    <span key={tag}>{tag}</span>
                                                                ))}
                                                            </div> */}
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
            </main>

            {/* Service Section */}
            {/* <ServicesPage /> */}
            <CapabilitiesPage />
        </>
    );
}
