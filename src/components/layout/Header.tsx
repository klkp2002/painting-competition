"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, MessageCircle } from "lucide-react";
import { competition } from "@/config/competition";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Categories", href: "/#categories" },
  { label: "Prizes", href: "/#prizes" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on route change / escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-midnight/85 border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="section-container flex items-center justify-between h-[4.5rem]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={`${competition.organiserShort} — Home`}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 p-0.5 border border-white/20 group-hover:border-moon-gold/50 transition-all overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
            <Image
              src={competition.logoUrl}
              alt="ASSC Official Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform"
            />
          </div>
          {/* Typographic logo */}
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg tracking-tight text-moon-gold group-hover:text-moon-gold-light transition-colors">
              {competition.organiserShort}
            </span>
            <span className="text-[0.6rem] font-medium tracking-[0.2em] text-lunar-ivory/50 uppercase">
              Competition 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-lunar-ivory/70 hover:text-moon-gold transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/register" className="btn-primary ml-4 !py-2.5 !px-5 !text-sm">
            Register &amp; Submit
            <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-lunar-ivory/80 hover:text-moon-gold hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`lg:hidden fixed inset-0 top-[4.5rem] z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-midnight/95 nav-blur"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <nav
          className={`relative flex flex-col gap-1 p-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-4"
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-3.5 text-lg font-display font-medium text-lunar-ivory/80 hover:text-moon-gold hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
            <Link
              href="/register"
              className="btn-primary w-full justify-center text-base"
              onClick={() => setIsOpen(false)}
            >
              Register &amp; Submit Artwork
              <ChevronRight className="w-5 h-5" />
            </Link>

            {competition.contactWhatsAppUrl && (
              <a
                href={competition.contactWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-semibold hover:bg-emerald-500/25 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {competition.contactWhatsAppDisplay}</span>
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
