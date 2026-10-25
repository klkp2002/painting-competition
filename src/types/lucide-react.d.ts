declare module "lucide-react" {
  import { FC, SVGProps } from "react";

  interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type LucideIcon = FC<LucideProps>;

  export const AlertTriangle: LucideIcon;
  export const Award: LucideIcon;
  export const Bell: LucideIcon;
  export const Blend: LucideIcon;
  export const Brush: LucideIcon;
  export const Calendar: LucideIcon;
  export const CalendarDays: LucideIcon;
  export const Check: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ClipboardList: LucideIcon;
  export const Clock: LucideIcon;
  export const Copy: LucideIcon;
  export const Droplets: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const FileText: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Home: LucideIcon;
  export const Image: LucideIcon;
  export const Info: LucideIcon;
  export const Layers: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Medal: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Monitor: LucideIcon;
  export const Moon: LucideIcon;
  export const Paintbrush: LucideIcon;
  export const Palette: LucideIcon;
  export const Pencil: LucideIcon;
  export const PenTool: LucideIcon;
  export const Phone: LucideIcon;
  export const Quote: LucideIcon;
  export const Rocket: LucideIcon;
  export const Send: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Telescope: LucideIcon;
  export const Trophy: LucideIcon;
  export const Upload: LucideIcon;
  export const User: LucideIcon;
  export const Users: LucideIcon;
  export const X: LucideIcon;
  export const Zap: LucideIcon;
}
