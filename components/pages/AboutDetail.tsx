'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Zap, Shield, Award, Globe } from 'lucide-react';

export function AboutDetail() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    { year: '2019', event: 'First Major Contract', description: 'Secured our first enterprise client, marking a significant milestone in our growth journey.' },
    { year: '2020', event: 'Global Expansion', description: 'Expanded operations internationally, serving clients across multiple continents.' },
    { year: '2021', event: '500+ Projects', description: 'Successfully completed over 500 projects for clients worldwide.' },
    { year: '2022', event: 'Industry Recognition', description: 'Received multiple industry awards for excellence in technology solutions.' },
    { year: '2023', event: 'AI Innovation Lab', description: 'Launched our AI Innovation Lab to explore cutting-edge artificial intelligence solutions.' },
    { year: '2024', event: 'Sustainability Initiative', description: 'Implemented eco-friendly coding practices and strategies to minimize energy consumption in our data centers, demonstrating our commitment to sustainable technology development.' },
    { year: '2025', event: 'Technological Breakthrough', description: 'Released a cutting-edge software development framework that enhances productivity and collaboration among developers, transforming the way teams build and deploy applications.' },  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients to understand their unique needs and challenges.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovation and emerging technologies to create solutions that keep our clients ahead of the curve.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with the highest level of integrity, transparency, and ethical standards in all our interactions.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Quality is at the heart of everything we do, from code to customer service, ensuring reliable and robust solutions.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We aim to create positive impact through technology, helping businesses grow and communities thrive.',
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
              About FLEXINET
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through 
            innovative solutions, expert development, and strategic partnerships.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                FlexiNet is a company specializing in outsourcing services in the fields of
                telecommunications and banking, backed by a team of experienced
                professionals with deep technological expertise. We partner with businesses to
                optimize operations, enhance efficiency, and accelerate digital transformation.
              </p>
              <p className="mb-6">
                Guided by the principle “Driven by Flexibility, Powered by AI” FlexiNet
                continuously innovates and leverages advanced artificial intelligence solutions
                to deliver long-term, practical value to our clients. We believe that flexibility in
                thinking and execution is the key to adapting in a constantly changing
                business environment, while AI serves as the engine that drives efficiency and
                breakthrough performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="relative flex items-start"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold mr-8 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">FlexiNet by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}