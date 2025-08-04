"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useServiceData } from "@/hooks/useServiceData";

export function ServicesDetail() {
    const { data, loading, error } = useServiceData();

    if (loading) return null;
    if (error || !data) return <div className="text-center text-red-500">{error}</div>;

    const { heading, services, cta } = data.servicesDetailData;

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {heading.title}
            </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{heading.subtitle}</p>
                </motion.div>

                {/* Services List */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Technologies:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Starting Price</p>
                                        <p className="font-bold text-blue-600">{service.pricing}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Timeline</p>
                                        <p className="font-bold text-gray-900">{service.timeline}</p>
                                    </div>
                                </div>

                                <Link
                                    href={service.link}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{cta.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {cta.buttons.map((btn) =>
                            btn.primary ? (
                                <Link
                                    key={btn.label}
                                    href={btn.href}
                                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                                >
                                    {btn.label}
                                </Link>
                            ) : (
                                <Link
                                    key={btn.label}
                                    href={btn.href}
                                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                                >
                                    {btn.label}
                                </Link>
                            )
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
