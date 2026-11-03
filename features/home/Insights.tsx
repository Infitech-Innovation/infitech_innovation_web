export default function Insights() {
    return (
        <section
            data-infitech-insights
            className="relative overflow-hidden bg-infitech-surface px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16"
        >
            <div className="mx-auto w-full max-w-[1320px]">

                {/* ============================= */}
                {/* SECTION INTRO                 */}
                {/* ============================= */}

                <div className="grid gap-8 border-b border-infitech-ink/15 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20 lg:pb-16">

                    {/* Left */}
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-infitech-orange">
                            INSIGHTS
                        </p>

                        <h2 className="mt-5 max-w-[680px] text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-infitech-ink sm:text-[40px] lg:text-[44px]">
                            Thinking about technology starts with thinking about the business.
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="lg:pb-1">
                        <p className="max-w-[540px] text-[16px] font-normal leading-[1.65] text-infitech-ink/70 sm:text-[17px] lg:text-[18px]">
                            Practical perspectives on the technology decisions shaping how
                            organizations work, compete, and grow.
                        </p>
                    </div>

                </div>


                {/* ============================= */}
                {/* FEATURED INSIGHT              */}
                {/* ============================= */}

                <article className="grid border-b border-infitech-ink/15 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-16">

                    {/* Featured Article Copy */}
                    <div className="flex flex-col justify-between">

                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-infitech-orange sm:text-[12px]">
                                AI & AUTOMATION
                            </p>

                            <h3 className="mt-5 max-w-[560px] text-[30px] font-semibold leading-[1.12] tracking-[-0.025em] text-infitech-ink sm:text-[32px] lg:text-[36px]">
                                Where should your business actually be using AI?
                            </h3>

                            <p className="mt-6 max-w-[540px] text-[15px] font-normal leading-[1.65] text-infitech-ink/70 sm:text-[16px]">
                                AI is creating new possibilities across the business. The
                                harder question is knowing where it can make a meaningful
                                difference and where it simply adds complexity.
                            </p>
                        </div>

                        {/* Temporary non-clickable link */}
                        <div className="mt-8 lg:mt-12">
                            <span className="group inline-flex cursor-pointer items-center gap-3 text-[15px] font-medium text-infitech-ink">
                                Read the insight

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </div>

                    </div>


                    {/* ============================= */}
                    {/* FEATURED EDITORIAL VISUAL     */}
                    {/* ============================= */}

                    <div className="mt-10 lg:mt-0">

                        <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-infitech-ink sm:min-h-[420px] lg:min-h-[460px] lg:rounded-[34px]">

                            {/* Subtle Background Structure */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-infitech-surface/30" />
                                <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full border border-infitech-surface/20" />
                            </div>


                            {/* Business Areas */}
                            <div className="absolute inset-0 flex items-center px-8 py-10 sm:px-10 lg:px-12">

                                <div className="w-full">

                                    <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-infitech-surface/50">
                                        WHERE AI CAN CREATE VALUE
                                    </p>


                                    <div className="space-y-5">

                                        {/* Customer Experience */}
                                        <div className="flex items-center gap-4">

                                            <span className="w-[125px] text-[14px] font-normal text-infitech-surface/75 sm:w-[150px] sm:text-[15px]">
                                                Customer experience
                                            </span>

                                            <div className="relative h-px flex-1 bg-infitech-surface/20">
                                                <div className="absolute left-0 top-1/2 h-[3px] w-[72%] -translate-y-1/2 bg-infitech-orange" />
                                            </div>

                                        </div>


                                        {/* Operations */}
                                        <div className="flex items-center gap-4">

                                            <span className="w-[125px] text-[14px] font-normal text-infitech-surface/75 sm:w-[150px] sm:text-[15px]">
                                                Operations
                                            </span>

                                            <div className="relative h-px flex-1 bg-infitech-surface/20">
                                                <div className="absolute left-0 top-1/2 h-[3px] w-[88%] -translate-y-1/2 bg-infitech-gold" />
                                            </div>

                                        </div>


                                        {/* Internal Workflows */}
                                        <div className="flex items-center gap-4">

                                            <span className="w-[125px] text-[14px] font-normal text-infitech-surface/75 sm:w-[150px] sm:text-[15px]">
                                                Internal workflows
                                            </span>

                                            <div className="relative h-px flex-1 bg-infitech-surface/20">
                                                <div className="absolute left-0 top-1/2 h-[3px] w-[81%] -translate-y-1/2 bg-infitech-orange" />
                                            </div>

                                        </div>


                                        {/* Decision Making */}
                                        <div className="flex items-center gap-4">

                                            <span className="w-[125px] text-[14px] font-normal text-infitech-surface/75 sm:w-[150px] sm:text-[15px]">
                                                Decision making
                                            </span>

                                            <div className="relative h-px flex-1 bg-infitech-surface/20">
                                                <div className="absolute left-0 top-1/2 h-[3px] w-[64%] -translate-y-1/2 bg-infitech-turquoise" />
                                            </div>

                                        </div>

                                    </div>


                                    {/* AI Marker */}
                                    <div className="mt-10 flex items-center justify-between border-t border-infitech-surface/15 pt-6">

                                        <p className="max-w-[260px] text-[13px] font-normal leading-[1.5] text-infitech-surface/50">
                                            Start with the problem. Then decide where AI belongs.
                                        </p>

                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-infitech-orange text-[16px] font-semibold text-infitech-ink sm:h-20 sm:w-20">
                                            AI
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </article>


                {/* ============================= */}
                {/* SUPPORTING INSIGHTS           */}
                {/* ============================= */}

                <div className="grid lg:grid-cols-2">

                    {/* Insight 2 */}
                    <article className="border-b border-infitech-ink/15 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-12">

                        <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-infitech-orange sm:text-[12px]">
                            DIGITAL TRANSFORMATION
                        </p>

                        <h3 className="mt-5 max-w-[500px] text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-infitech-ink sm:text-[24px]">
                            Before you invest in new technology, understand what is slowing
                            the business down.
                        </h3>

                        <p className="mt-5 max-w-[500px] text-[15px] font-normal leading-[1.65] text-infitech-ink/65 sm:text-[16px]">
                            A look at why transformation should begin with the business
                            problem, not the technology.
                        </p>

                        {/* Temporary non-clickable link */}
                        <span className="group mt-8 inline-flex cursor-pointer items-center gap-3 text-[15px] font-medium text-infitech-ink">
                            Read the insight

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>

                    </article>


                    {/* Insight 3 */}
                    <article className="py-10 lg:py-14 lg:pl-12">

                        <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-infitech-orange sm:text-[12px]">
                            BUSINESS SYSTEMS
                        </p>

                        <h3 className="mt-5 max-w-[500px] text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-infitech-ink sm:text-[24px]">
                            When your business grows faster than the systems behind it.
                        </h3>

                        <p className="mt-5 max-w-[500px] text-[15px] font-normal leading-[1.65] text-infitech-ink/65 sm:text-[16px]">
                            What happens when disconnected processes, information, and tools
                            begin getting in the way of growth.
                        </p>

                        {/* Temporary non-clickable link */}
                        <span className="group mt-8 inline-flex cursor-pointer items-center gap-3 text-[15px] font-medium text-infitech-ink">
                            Read the insight

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>

                    </article>

                </div>


                {/* ============================= */}
                {/* SECTION CTA                   */}
                {/* ============================= */}

                <div className="flex justify-start border-t border-infitech-ink/15 pt-8 lg:justify-end">

                    {/* Temporary non-clickable CTA */}
                    <span className="group inline-flex cursor-pointer items-center gap-4 text-[15px] font-medium text-infitech-orange sm:text-[16px]">
                        Explore All Insights

                        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </span>

                </div>

            </div>
        </section>
    );
}