import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Link, type AppPathname } from "@/i18n/routing";
import AboutPage from "./AboutPage";
import financeBg from "@/public/finance_rmbg.png";
import hospitalityBg from "@/public/hospitality_rmbg.png";

const featuredIndustries = [
  {
    title: "Manufacturing",
    headline: "Run a more connected operation.",
    description:
      "Bring production, inventory, sales, finance, and operations together so your teams have better visibility and greater control as the business grows.",
    cta: "Explore Manufacturing",
    href: "/we-do/industry/manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Financial Services",
    headline: "Make every interaction simpler.",
    description:
      "Improve how customers access your services while giving your teams better systems, smoother processes, and clearer information behind the scenes.",
    cta: "Explore Financial Services",
    href: "/we-do/industry/financial-services",
    image: financeBg,
    imageFit: "contain",
  },
  {
    title: "Logistics & Supply Chain",
    headline: "Know what's moving and what needs attention.",
    description:
      "Connect operations, inventory, customers, and information so your teams can coordinate better and respond faster.",
    cta: "Explore Logistics & Supply Chain",
    href: "/we-do/industry/logistics-supply-chain",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Hospitality & Tourism",
    headline: "Make every guest experience count.",
    description:
      "Make it easier for guests to discover, book, communicate, and engage with your business while helping your teams manage the work behind every experience.",
    cta: "Explore Hospitality & Tourism",
    href: "/we-do/industry/hospitality-tourism",
    image: hospitalityBg,
    imageFit: "contain",
  },
  {
    title: "Healthcare",
    headline: "Improve care through clearer systems.",
    description:
      "Bring patient journeys, operations, information, and teams closer together so healthcare work becomes easier to manage and easier to trust.",
    cta: "Explore Healthcare",
    href: "/we-do/industry/healthcare",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85",
  },
] satisfies Array<{
  title: string;
  headline: string;
  description: string;
  cta: string;
  href: AppPathname;
  image: string | StaticImageData;
  imageFit?: "cover" | "contain";
}>;

const otherIndustries = [
  "Healthcare",
  "Real Estate & Construction",
  "NGOs & Development Organizations",
  "Legal & Professional Services",
  "Government & Public Sector",
];

export default function Industries() {
  return (
    <>
      <main className="min-h-screen bg-infitech-ink text-infitech-surface pt-8">
        <section className="mx-auto w-full max-w-[1640px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-5 w-full max-w-[980px] text-[1.8rem] font-light leading-[1.06] tracking-normal sm:text-[2.75rem] lg:text-[3.35rem]">
              Different industries. Different challenges.
            </h1>

            <div className="w-full max-w-[900px] lg:pt-4">
              <p className="text-[1.05rem] font-medium leading-7 text-infitech-surface/86 sm:text-[1.25rem] sm:leading-8">
                We take the time to understand how your industry works, where the pressure is, and where technology can make a real difference.
              </p>
            </div>
          </div>


          <div className="mx-auto mt-14 grid max-w-[1080px] gap-4 md:grid-cols-2 xl:mt-20 xl:grid-cols-3">
            {featuredIndustries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group relative flex min-h-[360px] overflow-hidden rounded-[6px] bg-[#f2f2ef] text-infitech-surface outline-none transition duration-700 ease-out focus-visible:ring-2 focus-visible:ring-infitech-orange md:min-h-[420px] xl:min-h-[470px]"
              >
                <div className="absolute inset-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-full group-hover:opacity-0 group-focus-visible:-translate-x-full group-focus-visible:opacity-0">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} industry`}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className={
                      industry.imageFit === "contain"
                        ? "object-contain p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110 sm:p-3"
                        : "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-focus-visible:scale-105"
                    }
                  />
                </div>
                {industry.imageFit !== "contain" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/20 to-black/75 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-full group-hover:opacity-0 group-focus-visible:-translate-x-full group-focus-visible:opacity-0" />
                )}

                <article className="relative z-10 flex w-full flex-col justify-between p-6 transition-colors duration-700 ease-out group-hover:text-infitech-ink group-focus-visible:text-infitech-ink">
                  <div>
                    <h2
                      className={`infitech-industries-card-title mt-6 text-[1.65rem] font-black leading-[1.06] transition-all duration-500 ease-out sm:text-[2rem] ${
                        industry.imageFit === "contain" ? "text-infitech-ink" : ""
                      }`}
                    >
                      {industry.title}
                    </h2>
                    <p className="infitech-industries-card-heading mt-4 max-h-0 overflow-hidden text-[1.2rem] font-black leading-tight opacity-0 transition-all duration-700 ease-out group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                      {industry.headline}
                    </p>
                    <p className="mt-5 max-h-0 overflow-hidden text-md font-medium leading-6 text-infitech-ink opacity-0 transition-all delay-75 duration-700 ease-out group-hover:max-h-60 group-hover:opacity-100 group-focus-visible:max-h-60 group-focus-visible:opacity-100">
                      {industry.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-5 pt-8">
                    <span className="max-w-[12rem] text-sm font-black text-infitech-orange opacity-0 transition duration-700 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                      {industry.cta}
                    </span>
                    <ArrowRight className="h-7 w-7 shrink-0 text-infitech-orange transition duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1" strokeWidth={1.7} />
                  </div>
                </article>
              </Link>
            ))}

            <Link
              href="/we-do/industry"
              className="group flex min-h-[360px] flex-col justify-between rounded-[6px] border border-infitech-surface/20 bg-gradient-to-br from-white via-[#fff5df] to-infitech-orange/35 p-6 text-infitech-ink transition duration-700 ease-out hover:border-infitech-orange hover:bg-none hover:bg-infitech-surface focus-visible:border-infitech-orange focus-visible:bg-none focus-visible:bg-infitech-surface focus-visible:outline-none md:min-h-[420px] xl:min-h-[470px]"
            >
              <div>
                <h2 className="infitech-industries-last-title text-[1.65rem] font-black leading-[1.06] transition-all duration-500 ease-out sm:text-[2rem]">
                  Explore All Industries
                </h2>
                <p className="infitech-industries-last-heading mt-4 max-h-0 overflow-hidden text-[1.2rem] font-black leading-tight text-black/80 opacity-0 transition-all duration-700 ease-out group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100 sm:text-[1.45rem]">
                  Other industries available on the Industries page.
                </p>
                <div className="mt-5 max-h-0 space-y-2 overflow-hidden text-sm font-semibold leading-6 text-black/68 opacity-0 transition-all delay-75 duration-700 ease-out group-hover:max-h-44 group-hover:opacity-100 group-focus-visible:max-h-44 group-focus-visible:opacity-100">
                  {otherIndustries.map((industry) => (
                    <p key={industry}>{industry}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 pt-8">
                <span className="text-sm font-black text-infitech-orange">
                  Explore All Industries
                </span>
                <ArrowRight className="h-7 w-7 text-infitech-orange transition duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1" strokeWidth={1.7} />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <AboutPage /></>
  );
}
