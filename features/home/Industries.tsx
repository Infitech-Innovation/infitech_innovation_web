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
      "Connect production, inventory, finance, sales, and operations to improve visibility, reduce manual processes, and make better decisions across the business.",
    cta: "Explore Manufacturing",
    href: "/we-do/industry/manufacturing",
    image:
      "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Financial Services",
    headline: "Make every interaction simpler.",
    description:
      "Improve customer experiences, streamline internal processes, and connect information across your organization with secure, scalable digital systems.",
    cta: "Explore Financial Services",
    href: "/we-do/industry/financial-services",
    image: financeBg,
    imageFit: "contain",
  },
  {
    title: "Logistics & Supply Chain",
    headline: "Know what's moving and what needs attention.",
    description:
      "Connect logistics, inventory, warehousing, customers, and operational data to improve visibility and coordination across your supply chain.",
    cta: "Explore Logistics & Supply Chain",
    href: "/we-do/industry/logistics-supply-chain",
    image:
      "https://images.unsplash.com/photo-1759272840538-ae4b07214c71?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Hospitality & Tourism",
    headline: "Make every guest experience count.",
    description:
      "Connect bookings, customer communication, service, and operations to create smoother guest experiences and help your teams work more effectively.",
    cta: "Explore Hospitality & Tourism",
    href: "/we-do/industry/hospitality-tourism",
    image: hospitalityBg,
    imageFit: "contain",
  },
  {
    title: "Healthcare",
    headline: "Make care easier to access and manage.",
    description:
      "Improve how patients, teams, and information move through your organization with connected digital experiences and simpler processes.",
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
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-5 w-full max-w-[980px]">
              Different industries. Different challenges.
            </h1>

            <div className="w-full max-w-[900px] lg:pt-4">
              <p className="text-infitech-surface/86">
                We take the time to understand how your industry works, where the pressure is, and where technology can make a real difference.
              </p>
            </div>
          </div>


          {/* <div className="mx-auto mt-14 grid max-w-[1080px] gap-4 md:grid-cols-2 xl:mt-20 xl:grid-cols-3"> */}
          <div className="mx-auto mt-14 grid w-full max-w-[980px] gap-4 md:grid-cols-2 xl:mt-20 xl:grid-cols-3">

            {featuredIndustries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                // className="group relative flex min-h-[360px] overflow-hidden rounded-[6px] bg-[#f2f2ef] text-infitech-surface outline-none transition duration-700 ease-out focus-visible:ring-2 focus-visible:ring-infitech-orange md:min-h-[420px] xl:min-h-[470px]"
                className="group relative flex min-h-[280px] overflow-hidden rounded-[6px] bg-[#f2f2ef] text-infitech-surface outline-none transition duration-700 ease-out focus-visible:ring-2 focus-visible:ring-infitech-orange md:min-h-[330px] xl:min-h-[370px]"

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
                    <h3
                      className={`infitech-industries-card-title mt-6 max-h-20 overflow-hidden font-black transition-all duration-500 ease-out group-hover:max-h-0 group-hover:mt-0 group-hover:opacity-0 group-focus-visible:max-h-0 group-focus-visible:mt-0 group-focus-visible:opacity-0 ${industry.imageFit === "contain" ? "text-infitech-ink" : ""
                        }`}
                    >
                      {industry.title}
                    </h3>

                    <h3 className="infitech-industries-card-heading pt-4 max-h-0 overflow-hidden font-black opacity-0 transition-all duration-700 ease-out group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                      {industry.headline}
                    </h3>
                    <p className=" pt-4 max-h-0 overflow-hidden font-medium text-infitech-ink opacity-0 transition-all delay-75 duration-700 ease-out group-hover:max-h-60 group-hover:opacity-100 group-focus-visible:max-h-60 group-focus-visible:opacity-100">
                      {industry.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-5 pt-8">
                    <span className="max-w-[12rem] sm-text font-black text-infitech-orange opacity-0 transition duration-700 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                      {industry.cta}
                    </span>
                    <ArrowRight className="h-7 w-7 shrink-0 text-infitech-orange transition duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1" strokeWidth={1.7} />
                  </div>
                </article>
              </Link>
            ))}

            <Link
              href="/we-do/industry"
              // className="group flex min-h-[360px] flex-col justify-between rounded-[6px] border border-infitech-surface/20 bg-gradient-to-br from-white via-[#fff5df] to-infitech-orange/35 p-6 text-infitech-ink transition duration-700 ease-out hover:border-infitech-orange hover:bg-none hover:bg-infitech-surface focus-visible:border-infitech-orange focus-visible:bg-none focus-visible:bg-infitech-surface focus-visible:outline-none md:min-h-[420px] xl:min-h-[470px]"
              className="group flex min-h-[360px] flex-col justify-between rounded-[6px] border border-infitech-surface/20 bg-gradient-to-br from-white via-[#fff5df] to-infitech-orange/35 p-6 text-infitech-ink transition duration-700 ease-out hover:border-infitech-orange hover:bg-none hover:bg-infitech-surface focus-visible:border-infitech-orange focus-visible:bg-none focus-visible:bg-infitech-surface focus-visible:outline-none md:min-h-[330px] xl:min-h-[370px]"

            >
              <div>
                <h3 className="infitech-industries-last-title mt-6 max-h-20 overflow-hidden font-black opacity-100 transition-all duration-500 ease-out group-hover:mt-0 group-hover:max-h-0 group-hover:opacity-0 group-focus-visible:mt-0 group-focus-visible:max-h-0 group-focus-visible:opacity-0">
                  Explore All Industries
                </h3>

                <h3 className="infitech-industries-last-heading pt-4 max-h-0 overflow-hidden font-black text-black/80 opacity-0 transition-all duration-700 ease-out group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                  Other industries available on the Industries page.
                </h3>
                <div className="mt-5 max-h-0 space-y-2 overflow-hidden text-sm font-semibold leading-6 text-black/68 opacity-0 transition-all delay-75 duration-700 ease-out group-hover:max-h-44 group-hover:opacity-100 group-focus-visible:max-h-44 group-focus-visible:opacity-100">
                  <ul className="list-disc pl-5">
                    {otherIndustries.map((industry) => (
                      <li className="sm-text" key={industry}>{industry}</li>
                    ))}
                  </ul>

                </div>
              </div>

              <div className="flex items-center justify-between gap-5 pt-8">
                <span className="sm-text text-infitech-orange">
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
