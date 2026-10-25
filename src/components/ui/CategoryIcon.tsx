import React from "react";
import { Sparkles, Rocket, Monitor } from "lucide-react";

interface CategoryIconProps {
  name: string;
  className?: string;
}

export default function CategoryIcon({ name, className = "w-7 h-7" }: CategoryIconProps) {
  switch (name) {
    case "Sparkles":
      return <Sparkles className={className} aria-hidden="true" />;
    case "Rocket":
      return <Rocket className={className} aria-hidden="true" />;
    case "Monitor":
      return <Monitor className={className} aria-hidden="true" />;
    default:
      return <Sparkles className={className} aria-hidden="true" />;
  }
}
