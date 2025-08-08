"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useHighlightData } from "@/hooks/useHighlightData";
import { getDynamicIcon } from "@/lib/useDynamicIcon";
import { cn } from "@/lib/utils";

function HighlightsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { data, loading, error } = useHighlightData();

  if (loading) return null;
  if (error || !data) return <p>Error loading data</p>;

  const { title, description, highlights, cta } = data;

  const gradientMap: Record<string, string> = {
    "from-yellow-400 to-orange-500": "from-yellow-400 to-orange-500",
    "from-green-400 to-blue-500": "from-green-400 to-blue-500",
    "from-purple-400 to-pink-500": "from-purple-400 to-pink-500",
    "from-blue-400 to-purple-500": "from-blue-400 to-purple-500",
    "Schedule Consultation":
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 hover:shadow-lg transition-all duration-200 transform hover:scale-105",
    "View Case Studies":
      "border-2 border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-600 hover:text-white transition-all duration-200",
  };

  const getGradient = (color?: string) =>
    gradientMap[color ?? ""] || "from-blue-500 to-purple-500";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = getDynamicIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-[345px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={cn(
                      "bg-gradient-to-r rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300",
                      getGradient(item.color)
                    )}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.stats}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              {cta.title}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta.buttons.map((btn) => (
                <a
                  key={btn.text}
                  href={btn.link}
                  className={cn(
                    "rounded-full font-semibold",
                    getGradient(btn.text)
                  )}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default HighlightsSection;
