"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getDynamicIcon } from "@/lib/useDynamicIcon";
import { useVisionData } from "@/hooks/useVisionData";

export function VisionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { data, loading, error } = useVisionData();

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error || !data) return <div className="text-center text-red-500">{error}</div>;

  const { title, description, visions, highlightCard } = data;
  const HighlightIcon = getDynamicIcon(highlightCard.icon);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {visions.map(({ icon, number, text, color }) => {
                const Icon = getDynamicIcon(icon);
                return (
                  <div key={number} className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${color} rounded-lg p-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">{number}</h3>
                      <p className="text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <HighlightIcon className="h-12 w-12 mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">{highlightCard.title}</h3>
                <p className="text-lg mb-6 opacity-90">{highlightCard.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {highlightCard.stats.map(({ value, label }) => (
                    <div key={label} className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm opacity-80">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
