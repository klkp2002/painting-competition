"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  AlertTriangle,
  Info,
  ShieldAlert,
  Clock,
  FileText,
  Mail,
  MessageCircle,
  Upload,
} from "lucide-react";
import { competition, getGoogleFormUrl, getGoogleFormEmbedUrl } from "@/config/competition";
import EmailContactCard from "@/components/ui/EmailContactCard";

export default function RegistrationContent() {
  const formUrl = getGoogleFormUrl();
  const embedUrl = getGoogleFormEmbedUrl();
  const status = competition.registrationStatus;

  return (
    <div className="relative">
      {/* Hero area */}
      <section className="section-dark starfield py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/cosmic-art-canvas.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 mix-blend-screen"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/70 to-midnight pointer-events-none z-0" />
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-xs">
            <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20 bg-white/10 p-0.5">
              <Image
                src={competition.logoUrl}
                alt="ASSC Official Logo"
                width={20}
                height={20}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-moon-gold/90 text-xs font-display font-medium tracking-[0.2em] uppercase">
              {competition.organiser}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-lunar-ivory mb-4">
            Registration &amp; Artwork Submission
          </h1>
          <p className="text-lunar-ivory/50 max-w-2xl mx-auto text-base md:text-lg">
            Complete the official form to register and submit your artwork for the{" "}
            <strong className="text-lunar-ivory/70">
              {competition.competitionName}
            </strong>
            .
          </p>
          <div className="section-heading-bar mx-auto mt-6" />
        </div>
      </section>

      {/* Registration content */}
      <section className="section-light py-16 md:py-20">
        <div className="section-container max-w-4xl">
          {/* Reminders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Category reminder */}
            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200/50 rounded-xl">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-sm text-blue-800 mb-1">
                  Age Categories
                </h3>
                <p className="text-xs text-blue-700/70 leading-relaxed">
                  Children (6–12), Youth (13–21), and Open Digital Art (all ages).
                  Choose the category that matches your eligibility.
                </p>
              </div>
            </div>

            {/* AI reminder */}
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200/50 rounded-xl">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-sm text-amber-800 mb-1">
                  AI Policy
                </h3>
                <p className="text-xs text-amber-700/70 leading-relaxed">
                  AI assistance is prohibited in Categories 1 &amp; 2.
                  AI-assisted artwork is only allowed in Open Digital Art.
                </p>
              </div>
            </div>
          </div>

          {/* Submission note */}
          <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200/60 rounded-xl mb-4">
            <Upload className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-display font-semibold text-sm text-emerald-900 mb-1">
                Direct Artwork Submission Included
              </h3>
              <p className="text-xs text-emerald-800/80 leading-relaxed">
                The form includes a dedicated artwork submission section. You can upload your artwork files
                (up to {competition.maxArtworksPerParticipant} artworks in {competition.acceptedFormats.join(", ")})
                directly while completing your registration.
              </p>
            </div>
          </div>

          {/* Organiser Support Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-white/90 border border-gray-200/70 rounded-xl mb-10 text-xs shadow-xs">
            <span className="text-deep-space/80 font-medium">
              Need help or have questions about registration &amp; submission?
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={competition.contactWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp: {competition.contactWhatsAppDisplay}
              </a>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <EmailContactCard email={competition.contactEmail} variant="inline" />
            </div>
          </div>

          {/* Form or status message */}
          {status === "coming_soon" && (
            <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Clock className="w-12 h-12 text-moon-gold mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display font-bold text-2xl text-midnight mb-3">
                Registration &amp; Submission Opening Soon
              </h2>
              <p className="text-deep-space/60 max-w-md mx-auto">
                The official registration and artwork submission form will be available shortly.
                Please check back soon or follow ASSC announcements.
              </p>
            </div>
          )}

          {status === "closed" && (
            <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display font-bold text-2xl text-midnight mb-3">
                Registration &amp; Submission Closed
              </h2>
              <p className="text-deep-space/60 max-w-md mx-auto">
                Registration and artwork submission for this competition has closed.
                Follow ASSC announcements for future opportunities.
              </p>
            </div>
          )}

          {status === "open" && !embedUrl && !formUrl && (
            <div className="text-center py-16 px-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <FileText className="w-12 h-12 text-deep-space/30 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display font-bold text-xl text-midnight mb-3">
                Form Not Yet Configured
              </h2>
              <p className="text-deep-space/50 max-w-md mx-auto text-sm mb-4">
                The registration and submission form URL has not been set up yet.
                Please check the project README for setup instructions.
              </p>
              <p className="text-xs text-deep-space/30">
                Set <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL</code> in
                your environment variables.
              </p>
            </div>
          )}

          {status === "open" && embedUrl && (
            <div className="space-y-4">
              {/* Quick Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs text-deep-space/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Official Registration &amp; Submission Form is live
                </div>
                {formUrl && (
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-display font-semibold rounded-lg bg-deep-space text-lunar-ivory hover:bg-deep-space/90 transition-all shadow-xs"
                  >
                    <span>Open Fullscreen Submission Form</span>
                    <ExternalLink className="w-3.5 h-3.5 text-moon-gold" />
                  </a>
                )}
              </div>

              {/* Form Iframe Container */}
              <div className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden relative">
                <iframe
                  src={embedUrl}
                  className="w-full min-h-[950px] md:min-h-[1250px] border-0"
                  title="ASSC Open Painting Competition 2026 Registration and Submission Form"
                  loading="lazy"
                >
                  Loading official registration and submission form...
                </iframe>
              </div>

              {/* Bottom Direct Link Helper */}
              {formUrl && (
                <div className="p-4 bg-gray-50/80 rounded-xl border border-gray-200/60 text-center">
                  <p className="text-xs text-deep-space/70 mb-2">
                    Viewing on a mobile device or having trouble scrolling the embedded form?
                  </p>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-display font-bold text-deep-space hover:text-moon-gold-dark underline underline-offset-4 transition-colors"
                  >
                    Open Form Directly in Google Forms ({formUrl})
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Links */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link
              href="/guidelines"
              className="inline-flex items-center gap-1.5 text-deep-space/70 hover:text-deep-space transition-colors"
            >
              <FileText className="w-4 h-4" />
              Competition Guidelines
            </Link>
            <span className="hidden sm:inline text-deep-space/20">|</span>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-deep-space/70 hover:text-deep-space transition-colors"
            >
              Privacy &amp; Data Use
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
