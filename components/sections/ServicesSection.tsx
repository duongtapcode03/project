'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ExternalLink, Users, Code, Zap, Shield, Globe, Smartphone } from 'lucide-react';

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business needs.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
      link: '/services/custom-development',
    },
    {
      icon: Users,
      title: 'Outsourcing',
      description: 'Scale your development team with our expert professionals and reduce operational costs.',
      features: ['Dedicated Teams', 'Project-Based', 'Staff Augmentation', '24/7 Support'],
      link: '/services/outsourcing',
    },
    {
      icon: Zap,
      title: 'Insourcing',
      description: 'Bring our expertise directly into your organization for seamless collaboration.',
      features: ['On-site Teams', 'Knowledge Transfer', 'Process Integration', 'Long-term Partnership'],
      link: '/services/insourcing',
    },
  ];

  const additionalServices = [
    { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security solutions' },
    { icon: Globe, title: 'Cloud Migration', description: 'Seamless cloud transformation' },
    { icon: Smartphone, title: 'Mobile Solutions', description: 'Native and cross-platform apps' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={service.link}
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3 w-fit mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals 
            and accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}