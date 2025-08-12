"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";

export function PrivacyPolicyDetail() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and company information when you contact us or use our services.",
        "Technical Information: IP address, browser type, device information, and usage data through cookies and analytics tools.",
        "Communication Data: Records of your communications with us, including emails, chat messages, and support tickets.",
        "Service Usage Data: Information about how you use our services, including features accessed and time spent."
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our services and customer support",
        "Communicate with you about our services, updates, and promotional offers",
        "Analyze usage patterns to enhance user experience and develop new features",
        "Comply with legal obligations and protect our rights and interests",
        "Process payments and manage billing for our services"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations.",
        "We may disclose information when required by law or to protect our rights.",
        "In case of business transfer, your information may be transferred to the new entity."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data.",
        "All data transmission is encrypted using SSL/TLS protocols.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly update our security practices and conduct security audits.",
        "We maintain backup systems to prevent data loss."
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access: Request a copy of the personal information we hold about you.",
        "Correction: Request correction of inaccurate or incomplete information.",
        "Deletion: Request deletion of your personal information, subject to legal requirements.",
        "Portability: Request transfer of your data to another service provider.",
        "Opt-out: Unsubscribe from marketing communications at any time."
      ]
    },
    {
      icon: Mail,
      title: "Contact Information",
      content: [
        "If you have questions about this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@flexinet.com",
        "Phone: +1 (555) 123-4567",
        "Address: 123 Tech Street, San Francisco, CA 94105",
        "We will respond to your inquiries within 30 days."
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium mb-8 transition-colors transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 1, 2024
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-8 transform hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              FlexiNet Solutions ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services. Please read this privacy policy carefully. 
              If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 mr-4 transform hover:rotate-12 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center transform hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're here to help. Contact us if you have any questions or concerns.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}