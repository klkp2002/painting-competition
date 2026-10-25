"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

interface EmailContactCardProps {
  email: string;
  variant?: "card" | "light" | "inline";
  className?: string;
}

export default function EmailContactCard({
  email,
  variant = "card",
  className = "",
}: EmailContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent("Inquiry: ASSC Open Painting Competition 2026")}`;

  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 font-semibold text-deep-space hover:text-moon-gold-dark transition-colors"
          title="Send email via mail client"
        >
          <Mail className="w-3.5 h-3.5 text-moon-gold-dark" />
          <span>{email}</span>
        </a>
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium inline-flex items-center gap-1 transition-colors"
          title="Compose in Gmail Web"
        >
          <span>Gmail</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[11px] px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium inline-flex items-center gap-1 transition-colors"
          title={copied ? "Copied!" : "Copy email address"}
          aria-label="Copy email address"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-700">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div
        className={`flex flex-col p-3.5 rounded-xl bg-gray-50 hover:bg-moon-gold/10 border border-gray-200/60 hover:border-moon-gold/30 transition-all ${className}`}
      >
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="w-8 h-8 rounded-lg bg-moon-gold/20 text-moon-gold-dark flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
            title="Open in your email client"
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] text-gray-500 font-medium">
              Official Email
            </span>
            <a
              href={`mailto:${email}`}
              className="font-semibold text-deep-space hover:text-moon-gold-dark truncate block transition-colors"
            >
              {email}
            </a>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-lg bg-white border border-gray-200/80 hover:bg-gray-50 text-gray-600 hover:text-deep-space transition-all shrink-0"
            title={copied ? "Copied!" : "Copy email address"}
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="mt-2.5 pt-2.5 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-moon-gold-dark hover:underline font-semibold"
          >
            <span>Open in Gmail</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            {copied ? (
              <span className="text-emerald-600 font-semibold">
                Copied to clipboard!
              </span>
            ) : (
              <span>Click to copy</span>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Dark variant for Footer
  return (
    <div
      className={`group relative flex flex-col p-3 bg-white/5 hover:bg-moon-gold/10 border border-white/10 hover:border-moon-gold/30 rounded-xl transition-all ${className}`}
    >
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="w-8 h-8 rounded-lg bg-moon-gold/20 text-moon-gold flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
          title="Open in email client"
        >
          <Mail className="w-4 h-4" />
        </a>

        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase font-display tracking-wider text-moon-gold/80 font-semibold">
            Official Email
          </div>
          <a
            href={`mailto:${email}`}
            className="text-sm font-semibold text-lunar-ivory hover:text-moon-gold transition-colors truncate block"
            title="Click to send email"
          >
            {email}
          </a>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-lunar-ivory/60 hover:text-lunar-ivory transition-all shrink-0"
          title={copied ? "Copied!" : "Copy email address"}
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Quick Action row */}
      <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-moon-gold/90 hover:text-moon-gold font-medium transition-colors"
        >
          <span>Open in Gmail</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="text-lunar-ivory/40 hover:text-lunar-ivory/80 transition-colors"
        >
          {copied ? (
            <span className="text-emerald-400 font-semibold">Copied to clipboard!</span>
          ) : (
            <span>Click to copy</span>
          )}
        </button>
      </div>
    </div>
  );
}
