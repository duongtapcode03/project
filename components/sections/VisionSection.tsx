'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Lightbulb, Globe, Rocket } from 'lucide-react';

export function VisionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Our Vision & Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaping the future of technology through innovation, excellence, and unwavering commitment to our clients' success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in technology innovation, empowering businesses 
                    worldwide with cutting-edge solutions that drive digital transformation 
                    and sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We continuously push the boundaries of what's possible, embracing 
                    emerging technologies and creative solutions to solve complex challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Global Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions reach across continents, creating positive impact 
                    and fostering technological advancement in diverse markets and communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

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
                <Rocket className="h-12 w-12 mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">Future-Ready Solutions</h3>
                <p className="text-lg mb-6 opacity-90">
                  We don't just build for today – we architect solutions that scale 
                  and adapt to tomorrow's challenges and opportunities.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm opacity-80">Global Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}