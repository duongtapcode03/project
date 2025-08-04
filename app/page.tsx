"use client";

import { useState } from "react";
import { Suspense, lazy } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen"; // Dùng LoadingScreen đã viết

// Lazy load tất cả section
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const VisionSection = lazy(() => import("@/components/sections/VisionSection"));
const HighlightsSection = lazy(() => import("@/components/sections/HighlightsSection"));
const TechStackSection = lazy(() => import("@/components/sections/TechStackSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const TeamSection = lazy(() => import("@/components/sections/TeamSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Spinner fallback đơn giản cho Suspense
function SpinnerFallback() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return (
      <LoadingScreen
        useRealApi={true} //  bật chế độ gọi API thật
        minLoadingTime={2000} // thời gian tối thiểu
        onComplete={() => setShowLoading(false)}
      />
    );
  }

  return (
    <Suspense fallback={<SpinnerFallback />}>
      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <HighlightsSection />
        <TechStackSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </div>
    </Suspense>
  );
}
