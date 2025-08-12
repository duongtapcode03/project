'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useHeroData } from '@/hooks/useHeroSectionData';

function HeroSection() {
  const { data, loading, error } = useHeroData();
  const [showVideo, setShowVideo] = useState(false);

  if (loading) return null;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!data) return null;

  const { title, description, buttons, stats } = data;

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden liquid-bg">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob floating-animation"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 floating-animation"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 floating-animation"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass-morphism rounded-3xl p-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-20 text-3d">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent holographic">
              {title[0]}
            </span>
              <br />
              <span className="text-white drop-shadow-lg">{title[1]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"> {/* Thêm margin-bottom */}
              {buttons.map((btn) =>
                  btn.type === 'primary' ? (
                      <Link
                          key={btn.text}
                          href={btn.link}
                          className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold btn-3d neon-glow flex items-center space-x-2"
                      >
                        <span>{btn.text}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  ) : (
                      <button
                          key={btn.text}
                          onClick={() => setShowVideo(true)}
                          className="group flex items-center space-x-2 text-white hover:text-blue-300 font-semibold transition-all duration-200 magnetic"
                      >
                        <div className="glass-morphism rounded-full p-3 depth-shadow group-hover:shadow-xl transition-shadow floating-animation">
                          <Play className="h-6 w-6 text-blue-600" />
                        </div>
                        <span>{btn.text}</span>
                      </button>
                  )
              )}
            </div>

            {/* Video Element */}
            {showVideo && (
                <div className="mt-6">
                  <video
                      controls
                      className="w-full max-w-5xl h-80 rounded-lg depth-shadow tilt-effect"
                      src="/video/videocongty.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat) => (
                  <div
                      key={stat.title}
                      className="glass-morphism rounded-2xl p-6 depth-shadow hover:shadow-xl transition-all duration-300 card-3d perspective-card"
                  >
                    <div className="card-inner">
                      <div className="text-3xl font-bold text-blue-300 mb-2 text-3d">
                        {stat.title}
                      </div>
                      <div className="text-white/90">{stat.description}</div>
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}

export default HeroSection;