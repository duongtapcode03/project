'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Clock, Star } from 'lucide-react';

export function HighlightsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of multiple technology excellence awards and certifications.',
      stats: '15+ Awards',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth Track Record',
      description: 'Consistently delivering 300% ROI for our clients through innovative solutions.',
      stats: '300% ROI',
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Average project delivery 40% faster than industry standards.',
      stats: '40% Faster',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      description: 'Maintaining exceptional client satisfaction with 98% retention rate.',
      stats: '98% Retention',
      color: 'from-blue-400 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose TechFlow
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. Here's what sets us apart in the competitive technology landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${highlight.color} rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                  {highlight.stats}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-medium hover:text-purple-600 transition-colors duration-200 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Experience the TechFlow Difference?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and discover how we can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}