"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Telescope, Quote } from "lucide-react";
import { competition } from "@/config/competition";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="about"
      className="section-light py-20 md:py-28 lg:py-32 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle decorative dots */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.04]">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-deep-space" />
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Telescope className="w-5 h-5 text-deep-space/60" aria-hidden="true" />
              <span className="text-xs font-display font-medium tracking-[0.2em] uppercase text-deep-space/50">
                About the Competition
              </span>
            </div>

            <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
              Your Canvas.{" "}
              <span className="text-deep-space-light">Our Universe.</span>{" "}
              <span className="text-gradient-gold bg-gradient-to-r from-[#C99A3B] to-[#E9B95B] bg-clip-text text-transparent">
                An Infinite Future.
              </span>
            </h2>

            <p className="text-deep-space/70 text-base md:text-lg leading-relaxed mb-6">
              The Astronomy &amp; Space Study Center (ASSC) invites schoolchildren,
              university students, and eligible creative participants to participate
              in the Open Painting Competition 2026, under the theme{" "}
              <strong className="text-midnight font-semibold">&lsquo;MAN, MOON &amp; FUTURE&rsquo;</strong>.
            </p>

            <p className="text-deep-space/60 text-base leading-relaxed">
              This competition provides a platform to express creativity, explore
              astronomy and space, and imagine humanity&apos;s future beyond Earth.
              Whether you paint with brushes or create with digital tools, your
              vision of the cosmos deserves to be seen.
            </p>
          </motion.div>

          {/* Right decorative / quote */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative bg-gradient-to-br from-deep-space to-midnight rounded-2xl p-8 md:p-10 text-lunar-ivory shadow-xl border border-white/10 overflow-hidden">
              {/* Subtle cosmic art background inside card */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/images/hero-cosmic-art.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center opacity-25 mix-blend-screen scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-deep-space/85 via-midnight/80 to-midnight/95" />
              </div>

              <div className="relative z-10">
                {/* Logo & Organiser Header */}
                <div className="flex items-center gap-3.5 mb-6">
                <div className="relative w-14 h-14 rounded-full bg-white/10 p-1 border border-white/20 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={competition.logoUrl}
                    alt="ASSC Official Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-lunar-ivory leading-tight">
                    Astronomy &amp; Space Study Center
                  </h3>
                  <span className="text-xs text-moon-gold font-medium">Official Organiser</span>
                </div>
              </div>

              <Quote className="w-8 h-8 text-moon-gold/30 mb-3" aria-hidden="true" />
              <blockquote className="font-display text-lg md:text-xl font-medium leading-snug mb-6">
                &ldquo;The Universe is under no obligation to make sense to you — but your
                art can make sense of the Universe.&rdquo;
              </blockquote>
              <div className="h-px bg-gradient-to-r from-moon-gold/30 to-transparent mb-4" />
              <p className="text-lunar-ivory/50 text-xs font-display">
                ASSC Open Painting Competition 2026
              </p>

              {/* Decorative stars */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-moon-gold/40" />
              <div className="absolute top-8 right-10 w-1 h-1 rounded-full bg-nebula/50" />
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-coral/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
