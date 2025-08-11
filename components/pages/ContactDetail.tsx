"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getDynamicIcon } from "@/lib/useDynamicIcon";
import { useContactData } from "@/hooks/useContactData";
import { useState } from "react";
import { log } from "node:console";
import Link from "next/link";

export function ContactDetail() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { data, loading, error } = useContactData();

  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  if (loading) return null;
  if (error || !data)
    return (
      <div className="text-center text-red-500">
        {error || "Failed to load data"}
      </div>
    );

  const {
    headerContactDetail,
    contactMethods,
    offices,
    emergency,
    contactForm,
  } = data;
  console.log("formData: ", formData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Liên hệ từ ${formData.firstName?.trim()} ${formData.lastName?.trim()}`;
    const body = `
    Họ và tên: ${formData.firstName?.trim()} ${formData.lastName?.trim()}
    Email: ${formData.email?.trim()}
    Số điện thoại: ${formData.phone?.trim()}
    Công ty: ${formData.company?.trim()}
    Dịch vụ: ${formData.service?.trim()}

    Nội dung:
    ${formData.message?.trim()}
  `;

    const mailtoLink = `mailto:${
      contactForm?.mailto || ""
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

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
              {headerContactDetail.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {headerContactDetail.description}
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
          {contactMethods.map((m, i) => {
            const Icon = getDynamicIcon(m.icon);
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 w-fit mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-blue-600 font-medium">{m.primary}</p>
                <p className="text-gray-500 text-sm mb-3">{m.secondary}</p>
                <p className="text-gray-600 text-sm mb-4">{m.description}</p>
                {/* // hover:scale-105 */}
                <Link
                  href={m.href}
                  target="_blank"
                  className="inline-flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  {m.action}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {contactForm.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First 2 fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactForm.fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Remaining fields */}
              {contactForm.fields.slice(2).map((field) => {
                if (field.type === "select") {
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <select
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                      >
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                if (field.type === "textarea") {
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <textarea
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        rows={5}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>
                  );
                }

                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                );
              })}

              {/* Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id={contactForm.checkbox.id}
                  required={contactForm?.checkbox?.required}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={contactForm.checkbox.id}
                  className="ml-2 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: contactForm.checkbox.label,
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {contactForm.submitButton}
              </button>
            </form>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>

            {offices
              .filter((o) => o.status === 1)
              .map((o, i) => {
                const MapIcon = getDynamicIcon("MapPin");
                const PhoneIcon = getDynamicIcon("Phone");
                const ClockIcon = getDynamicIcon("Clock");

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {o.city}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start">
                        <MapIcon className="h-4 w-4 mr-2 mt-1 text-blue-500" />
                        <span className="whitespace-pre-line">{o.address}</span>
                      </div>
                      <div className="flex items-center">
                        <PhoneIcon className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{o.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{o.hours}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">{emergency.title}</h3>
              <p className="mb-4 opacity-90">{emergency.description}</p>
              {/* hover:scale-105 */}
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform cursor-default">
                {emergency.button}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
