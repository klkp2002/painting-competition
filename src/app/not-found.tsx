import Link from "next/link";
import Image from "next/image";
import { Moon, Home, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-midnight starfield relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/journey-stars-path.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-screen scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight pointer-events-none z-0" />
      <div className="relative z-10 text-center section-container py-20">
        <div className="w-20 h-20 rounded-full bg-deep-space border border-white/10 flex items-center justify-center mx-auto mb-8">
          <Moon className="w-10 h-10 text-moon-gold/60" aria-hidden="true" />
        </div>

        <h1 className="font-display font-bold text-6xl md:text-8xl text-lunar-ivory/20 mb-4">
          404
        </h1>

        <h2 className="font-display font-bold text-2xl md:text-3xl text-lunar-ivory mb-4">
          Lost in Space
        </h2>

        <p className="text-lunar-ivory/50 text-base md:text-lg max-w-md mx-auto mb-10">
          The page you&apos;re looking for has drifted beyond our orbit.
          Let&apos;s navigate you back to familiar ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link href="/register" className="btn-secondary">
            Register Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
