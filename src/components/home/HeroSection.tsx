"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown, CalendarDays, Users, Trophy } from "lucide-react";
import { motion, useInView } from "motion/react";
import { competition } from "@/config/competition";
import MoonIllustration from "@/components/ui/MoonIllustration";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden starfield"
      aria-labelledby="hero-heading"
    >
      {/* Background celestial astronomy & art painting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/hero-cosmic-art.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 md:opacity-45 mix-blend-screen scale-105"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/50 to-midnight pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-midnight to-transparent pointer-events-none z-10" />

      {/* Moon illustration */}
      <div className="absolute right-[-5%] top-[15%] md:right-[5%] md:top-[10%] w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-30 md:opacity-40 pointer-events-none">
        <MoonIllustration />
      </div>

      {/* Orbital ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none opacity-[0.06]">
        <div className="absolute inset-0 border border-moon-gold/40 rounded-full" />
        <div className="absolute inset-[10%] border border-nebula/30 rounded-full" style={{ transform: "rotate(15deg)" }} />
        <div className="absolute inset-[25%] border border-coral/20 rounded-full" style={{ transform: "rotate(-10deg)" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 section-container py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow with Official Logo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 shadow-xs">
            <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20 bg-white/10 p-0.5">
              <Image
                src={competition.logoUrl}
                alt="ASSC Official Logo"
                width={24}
                height={24}
                priority
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-moon-gold/90 text-xs md:text-sm font-display font-medium tracking-[0.2em] uppercase">
              {competition.organiser} Presents
            </span>
          </div>

          {/* Main heading */}
          <h1 id="hero-heading" className="font-display font-bold mb-4 md:mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-lunar-ivory mb-2 md:mb-4">
              Open Painting Competition
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-gold leading-[0.95]">
              MAN, MOON
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mt-1">
              <span className="text-lunar-ivory/40">&</span>{" "}
              <span className="text-gradient-nebula">FUTURE</span>
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lunar-ivory/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Imagine humanity&apos;s next chapter beyond Earth. Transform the wonders of
            astronomy, the Moon, and our future in space into extraordinary works of art.
          </motion.p>

          {/* Stats pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-lunar-ivory/70">
              <CalendarDays className="w-4 h-4 text-moon-gold" aria-hidden="true" />
              <span>Deadline: {competition.submissionDeadlineDisplay}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-lunar-ivory/70">
              <Users className="w-4 h-4 text-nebula" aria-hidden="true" />
              <span>{competition.categories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-lunar-ivory/70">
              <Trophy className="w-4 h-4 text-coral" aria-hidden="true" />
              <span>Up to {competition.prizes[0].amount}</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/register" className="btn-primary text-base px-8 py-4">
              Register &amp; Submit Artwork
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/#about" className="btn-secondary text-base px-8 py-4">
              Explore the Competition
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-lunar-ivory/30">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-lunar-ivory/30 scroll-indicator" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
