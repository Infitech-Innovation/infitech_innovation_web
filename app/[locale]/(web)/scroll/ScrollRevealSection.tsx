"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

/**
 * ScrollRevealSection
 * ---------------------------------------------------------------
 * Sequence as the user scrolls through this section:
 *   1. Image fills the entire viewport (full-bleed hero moment).
 *   2. As scroll progresses, the image shrinks down and settles
 *      into the left half of a flex row.
 *   3. The text on the right fades in as the image finishes
 *      shrinking, holds, then fades back out near the end.
 *
 * Requires the `motion` package:
 *   npm install motion
 */

export default function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // 0   -> section just entered the viewport (image full screen)
  // 1   -> section about to leave the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Image shrinks from full-viewport down to a left-column card
  // over the first half of the scroll, then holds.
  const imageWidth = useTransform(scrollYProgress, [0, 0.45], ["100%", "45%"]);
  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["100vh", "72vh"]
  );
  const imageRadius = useTransform(scrollYProgress, [0, 0.45], [0, 24]);

  // Text fades in only once the image has mostly finished shrinking,
  // holds fully visible, then fades out near the end of the section.
  const textOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.85, 1],
    [0, 1, 1, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.85, 1],
    [40, 0, 0, -40]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] w-full bg-neutral-950"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex h-full w-full items-center justify-center gap-10 px-6 md:gap-16 md:px-16">
          {/* Image: full screen -> shrinks into left column */}
          <motion.div
            style={{
              width: imageWidth,
              height: imageHeight,
              borderRadius: imageRadius,
            }}
            className="flex-shrink-0 overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D"
              alt="Technology close-up"
              className="h-full w-full object-cover"
              width={100}
              height={120}
            />
          </motion.div>

          {/* Text: fades in once the image has settled, fades out later */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="w-full max-w-md flex-shrink-0 md:w-1/2"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              Built for scale
            </p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Systems that shrink the distance between idea and impact.
            </h2>
            <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
              The image settles into place as this copy fades in — then
              fades back out as you keep scrolling, keeping focus on
              whatevers active.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}