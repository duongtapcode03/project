import { AnimatePresence, motion } from "framer-motion";
import { Code } from "lucide-react";

function SpinnerFallback() {
  return (
    <div className="fixed inset-0 z-49 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
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

export default SpinnerFallback;
