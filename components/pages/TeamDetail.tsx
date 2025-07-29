'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Twitter, Github, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

export function TeamDetail() {
  const teamMembers = [
    {
      id: 'john-doe',
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in tech industry, specializing in digital transformation and strategic business development.',
      location: 'San Francisco, CA',
      joinDate: 'January 2015',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Digital Transformation'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      id: 'jane-smith',
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology strategist specializing in scalable architectures, cloud computing, and emerging technologies.',
      location: 'New York, NY',
      joinDate: 'March 2016',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps', 'Technology Strategy'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      id: 'mike-johnson',
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack expert with passion for clean, efficient code and modern development practices.',
      location: 'Austin, TX',
      joinDate: 'July 2017',
      expertise: ['Full-stack Development', 'React', 'Node.js', 'Database Design'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      id: 'sarah-wilson',
      name: 'Sarah Wilson',
      role: 'UX/UI Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user-centered design solutions and innovative digital experiences.',
      location: 'Seattle, WA',
      joinDate: 'September 2018',
      expertise: ['User Experience', 'Interface Design', 'Prototyping', 'Design Systems'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      id: 'david-brown',
      name: 'David Brown',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Infrastructure specialist ensuring reliable, scalable, and secure deployment pipelines.',
      location: 'Denver, CO',
      joinDate: 'February 2019',
      expertise: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      id: 'emily-davis',
      name: 'Emily Davis',
      role: 'QA Engineer',
      image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Quality assurance expert committed to delivering bug-free, high-performance software solutions.',
      location: 'Boston, MA',
      joinDate: 'May 2020',
      expertise: ['Test Automation', 'Quality Assurance', 'Performance Testing', 'Bug Tracking'],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals behind TechFlow's success. Our diverse team 
            brings together expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/team/${member.id}`}>
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{member.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{member.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology 
            and innovation. Explore career opportunities with TechFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              View Open Positions
            </button>
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