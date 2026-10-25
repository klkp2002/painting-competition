"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden starfield"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Art Canvas & Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/cosmic-art-canvas.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 md:opacity-35 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,154,59,0.12),transparent_70%)] pointer-events-none z-0" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-8 h-8 text-moon-gold/40 mx-auto mb-6" aria-hidden="true" />

          <h2 id="final-cta-heading" className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-lunar-ivory mb-6 leading-tight">
            The Future Is Yours{" "}
            <span className="text-gradient-gold">to Imagine.</span>
          </h2>

          <p className="text-lunar-ivory/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            From the first footprints on the Moon to the cities of tomorrow,
            your imagination can take us anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/register" className="btn-primary text-base px-8 py-4">
              Register &amp; Submit Artwork
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs font-display tracking-[0.2em] uppercase text-lunar-ivory/25">
            Explore the Universe Through Art
          </p>
        </motion.div>
      </div>
    </section>
  );
}
