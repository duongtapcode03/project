'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Python', 'Java', 'C#', '.NET', 'Go'],
      color: 'from-green-500 to-teal-500',
    },
    {
      category: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Cloud & DevOps',
      techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'],
      color: 'from-orange-500 to-red-500',
    },
  ];

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
              Our Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, 
            and future-proof solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${category.color} rounded-lg p-4 mb-6`}>
                <h3 className="text-xl font-bold text-white text-center">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (techIndex * 0.05) }}
                    className="bg-gray-50 rounded-lg p-3 text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {tech}
                  </motion.div>
                ))}
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
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Don't See Your Preferred Technology?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is always learning and adapting. We can work with virtually any technology stack 
              to meet your specific requirements.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}