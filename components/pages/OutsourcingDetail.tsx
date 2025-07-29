'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

export function OutsourcingDetail() {
  const benefits = [
    'Reduce development costs by up to 60%',
    'Access to global talent pool',
    'Faster time-to-market',
    '24/7 development cycles',
    'Scalable team resources',
    'Focus on core business functions',
  ];

  const models = [
    {
      title: 'Dedicated Team',
      description: 'A fully committed team working exclusively on your project',
      features: ['Full-time dedication', 'Direct communication', 'Long-term partnership', 'Scalable resources'],
      pricing: 'From $4,000/month per developer',
    },
    {
      title: 'Project-Based',
      description: 'Complete project delivery with fixed scope and timeline',
      features: ['Fixed price & timeline', 'Complete project ownership', 'Quality guarantee', 'Maintenance included'],
      pricing: 'Starting from $10,000',
    },
    {
      title: 'Staff Augmentation',
      description: 'Extend your existing team with our skilled professionals',
      features: ['Quick onboarding', 'Flexible duration', 'Your project management', 'Seamless integration'],
      pricing: 'From $25/hour',
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
              Outsourcing Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your development capabilities with our expert teams while reducing costs 
            and accelerating your project delivery.
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
            Why Choose Our Outsourcing Services?
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

        {/* Service Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Outsourcing Models
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={model.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <p className="text-sm text-gray-500 mb-2">Starting Price</p>
                  <p className="text-xl font-bold text-blue-600 mb-4">{model.pricing}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
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
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Team Setup', description: 'Assembling the perfect team for your project' },
              { step: '03', title: 'Development', description: 'Agile development with regular updates' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' },
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Development?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our outsourcing services can help you achieve your goals 
            faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}