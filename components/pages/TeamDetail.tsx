'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Twitter, Github, MapPin } from 'lucide-react';

import { useTeamData } from '@/hooks/useTeamData';

export function TeamDetail() {
  const { data, loading, error } = useTeamData();

  if (loading) {
    return null
  }

  if (error || !data) {
    return (
      <div className="text-center py-10 text-red-500">
        {error || 'Failed to load team data'}
      </div>
    );
  }

  const {
    overview: { teamMembers, cta },
    header,
  } = data;

  const { headline, description, buttons } = cta;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {header.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {header.description}
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const { id, name, role, image, bio, location, expertise = [], social } = member;

            return (
              <motion.div
                key={id + name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/team/${id}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative mb-6">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">{role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed whitespace-pre-line">
                      {bio}
                    </p>

                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {expertise.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {expertise.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{expertise.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      {social.linkedin && (
                        <a
                          href={social.linkedin}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {social.twitter && (
                        <a
                          href={social.twitter}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {social.github && (
                        <a
                          href={social.github}
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{headline}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons[0] && (
              <Link href={buttons[0].link}>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  {buttons[0].label}
                </button>
              </Link>
            )}
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
