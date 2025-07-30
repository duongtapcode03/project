// data/heroSectionData.js
export const heroSectionData = {
  title: `
    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
      Future-Ready
    </span><br />
    <span class="text-gray-900">Technology Solutions</span>
  `,
  description:
    "We transform businesses through innovative technology, expert development, and strategic partnerships that drive growth and success.",
  buttons: [
    { text: "Get Started Today", link: "/contact", type: "primary" },
    { text: "Watch Demo", link: "/demo", type: "secondary" },
  ],
  stats: [
    { title: "500+", description: "Projects Completed" },
    { title: "50+", description: "Expert Developers" },
    { title: "99%", description: "Client Satisfaction" },
  ],
};


// data/highlightsData.js
import { Award, TrendingUp, Clock, Star } from "lucide-react";

export const highlightsData = {
  title: "HIGHLIGHTS",
  description:
    "Our track record speaks for itself. Here's what sets us apart in the competitive technology landscape.",
  highlights: [
    {
      icon: Award,
      title: "Trusted Partner",
      description: "Reliable Outsourcing Partner of VIETTEL Group.",
      stats: "10+ years",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "DX & AI Edge",
      description: "Complete the apparatus Take DX, AI as core",
      stats: "50% Cost Saved",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Clock,
      title: "Leading Clients",
      description:
        "Customers are large organizations such as VIETTEL, VDC, SBV...",
      stats: "10+ Enterprise Clients",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Star,
      title: "Growth rate 200%",
      description: "Within 6 months, achieve 50+ technical staff",
      stats: "Growth",
      color: "from-blue-400 to-purple-500",
    },
  ],
  cta: {
    title: "Ready to Experience the FlexiNet Difference?",
    description:
      "Join our growing list of satisfied clients and discover how we can accelerate your business growth.",
    buttons: [
      { text: "Schedule Consultation", link: "/contact" },
      { text: "View Case Studies", link: "/case-studies" },
    ],
  },
};



// data/techStackData.js
export const techStackSectionData = {
  title: "Our Tech Stack",
  description:
    "We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof solutions for our clients.",
  categories: [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "C#", ".NET", "Go"],
      color: "from-green-500 to-teal-500",
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
      color: "from-orange-500 to-red-500",
    },
  ],
  cta: {
    title: "Don't See Your Preferred Technology?",
    description:
      "Our team is always learning and adapting. We can work with virtually any technology stack to meet your specific requirements.",
    button: { text: "Discuss Your Project", link: "/contact" },
  },
};

// data/visionSectionData.js
import { Eye, Lightbulb, Globe, Rocket } from "lucide-react";

export const visionSectionData = {
  title: "Our Vision & Values",
  description:
    "Shaping the future of technology through innovation, excellence, and unwavering commitment to our clients' success.",
  visions: [
    {
      icon: Eye,
      number: "01",
      text: `To become the leading strategic partner in outsourcing services for the telecommunications and banking sectors, focusing on loyal, strategic clients and flexibly applying artificial intelligence to lead the digital transformation trend`,
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Lightbulb,
      number: "02",
      text: `To build an intelligent service ecosystem focused on delivering highly innovative core applications, where technology and people connect flexibly to effectively and sustainably solve complex business challenges.`,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      number: "03",
      text: `To lead the future of the outsourcing industry through a minimalist management model, with a strong focus on the quality of outsourcing personnel, and by combining implementation flexibility with the power of artificial intelligence.`,
      color: "from-pink-500 to-red-500",
    },
  ],
  highlightCard: {
    icon: Rocket,
    title: "Future-Ready Solutions",
    description:
      "We don't just build for today – we architect solutions that scale and adapt to tomorrow's challenges and opportunities.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "100+", label: "Global Clients" },
    ],
  },
};


