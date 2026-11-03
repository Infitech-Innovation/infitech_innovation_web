
"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn how your business works and uncover what's holding it back.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "We identify the changes that will make the biggest difference.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "We bring people, processes, systems, and data together.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We measure results and refine what needs to work better.",
  },
  {
    number: "05",
    title: "Innovate",
    description:
      "We build on progress to create new opportunities for growth.",
  },
];

const STEP_DURATION = 1700;
const END_PAUSE = 1700;

export default function DigitalTransformationApproach() {
  const sectionRef = useRef<HTMLElement>(null);

  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (activeStep === steps.length - 1) {
      timeout = setTimeout(() => {
        setActiveStep(0);
      }, STEP_DURATION + END_PAUSE);
    } else {
      timeout = setTimeout(() => {
        setActiveStep((previous) => previous + 1);
      }, STEP_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [activeStep, inView, reducedMotion]);

  const progress =
    (activeStep / (steps.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="transformation-approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden bg-[#FEFFFE] text-[#111111]"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#FFA500]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B87800]">
                Our Approach
              </span>
            </div>

            <h2
              id="approach-heading"
              className="mt-4 text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.1] tracking-[-0.045em]"
            >
              How progress takes shape.
            </h2>
          </div>

          <p className="max-w-[420px] text-[15px] leading-[1.7] text-black/55">
            We start by understanding your business.
            Every step after that builds on what we learn.
          </p>
        </div>

        {/* Journey */}
        <div className="relative mt-12 md:mt-11">
          {/* Horizontal track */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-[13px] hidden h-[2px] bg-black/10 md:block"
          >
            <div
              className="absolute left-0 top-0 h-full bg-[#FFA500] transition-[width] duration-[1000ms] ease-in-out motion-reduce:transition-none"
              style={{
                width: reducedMotion
                  ? "100%"
                  : `${progress}%`,
              }}
            />

            {/* Moving signal */}
            {!reducedMotion && (
              <div
                className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFA500] shadow-[0_0_0_5px_rgba(255,165,0,0.15)] transition-[left] duration-[1000ms] ease-in-out"
                style={{ left: `${progress}%` }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => {
              const isActive =
                reducedMotion || (inView && activeStep === index);

              const isCompleted =
                reducedMotion || (inView && activeStep > index);

              return (
                <div
                  key={step.number}
                  className="group relative flex min-w-0 gap-5 md:flex-col md:gap-0"
                >
                  {/* Node */}
                  <div className="relative flex w-7 shrink-0 flex-col items-center md:mx-auto md:w-full">
                    <div
                      className={`relative z-10 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "scale-110 border-[#FFA500] bg-[#FFA500] shadow-[0_0_0_6px_rgba(255,165,0,0.13)]"
                          : isCompleted
                          ? "border-[#FFA500] bg-[#FEFFFE]"
                          : "border-black/15 bg-[#FEFFFE]"
                      }`}
                    >
                      <span
                        className={`h-[7px] w-[7px] rounded-full transition-colors duration-500 ${
                          isActive
                            ? "bg-black"
                            : isCompleted
                            ? "bg-[#FFA500]"
                            : "bg-black/20"
                        }`}
                      />
                    </div>

                    {/* Stem */}
                    <div
                      aria-hidden="true"
                      className={`hidden h-[21px] w-[2px] transition-colors duration-500 md:block ${
                        isActive || isCompleted
                          ? "bg-[#FFA500]"
                          : "bg-black/10"
                      }`}
                    />

                    {/* Mobile vertical track */}
                    {index !== steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute top-[28px] bottom-0 w-[2px] bg-black/10 md:hidden"
                      >
                        <div
                          className={`w-full bg-[#FFA500] transition-[height] duration-700 ${
                            isCompleted ? "h-full" : "h-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`relative mb-5 min-w-0 flex-1 border bg-white px-5 py-5 transition-[border-color,box-shadow,transform] duration-500 md:mb-0 md:flex md:min-h-[192px] md:flex-col md:px-4 md:py-5 lg:min-h-[180px] lg:px-5 ${
                      isActive
                        ? "-translate-y-[3px] border-[#FFA500]/70 shadow-[0_10px_26px_rgba(0,0,0,0.06)]"
                        : "border-black/[0.09]"
                    }`}
                  >
                    {/* Active top edge */}
                    <span
                      aria-hidden="true"
                      className={`absolute -top-px left-0 h-[2px] bg-[#FFA500] transition-[width] duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />

                    <span className="text-[11px] font-semibold tracking-[0.12em] text-[#B87800]">
                      {step.number}
                    </span>

                    <h3 className="mt-2.5 text-[19px] font-semibold leading-[1.2] tracking-[-0.035em]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.65] text-black/55">
                      {step.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 md:mt-auto md:pt-5">
                      <span
                        className={`h-[2px] bg-[#FFA500] transition-[width] duration-500 ${
                          isActive ? "w-11" : "w-6"
                        }`}
                      />

                      <span className="h-[3px] w-[3px] rounded-full bg-black/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
