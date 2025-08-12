"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";
import { usePrivacyPolicyData } from "@/hooks/usePrivacyPolicyData"; // giả sử bạn đã tạo hook này
import { getDynamicIcon } from "@/lib/useDynamicIcon";
import SpinnerFallback from "@/components/layout/SpinnerFallBack";

export function PrivacyPolicyDetail() {
  const { data, loading, error } = usePrivacyPolicyData();

  if (loading) return <SpinnerFallback />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

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
            <Icons.ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {data.header.title}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.header.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {data.lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-8 transform hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {data.introduction.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {data.introduction.content}
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {data.sections.map((section, index) => {
              const Icon = getDynamicIcon(section.icon);
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
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">
                          {item}
                        </span>
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
            <h3 className="text-2xl font-bold mb-4">{data.footer.title}</h3>
            <p className="text-lg mb-6 opacity-90">{data.footer.description}</p>
            <Link
              href={data.footer.contactLink}
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
