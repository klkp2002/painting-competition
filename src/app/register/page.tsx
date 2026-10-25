import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationContent from "@/components/registration/RegistrationContent";

export const metadata: Metadata = {
  title: "Register & Submit Artwork",
  description:
    "Register and submit your artwork for the ASSC Open Painting Competition 2026. Complete the official registration and submission form.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[4.5rem]">
        <RegistrationContent />
      </main>
      <Footer />
    </>
  );
}
