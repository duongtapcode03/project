"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useServiceData } from "@/hooks/useServiceData";

export function OutsourcingDetail() {
    const { data, loading, error } = useServiceData();

    if (loading) return null;
    if (error || !data) return <div className="text-center text-red-500">{error}</div>;

    const { heading, benefits, models, process, cta } = data.outsourcingData;

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

                {/* Benefits */}
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
                        {benefits.map((benefit) => (
                            <div
                                key={benefit}
                                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-lg"
                            >
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Models */}
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
                        {models.map((model) => (
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
                                    <p className="text-xl font-bold text-blue-600 mb-4">
                                        {model.pricing}
                                    </p>
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
                        {process.map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">{phase.step}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {phase.title}
                                </h3>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{cta.subtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {cta.buttons.map((btn) =>
                            btn.primary ? (
                                <Link
                                    key={btn.label}
                                    href={btn.href}
                                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>{btn.label}</span>
                                    <ArrowRight className="h-4 w-4" />
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
