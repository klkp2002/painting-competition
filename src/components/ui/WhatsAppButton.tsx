"use client";

import { competition } from "@/config/competition";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  if (!competition.contactWhatsAppUrl) return null;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 group print:hidden"
    >
      <a
        href={competition.contactWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ASSC Organisers on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-black/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="font-display font-semibold text-xs tracking-wide pr-1">
          WhatsApp Support
        </span>
      </a>
    </aside>
  );
}
