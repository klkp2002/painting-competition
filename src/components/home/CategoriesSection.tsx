"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ChevronRight, ShieldAlert, ShieldCheck, Sparkles, Rocket, Monitor } from "lucide-react";
import Image from "next/image";
import { competition } from "@/config/competition";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-7 h-7" aria-hidden="true" />,
  Rocket: <Rocket className="w-7 h-7" aria-hidden="true" />,
  Monitor: <Monitor className="w-7 h-7" aria-hidden="true" />,
};

const accentColors = [
  { border: "border-moon-gold/30", bg: "bg-moon-gold/10", text: "text-moon-gold", glow: "rgba(233,185,91,0.1)" },
  { border: "border-nebula/30", bg: "bg-nebula/10", text: "text-nebula", glow: "rgba(169,156,255,0.1)" },
  { border: "border-coral/30", bg: "bg-coral/10", text: "text-coral", glow: "rgba(247,142,122,0.1)" },
];

export default function CategoriesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="categories"
      className="section-dark py-20 md:py-28 lg:py-32 relative starfield overflow-hidden"
      aria-labelledby="categories-heading"
    >
      {/* Background artwork: Swirling celestial nebulae & constellations */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/categories-cosmic-art.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 md:opacity-30 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(169,156,255,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60 block mb-4">
            Three Ways to Participate
          </span>
          <h2 id="categories-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-lunar-ivory mb-4">
            Competition Categories
          </h2>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {competition.categories.map((category, index) => {
            const accent = accentColors[index];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="card-glass p-8 flex flex-col relative group"
                style={{ boxShadow: `0 0 0 0 ${accent.glow}` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center mb-6`}>
                  {iconMap[category.icon]}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-lunar-ivory mb-2">
                  {category.shortName}
                </h3>

                {/* Age badge */}
                <span className={`inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-medium ${accent.bg} ${accent.text} border ${accent.border} mb-4`}>
                  {category.ageRange}
                </span>

                {/* Description */}
                <p className="text-lunar-ivory/60 text-sm leading-relaxed mb-6 flex-grow">
                  {category.description}
                </p>

                {/* AI policy indicator */}
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium mb-6 ${
                  category.aiAllowed
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}>
                  {category.aiAllowed ? (
                    <>
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      <span>AI-Assisted Artwork Allowed</span>
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                      <span>AI Assistance Prohibited</span>
                    </>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="/register"
                  className={`inline-flex items-center gap-1.5 text-sm font-display font-semibold ${accent.text} hover:underline transition-all`}
                >
                  Register for {category.shortName}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
