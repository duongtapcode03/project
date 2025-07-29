'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Target, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

export function InsourcingDetail() {
  const benefits = [
    'Direct integration with your team',
    'Knowledge transfer and training',
    'Long-term strategic partnership',
    'Cultural alignment',
    'On-site collaboration',
    'Process optimization',
  ];

  const services = [
    {
      icon: Users,
      title: 'On-site Teams',
      description: 'Experienced developers working directly at your location',
      features: ['Full-time presence', 'Direct collaboration', 'Immediate communication', 'Cultural integration'],
    },
    {
      icon: Target,
      title: 'Strategic Consulting',
      description: 'Technology leadership and strategic guidance',
      features: ['Architecture planning', 'Technology roadmap', 'Best practices', 'Risk assessment'],
    },
    {
      icon: Lightbulb,
      title: 'Knowledge Transfer',
      description: 'Comprehensive training and documentation',
      features: ['Skills development', 'Process documentation', 'Training programs', 'Best practices sharing'],
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
              Insourcing Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring our expertise directly into your organization for seamless collaboration, 
            knowledge transfer, and long-term strategic partnership.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Benefits of Insourcing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Insourcing Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluating your current processes and needs' },
              { step: '02', title: 'Planning', description: 'Creating a customized integration strategy' },
              { step: '03', title: 'Integration', description: 'Seamless team integration and setup' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and knowledge transfer' },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Success Stories
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600">Faster Development</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-gray-600">Knowledge Transfer Success</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Integrate Our Expertise?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our insourcing solutions can strengthen your team 
            and accelerate your technology initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Schedule Assessment</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}