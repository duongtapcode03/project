'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Linkedin, Twitter, Github, MapPin, Calendar, Mail } from 'lucide-react';

interface TeamMemberDetailProps {
  memberId: string;
}

export function TeamMemberDetail({ memberId }: TeamMemberDetailProps) {
  // Mock data - in a real app, this would come from an API or database
  const teamMembers: Record<string, any> = {
    'john-doe': {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Visionary leader with 15+ years in the technology industry, John has been at the forefront of digital transformation initiatives across various sectors. His expertise in strategic planning and business development has helped numerous companies navigate the complex landscape of modern technology.',
      location: 'San Francisco, CA',
      joinDate: 'January 2015',
      email: 'john.doe@techflow.com',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership', 'Digital Transformation', 'Startup Mentoring'],
      experience: [
        {
          title: 'CEO & Founder',
          company: 'TechFlow Solutions',
          period: '2015 - Present',
          description: 'Leading the company vision and strategic direction, overseeing all operations and business development.',
        },
        {
          title: 'VP of Technology',
          company: 'InnovateTech Corp',
          period: '2010 - 2015',
          description: 'Managed technology strategy and digital transformation initiatives for enterprise clients.',
        },
        {
          title: 'Senior Consultant',
          company: 'Tech Advisors Inc',
          period: '2008 - 2010',
          description: 'Provided strategic technology consulting to Fortune 500 companies.',
        },
      ],
      education: [
        {
          degree: 'MBA in Technology Management',
          school: 'Stanford University',
          year: '2008',
        },
        {
          degree: 'BS in Computer Science',
          school: 'UC Berkeley',
          year: '2005',
        },
      ],
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    // Add other team members here...
  };

  const member = teamMembers[memberId];

  if (!member) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <Link
            href="/team"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/team"
            className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-24">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">{member.role}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 mb-6">
                  <a
                    href={member.social.linkedin}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>

              {/* Expertise */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {member.expertise.map((skill: string) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
                <div className="space-y-6">
                  {member.experience.map((exp: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="space-y-4">
                  {member.education.map((edu: any, index: number) => (
                    <div key={index} className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}