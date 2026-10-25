"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { User, Moon, Zap, Sparkles } from "lucide-react";

const themes = [
  {
    word: "MAN",
    icon: <User className="w-8 h-8" />,
    description:
      "Our curiosity, imagination, and journey into space. From the first astronomers who gazed at the stars to the brave pioneers of spaceflight.",
    accent: "text-coral",
    bg: "bg-coral/10",
    border: "border-coral/20",
  },
  {
    word: "MOON",
    icon: <Moon className="w-8 h-8" />,
    description:
      "The closest celestial world to our own and a possible destination for humanity's future. A beacon of wonder that has inspired artists and scientists for millennia.",
    accent: "text-moon-gold",
    bg: "bg-moon-gold/10",
    border: "border-moon-gold/20",
  },
  {
    word: "FUTURE",
    icon: <Zap className="w-8 h-8" />,
    description:
      "The extraordinary possibilities of living, working, and exploring beyond Earth. Imagine cities on the Moon, voyages to distant planets, and a future among the stars.",
    accent: "text-nebula",
    bg: "bg-nebula/10",
    border: "border-nebula/20",
  },
];

export default function ThemeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="theme"
      className="section-light py-20 md:py-28 lg:py-32 relative overflow-hidden"
      aria-labelledby="theme-heading"
    >
      <div className="section-container">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-deep-space/40 block mb-4">
            Explore the Theme
          </span>
          <h2 id="theme-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-4">
            Three Words. Infinite Inspiration.
          </h2>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.word}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="text-center"
            >
              {/* Icon circle */}
              <div className={`w-20 h-20 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center mx-auto mb-6 ${theme.accent}`}>
                {theme.icon}
              </div>

              {/* Word */}
              <h3 className="font-display font-bold text-4xl md:text-5xl text-midnight mb-4 tracking-tight">
                {theme.word}
              </h3>

              {/* Description */}
              <p className="text-deep-space/60 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Artistic Inspiration Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 group bg-midnight">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/theme-man-moon-future.jpg"
                alt="MAN, MOON & FUTURE — Artistic Exploration of Space and Painting"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />

              {/* Overlay Badge & Quote */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moon-gold/20 border border-moon-gold/40 text-moon-gold text-xs font-display font-semibold uppercase tracking-wider mb-2 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    Theme Concept Artwork
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-lunar-ivory drop-shadow-md">
                    Where Astronomical Science Meets Visionary Fine Art
                  </h3>
                  <p className="text-lunar-ivory/70 text-xs md:text-sm max-w-xl mt-1 drop-shadow-sm">
                    Imagine the lunar frontier, human curiosity, and our cosmic destiny through your own creative style and medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
