"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CalendarDays } from "lucide-react";
import { competition } from "@/config/competition";
import LiveCountdown from "@/components/ui/LiveCountdown";

export default function DeadlineSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="deadline"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden starfield"
      aria-labelledby="deadline-heading"
    >
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deep-space to-midnight" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,185,91,0.08),transparent_70%)]" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Calendar icon */}
          <div className="w-20 h-20 rounded-2xl bg-moon-gold/10 border border-moon-gold/20 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-moon-gold/5">
            <CalendarDays className="w-10 h-10 text-moon-gold" aria-hidden="true" />
          </div>

          {/* Heading */}
          <p className="text-xs md:text-sm font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60 mb-4">
            Final Artwork Submission Deadline
          </p>

          <h2
            id="deadline-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-gold mb-6"
          >
            {competition.submissionDeadlineDisplay}
          </h2>

          <p className="text-lunar-ivory/60 text-base md:text-lg mb-8 max-w-xl mx-auto">
            All artwork must be submitted before the deadline closes.
          </p>

          {/* Live Real-time Countdown: Days, Hours, Minutes, Seconds */}
          <div className="mt-4">
            <LiveCountdown variant="full" showLabel={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
