import { Code, Users, Zap, Shield, Globe, Smartphone, Target, Lightbulb } from "lucide-react";

// Gộp phần heading trùng nhau
const sharedHeading = {
  title: "Our Services",
  subtitle:
    "Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.",
};

export const serviceData = {
  servicesData: {
    heading: sharedHeading,
    services: [
      {
        icon: Code,
        title: "Custom Development",
        description:
          "Tailored software solutions built from the ground up to meet your specific business needs.",
        features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
        link: "/services/custom-development",
      },
      {
        icon: Users,
        title: "Outsourcing",
        description:
          "Scale your development team with our expert professionals and reduce operational costs.",
        features: ["Dedicated Teams", "Project-Based", "Staff Augmentation", "24/7 Support"],
        link: "/services/outsourcing",
      },
      {
        icon: Zap,
        title: "Insourcing",
        description:
          "Bring our expertise directly into your organization for seamless collaboration.",
        features: ["On-site Teams", "Knowledge Transfer", "Process Integration", "Long-term Partnership"],
        link: "/services/insourcing",
      },
    ],
    additionalServices: [
      { icon: Shield, title: "Cybersecurity", description: "Comprehensive security solutions" },
      { icon: Globe, title: "Cloud Migration", description: "Seamless cloud transformation" },
      { icon: Smartphone, title: "Mobile Solutions", description: "Native and cross-platform apps" },
    ],
    cta: {
      title: "Ready to Start Your Project?",
      subtitle:
        "Let's discuss how our services can help you achieve your business goals and accelerate your digital transformation.",
      buttons: [
        { label: "Get Free Consultation", href: "/contact", primary: true },
        { label: "View All Services", href: "/services", primary: false },
      ],
    },
  },

  servicesDetailData: {
    heading: sharedHeading, // Dùng chung
    services: [
      {
        title: "Custom Development",
        description:
          "Tailored software solutions built from the ground up to meet your specific business needs and requirements.",
        features: [
          "Web Application Development",
          "Mobile App Development (iOS/Android)",
          "Desktop Software Solutions",
          "API Development & Integration",
          "Database Design & Optimization",
          "Third-party System Integration",
        ],
        technologies: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin"],
        pricing: "Starting from $5,000",
        timeline: "4-12 weeks",
        link: "/services/custom-development",
      },
      {
        title: "Outsourcing Services",
        description:
          "Scale your development team with our expert professionals while reducing operational costs and time-to-market.",
        features: [
          "Dedicated Development Teams",
          "Project-Based Development",
          "Staff Augmentation",
          "24/7 Development Support",
          "Quality Assurance & Testing",
          "Ongoing Maintenance & Support",
        ],
        technologies: ["Full-stack", "DevOps", "QA Testing", "UI/UX Design"],
        pricing: "From $25/hour",
        timeline: "Immediate start",
        link: "/services/outsourcing",
      },
      {
        title: "Insourcing Solutions",
        description:
          "Bring our expertise directly into your organization for seamless collaboration and knowledge transfer.",
        features: [
          "On-site Development Teams",
          "Knowledge Transfer Programs",
          "Process Integration & Training",
          "Long-term Strategic Partnership",
          "Technology Consulting",
          "Team Leadership & Management",
        ],
        technologies: ["Enterprise Systems", "Legacy Migration", "Architecture Design"],
        pricing: "Custom pricing",
        timeline: "2-4 weeks setup",
        link: "/services/insourcing",
      },
    ],
    cta: {
      title: "Need a Custom Solution?",
      subtitle:
        "Every business is unique. We create tailored solutions that perfectly match your specific requirements and goals.",
      buttons: [
        { label: "Get Free Consultation", href: "/contact", primary: true },
        { label: "View Portfolio", href: "/portfolio", primary: false },
      ],
    },
  },

  outsourcingData: {
    heading: {
      title: "Outsourcing Services",
      subtitle:
        "Scale your development capabilities with our expert teams while reducing costs and accelerating your project delivery.",
    },
    benefits: [
      "Reduce development costs by up to 60%",
      "Access to global talent pool",
      "Faster time-to-market",
      "24/7 development cycles",
      "Scalable team resources",
      "Focus on core business functions",
    ],
    models: [
      {
        title: "Dedicated Team",
        description: "A fully committed team working exclusively on your project",
        features: ["Full-time dedication", "Direct communication", "Long-term partnership", "Scalable resources"],
        pricing: "From $4,000/month per developer",
      },
      {
        title: "Project-Based",
        description: "Complete project delivery with fixed scope and timeline",
        features: ["Fixed price & timeline", "Complete project ownership", "Quality guarantee", "Maintenance included"],
        pricing: "Starting from $10,000",
      },
      {
        title: "Staff Augmentation",
        description: "Extend your existing team with our skilled professionals",
        features: ["Quick onboarding", "Flexible duration", "Your project management", "Seamless integration"],
        pricing: "From $25/hour",
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
      { step: "02", title: "Team Setup", description: "Assembling the perfect team for your project" },
      { step: "03", title: "Development", description: "Agile development with regular updates" },
      { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
    ],
    cta: {
      title: "Ready to Scale Your Development?",
      subtitle:
        "Let's discuss how our outsourcing services can help you achieve your goals faster and more efficiently.",
      buttons: [
        { label: "Start Your Project", href: "/contact", primary: true },
        { label: "Schedule Consultation", href: "/consultation", primary: false },
      ],
    },
  },

  insourcingData: {
    heading: {
      title: "Insourcing Solutions",
      subtitle:
        "Bring our expertise directly into your organization for seamless collaboration, knowledge transfer, and long-term strategic partnership.",
    },
    benefits: [
      "Direct integration with your team",
      "Knowledge transfer and training",
      "Long-term strategic partnership",
      "Cultural alignment",
      "On-site collaboration",
      "Process optimization",
    ],
    services: [
      {
        icon: Users,
        title: "On-site Teams",
        description: "Experienced developers working directly at your location",
        features: ["Full-time presence", "Direct collaboration", "Immediate communication", "Cultural integration"],
      },
      {
        icon: Target,
        title: "Strategic Consulting",
        description: "Technology leadership and strategic guidance",
        features: ["Architecture planning", "Technology roadmap", "Best practices", "Risk assessment"],
      },
      {
        icon: Lightbulb,
        title: "Knowledge Transfer",
        description: "Comprehensive training and documentation",
        features: ["Skills development", "Process documentation", "Training programs", "Best practices sharing"],
      },
    ],
    process: [
      { step: "01", title: "Assessment", description: "Evaluating your current processes and needs" },
      { step: "02", title: "Planning", description: "Creating a customized integration strategy" },
      { step: "03", title: "Integration", description: "Seamless team integration and setup" },
      { step: "04", title: "Optimization", description: "Continuous improvement and knowledge transfer" },
    ],
    success: [
      { value: "95%", label: "Client Satisfaction", color: "text-blue-600" },
      { value: "50%", label: "Faster Development", color: "text-purple-600" },
      { value: "100%", label: "Knowledge Transfer Success", color: "text-teal-600" },
    ],
    cta: {
      title: "Ready to Integrate Our Expertise?",
      subtitle:
        "Let's discuss how our insourcing solutions can strengthen your team and accelerate your technology initiatives.",
      buttons: [
        { label: "Schedule Assessment", href: "/contact", primary: true },
        { label: "Learn More", href: "/insourcing", primary: false },
      ],
    },
  },
};
