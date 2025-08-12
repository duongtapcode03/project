"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Scale, Zap } from "lucide-react";

export function TermsOfServiceDetail() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using FlexiNet Solutions' services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you may not access or use our services.",
        "We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.",
        "These terms apply to all users, including visitors, customers, and other users of the service."
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        "You must provide accurate and complete information when using our services.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use our services for any unlawful or prohibited activities.",
        "You must not attempt to gain unauthorized access to our systems or other users' accounts.",
        "You are responsible for all activities that occur under your account."
      ]
    },
    {
      icon: Zap,
      title: "Service Availability",
      content: [
        "We strive to maintain high service availability but cannot guarantee 100% uptime.",
        "Scheduled maintenance may temporarily interrupt service availability.",
        "We reserve the right to modify, suspend, or discontinue services with reasonable notice.",
        "Service levels and performance metrics are outlined in our Service Level Agreement (SLA).",
        "We are not liable for service interruptions beyond our reasonable control."
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "All content, trademarks, and intellectual property on our platform belong to FlexiNet Solutions.",
        "You may not reproduce, distribute, or create derivative works without our written permission.",
        "You retain ownership of any content you create using our services.",
        "We grant you a limited license to use our services in accordance with these terms.",
        "Any feedback or suggestions you provide may be used by us without compensation."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the maximum extent permitted by applicable law.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount paid by you for our services in the past 12 months.",
        "We do not warrant that our services will be error-free or uninterrupted.",
        "You use our services at your own risk and discretion."
      ]
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of the State of California, United States.",
        "Any disputes will be resolved through binding arbitration in San Francisco, CA.",
        "You waive any right to participate in class-action lawsuits against us.",
        "If any provision of these terms is found invalid, the remaining provisions remain in effect.",
        "These terms constitute the entire agreement between you and FlexiNet Solutions."
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
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. They govern your use of FlexiNet Solutions.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service ("Terms") govern your use of FlexiNet Solutions' website and services. 
              By using our services, you agree to these terms and our Privacy Policy. We provide technology 
              solutions including outsourcing, insourcing, and custom development services. These terms ensure 
              a clear understanding of rights and responsibilities for all parties involved.
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center transform hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact our legal team if you have questions about these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}