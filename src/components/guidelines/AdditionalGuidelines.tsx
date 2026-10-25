import React from "react";
import {
  FileCheck,
  Sparkles,
  Scale,
  AlertOctagon,
  Award,
} from "lucide-react";

export default function AdditionalGuidelines() {
  return (
    <section
      id="additional-guidelines"
      className="my-12 scroll-mt-24"
      aria-labelledby="additional-guidelines-heading"
    >
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-space/5 border border-deep-space/10 text-deep-space text-xs font-display font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-moon-gold-dark" aria-hidden="true" />
          <span>Official Competition Protocols</span>
        </div>
        <h2
          id="additional-guidelines-heading"
          className="text-2xl md:text-3xl font-display font-bold text-midnight mb-3"
        >
          Additional Guidelines
        </h2>
        <p className="text-deep-space/65 text-sm md:text-base leading-relaxed max-w-2xl">
          Detailed standards for artwork preparation, thematic adherence, evaluation criteria, and exhibition rights under the official theme <strong>&ldquo;MAN, MOON &amp; FUTURE&rdquo;</strong>.
        </p>
      </div>

      {/* Guidelines Grid */}
      <div className="space-y-6">
        {/* 1. Artwork Specifications & Formatting */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs hover:border-sky-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
              <FileCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-midnight mb-3">
                Artwork Specifications &amp; Formatting
              </h3>
              <ul className="space-y-3.5 text-sm text-deep-space/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Digital Submissions:</strong>{" "}
                    Scanned copies of physical paintings or original digital artworks must be uploaded in high-resolution JPEG, PNG, or PDF format. Ensure the file size does not exceed 25 MB to allow for smooth processing through the Google Form.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">File Naming:</strong>{" "}
                    Please rename your digital file using the format:{" "}
                    <code className="inline-block px-2 py-0.5 rounded bg-sky-50 text-sky-900 border border-sky-200/70 font-mono text-xs font-semibold">
                      Category_YourFullName
                    </code>{" "}
                    (e.g., <span className="italic font-medium text-slate-700">DigitalArt_KasunPerera.jpg</span>) prior to uploading.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Originality & Theme Relevance */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs hover:border-amber-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-midnight mb-3">
                Originality &amp; Theme Relevance
              </h3>
              <ul className="space-y-3.5 text-sm text-deep-space/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Authenticity:</strong>{" "}
                    All artwork must be the original, unaided creation of the participant. Plagiarism, direct tracing, or the use of AI image generators (such as Midjourney or DALL-E) is strictly prohibited and will result in immediate disqualification.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Theme Adherence:</strong>{" "}
                    Artworks must clearly reflect the &ldquo;MAN, MOON &amp; FUTURE&rdquo; concept. Submissions that stray significantly from this theme will not be scored.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Judging Criteria */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs hover:border-purple-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-midnight mb-3">
                Judging Criteria
              </h3>
              <ul className="space-y-3.5 text-sm text-deep-space/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Evaluation Focus:</strong>{" "}
                    Submissions will be evaluated on thematic interpretation, creative composition, artistic technique, and overall visual impact by the judging panel selected by the Astronomy &amp; Space Study Center (ASSC).
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Finality:</strong>{" "}
                    All decisions made by the judging panel and the organizing committee are final and binding.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Disqualification Policies */}
        <div className="bg-rose-50/40 rounded-2xl border border-rose-200/80 p-6 md:p-8 shadow-xs hover:border-rose-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
              <AlertOctagon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-rose-950 mb-3">
                Disqualification Policies
              </h3>
              <ul className="space-y-3 text-sm text-rose-900/85 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" aria-hidden="true" />
                  <span>
                    Submissions received after the designated deadline or submitted with corrupted/inaccessible files will not be evaluated.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" aria-hidden="true" />
                  <span>
                    Any artwork containing inappropriate, offensive, or explicitly political content will be rejected.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Rights & Award Logistics */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-xs hover:border-emerald-300 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-display font-bold text-midnight mb-3">
                Rights &amp; Award Logistics
              </h3>
              <ul className="space-y-3.5 text-sm text-deep-space/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Usage Rights:</strong>{" "}
                    By submitting, participants grant the organizers the right to display the artworks in online galleries, promotional materials, or future exhibitions, always with full credit given to the original artist.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" aria-hidden="true" />
                  <div>
                    <strong className="font-semibold text-midnight">Winner Announcements:</strong>{" "}
                    Shortlisted candidates and winners will be contacted directly via the email addresses provided during registration. Details regarding the certificate distribution or award ceremony will be communicated closer to the finalized date.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
