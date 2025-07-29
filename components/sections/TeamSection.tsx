'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 'Chairman',
      name: 'MS. HẢI',
      role: 'Chairman',
      image: 'https://tlhvn.com/images/team/resized/haican_1615002453.jpg.webp',
      bio: '• 25+ years of experience in IT\n' +
          '• Senior consultant at multinational\n' +
          'companies such as IBM, PWC, AWS\n' +
          '• Director of Strategy Department of VIETTEL\n' +
          'Group.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 'CTO',
      name: 'MR. THANH',
      role: 'CTO',
      image: 'https://tlhvn.com/images/team/resized/1546047924239_1615001861.jpeg.webp',
      bio: '• 20+ years of experience in IT\n' +
          '• 10 years of CTO experience\n' +
          '• Held positions as technical manager at\n' +
          'VIETTEL and CTO at TLH Company',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 'CEO',
      name: 'MS. LAN',
      role: 'CEO',
      image: '/images/anh123.png',
      bio: '• 30+ years of experience in the IT field\n' +
          '• 20 years of management experience\n' +
          '• Held positions as Deputy General Director at\n' +
          'CMCSOFT, Director of Government Sector at\n' +
          'CMC Dr. Director of VNG\'s Northern Branch,\n' +
          'Director of Vietnam Market Business of\n' +
          'TekExprerts.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 'Leader',
      name: 'MR. ĐỨC',
      role: 'Leader',
      image: 'https://tlhvn.com/images/images/2021/03/06/original/a1_1615002645.jpeg',
      bio: 'Creative designer focused on user-centered design solutions and innovative digital experiences.',
      location: 'DƯƠNG NỘI, HÀ NỘI',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results and driving innovation 
            in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/team/${member.id}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Join Our Growing Team
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology 
              and innovation. Explore career opportunities with FlexiNet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                View Open Positions
              </button>
              <Link
                href="/team"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Meet Full Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}