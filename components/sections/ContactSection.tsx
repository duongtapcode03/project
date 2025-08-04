"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContactData } from "@/hooks/useContactData";
import { getDynamicIcon } from "@/lib/useDynamicIcon";

function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { data, loading, error } = useContactData();

  if (loading) return null;
  if (error || !data)
    return <div className="text-center py-20 text-red-500">Failed to load contact data.</div>;

  const {
    headerContactSecTion,
    form: { fields, submitButton },
    contacts,
    support,
  } = data;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {headerContactSecTion.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {headerContactSecTion.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
            <form className="space-y-6">
              {fields.map(({ name, placeholder, type }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {placeholder}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      rows={4}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    ></textarea>
                  ) : (
                    <input
                      type={type || "text"}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {submitButton.text}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contacts.map(({ icon, title, info, description }, index) => {
                const Icon = getDynamicIcon(icon);
                return (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{info}</p>
                      <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">{support.title}</h4>
              <p className="mb-6 opacity-90">{support.description}</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                {support.button.text}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
