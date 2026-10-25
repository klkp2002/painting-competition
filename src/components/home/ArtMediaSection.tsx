"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Pencil, Palette, Brush, Droplets, PenTool, Paintbrush,
  Layers, Monitor, Blend
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Pencil: <Pencil className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Brush: <Brush className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  PenTool: <PenTool className="w-5 h-5" />,
  Paintbrush: <Paintbrush className="w-5 h-5" />,
  Blend: <Blend className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
};

import Image from "next/image";
import { competition } from "@/config/competition";

export default function ArtMediaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="art-media"
      className="section-dark py-20 md:py-28 starfield relative overflow-hidden"
      aria-labelledby="art-media-heading"
    >
      {/* Background artwork blending astronomy and painting media */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/cosmic-art-canvas.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 md:opacity-20 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-midnight pointer-events-none z-0" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60 block mb-4">
            Express Your Vision
          </span>
          <h2 id="art-media-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-lunar-ivory mb-4">
            Accepted Art Forms
          </h2>
          <p className="text-lunar-ivory/50 text-sm md:text-base max-w-lg mx-auto">
            Art forms and AI eligibility remain subject to category rules.
          </p>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto">
          {competition.artMedia.map((medium, index) => (
            <motion.div
              key={medium.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * index }}
              className="card-glass p-5 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-moon-gold/70 group-hover:text-moon-gold group-hover:bg-moon-gold/10 transition-colors">
                {iconMap[medium.icon] || <Palette className="w-5 h-5" />}
              </div>
              <span className="text-xs font-display font-medium text-lunar-ivory/70 group-hover:text-lunar-ivory transition-colors leading-tight">
                {medium.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
