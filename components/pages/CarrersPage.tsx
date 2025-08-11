'use client';
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
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      experience: "5+ years",
      description:
        "We are looking for a Senior Full Stack Developer to join our engineering team and help build scalable web applications.",
      responsibilities: [
        "Develop and maintain web applications using React, Node.js, and TypeScript",
        "Collaborate with cross-functional teams to define and implement new features",
        "Write clean, maintainable, and well-tested code",
        "Mentor junior developers and participate in code reviews",
        "Optimize applications for maximum speed and scalability",
        "Stay up-to-date with emerging technologies and industry trends",
      ],
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in React, Node.js, TypeScript, and modern JavaScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of RESTful APIs and GraphQL",
        "Experience with version control systems (Git)",
        "Excellent problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and remote options",
        "Professional development budget",
        "Unlimited PTO policy",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      experience: "3+ years",
      description:
        "Join our design team to create intuitive and beautiful user experiences for our digital products.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve our design system",
        "Present design concepts to stakeholders",
      ],
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating design process and outcomes",
        "Understanding of user-centered design principles",
        "Experience with responsive and mobile-first design",
        "Knowledge of HTML/CSS is a plus",
        "Excellent communication and presentation skills",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health and wellness benefits",
        "Remote work flexibility",
        "Design conference and workshop budget",
        "Latest design tools and equipment",
      ],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      experience: "4+ years",
      description:
        "Help us build and maintain scalable infrastructure and deployment pipelines for our applications.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure on AWS/Azure/GCP",
        "Monitor system performance and reliability",
        "Automate deployment and scaling processes",
        "Implement security best practices",
        "Collaborate with development teams on infrastructure needs",
      ],
      requirements: [
        "4+ years of experience in DevOps or Site Reliability Engineering",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
        "Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Experience with monitoring tools (Prometheus, Grafana, ELK stack)",
        "Strong scripting skills (Python, Bash, PowerShell)",
        "Understanding of networking and security principles",
      ],
      benefits: [
        "Competitive compensation package",
        "Comprehensive benefits package",
        "Flexible working hours",
        "Professional certification support",
        "Conference and training opportunities",
      ],
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "5+ years",
      description:
        "Lead product strategy and execution for our core technology platform.",
      responsibilities: [
        "Define product vision and strategy",
        "Manage product roadmap and prioritization",
        "Collaborate with engineering, design, and business teams",
        "Conduct market research and competitive analysis",
        "Define and track key product metrics",
        "Communicate product updates to stakeholders",
      ],
      requirements: [
        "5+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and data-driven decision making skills",
        "Excellent communication and leadership abilities",
        "Experience with agile development methodologies",
        "Technical background or strong technical aptitude",
        "MBA or equivalent experience preferred",
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health benefits",
        "Flexible work environment",
        "Product management training and certification",
        "Stock option plan",
      ],
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      experience: "3+ years",
      description:
        "Join our data science team to build machine learning models and extract insights from data.",
      responsibilities: [
        "Develop and deploy machine learning models",
        "Analyze large datasets to identify trends and patterns",
        "Collaborate with product teams to implement data-driven features",
        "Build data pipelines and ETL processes",
        "Create data visualizations and reports",
        "Stay current with ML/AI research and best practices",
      ],
      requirements: [
        "3+ years of experience in data science or machine learning",
        "Proficiency in Python, R, or similar languages",
        "Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)",
        "Strong statistical analysis and modeling skills",
        "Experience with SQL and database systems",
        "Knowledge of cloud platforms and big data tools",
        "PhD or Masters in relevant field preferred",
      ],
      benefits: [
        "Competitive salary and bonuses",
        "Health and wellness benefits",
        "Remote work flexibility",
        "Conference and research publication support",
        "Access to latest ML tools and platforms",
      ],
    },
    {
      id: 6,
      title: "Junior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$70k - $90k",
      experience: "1-2 years",
      description:
        "Start your career with us as a Junior Frontend Developer and grow your skills in modern web development.",
      responsibilities: [
        "Develop user interfaces using React and modern JavaScript",
        "Implement responsive designs and ensure cross-browser compatibility",
        "Collaborate with senior developers and designers",
        "Write clean, maintainable code following best practices",
        "Participate in code reviews and team meetings",
        "Learn and apply new technologies and frameworks",
      ],
      requirements: [
        "1-2 years of frontend development experience",
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React or similar frontend frameworks",
        "Understanding of responsive design principles",
        "Basic knowledge of version control (Git)",
        "Strong willingness to learn and grow",
        "Computer Science degree or equivalent experience",
      ],
      benefits: [
        "Competitive entry-level salary",
        "Mentorship and career development programs",
        "Health and dental insurance",
        "Learning and development budget",
        "Flexible work arrangements",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance plus wellness programs",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and unlimited PTO policy",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description:
        "Professional development budget, conferences, and internal training programs",
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description:
        "20% time for personal projects and exploring new technologies",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Collaborative environment with regular team events and activities",
    },
    {
      icon: Award,
      title: "Recognition",
      description:
        "Performance bonuses, equity options, and career advancement opportunities",
    },
  ];

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build the future of technology with us. We're looking for
              passionate, talented individuals who want to make a real impact in
              the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("open-positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                View Open Positions
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-semibold">
                Learn About Our Culture
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and
              people grow.
            </p>
          </AnimatedSection>

          <AnimatedSection
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            delay={0.2}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us.
            </p>
          </AnimatedSection>

          <AnimatedSection className="space-y-6" delay={0.2}>
            {openPositions.map((job, index) => (
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Apply for Position</h3>
                  <p className="text-blue-100 mt-1">
                    {applicationData.position}
                  </p>
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
                    Thank you for your interest in joining our team. We'll
                    review your application and get back to you within 2-3
                    business days.
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
                            <option value="onsite-ny">
                              On-site (New York)
                            </option>
                            <option value="onsite-london">
                              On-site (London)
                            </option>
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
                            <option value="100k-120k">
                              $100,000 - $120,000
                            </option>
                            <option value="120k-150k">
                              $120,000 - $150,000
                            </option>
                            <option value="150k-180k">
                              $150,000 - $180,000
                            </option>
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
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="#"
                              className="text-blue-600 hover:underline"
                            >
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
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Send Your Resume
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
