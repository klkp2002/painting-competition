"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ChevronDown, HelpCircle, MessageCircle, Mail } from "lucide-react";
import { competition } from "@/config/competition";

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <h3>
        <button
          className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left group"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          <span className="font-display font-semibold text-base md:text-lg text-lunar-ivory group-hover:text-moon-gold transition-colors pr-4">
            {item.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-lunar-ivory/40 shrink-0 mt-1 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-moon-gold" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 md:pb-6 text-sm md:text-base text-lunar-ivory/60 leading-relaxed pr-10">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="faq"
      className="section-dark py-20 md:py-28 lg:py-32 relative overflow-hidden starfield"
      aria-labelledby="faq-heading"
    >
      {/* Background artwork: Celestial chart & star atlas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/guidelines-cosmic-atlas.jpg"
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-moon-gold/60" aria-hidden="true" />
            <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-moon-gold/60">
              Common Questions
            </span>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-lunar-ivory mb-4">
            Frequently Asked Questions
          </h2>
          <div className="section-heading-bar mx-auto" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto card-glass p-6 md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {competition.faq.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Support Callout */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className="text-sm text-lunar-ivory/60 mb-3">
            Have a question not answered here? Contact our organising team:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={competition.contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp: {competition.contactWhatsAppDisplay}
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(competition.contactEmail)}&su=${encodeURIComponent("Inquiry: ASSC Open Painting Competition 2026")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-moon-gold/15 text-lunar-ivory hover:text-moon-gold border border-white/10 hover:border-moon-gold/30 text-xs font-semibold transition-all hover:scale-102"
              title="Compose in Gmail or default mail app"
            >
              <Mail className="w-4 h-4 text-moon-gold" />
              <span>Email: {competition.contactEmail}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
