"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAboutData } from "@/hooks/useAboutData";
import SpinnerFallback from "@/components/layout/SpinnerFallBack";
import { getDynamicIcon } from "@/lib/useDynamicIcon"; // Import dynamic icon utility

export function AboutDetail() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const { data, loading, error } = useAboutData();

    if (loading) return <SpinnerFallback />;
    if (error || !data) return <div className="text-center text-red-500">{error}</div>;

    const { header, story, values, milestones, stats } = data;

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {header.title}
            </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {header.description}
                    </p>
                </motion.div>

                {/* Story */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Our Story
                        </h2>
                        <div className="prose prose-lg mx-auto text-gray-600">
                            {story.map((para, i) => (
                                <p key={i} className="mb-6">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((v, i) => {
                            const Icon = getDynamicIcon(v.icon); // icon trả về component
                            return (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-4">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        {v.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{v.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Our Journey
                    </h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                        <div className="space-y-8">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={m.year}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                                    className="relative flex items-start"
                                >
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold mr-8 shadow-lg">
                                        {m.year}
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {m.event}
                                        </h3>
                                        <p className="text-gray-600">{m.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        FlexiNet by the Numbers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    {s.value}
                                </div>
                                <div className="text-lg opacity-90">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
