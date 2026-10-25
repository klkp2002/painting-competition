"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ClipboardList, Mail, Upload, Bell, Palette } from "lucide-react";
import { competition } from "@/config/competition";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  Bell: <Bell className="w-6 h-6" />,
};

const stepAccents = [
  { line: "bg-moon-gold", dot: "bg-moon-gold", text: "text-moon-gold" },
  { line: "bg-nebula", dot: "bg-nebula", text: "text-nebula" },
  { line: "bg-coral", dot: "bg-coral", text: "text-coral" },
  { line: "bg-moon-gold", dot: "bg-moon-gold", text: "text-moon-gold" },
];

export default function HowToParticipateSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="how-to-participate"
      className="section-deep py-20 md:py-28 lg:py-32 relative starfield overflow-hidden"
      aria-labelledby="how-to-heading"
    >
      {/* Background artwork: Journey through the stars */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/journey-stars-path.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20 md:opacity-25 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-midnight pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(233,185,91,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60 block mb-4">
            Your Journey
          </span>
          <h2 id="how-to-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-lunar-ivory mb-4">
            How to Participate
          </h2>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-moon-gold/30 via-nebula/20 to-coral/30" aria-hidden="true" />

          <div className="space-y-8 md:space-y-10">
            {competition.timelineSteps.map((step, index) => {
              const accent = stepAccents[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className="flex gap-6 items-start relative"
                >
                  {/* Timeline dot */}
                  <div className="relative shrink-0">
                    <div className={`w-[4.5rem] h-[4.5rem] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${accent.text}`}>
                      {iconMap[step.icon]}
                    </div>
                    {/* Step number */}
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${accent.dot} text-midnight text-xs font-bold flex items-center justify-center`}>
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-display font-bold text-lg text-lunar-ivory mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lunar-ivory/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Important notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <h4 className="font-display font-semibold text-sm text-moon-gold mb-3">
              Important
            </h4>
            <ul className="space-y-2 text-xs text-lunar-ivory/50 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-moon-gold/50 mt-1.5 shrink-0" aria-hidden="true" />
                Artwork files must be uploaded directly through the submission section of the Google Form.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-moon-gold/50 mt-1.5 shrink-0" aria-hidden="true" />
                Selected participants attending the award ceremony must bring their original physical artwork, where applicable.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-moon-gold/50 mt-1.5 shrink-0" aria-hidden="true" />
                Only artwork meeting the official requirements will be considered.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-moon-gold/50 mt-1.5 shrink-0" aria-hidden="true" />
                Participants must meet the submission deadline.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
