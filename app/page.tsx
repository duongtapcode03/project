"use client";

import { useState } from "react";
import { Suspense, lazy } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen"; // Dùng LoadingScreen đã viết

// Lazy load tất cả section
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const VisionSection = lazy(() => import("@/components/sections/VisionSection"));
const HighlightsSection = lazy(
  () => import("@/components/sections/HighlightsSection")
);
const TechStackSection = lazy(
  () => import("@/components/sections/TechStackSection")
);
const ServicesSection = lazy(
  () => import("@/components/sections/ServicesSection")
);
const TeamSection = lazy(() => import("@/components/sections/TeamSection"));
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection")
);

import { AnimatePresence, motion } from "framer-motion";
import { Code } from "lucide-react";

// Spinner fallback đơn giản cho Suspense
function SpinnerFallback() {
  return (
    <div className="fixed inset-0 z-49 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8"
      >
        {/* Rotating Icon */}
        <div className="relative mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
          >
            <Code className={`w-8 h-8 text-blue-500`} />
          </motion.div>

          {/* Pulsing Ring */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-16 h-16 border-2 border-blue-400 rounded-full"
          />
        </div>

        {/* Loading Text */}
        <AnimatePresence mode="wait">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-lg font-medium text-gray-700 mb-6"
          >
            Loading...
          </motion.p>
        </AnimatePresence>
      </motion.div>
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
