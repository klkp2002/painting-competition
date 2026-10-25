"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { AlertTriangle, ShieldAlert, ShieldCheck, ExternalLink } from "lucide-react";

export default function AIPolicySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="ai-policy"
      className="section-ivory py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="ai-policy-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Alert header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-600" aria-hidden="true" />
            </div>
            <div>
              <h2 id="ai-policy-heading" className="text-2xl md:text-3xl font-bold text-midnight mb-2">
                Important: AI Artwork Policy
              </h2>
              <p className="text-deep-space/50 text-sm">
                Please read this section carefully before submitting your artwork.
              </p>
            </div>
          </div>

          {/* Policy content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prohibited */}
            <div className="bg-red-50 border border-red-200/60 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-red-500" aria-hidden="true" />
                <h3 className="font-display font-bold text-lg text-red-700">
                  Categories 1 &amp; 2
                </h3>
              </div>
              <p className="text-red-800/70 text-sm mb-4 leading-relaxed">
                For <strong>Category 1 (Ages 6–12)</strong> and <strong>Category 2 (Ages 13–21)</strong>,
                AI assistance and AI-generated content are <strong>strictly prohibited</strong>.
              </p>
              <p className="text-red-800/60 text-sm mb-4">
                This includes using AI for:
              </p>
              <ul className="space-y-2 text-sm text-red-800/70">
                {["Generating artwork", "Modifying artwork", "Enhancing artwork", "Editing artwork", "Altering artwork"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-red-800/70 text-sm mt-4 font-medium">
                Entries must be the participant&apos;s own original creative work.
              </p>
            </div>

            {/* Allowed */}
            <div className="bg-green-50 border border-green-200/60 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-green-600" aria-hidden="true" />
                <h3 className="font-display font-bold text-lg text-green-700">
                  Category 3 — Open Digital Art
                </h3>
              </div>
              <p className="text-green-800/70 text-sm leading-relaxed mb-4">
                AI-assisted artwork is <strong>allowed</strong> in the Open Digital Art category.
              </p>
              <p className="text-green-800/60 text-sm leading-relaxed">
                This category is open to participants of any age and accepts digital artwork
                created using digital software, including AI-assisted tools.
              </p>
            </div>
          </div>

          {/* Guidelines link */}
          <div className="mt-6 text-center">
            <Link
              href="/guidelines"
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-deep-space hover:text-moon-gold-dark transition-colors"
            >
              Read the Full Competition Guidelines
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
