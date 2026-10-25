import Link from "next/link";
import Image from "next/image";
import { competition } from "@/config/competition";
import { MapPin, MessageCircle, ExternalLink } from "lucide-react";
import EmailContactCard from "@/components/ui/EmailContactCard";

const footerSections = [
  {
    title: "Competition",
    links: [
      { label: "About", href: "/#about" },
      { label: "Categories", href: "/#categories" },
      { label: "Prizes", href: "/#prizes" },
      { label: "How to Participate", href: "/#how-to-participate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Register & Submit", href: "/register" },
      { label: "Guidelines", href: "/guidelines" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/5" role="contentinfo">
      {/* Decorative divider */}
      <div className="divider-stars" />

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Organiser column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-white/10 p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                <Image
                  src={competition.logoUrl}
                  alt="ASSC Official Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-lunar-ivory leading-tight">
                  {competition.organiserShort}
                </span>
                <span className="text-[11px] font-medium text-moon-gold tracking-wider uppercase">
                  Astronomy &amp; Space Study Center
                </span>
              </div>
            </div>
            <p className="text-lunar-ivory/80 text-sm font-medium leading-relaxed max-w-sm mb-1">
              {competition.organiser}
            </p>
            <p className="flex items-start gap-2 text-lunar-ivory/50 text-xs leading-relaxed max-w-sm mb-6">
              <MapPin className="w-4 h-4 text-moon-gold/60 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{competition.organiserAddress}</span>
            </p>

            {/* Direct Contact Methods */}
            <div className="space-y-3 mb-6 max-w-sm">
              {/* WhatsApp */}
              <a
                href={competition.contactWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 rounded-xl transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase font-display tracking-wider text-emerald-400/80 font-semibold">
                    WhatsApp Hotline
                  </div>
                  <div className="text-sm font-semibold text-lunar-ivory group-hover:text-emerald-300 transition-colors">
                    {competition.contactWhatsAppDisplay}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-lunar-ivory/30 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Email */}
              <EmailContactCard email={competition.contactEmail} />
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-sm tracking-wider uppercase text-lunar-ivory/50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-lunar-ivory/60 hover:text-moon-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links — only render if configured */}
        {competition.socialLinks.length > 0 && (
          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/5">
            <span className="text-xs text-lunar-ivory/40 uppercase tracking-wider">
              Follow ASSC
            </span>
            {/* Social icons would render here */}
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lunar-ivory/30">
            &copy; {competition.competitionYear}{" "}
            {competition.organiser}. All rights reserved.
          </p>
          <p className="text-xs text-lunar-ivory/20">
            Explore the Universe Through Art.
          </p>
        </div>
      </div>

      {/* Subtle celestial bottom decoration */}
      <div className="h-1 bg-gradient-to-r from-transparent via-moon-gold/20 to-transparent" />
    </footer>
  );
}
