"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { competition } from "@/config/competition";

const placeIcons = [
  <Trophy key="1st" className="w-8 h-8" />,
  <Award key="2nd" className="w-8 h-8" />,
  <Medal key="3rd" className="w-8 h-8" />,
];

const tierStyles = {
  gold: {
    gradient: "from-[#F6D365] via-[#E9B95B] to-[#C99A3B]",
    border: "border-[#E9B95B]/40",
    bg: "bg-[#E9B95B]/5",
    text: "text-[#E9B95B]",
    shadow: "shadow-[#E9B95B]/10",
    label: "1st",
  },
  silver: {
    gradient: "from-[#E8E8E8] via-[#C0C0C0] to-[#A8A8A8]",
    border: "border-[#C0C0C0]/30",
    bg: "bg-[#C0C0C0]/5",
    text: "text-[#D0D0D0]",
    shadow: "shadow-[#C0C0C0]/10",
    label: "2nd",
  },
  bronze: {
    gradient: "from-[#E8A87C] via-[#CD7F32] to-[#B8692D]",
    border: "border-[#CD7F32]/30",
    bg: "bg-[#CD7F32]/5",
    text: "text-[#CD7F32]",
    shadow: "shadow-[#CD7F32]/10",
    label: "3rd",
  },
};

export default function PrizesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="prizes"
      className="section-deep py-20 md:py-28 lg:py-32 relative overflow-hidden"
      aria-labelledby="prizes-heading"
    >
      {/* Background artwork: Radiant golden celestial cosmos & auroras */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/prizes-golden-cosmos.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 md:opacity-35 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,154,59,0.15),transparent_70%)] pointer-events-none z-0" />

      {/* Subtle gradient orb */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-moon-gold/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-nebula/10 blur-3xl pointer-events-none z-0" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60 block mb-4">
            Awards &amp; Recognition
          </span>
          <h2 id="prizes-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-lunar-ivory mb-4">
            Create Beyond Limits.{" "}
            <span className="text-gradient-gold">Earn Recognition.</span>
          </h2>
          <p className="text-lunar-ivory/50 max-w-2xl mx-auto text-base md:text-lg">
            Prizes are awarded for each of the three competition categories.
          </p>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        {/* Prize cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {competition.prizes.map((prize, index) => {
            const style = tierStyles[prize.tier];
            return (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className={`relative card-glass ${style.border} p-8 text-center flex flex-col items-center ${
                  prize.tier === "gold" ? "md:-mt-4 md:pb-10" : ""
                }`}
              >
                {/* Tier badge */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-midnight mb-6 shadow-lg ${style.shadow}`}>
                  {placeIcons[index]}
                </div>

                {/* Label */}
                <span className={`text-xs font-display font-semibold tracking-[0.2em] uppercase ${style.text} mb-2`}>
                  {prize.label}
                </span>

                {/* Amount */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-lunar-ivory mb-2">
                  {prize.amount}
                </h3>

                {/* Extras */}
                <span className="text-sm text-lunar-ivory/50 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" aria-hidden="true" />
                  + {prize.extras}
                </span>

                {/* Per category note */}
                <p className="text-xs text-lunar-ivory/30 mt-4">
                  Per category
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Special awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Scientist's Choice */}
          {competition.specialAwards.map((award) => (
            <div
              key={award.name}
              className="card-glass border-nebula/20 p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-nebula/10 flex items-center justify-center text-nebula shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-lunar-ivory mb-1">
                  {award.name}
                </h4>
                <p className="text-xs text-lunar-ivory/50 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}

          {/* Merit Certificates */}
          <div className="card-glass border-coral/20 p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-lunar-ivory mb-1">
                Merit Certificates
              </h4>
              <p className="text-xs text-lunar-ivory/50 leading-relaxed">
                Top {competition.meritCertificateCount} participants will receive Merit Certificates.
              </p>
            </div>
          </div>

          {/* Participation Certificates */}
          <div className="card-glass border-moon-gold/20 p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-moon-gold/10 flex items-center justify-center text-moon-gold shrink-0">
              <Medal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-lunar-ivory mb-1">
                Participation Certificates
              </h4>
              <p className="text-xs text-lunar-ivory/50 leading-relaxed">
                All participants will receive Certificates of Participation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
