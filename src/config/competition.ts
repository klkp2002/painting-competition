// ============================================================================
// ASSC Open Painting Competition 2026 — Central Configuration
// ============================================================================
// All competition information is maintained here so organisers can update
// values in one place without modifying individual components.
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Category {
  id: string;
  name: string;
  shortName: string;
  ageRange: string;
  description: string;
  aiAllowed: boolean;
  icon: string; // Lucide icon name
}

export interface Prize {
  place: 1 | 2 | 3;
  label: string;
  amount: string;
  amountNumeric: number;
  extras: string;
  tier: "gold" | "silver" | "bronze";
}

export interface SpecialAward {
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArtMedium {
  name: string;
  icon: string; // Lucide icon name
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type RegistrationStatus = "open" | "coming_soon" | "closed";

export interface CompetitionConfig {
  // Identity
  competitionName: string;
  competitionYear: number;
  theme: string;
  tagline: string;
  organiser: string;
  organiserShort: string;
  organiserAddress: string;
  logoUrl: string;

  // Dates
  submissionDeadline: string; // ISO date string
  submissionDeadlineDisplay: string;
  timezone: string;

  // Currency
  currency: string;
  currencyCode: string;

  // Categories
  categories: Category[];

  // Prizes (per category)
  prizes: Prize[];
  specialAwards: SpecialAward[];
  meritCertificateCount: number;
  participationCertificates: boolean;

  // Accepted art media
  artMedia: ArtMedium[];

  // Accepted file formats
  acceptedFormats: string[];

  // Max artworks
  maxArtworksPerParticipant: number;

  // Submission link delivery period
  submissionLinkDeliveryHours: number;

  // Timeline steps
  timelineSteps: TimelineStep[];

  // FAQ
  faq: FAQItem[];

  // Registration
  registrationStatus: RegistrationStatus;
  googleFormUrl: string;
  googleFormEmbedUrl: string;

  // Contact
  contactEmail: string;
  contactWhatsApp: string;
  contactWhatsAppDisplay: string;
  contactWhatsAppUrl: string;
  socialLinks: SocialLink[];

  // SEO
  siteUrl: string;
  seoTitle: string;
  seoDescription: string;
}

// ---------------------------------------------------------------------------
// Configuration Data
// ---------------------------------------------------------------------------

export const competition: CompetitionConfig = {
  competitionName: "Open Painting Competition 2026",
  competitionYear: 2026,
  theme: "MAN, MOON & FUTURE",
  tagline: "Where Art Meets the Universe",
  organiser: "Astronomy & Space Study Center (ASSC)",
  organiserShort: "ASSC",
  organiserAddress: "Subodhi, Wewala, Piliyandala, Sri Lanka",
  logoUrl: "/assc-logo-v2.png",

  submissionDeadline: "2026-12-15",
  submissionDeadlineDisplay: "15 December 2026",
  timezone: "Asia/Colombo",

  currency: "Sri Lankan Rupees",
  currencyCode: "LKR",

  categories: [
    {
      id: "children",
      name: "Category 1 — Children",
      shortName: "Children",
      ageRange: "Ages 6–12",
      description:
        "An accessible category for young creative minds exploring the Universe through traditional artwork.",
      aiAllowed: false,
      icon: "Sparkles",
    },
    {
      id: "youth",
      name: "Category 2 — Youth",
      shortName: "Youth",
      ageRange: "Ages 13–21",
      description:
        "For young artists and students exploring astronomy, space exploration, and possible futures beyond Earth.",
      aiAllowed: false,
      icon: "Rocket",
    },
    {
      id: "open-digital",
      name: "Category 3 — Open Digital Art",
      shortName: "Open Digital Art",
      ageRange: "Open to all ages",
      description:
        "Accepts digital artwork created using digital software, including AI-assisted artwork.",
      aiAllowed: true,
      icon: "Monitor",
    },
  ],

  prizes: [
    {
      place: 1,
      label: "1st Prize",
      amount: "LKR 30,000",
      amountNumeric: 30000,
      extras: "Plaque",
      tier: "gold",
    },
    {
      place: 2,
      label: "2nd Prize",
      amount: "LKR 25,000",
      amountNumeric: 25000,
      extras: "Plaque",
      tier: "silver",
    },
    {
      place: 3,
      label: "3rd Prize",
      amount: "LKR 15,000",
      amountNumeric: 15000,
      extras: "Plaque",
      tier: "bronze",
    },
  ],

  specialAwards: [
    {
      name: "Scientist's Choice Award",
      description:
        "A special award recognising an artwork that successfully combines scientific accuracy with artistic creativity.",
    },
  ],

  meritCertificateCount: 10,
  participationCertificates: true,

  artMedia: [
    { name: "Sketching", icon: "Pencil" },
    { name: "Acrylic Painting", icon: "Palette" },
    { name: "Oil Painting", icon: "Brush" },
    { name: "Watercolour", icon: "Droplets" },
    { name: "Monochrome Drawing", icon: "PenTool" },
    { name: "Coloured Drawing", icon: "Paintbrush" },
    { name: "Pastels", icon: "Blend" },
    { name: "Fine Art & Mixed Media", icon: "Layers" },
    { name: "Digital Art", icon: "Monitor" },
  ],

  acceptedFormats: ["JPEG", "JPG", "PNG"],

  maxArtworksPerParticipant: 2,
  submissionLinkDeliveryHours: 48,

  timelineSteps: [
    {
      step: 1,
      title: "Prepare Your Artwork",
      description:
        "Create up to two artworks following the theme MAN, MOON & FUTURE. Accepted formats: JPEG, JPG, and PNG.",
      icon: "Palette",
    },
    {
      step: 2,
      title: "Complete Form Details",
      description: "Fill out participant, category, and contact details in the official registration form.",
      icon: "ClipboardList",
    },
    {
      step: 3,
      title: "Upload & Submit Artwork",
      description:
        "Upload your artwork files directly in the submission section of the Google Form before submitting.",
      icon: "Upload",
    },
    {
      step: 4,
      title: "Await Announcements",
      description:
        "Follow ASSC's official announcements for evaluation updates, exhibition details, and results.",
      icon: "Bell",
    },
  ],

  faq: [
    {
      question: "Who can participate?",
      answer:
        "The competition has three categories: Children (ages 6–12), Youth (ages 13–21), and Open Digital Art (open to all ages). Choose the category that matches your age and preferred medium.",
    },
    {
      question: "Can I submit more than one artwork?",
      answer:
        "Yes, each participant may submit a maximum of two artworks, subject to the official competition guidelines.",
    },
    {
      question: "Are AI-generated artworks allowed?",
      answer:
        "AI-assisted artwork is permitted only in Category 3 — Open Digital Art. AI assistance of any kind, including generating, modifying, enhancing, editing, or altering artwork, is strictly prohibited in Categories 1 and 2.",
    },
    {
      question: "Which artwork formats are accepted?",
      answer: "Digital submissions must be in JPEG, JPG, or PNG format.",
    },
    {
      question: "How and when do I submit my artwork?",
      answer:
        "Artwork submission is integrated directly into the official Google Form. You can upload up to two artwork files (JPEG, JPG, or PNG) in the dedicated submission section while completing your registration.",
    },
    {
      question: "Will participants receive certificates?",
      answer:
        "All participants receive Certificates of Participation. The top 10 participants receive Merit Certificates.",
    },
    {
      question: "Do I need to bring my original painting?",
      answer:
        "Selected participants attending the award ceremony must bring their original physical artwork, where applicable.",
    },
    {
      question: "When is the final submission deadline?",
      answer:
        "All artwork must be submitted before 15 December 2026.",
    },
  ],

  registrationStatus:
    (process.env.NEXT_PUBLIC_REGISTRATION_STATUS as RegistrationStatus) ||
    "open",

  googleFormUrl:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://forms.gle/BW2x9nD8KEf6h8r79",
  googleFormEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLScOb4I9LX3dbyqfyIYiRnSd554MlsHQSENTkT7L7nZziDj0Vg/viewform?embedded=true",

  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@assc.lk",
  contactWhatsApp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "+94 71 155 5577",
  contactWhatsAppDisplay: "+94 71 155 5577",
  contactWhatsAppUrl: "https://wa.me/94711555577?text=Hello%20ASSC%2C%20I%20have%20an%20inquiry%20regarding%20the%20Open%20Painting%20Competition%202026.",
  socialLinks: [],

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://assc-competition.vercel.app",
  seoTitle: "ASSC Open Painting Competition 2026 | Man, Moon & Future",
  seoDescription:
    "Join the Astronomy & Space Study Center's Open Painting Competition 2026. Explore the theme Man, Moon & Future, discover prizes and categories, and register to participate.",
};

// ---------------------------------------------------------------------------
// Helper: Compute whole-day and live countdown based on Asia/Colombo timezone
// ---------------------------------------------------------------------------

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isFinished: boolean;
}

export function getTimeRemaining(): CountdownTime {
  // Asia/Colombo is UTC+05:30
  const targetDate = new Date(`${competition.submissionDeadline}T23:59:59+05:30`);
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0,
      isFinished: true,
    };
  }

  const seconds = Math.floor((diffMs / 1000) % 60);
  const minutes = Math.floor((diffMs / 1000 / 60) % 60);
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMs: diffMs,
    isFinished: false,
  };
}

export function getDaysRemaining(): number {
  const time = getTimeRemaining();
  if (time.isFinished) return 0;
  return time.days + (time.hours > 0 || time.minutes > 0 || time.seconds > 0 ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Helper: Registration form URLs from config / env
// ---------------------------------------------------------------------------

export function getGoogleFormUrl(): string {
  return competition.googleFormUrl;
}

export function getGoogleFormEmbedUrl(): string {
  return competition.googleFormEmbedUrl;
}
