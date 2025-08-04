"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAboutData } from "@/hooks/useAboutData";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

function AboutSection() {
  const { data, loading, error } = useAboutData();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (loading) return null;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!data) return null;

  const { header, features, cta } = data;

  return (
    <section id="about" className="py-20 bg-white">
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
              {header.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {header.description}
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }, index) => {
            const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-6">
                  {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h3>
          <p className="text-xl mb-8 opacity-90">{cta.description}</p>
          <a
            href={cta.button.link}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {cta.button.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;