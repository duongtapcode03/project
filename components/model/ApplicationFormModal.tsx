"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";

type Props = {
  applicationData: any;
  setApplicationData: (data: any) => void;
  setShowApplicationForm: (show: boolean) => void;
};

const ApplicationFormModal = (props: Props) => {
  const { applicationData, setShowApplicationForm, setApplicationData } = props;
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Application submitted:", applicationData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitSuccess(false);
        setFormStep(1);
        setApplicationData({
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
          resume: null,
          portfolio_file: null,
          agreedToTerms: false,
          allowContact: true,
        });
      }, 3000);
    }, 2000);
  };
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setApplicationData({
        ...applicationData,
        [name]: checked,
      });
    } else {
      setApplicationData({
        ...applicationData,
        [name]: value,
      });
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setApplicationData({
        ...applicationData,
        [name]: e.target.files[0],
      });
    }
  };
  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const isStepValid = () => {
    switch (formStep) {
      case 1:
        return (
          applicationData.name && applicationData.email && applicationData.phone
        );
      case 2:
        return applicationData.experience && applicationData.coverLetter;
      case 3:
        return applicationData.resume && applicationData.agreedToTerms;
      default:
        return false;
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Apply for Position</h3>
              <p className="text-blue-100 mt-1">{applicationData.position}</p>
            </div>
            <button
              onClick={() => {
                setShowApplicationForm(false);
                setFormStep(1);
                setSubmitSuccess(false);
              }}
              className="text-white hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                      formStep >= step
                        ? "bg-white text-blue-600"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {step}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      formStep >= step ? "text-white" : "text-blue-200"
                    }`}
                  >
                    {step === 1
                      ? "Personal Info"
                      : step === 2
                      ? "Experience"
                      : "Documents"}
                  </span>
                  {step < 3 && (
                    <div className="w-8 h-0.5 bg-blue-400 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-200px)]">
          {submitSuccess ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in joining our team. We'll review
                your application and get back to you within 2-3 business days.
              </p>
              <p className="text-sm text-gray-500">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="p-6">
              {/* Step 1: Personal Information */}
              {formStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="workLocation"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Preferred Work Location
                      </label>
                      <select
                        id="workLocation"
                        name="workLocation"
                        value={applicationData.workLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select preference</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="onsite-sf">
                          On-site (San Francisco)
                        </option>
                        <option value="onsite-ny">On-site (New York)</option>
                        <option value="onsite-london">On-site (London)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={applicationData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={applicationData.github}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Experience & Motivation */}
              {formStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Experience & Motivation
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="expectedSalary"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Expected Salary Range
                      </label>
                      <select
                        id="expectedSalary"
                        name="expectedSalary"
                        value={applicationData.expectedSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select range</option>
                        <option value="60k-80k">$60,000 - $80,000</option>
                        <option value="80k-100k">$80,000 - $100,000</option>
                        <option value="100k-120k">$100,000 - $120,000</option>
                        <option value="120k-150k">$120,000 - $150,000</option>
                        <option value="150k-180k">$150,000 - $180,000</option>
                        <option value="180k+">$180,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="availableStart"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Available Start Date
                      </label>
                      <input
                        type="date"
                        id="availableStart"
                        name="availableStart"
                        value={applicationData.availableStart}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="portfolio"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Portfolio Website
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={applicationData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3: Documents & Final Details */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Documents & Final Details
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Resume *
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="portfolio_file"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Portfolio (Optional)
                      </label>
                      <input
                        type="file"
                        id="portfolio_file"
                        name="portfolio_file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.zip"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        PDF, DOC, DOCX, ZIP (Max 10MB)
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreedToTerms"
                        name="agreedToTerms"
                        checked={applicationData.agreedToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="agreedToTerms"
                        className="text-sm text-gray-700"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>{" "}
                        *
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="allowContact"
                        name="allowContact"
                        checked={applicationData.allowContact}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="allowContact"
                        className="text-sm text-gray-700"
                      >
                        I allow TechFlow to contact me about future
                        opportunities that match my profile
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={formStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    formStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setFormStep(1);
                    }}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>

                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isStepValid()
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStepValid() || isSubmitting}
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isStepValid() && !isSubmitting
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
