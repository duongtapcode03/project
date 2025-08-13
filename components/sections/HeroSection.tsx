'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useHeroData } from '@/hooks/useHeroSectionData';

function HeroSection() {
  const { t } = useTranslation('common');
  const { data, loading, error } = useHeroData();
  const [showVideo, setShowVideo] = useState(false);

  if (loading) return null;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Use translations as fallback if API data is not available
  const heroData = data || {
    title: t('hero.title', { returnObjects: true }) as string[],
    description: t('hero.description'),
    buttons: [
      { text: t('hero.buttons.getStarted'), link: '/contact', type: 'primary' as const },
      { text: t('hero.buttons.watchDemo'), link: '#', type: 'secondary' as const }
    ],
    stats: []
  };

  const { title, description, buttons, stats } = heroData;

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-20">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              {Array.isArray(title) ? title[0] : title}
            </span>
              <br />
              <span className="text-gray-900">{Array.isArray(title) ? title[1] : ''}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"> {/* Thêm margin-bottom */}
              {buttons.map((btn) =>
                  btn.type === 'primary' ? (
                      <Link
                          key={btn.text}
                          href={btn.link}
                          className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                      >
                        <span>{btn.text}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  ) : (
                      <button
                          key={btn.text}
                          onClick={() => setShowVideo(true)}
                          className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200"
                      >
                        <div className="bg-white rounded-full p-3 shadow-lg group-hover:shadow-xl transition-shadow">
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
                      className="w-full max-w-5xl h-80 rounded-lg shadow-lg"
                      src="/video/videocongty.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
            )}
          </motion.div>

          {/* Stats */}
          {stats && stats.length > 0 && (
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
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.title}
                    </div>
                    <div className="text-gray-600">{stat.description}</div>
                  </div>
              ))}
            </div>
            </motion.div>
          )}
        </div>
      </section>
  );
}

export default HeroSection;