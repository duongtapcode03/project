'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export function ContactDetail() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@techflow.com',
      secondary: 'support@techflow.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 123-4568',
      description: 'Call us Monday to Friday from 8am to 5pm PST',
      action: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      primary: 'Available 24/7',
      secondary: 'Average response: 2 minutes',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      primary: 'Free Consultation',
      secondary: '30-60 minutes',
      description: 'Book a meeting to discuss your project requirements',
      action: 'Book Meeting',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Suite 100\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, Floor 15\nNew York, NY 10001',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Fri: 9:00 AM - 7:00 PM EST',
    },
    {
      city: 'Austin',
      address: '789 Developer Blvd, Building C\nAustin, TX 78701',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM CST',
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
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            We're here to help you every step of the way.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 w-fit mx-auto mb-4">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-blue-600 font-medium">{method.primary}</p>
              <p className="text-gray-500 text-sm mb-3">{method.secondary}</p>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                {method.action}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select a service</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="outsourcing">Outsourcing</option>
                  <option value="insourcing">Insourcing</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Offices</h2>
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{office.city}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="whitespace-pre-line">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Support</h3>
              <p className="mb-4 opacity-90">
                Need immediate assistance? Our emergency support team is available 
                around the clock for critical issues.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Emergency Contact
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}