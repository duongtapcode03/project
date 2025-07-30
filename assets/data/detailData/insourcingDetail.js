import { Users, Target, Lightbulb } from "lucide-react";

export const insourcingDetailData = {
  header: {
    title: "Insourcing Solutions",
    description:
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
      features: [
        "Full-time presence",
        "Direct collaboration",
        "Immediate communication",
        "Cultural integration",
      ],
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Technology leadership and strategic guidance",
      features: [
        "Architecture planning",
        "Technology roadmap",
        "Best practices",
        "Risk assessment",
      ],
    },
    {
      icon: Lightbulb,
      title: "Knowledge Transfer",
      description: "Comprehensive training and documentation",
      features: [
        "Skills development",
        "Process documentation",
        "Training programs",
        "Best practices sharing",
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Evaluating your current processes and needs",
    },
    {
      step: "02",
      title: "Planning",
      description: "Creating a customized integration strategy",
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamless team integration and setup",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement and knowledge transfer",
    },
  ],

  success: [
    { value: "95%", label: "Client Satisfaction", color: "text-blue-600" },
    { value: "50%", label: "Faster Development", color: "text-purple-600" },
    {
      value: "100%",
      label: "Knowledge Transfer Success",
      color: "text-teal-600",
    },
  ],

  cta: {
    title: "Ready to Integrate Our Expertise?",
    description:
      "Let's discuss how our insourcing solutions can strengthen your team and accelerate your technology initiatives.",
    primaryAction: "Schedule Assessment",
    secondaryAction: "Learn More",
  },
};
