"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const clientStories = [
    {
        title: "Eco Print Generation",
        shortTitle: "Plastic Waste to Education Models",
        description: "A continent where every learner can touch, see, and build science— powered by sustainable materials and community innovation.",
        detail: "We transform plastic waste into affordable 3D-printing filaments and classroom-ready STEM models—making hands-on learning accessible while cleaning our environment.From oceans and landfills to labs and schools, EcoPrint Generation connects circular materials with real education impact.",
        href: "https://ecoprintgeneration.co.ke/",
        image: "https://fx.iguanyalabs.com/images/EcoPrintGeneration/img/gyqgmn0awfvulr3dfoio.png",
        accent: "bg-infitech-cyan",
        panel: "from-infitech-cyan/85 to-infitech-turquoise",
        points: ["Cloud-ready workflows", "Portable service architecture", "Cleaner handoffs"],
    },
    {
        title: "Ndogo Farms",
        shortTitle: "Small Space? Big Harvest!",
        description: "Use automation to reduce repetitive work while keeping customer touchpoints responsive.",
        detail: "At Ndogo Farms, we make urban farming effortless. Whether you have a balcony, rooftop, or a small backyard, we provide eco-friendly grow bags, raised beds, and vertical gardens to help you grow fresh, organic veggies at home. With organic soil, fertilizers, and natural pest control, we ensure your food is chemical-free and nutrient-rich",
        href: "https://ndogofarms.co.ke/",
        image: "https://ndogofarms.co.ke/img/newlogobg.png",
        accent: "bg-infitech-orange",
        panel: "from-infitech-orange/90 to-infitech-gold",
        points: ["Smart intake flows", "Automated updates", "Human review paths"],
    },
    {
        title: "Cable link",
        shortTitle: "Harness the Power of Connectivity with Through Cable Link",
        description: "Welcome to Through Cable Link, where the future of connectivity is at your fingertips.",
        detail: "Our mission is simple: to connect people, businesses, and communities, transcending geographical boundaries. With a commitment to cutting-edge technology, we offer lightning-fast internet services that empower you to stay connected, work seamlessly, and explore the digital universe.",
        href: "https://cablelink.co.ke/",
        image: "https://cablelink.co.ke/img/logo.png",
        accent: "bg-infitech-gold",
        panel: "from-infitech-gold/90 to-infitech-olive",
        points: ["Live dashboards", "Structured reporting", "Operational metrics"],
    },
    {
        title: "KBCCI",
        shortTitle: "Connecting Kenya & Belgium for Innovation",
        description: "The Kenya Benelux-EU Chamber of Commerce & Industry (KBCCI) is a new bridge for growth, connecting Kenyan and European businesses for trade, investment, and partnerships.",
        detail: "The Chamber builds on a long-standing tradition of business cooperation and aims to provide a formal, credible, and sustainable platform for partnerships across sectors.Its founding team includes professionals from Kenya and Europe, with strong support from the Kenyan Embassy in Belgium and key advisors with deep experience in innovation, diplomacy, business development, and institutional networks.",
        href: "https://www.kenya-benelux.trade/",
        image: "https://www.kenya-benelux.trade/img/KBCCI%20LOGO.png",
        accent: "bg-infitech-ink",
        panel: "from-infitech-ink to-neutral-700",
        points: ["MVP planning", "Custom portals", "API integrations"],
    },
] as const;

