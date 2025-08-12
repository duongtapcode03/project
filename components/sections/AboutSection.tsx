"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAboutData } from "@/hooks/useAboutData";
import * as Icons from "lucide-react";
import { DivideIcon as LucideIcon } from "lucide-react";
import Link from "next/link";

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
            const IconComponent = Icons[
              icon as keyof typeof Icons
            ] as LucideIcon;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 depth-shadow hover:shadow-xl transition-all duration-300 card-3d perspective-card holographic"
              >
                <div className="card-inner">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-6 magnetic floating-animation">
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 text-3d">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 liquid-bg rounded-3xl p-8 md:p-12 text-white text-center depth-shadow tilt-effect"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-3d">{cta.title}</h3>
          <p className="text-xl mb-8 opacity-90 drop-shadow-md">{cta.description}</p>
          <Link
            href={cta.button.link}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold btn-3d neon-glow"
          >
            {cta.button.text}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
