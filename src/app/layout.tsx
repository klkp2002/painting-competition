import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { competition } from "@/config/competition";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: competition.seoTitle,
    template: `%s | ${competition.organiserShort}`,
  },
  description: competition.seoDescription,
  metadataBase: new URL(competition.siteUrl),
  openGraph: {
    title: competition.seoTitle,
    description: competition.seoDescription,
    url: competition.siteUrl,
    siteName: competition.organiser,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: competition.seoTitle,
    description: competition.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
