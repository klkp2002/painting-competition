"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { competition, getTimeRemaining, CountdownTime } from "@/config/competition";

interface LiveCountdownProps {
  variant?: "full" | "compact";
  showLabel?: boolean;
  className?: string;
}

const defaultTime: CountdownTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  totalMs: 0,
  isFinished: false,
};

export default function LiveCountdown({
  variant = "full",
  showLabel = true,
  className = "",
}: LiveCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(defaultTime);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTimeLeft(getTimeRemaining());

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Static SSR fallback to allow prerendering without non-deterministic Date reads
  if (!isClient) {
    if (variant === "compact") {
      return (
        <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-midnight/80 border border-white/15 backdrop-blur-md shadow-lg ${className}`}>
          <Clock className="w-4 h-4 text-moon-gold" aria-hidden="true" />
          <span className="font-display text-sm text-lunar-ivory/50">Countdown Loading...</span>
        </div>
      );
    }

    return (
      <div className={`flex flex-col items-center ${className}`}>
        {showLabel && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moon-gold/10 border border-moon-gold/25 text-moon-gold text-[11px] font-display font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-moon-gold" />
            Live Countdown
          </div>
        )}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full max-w-xl mx-auto">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl bg-midnight/70 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-lunar-ivory/30">
                --
              </span>
              <span className="mt-1 text-[9px] sm:text-[11px] md:text-xs font-display font-semibold uppercase tracking-[0.2em] text-lunar-ivory/40">
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-lunar-ivory/40 font-display tracking-wider">
          Target: 15 December 2026, 23:59:59 ({competition.timezone} Time)
        </p>
      </div>
    );
  }

  if (timeLeft.isFinished) {
    return (
      <div className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-red-500/10 border border-red-500/25 ${className}`}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="text-red-400 font-display font-semibold text-sm">
          The submission deadline has closed (15 Dec 2026).
        </span>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-midnight/80 border border-white/15 backdrop-blur-md shadow-lg ${className}`}>
        <div className="relative flex items-center justify-center">
          <span className="absolute w-2 h-2 rounded-full bg-moon-gold animate-ping opacity-75" />
          <span className="relative w-2 h-2 rounded-full bg-moon-gold" />
        </div>
        <Clock className="w-4 h-4 text-moon-gold ml-0.5" aria-hidden="true" />
        <div className="flex items-center gap-1.5 font-display text-sm font-semibold text-lunar-ivory tabular-nums">
          <span className="text-moon-gold">{timeLeft.days}d</span>
          <span className="text-lunar-ivory/30">:</span>
          <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
          <span className="text-lunar-ivory/30">:</span>
          <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
          <span className="text-lunar-ivory/30">:</span>
          <span className="text-moon-gold-light">{String(timeLeft.seconds).padStart(2, "0")}s</span>
        </div>
        <span className="text-xs text-lunar-ivory/50 font-normal">remaining</span>
      </div>
    );
  }

  // Full 4-unit countdown grid
  const units = [
    { label: "Days", value: String(timeLeft.days).padStart(2, "0"), highlight: true },
    { label: "Hours", value: String(timeLeft.hours).padStart(2, "0"), highlight: false },
    { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0"), highlight: false },
    { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0"), highlight: true },
  ];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {showLabel && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moon-gold/10 border border-moon-gold/25 text-moon-gold text-[11px] font-display font-semibold uppercase tracking-[0.2em] mb-6 backdrop-blur-xs shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moon-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-moon-gold" />
          </span>
          Live Countdown Active
        </div>
      )}

      {/* 4 Counter Tiles */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full max-w-xl mx-auto">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl bg-midnight/70 backdrop-blur-md border border-white/10 hover:border-moon-gold/40 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Top ambient highlight */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-moon-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Digit */}
            <span
              className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tabular-nums tracking-tight ${
                unit.highlight
                  ? "text-gradient-gold"
                  : "text-lunar-ivory"
              }`}
            >
              {unit.value}
            </span>

            {/* Label */}
            <span className="mt-1 text-[9px] sm:text-[11px] md:text-xs font-display font-semibold uppercase tracking-[0.2em] text-lunar-ivory/50 group-hover:text-moon-gold/80 transition-colors">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Timezone Note */}
      <p className="mt-4 text-[11px] text-lunar-ivory/40 font-display tracking-wider">
        Target: 15 December 2026, 23:59:59 ({competition.timezone} Time)
      </p>
    </div>
  );
}