export default function ClientStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStory = clientStories[activeIndex];

    const goToStory = useCallback((index: number) => {
        setActiveIndex((index + clientStories.length) % clientStories.length);
    }, []);

    const showNextStory = useCallback(() => {
        goToStory(activeIndex + 1);
    }, [activeIndex, goToStory]);

    useEffect(() => {
        const intervalId = window.setInterval(showNextStory, 6500);

        return () => window.clearInterval(intervalId);
    }, [showNextStory]);

    return (
        <section className="bg-infitech-surface px-4 py-14 text-infitech-ink sm:px-6 lg:px-10">
            <h1 className="text-center text-[2.6rem] font-black leading-tight tracking-normal text-infitech-ink min-[390px]:text-[2.85rem] sm:text-[3.55rem] lg:mt-4 lg:mb-8 lg:text-[2.0rem] xl:text-[4.0rem]">
                    Client Story
                </h1>
            <div className="mx-auto max-w-7xl">
                <div className="flex items-stretch">
                    <div
                        role="tablist"
                        aria-label="Client story carousel"
                        className="flex flex-1 snap-x snap-mandatory overflow-x-auto rounded-[8px] border border-infitech-ink/12 bg-neutral-50"
                    >
                        {clientStories.map((story, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={story.title}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls="client-story-panel"
                                    onClick={() => goToStory(index)}
                                    className={`group relative flex min-h-24 min-w-[190px] flex-1 snap-center flex-col items-center justify-center gap-2 border-r border-infitech-ink/12 p-3 text-center transition hover:bg-white lg:min-h-28 ${isActive ? "bg-white" : "bg-neutral-50"}`}
                                >
                                    <span
                                        className={`grid place-items-center overflow-hidden bg-white p-1.5 transition ${isActive ? "border-transparent shadow-[0_10px_20px_rgba(0,0,0,0.1)]" : "border-infitech-ink/15 opacity-45 group-hover:opacity-80"}`}
                                    >
                                        <Image
                                            src={story.image}
                                            alt={`${story.title} logo`}
                                            width={68}
                                            height={48}
                                            className="h-12 w-17 object-contain"
                                        />
                                    </span>
                                    {/* <span className={`text-sm font-black ${isActive ? "text-infitech-ink" : "text-infitech-ink/45"}`}>
                                        {story.shortTitle}
                                    </span> */}
                                    <span className={`absolute inset-x-0 bottom-0 h-1.5 bg-infitech-gold transition ${isActive ? "opacity-100" : "opacity-0"}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-5 flex justify-center gap-2">
                    {clientStories.map((story, index) => (
                        <button
                            key={`${story.title}-dot`}
                            type="button"
                            aria-label={`Show ${story.title}`}
                            onClick={() => goToStory(index)}
                            className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-8 bg-infitech-orange" : "w-2.5 bg-infitech-ink/20 hover:bg-infitech-ink/40"}`}
                        />
                    ))}
                </div>

                <motion.div
                    key={activeStory.title}
                    id="client-story-panel"
                    role="tabpanel"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16"
                >
                    <div className="flex min-h-[320px] items-center justify-center rounded-[8px] bg-neutral-100 p-8 sm:min-h-[420px]">
                        <div className="relative flex h-72 w-56 items-end justify-center sm:h-80 sm:w-64">
                            <div className={`absolute bottom-10 h-60 w-32 bg-gradient-to-b ${activeStory.panel} shadow-[0_22px_40px_rgba(0,0,0,0.12)] sm:h-72 sm:w-36`} />
                            <div className="absolute bottom-0 h-12 w-40 skew-y-[-30deg] bg-white shadow-[0_14px_24px_rgba(0,0,0,0.08)] sm:w-48" />
                            <div className="absolute bottom-0 h-12 w-40 skew-y-[30deg] bg-neutral-200/90 sm:w-48" />
                            <div className="absolute bottom-28 grid h-24 w-36 place-items-center rounded-[8px] border-4 border-white bg-white p-3 shadow-[0_18px_34px_rgba(0,0,0,0.14)] sm:bottom-32 sm:h-28 sm:w-44">
                                <Image
                                    src={activeStory.image}
                                    alt={`${activeStory.title} logo`}
                                    width={176}
                                    height={112}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
                        <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-infitech-orange">
                            Client story
                        </p>
                        <h2 className="mt-3 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                            {activeStory.title}
                        </h2>
                        <p className="mt-6 text-lg font-semibold leading-8 text-infitech-ink/78">
                            {activeStory.description}
                        </p>
                        <p className="mt-4 text-sm font-semibold leading-6 text-infitech-ink/62 sm:text-base sm:leading-7">
                            {activeStory.detail}
                        </p>
                        <a
                            href={activeStory.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-3 text-lg font-black text-blue-600 transition hover:text-infitech-orange"
                        >
                            Explore more
                            <ArrowRight className="h-6 w-6" strokeWidth={2.1} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
