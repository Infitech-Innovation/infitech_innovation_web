export default function FinalCTA() {
    return (
        <section
            data-infitech-final-cta
            className="relative overflow-hidden bg-infitech-ink px-4 py-20 text-infitech-surface sm:px-6 sm:py-24 lg:px-10 lg:py-32"
        >
            {/* Subtle background detail */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-infitech-surface/10 sm:h-[520px] sm:w-[520px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-56 right-[18%] h-[380px] w-[380px] rounded-full border border-infitech-orange/20"
            />

            <div className="relative z-10 mx-auto w-full max-w-[1320px]">

                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">

                    {/* LEFT */}
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-infitech-orange">
                            WHAT COULD YOUR BUSINESS DO BETTER?
                        </p>

                        <h2 className="mt-5 max-w-[700px] text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[40px] lg:text-[44px]">
                            Let&apos;s figure out what comes next.
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <p className="max-w-[540px] text-[16px] font-normal leading-[1.65] text-infitech-surface/70 sm:text-[17px] lg:text-[18px]">
                            Tell us where you want to go, what&apos;s getting in the way,
                            or what you&apos;re trying to improve. We&apos;ll help you
                            think through what comes next.
                        </p>

                        <div className="mt-8">
                            <span className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-full bg-infitech-orange px-7 text-[15px] font-medium text-infitech-ink transition-transform duration-300 hover:-translate-y-0.5">
                                Start a Conversation

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}