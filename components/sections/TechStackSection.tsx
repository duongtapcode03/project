'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTechStackData } from '@/hooks/useTechStackData';
import {cn} from "@/lib/utils";

export function TechStackSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { data, loading, error } = useTechStackData();

  // Nếu đang loading hoặc có lỗi
  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error || !data) return <p className="text-center py-10 text-red-500">Failed to load data.</p>;

  const { title, description, categories, cta } = data;

  // Hàm lấy màu với fallback
    const gradientMap: Record<string, string> = {
        "from-blue-500 to-cyan-500": "from-blue-500 to-cyan-500",
        "from-green-500 to-teal-500": "from-green-500 to-teal-500",
        "from-purple-500 to-pink-500": "from-purple-500 to-pink-500",
        "from-orange-500 to-red-500": "from-orange-500 to-red-500",
    };

    const getGradient = (color?: string) =>
        gradientMap[color ?? ""] || "from-blue-500 to-purple-500";


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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const colorClass = getGradient(category.color);

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className={cn('bg-gradient-to-r',getGradient(category.color), 'rounded-lg p-4 mb-6')}>
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.category}
                  </h3>
                </div>

                {/* Tech List */}
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + techIndex * 0.05,
                      }}
                      className="bg-gray-50 rounded-lg p-3 text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      {tech}
                    </motion.div>
                  ))}
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">{cta.title}</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{cta.description}</p>
            <a
              href={cta.button.link}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {cta.button.text}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
