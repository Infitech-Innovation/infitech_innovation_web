import { Globe2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import FooterSection from "./FooterSection";

export default function CtaSection() {
    return (
        <>
            <section className="relative isolate min-h-[544px] overflow-hidden bg-[#121313] px-4 text-white sm:px-6 lg:px-10">
                {/* Soft orange shape and the dark curved veil from the reference. */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_75%_at_99%_82%,rgba(255,165,0,0.16)_0%,transparent_62%)]" />
                    <div className="absolute left-[48%] top-[75%] h-[700px] w-[1000px] -rotate-[16deg] rounded-[50%] bg-[radial-gradient(ellipse_at_47%_40%,#6f6f6f_0%,#3d3d3d_53%,#171717_83%)] blur-[2px] max-md:left-[18%] max-md:top-[76%]" />
                    <div className="absolute -right-[13%] -top-[5%] h-[110%] w-[32%] rounded-[50%] bg-[linear-gradient(115deg,var(--infitech-orange),#8a5a00_70%)] opacity-80" />
                </div>

                <div className="relative mx-auto flex min-h-[544px] w-full max-w-[1320px] items-center py-24 lg:py-32">
                    <div className="max-w-[820px]">
                        <h1 className="max-w-[900px] text-white">
                            What could your business do better?
                        </h1>
                        <p className="max-w-[680px] pt-5 text-white/65">
                            Tell us what you&apos;re trying to improve, where you&apos;re getting stuck, or where you want the business to go. We&apos;ll start there.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-7">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-[#e7e7e7] px-7 text-[21px] font-semibold text-[#191919] shadow-[0_12px_22px_rgba(0,0,0,0.2)] transition-colors hover:bg-white sm:px-8 sm:text-[24px]"
                            >
                                <Globe2 size={26} strokeWidth={2.1} aria-hidden="true" />
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
