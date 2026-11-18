
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function DigitalTransformationCTA() {
  const params = useParams();
  const locale =
    typeof params?.locale === "string" ? params.locale : "en";

  return (
    <section
      id="transformation-cta"
      aria-labelledby="transformation-cta-heading"
      className="relative isolate overflow-hidden bg-[#FEFFFE] text-black"
    >
      {/* Subtle background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 380"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Fine dark circle */}
          <circle
            cx="1130"
            cy="165"
            r="270"
            stroke="#000000"
            strokeOpacity="0.07"
            strokeWidth="1"
          />

          {/* Orange outer circle */}
          <circle
            cx="1130"
            cy="165"
            r="365"
            stroke="#FFA500"
            strokeOpacity="0.22"
            strokeWidth="1"
          />

          {/* Animated orange connection */}
          <path
            d="M650 410 C750 210 1020 205 1230 390"
            stroke="#FFA500"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            className="dt-cta-flow"
          />

          {/* Secondary dark curve */}
          <path
            d="M830 -80 C1020 110 1190 65 1490 220"
            stroke="#000000"
            strokeOpacity="0.07"
            strokeWidth="1"
          />

          <circle
            cx="1130"
            cy="165"
            r="3"
            fill="#FFA500"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* CTA content */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-[76px] lg:px-12 lg:py-[82px]">
        <div className="grid items-center gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          {/* Left: headline */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#FFA500]" />

              <span className="  uppercase  text-[#B87800]">
                What could work better?
              </span>
            </div>

            <h2
              id="transformation-cta-heading"
              className="max-w-[680px]     text-black"
            >
              Let&apos;s figure out what
              <br className="hidden sm:block" />
              {" "}needs to change.
            </h2>
          </div>

          {/* Right: supporting copy and CTA */}
          <div className="flex min-w-0 flex-col items-start">
            <p className="max-w-[445px]   text-black/65 ">
              Tell us what&apos;s slowing your business down.
              We&apos;ll help you find a practical place to start.
            </p>

            <Link
              href={`/${locale}/contact`}
              className="group mt-7 inline-flex min-h-[52px] items-center justify-center gap-7 rounded-full bg-[#FFA500] px-7 py-3   text-black transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:bg-[#FFB52E] hover:shadow-[0_10px_30px_rgba(255,165,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFA500]"
            >
              <span>Start a Conversation</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-[19px] w-[19px] transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 12H20M14 6L20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes digitalTransformationCTAFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -120;
          }
        }

        .dt-cta-flow {
          stroke-dasharray: 7 12;
          animation: digitalTransformationCTAFlow 14s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dt-cta-flow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
