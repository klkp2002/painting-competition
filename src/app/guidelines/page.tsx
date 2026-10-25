import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdditionalGuidelines from "@/components/guidelines/AdditionalGuidelines";
import { competition } from "@/config/competition";
import {
  ChevronRight,
  AlertTriangle,
  ShieldAlert,
  ShieldCheck,
  FileText,
  Calendar,
  Users,
  Image,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Competition Guidelines",
  description:
    "Official guidelines and rules for the ASSC Open Painting Competition 2026 — Man, Moon & Future.",
};

export default function GuidelinesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[4.5rem]">
        {/* Hero */}
        <section className="section-dark starfield py-16 md:py-24 relative overflow-hidden">
          {/* Celestial chart atlas background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <NextImage
              src="/images/guidelines-cosmic-atlas.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 md:opacity-40 mix-blend-screen scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,154,59,0.12),transparent_70%)] pointer-events-none z-0" />

          <div className="section-container relative z-10 text-center">
            <p className="text-moon-gold/60 text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              {competition.organiserShort} • {competition.competitionYear}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-lunar-ivory mb-4">
              Competition Guidelines
            </h1>
            <p className="text-lunar-ivory/50 max-w-xl mx-auto">
              Everything you need to know about participating in the{" "}
              {competition.competitionName}.
            </p>
            <div className="section-heading-bar mx-auto mt-6" />
          </div>
        </section>

        {/* Content */}
        <section className="section-light py-16 md:py-20">
          <div className="section-container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Theme */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-deep-space/50" aria-hidden="true" />
                  <h2 className="font-display font-bold text-2xl text-midnight m-0">
                    Theme &amp; Organiser
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-16 h-16 rounded-full bg-deep-space/5 p-1 border border-gray-200/80 shrink-0 shadow-xs overflow-hidden">
                    <NextImage
                      src={competition.logoUrl}
                      alt="ASSC Official Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-deep-space/80 m-0">
                      <strong>Theme:</strong> {competition.theme}
                    </p>
                    <p className="text-deep-space/80 m-0">
                      <strong>Organiser:</strong> {competition.organiser}
                    </p>
                    <p className="text-deep-space/80 m-0">
                      <strong>Submission Deadline:</strong> {competition.submissionDeadlineDisplay}
                    </p>
                  </div>
                </div>

                {/* Visual Guidelines Artwork Feature */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 my-8 group bg-midnight">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <NextImage
                      src="/images/artist-easel-cosmos.jpg"
                      alt="Artist easel and canvas under the moon and stars"
                      fill
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moon-gold/20 border border-moon-gold/40 text-moon-gold text-xs font-display font-semibold uppercase tracking-wider mb-1 backdrop-blur-md">
                          Artwork Creation Standards
                        </span>
                        <h3 className="text-lg md:text-xl font-display font-bold text-lunar-ivory drop-shadow-md">
                          Authentic Expression &bull; Astronomical Imagination
                        </h3>
                        <p className="text-lunar-ivory/70 text-xs md:text-sm max-w-lg mt-0.5 drop-shadow-sm">
                          Whether painting on traditional canvas or digital tools, preserve original progress files and reference material.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-deep-space/50" aria-hidden="true" />
                  <h2 className="font-display font-bold text-2xl text-midnight m-0">
                    Competition Categories
                  </h2>
                </div>
                <div className="space-y-4">
                  {competition.categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="bg-white rounded-xl border border-gray-100 p-6"
                    >
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h3 className="font-display font-bold text-lg text-midnight m-0">
                          {cat.name}
                        </h3>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          cat.aiAllowed
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {cat.aiAllowed ? "AI Allowed" : "No AI"}
                        </span>
                      </div>
                      <p className="text-deep-space/50 text-sm mb-1">
                        {cat.ageRange}
                      </p>
                      <p className="text-deep-space/70 text-sm">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Policy */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  <h2 className="font-display font-bold text-2xl text-midnight m-0">
                    AI Artwork Policy
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200/60 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldAlert className="w-5 h-5 text-red-500" aria-hidden="true" />
                      <h3 className="font-display font-bold text-base text-red-700 m-0">
                        Prohibited — Categories 1 &amp; 2
                      </h3>
                    </div>
                    <p className="text-red-800/70 text-sm mb-3">
                      AI assistance and AI-generated content are strictly prohibited.
                    </p>
                    <ul className="space-y-1 text-sm text-red-800/60">
                      {["Generating", "Modifying", "Enhancing", "Editing", "Altering"].map(
                        (verb) => (
                          <li key={verb} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-red-400" aria-hidden="true" />
                            {verb} artwork using AI
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-red-800/70 text-sm mt-3 font-medium">
                      Entries must be the participant&apos;s own original creative work.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200/60 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-5 h-5 text-green-600" aria-hidden="true" />
                      <h3 className="font-display font-bold text-base text-green-700 m-0">
                        Allowed — Category 3
                      </h3>
                    </div>
                    <p className="text-green-800/70 text-sm">
                      AI-assisted artwork is allowed in the Open Digital Art category.
                      This category is open to participants of any age and accepts digital
                      artwork created using digital software, including AI-assisted tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submission Rules */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Image className="w-5 h-5 text-deep-space/50" aria-hidden="true" />
                  <h2 className="font-display font-bold text-2xl text-midnight m-0">
                    Submission Rules
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                  <ul className="space-y-3 text-deep-space/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Maximum of <strong>{competition.maxArtworksPerParticipant} artworks</strong> per participant.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Artwork is submitted directly via the submission section of the official Google Form.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Ensure your artwork file (JPEG, JPG, or PNG) is ready before completing the form.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Accepted digital submission file formats: {competition.acceptedFormats.join(", ")}.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Artwork must comply with originality requirements and category-specific rules.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      Selected award ceremony participants must bring their original physical artwork, where applicable.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moon-gold mt-1.5 shrink-0" aria-hidden="true" />
                      All submissions must meet the <strong>{competition.submissionDeadlineDisplay}</strong> deadline.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Guidelines Section */}
              <AdditionalGuidelines />

              {/* Deadline */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-deep-space/50" aria-hidden="true" />
                  <h2 className="font-display font-bold text-2xl text-midnight m-0">
                    Deadline
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 text-center shadow-xs">
                  <p className="font-display font-bold text-3xl text-midnight mb-2">
                    {competition.submissionDeadlineDisplay}
                  </p>
                  <p className="text-deep-space/50 text-sm">
                    Final artwork submission deadline
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  href="/register"
                  className="btn-primary !bg-gradient-to-r !from-[#E9B95B] !to-[#C99A3B] inline-flex"
                >
                  Register &amp; Submit Artwork
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
