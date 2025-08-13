"use client";
import React, { useState } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import ApplicationFormModal from "@/components/model/ApplicationFormModal";
import { useCareers } from "@/hooks/useCareers";
import { log } from "node:console";
import SpinnerFallback from "@/components/layout/SpinnerFallBack";

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    service: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    github: "",
    expectedSalary: "",
    availableStart: "",
    workLocation: "",
    coverLetter: "",
    resume: null as File | null,
    portfolio_file: null as File | null,
    agreedToTerms: false,
    allowContact: true,
  });

  const { data, loading, error } = useCareers();

  if (loading) {
    return <SpinnerFallback />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Có lỗi xảy ra: {error.message}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const {
    heroSection,
    companyCultureSection,
    openPositionsSection,
    ctaSection,
    applicationModal
  } = data;

  const handleInputChangeOld = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const iconMap = {
    Heart: Heart,
    Coffee: Coffee,
    GraduationCap: GraduationCap,
    Zap: Zap,
    Users: Users,
    Award: Award,
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              {heroSection.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {heroSection.highlight}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {heroSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {heroSection.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (button.action.startsWith("scrollTo#")) {
                      const id = button.action.split("#")[1];
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                    // Thêm logic cho 'link' nếu cần
                  }}
                  className={`px-8 py-4 rounded-lg font-semibold ${
                    index === 0
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                  } transition-colors duration-200`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              {companyCultureSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyCultureSection.description}
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            delay={0.2}
          >
            {companyCultureSection.benefits.map((benefit, index) => {
              const IconComponent =
                iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                    {IconComponent && <IconComponent className="h-8 w-8" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              {openPositionsSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {openPositionsSection.description}
            </p>
          </AnimatedSection>

          <AnimatedSection className="space-y-6" delay={0.2}>
            {openPositionsSection.positions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() =>
                          setSelectedJob(selectedJob === job.id ? null : job.id)
                        }
                        className="flex items-center justify-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        View Details
                        {selectedJob === job.id ? (
                          <ChevronUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-2 h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setApplicationData({
                            ...applicationData,
                            position: job.title,
                          });
                          setShowApplicationForm(true);
                        }}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((requirement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationFormModal
          applicationData={applicationData}
          setApplicationData={setApplicationData}
          setShowApplicationForm={setShowApplicationForm}
          applicationModal={applicationModal}
        />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {ctaSection.description}
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              {ctaSection.button.label}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
