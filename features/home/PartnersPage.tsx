import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import StatsPage from "./StatsPage";

const partners = [
    {
        name: "Google Cloud",
        logo: "/partners/google-cloud.svg",
        href: "https://cloud.google.com/",
        tone: "bg-infitech-surface",
        cardClass: "h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]",
        shapeClass: "rounded-full",
        logoClass: "h-[82%] w-[82%]",
    },
    {
        name: "Microsoft",
        logo: "/partners/microsoft.svg",
        href: "https://www.microsoft.com/",
        tone: "bg-infitech-cyan",
        cardClass: "h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]",
        shapeClass: "rounded-[24px] sm:rounded-[30px]",
        logoClass: "h-[84%] w-[86%]",
    },
    {
        name: "Amazon Web Services",
        logo: "/partners/aws.svg",
        href: "https://aws.amazon.com/",
        tone: "bg-infitech-gold",
        cardClass: "h-[165px] w-[285px] sm:h-[190px] sm:w-[340px]",
        shapeClass: "rounded-[28px] sm:rounded-[36px]",
        logoClass: "h-[90%] w-[92%]",
    },
    {
        name: "Stripe",
        logo: "/partners/stripe.svg",
        href: "https://stripe.com/",
        tone: "bg-infitech-orange",
        cardClass: "h-[190px] w-[190px] sm:h-[220px] sm:w-[220px]",
        shapeClass: "[clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]",
        logoClass: "h-[76%] w-[82%]",
    },
    {
        name: "Shopify",
        logo: "/partners/shopify.svg",
        href: "https://www.shopify.com/",
        tone: "bg-infitech-turquoise",
        cardClass: "h-[165px] w-[285px] sm:h-[190px] sm:w-[340px]",
        shapeClass: "rounded-[28px] sm:rounded-[36px]",
        logoClass: "h-[90%] w-[92%]",
    },
];

export default function PartnersPage() {
    const carouselPartners = [...partners, ...partners];

    return (
        <div>
            <section className="relative isolate overflow-hidden bg-infitech-surface py-14 text-infitech-ink sm:py-16 lg:py-22">
                <div className="mx-auto grid max-w-7xl items-end gap-6 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-12">
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-infitech-cyan/25" />
                        <h2 className="relative mt-3 max-w-3xl text-[2.15rem] font-black leading-[1] tracking-normal min-[390px]:text-4xl sm:text-5xl lg:text-[3.65rem]">
                            Companies growing with Infitech
                        </h2>
                    </div>
                    <p className="max-w-2xl text-sm font-semibold leading-6 text-infitech-ink/70 sm:text-base sm:leading-7 lg:justify-self-end">
                        A showcase of organizations that work with Infitech, use our products, or rely on our digital services to run smoother customer and business experiences.
                    </p>
                </div>

                <div className="relative mt-10 overflow-hidden sm:mt-12">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-infitech-surface to-transparent sm:w-28" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-infitech-surface to-transparent sm:w-28" />

                    <div className="infitech-partners-carousel flex w-max gap-4 px-4 pb-3 sm:gap-5 sm:px-6 lg:px-12">
                        {carouselPartners.map((partner, index) => (
                            <a
                                key={`${partner.name}-${index}`}
                                href={partner.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`group relative shrink-0 outline-none [perspective:1200px] ${partner.cardClass}`}
                                aria-label={`Visit ${partner.name} website`}
                            >
                                <div className={`relative h-full w-full shadow-[0_18px_45px_rgba(0,0,0,0.11)] transition duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] ${partner.shapeClass}`}>
                                    <div className={`absolute inset-0 grid place-items-center border border-infitech-ink/10 p-2 [backface-visibility:hidden] sm:p-3 ${partner.shapeClass} ${partner.tone}`}>
                                        <div className={`relative ${partner.logoClass}`}>
                                            <Image
                                                src={partner.logo}
                                                alt={`${partner.name} logo`}
                                                fill
                                                sizes="(min-width: 640px) 320px, 250px"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className={`absolute inset-0 grid place-items-center bg-infitech-ink p-5 text-infitech-surface [backface-visibility:hidden] [transform:rotateY(180deg)] ${partner.shapeClass}`}>
                                        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-infitech-surface px-5 py-3 text-sm font-black text-infitech-ink shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
                                            Visit website
                                            <ArrowUpRight className="h-4 w-4" strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <StatsPage />
        </div>
    );
}
