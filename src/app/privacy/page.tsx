import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { competition } from "@/config/competition";
import { Shield, Info, MessageCircle } from "lucide-react";
import EmailContactCard from "@/components/ui/EmailContactCard";

export const metadata: Metadata = {
  title: "Privacy & Data Use",
  description:
    "Privacy and data use information for the ASSC Open Painting Competition 2026 registration.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[4.5rem]">
        {/* Hero */}
        <section className="section-dark starfield py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/guidelines-cosmic-atlas.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25 mix-blend-screen scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
          <div className="section-container relative z-10 text-center">
            <p className="text-moon-gold/60 text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              {competition.organiserShort}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-lunar-ivory mb-4">
              Privacy &amp; Data Use
            </h1>
            <p className="text-lunar-ivory/50 max-w-xl mx-auto">
              How your registration information is handled.
            </p>
            <div className="section-heading-bar mx-auto mt-6" />
          </div>
        </section>

        {/* Content */}
        <section className="section-light py-16 md:py-20">
          <div className="section-container max-w-3xl">
            {/* Notice */}
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200/50 rounded-xl mb-10">
              <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-amber-800/70 text-sm leading-relaxed">
                This page provides a summary of data handling practices.
                The complete privacy policy is subject to organiser approval
                before public launch. Sections marked with{" "}
                <strong>&ldquo;Awaiting Confirmation&rdquo;</strong>{" "}
                require organiser review.
              </p>
            </div>

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-deep-space/50" aria-hidden="true" />
                  <h2 className="font-display font-bold text-xl text-midnight">
                    Information Collected
                  </h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed mb-4">
                    The registration form collects the following information:
                  </p>
                  <ul className="space-y-2 text-sm text-deep-space/60">
                    <li>• Participant name, date of birth, age, gender, and country of residence</li>
                    <li>• Competition category and artwork details</li>
                    <li>• School or institution details (optional)</li>
                    <li>• Contact email and phone number</li>
                    <li>• Parent/guardian information for participants under 18</li>
                    <li>• Competition-related acknowledgements and consent</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  How Information Is Stored
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed">
                    Registration responses are collected through Google Forms and
                    stored in Google Sheets. Access to registration data is restricted
                    to authorised competition organisers. Registration data is not
                    stored in the website application itself or made available in
                    client-side code.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  How Information Is Used
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed mb-3">
                    Registration information is used for:
                  </p>
                  <ul className="space-y-2 text-sm text-deep-space/60">
                    <li>• Processing competition registration and artwork submissions</li>
                    <li>• Communicating submission confirmations and competition updates</li>
                    <li>• Verifying participant eligibility and category placement</li>
                    <li>• Contacting parents/guardians for participants under 18</li>
                    <li>• Award and certificate administration</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  Information About Minors
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed">
                    This competition includes participants as young as 6 years old.
                    Parent or guardian consent is required for participants under 18.
                    Personal information of minors is treated with special care and is
                    only accessible to authorised organisers. Participant names, artwork,
                    and identifying details are not published without the appropriate
                    consent.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  Publicity &amp; Artwork Display
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed">
                    The registration form includes an optional consent checkbox for
                    artwork and name display in competition publicity. This consent
                    is entirely optional and is not required for registration.
                    Artwork will not be displayed publicly without the appropriate consent.
                  </p>
                </div>
              </div>

              {/* Section 6 - Awaiting confirmation */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  Data Retention &amp; Deletion
                  <span className="ml-2 text-xs font-normal text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                    Awaiting Confirmation
                  </span>
                </h2>
                <div className="bg-gray-50 border border-gray-200/50 rounded-xl p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Details about data retention periods, deletion requests, and
                    participant rights regarding their personal information are
                    pending organiser approval and will be published before the
                    competition launch.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  Third-Party Services
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <p className="text-deep-space/70 text-sm leading-relaxed">
                    This website uses the following third-party services:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-deep-space/60">
                    <li>• <strong>Google Forms</strong> — registration form hosting</li>
                    <li>• <strong>Google Sheets</strong> — response storage</li>
                    <li>• <strong>Vercel</strong> — website hosting</li>
                    <li>• <strong>Google Fonts</strong> — web typography</li>
                  </ul>
                  <p className="text-deep-space/50 text-xs mt-3">
                    No additional analytics, advertising, or tracking services are used.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-display font-bold text-xl text-midnight mb-3">
                  Contact Organisers
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
                  <p className="text-deep-space/70 text-sm leading-relaxed">
                    For questions regarding how your data is handled or for competition inquiries, please contact the {competition.organiser}:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <EmailContactCard email={competition.contactEmail} variant="light" />
                    <a
                      href={competition.contactWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50/60 hover:bg-emerald-500/15 border border-emerald-200/60 hover:border-emerald-500/40 text-sm text-emerald-950 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[11px] text-emerald-700 font-medium">WhatsApp Support</span>
                        <span className="font-semibold text-emerald-900 block">{competition.contactWhatsAppDisplay}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="text-sm text-deep-space/60 hover:text-deep-space transition-colors"
              >
                ← Back to Competition
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
