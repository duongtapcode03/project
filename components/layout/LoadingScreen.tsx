import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Terminal, Zap, Database, Cpu, Wifi } from "lucide-react";
import { useApiLoading } from "@/hooks/useApiLoading";

interface LoadingScreenProps {
  onComplete?: () => void;
  useRealApi?: boolean;
  minLoadingTime?: number;
}

export function LoadingScreen({
  onComplete,
  useRealApi = false,
  minLoadingTime = 3000,
}: LoadingScreenProps) {
  const { isLoading, progress, currentTask, error } = useApiLoading({
    minLoadingTime,
    simulateApiCalls: !useRealApi,
  });

  const loadingPhases = [
    {
      icon: Terminal,
      keywords: ["Initializing", "setup"],
      color: "text-blue-500",
    },
    {
      icon: Database,
      keywords: ["database", "Connecting"],
      color: "text-purple-500",
    },
    {
      icon: Cpu,
      keywords: ["Processing", "data", "user"],
      color: "text-teal-500",
    },
    {
      icon: Wifi,
      keywords: ["Establishing", "configurations"],
      color: "text-blue-600",
    },
    {
      icon: Code,
      keywords: ["Loading", "dashboard", "interface"],
      color: "text-purple-600",
    },
  ];

  // Determine current phase based on task content
  const getCurrentPhase = () => {
    const taskLower = currentTask.toLowerCase();
    for (let i = 0; i < loadingPhases.length; i++) {
      if (
        loadingPhases[i].keywords.some((keyword) =>
          taskLower.includes(keyword.toLowerCase())
        )
      ) {
        return i;
      }
    }
    return Math.floor((progress / 100) * loadingPhases.length);
  };

  const currentPhase = getCurrentPhase();

  useEffect(() => {
    if (!isLoading && progress >= 100) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progress, onComplete]);

  const CurrentIcon =
    loadingPhases[Math.min(currentPhase, loadingPhases.length - 1)]?.icon ||
    Code;
  const currentColor =
    loadingPhases[Math.min(currentPhase, loadingPhases.length - 1)]?.color ||
    "text-blue-500";

  // Show error state if there's an error
  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-2xl shadow-lg mb-4">
            <Terminal className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Loading Failed
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Animation - Same as hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 text-center">
        {/* Company Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-4">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Flexinet
          </h1>
        </motion.div>

        {/* Main Loading Animation */}
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
              <CurrentIcon className={`w-8 h-8 ${currentColor}`} />
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
              key={currentTask}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium text-gray-700 mb-6"
            >
              {currentTask}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Progress Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-500 font-medium"
        >
          {Math.round(progress)}%
        </motion.p>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Terminal-style Loading Indicator */}
      {/* <div className="absolute bottom-8 left-8 right-8">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-green-400 max-w-md mx-auto">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-400 text-xs">system.terminal</span>
          </div>
          <div className="space-y-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="overflow-hidden whitespace-nowrap"
            >
              $ npm run build --production
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-blue-400"
            >
              ✓ Build completed successfully
            </motion.div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
