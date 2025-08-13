"use client";
import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SpinnerFallback from "@/components/layout/SpinnerFallBack";
import { useCaseStudyData } from "@/hooks/useCaseStudyData";

const CaseStudies = () => {
  const { data, loading, error } = useCaseStudyData();
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const getTechnologyIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      React: Code,
      "Node.js": Database,
      AWS: Globe,
      "React Native": Smartphone,
      Python: Code,
      Angular: Code,
      "Vue.js": Code,
      MongoDB: Database,
      PostgreSQL: Database,
    };
    return iconMap[tech] || Code;
  };

  if (loading) {
    return <SpinnerFallback />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { categories, caseStudies, header, cta, detailButton, activeDetails } =
    data;

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {header?.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {header?.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white text-xs rounded-full shadow">
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {study.client}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => {
                      const IconComponent = getTechnologyIcon(tech);
                      return (
                        <span
                          key={techIndex}
                          className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          <IconComponent className="h-3 w-3" />
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {activeDetails && (
                    <Link
                      href={`/caseStudy/${study.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 group"
                    >
                      <span>{detailButton}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={cta.buttons[0]?.href}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {cta.buttons[0]?.text}
              </Link>
              <a
                href={cta.buttons[1]?.href}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>{cta.buttons[1]?.text}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
