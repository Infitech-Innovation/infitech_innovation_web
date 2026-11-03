
"use client";

import Image from "next/image";

const outcomes = [
  {
    number: "01",
    title: "Time back for your people",
    description: "Less repetitive work. More time for what matters.",
  },
  {
    number: "02",
    title: "A clearer picture",
    description: "Better visibility to make confident decisions.",
  },
  {
    number: "03",
    title: "Work that flows",
    description: "Fewer workarounds. Better collaboration.",
  },
  {
    number: "04",
    title: "Ready for what's next",
    description: "A stronger foundation for growth.",
  },
];

export default function DigitalTransformationOutcomes() {
  return (
    <section
      id="transformation-outcomes"
      aria-labelledby="outcomes-heading"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch lg:gap-10">
          {/* Left: heading and people */}
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#FFA500]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FFA500]">
                The Impact
              </span>
            </div>

            <h2
              id="outcomes-heading"
              className="mt-4 text-[clamp(2.3rem,3.6vw,3.65rem)] font-semibold leading-[1.07] tracking-[-0.05em]"
            >
              Less friction.
              <br />
              More room to grow.
            </h2>

            <p className="mt-3 max-w-[440px] text-[14px] leading-[1.65] text-white/65 sm:text-[15px]">
              When work becomes easier for your people,
              the whole business moves forward.
            </p>

            {/* Team photograph */}
            <div className="relative mt-6 aspect-[2.15/1] w-full overflow-hidden bg-[#101010]">
              <Image
                src="https://images.pexels.com/photos/7550312/pexels-photo-7550312.jpeg"
                alt="A team working together around a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              {/* Updated black gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="pointer-events-none absolute bottom-4 left-5 flex items-center gap-2">
                <span className="h-px w-6 bg-[#FFA500]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-white">
                  People first. Progress follows.
                </span>
              </div>
            </div>
          </div>

          {/* Right: compact outcome grid */}
          <div className="relative flex min-w-0 flex-col justify-end">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
                What changes
              </span>

              <span className="h-px flex-1 bg-white/15" />
            </div>

            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {/* Animated connection */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 310"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
              >
                <path
                  d="M200 78 V232"
                  fill="none"
                  stroke="#FFA500"
                  strokeWidth="1.5"
                  strokeDasharray="4 7"
                  className="infitech-outcome-flow"
                />

                <circle
                  cx="200"
                  cy="78"
                  r="3"
                  fill="#FFA500"
                />

                <circle
                  cx="200"
                  cy="232"
                  r="3"
                  fill="#FFA500"
                />
              </svg>

              {outcomes.map((outcome) => (
                <article
                  key={outcome.number}
                  className="group relative min-h-[155px] border border-white/15 bg-[#101010] p-5 transition-colors duration-300 hover:border-[#FFA500]/60 sm:min-h-[170px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.12em] text-[#FFA500]">
                      {outcome.number}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#FFA500]" />
                  </div>

                  <h3 className="mt-5 text-[17px] font-semibold leading-[1.25] tracking-[-0.025em]">
                    {outcome.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.6] text-white/55">
                    {outcome.description}
                  </p>

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFA500] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infitechOutcomeFlow {
          to {
            stroke-dashoffset: -44;
          }
        }

        .infitech-outcome-flow {
          animation: infitechOutcomeFlow 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .infitech-outcome-flow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
