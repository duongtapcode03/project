import { Mail, Phone, MessageCircle, Calendar, MapPin, Clock } from "lucide-react";

export const contactData = {
  headerContactDetail: {
    title: "Contact Us",
    description:
      "Ready to transform your business with cutting-edge technology? We're here to help you every step of the way.",
  },

  headerContactSecTion: {
    title: "Get In Touch",
    description:
      "Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you succeed.",
  },


  form: {
    fields: [
      { name: "firstName", placeholder: "First Name" },
      { name: "lastName", placeholder: "Last Name" },
      { name: "email", placeholder: "Email" },
      { name: "message", placeholder: "Message", type: "textarea" },
    ],
    submitButton: { text: "Send Message" },
  },

  contacts: [
    {
      icon: Mail,
      title: "Email Us",
      info: "Support@flexinet.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "(+84) 983 340 568",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Hà Nội Office",
      info: "6th Floor, Sannam Building",
      description: "78 Duy Tan, Cau Giay, Hanoi",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "8:00 AM - 5:00 PM",
      description: "Monday to Friday",
    },
  ],

  contactMethods: [
    {
      icon: Mail,
      title: "Email",
      primary: "Support@flexinet.com",
      secondary: "Support@flexinet.com",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "(+84)983 340 568",
      secondary: "(+84)983 340 568",
      description: "Call us Monday to Friday from 8am to 5pm PST",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Average response: 2 minutes",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      primary: "Free Consultation",
      secondary: "30-60 minutes",
      description:
        "Book a meeting to discuss your project requirements",
      action: "Book Meeting",
    },
  ],

  offices: [
    {
      city: "Hà Nội",
      address: "6th Floor, Sannam Building, 78 Duy Tan, Cau Giay, Hanoi",
      phone: "(+84)983 340 568",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
    },
    {
      city: "Hà Nội",
      address: "Tầng 42 - Tòa nhà Keangnam Landmark 72",
      phone: "(+84)983 340 568",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM EST",
    },
    {
      city: "Hà Nội",
      address: "Tòa nhà Thái Hà Building - 26 Dương Đình Nghệ",
      phone: "(+84)983 340 568",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM CST",
    },
  ],

  support: {
    title: "Need Immediate Assistance?",
    description:
      "Our support team is available 24/7 for urgent inquiries and existing clients.",
    button: { text: "Emergency Support", link: "/support" },
  },

  emergency: {
    title: "24/7 Emergency Support",
    description:
      "Need immediate assistance? Our emergency support team is available around the clock for critical issues.",
    button: "Emergency Contact",
  },
  contactForm: {
    title: "Send us a message",
    fields: [
      {
        name: "firstName",
        label: "First Name *",
        type: "text",
        required: true,
        placeholder: "John",
        grid: "md:col-span-1",
      },
      {
        name: "lastName",
        label: "Last Name *",
        type: "text",
        required: true,
        placeholder: "Doe",
        grid: "md:col-span-1",
      },
      {
        name: "email",
        label: "Email *",
        type: "email",
        required: true,
        placeholder: "john@example.com",
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+84 123 456 789",
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        placeholder: "Your Company",
      },
      {
        name: "service",
        label: "Service Interested In",
        type: "select",
        options: [
          { value: "", label: "Select a service" },
          { value: "custom-development", label: "Custom Development" },
          { value: "outsourcing", label: "Outsourcing" },
          { value: "insourcing", label: "Insourcing" },
          { value: "consulting", label: "Technology Consulting" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "message",
        label: "Message *",
        type: "textarea",
        required: true,
        placeholder:
          "Tell us about your project requirements, timeline, and any specific needs...",
      },
    ],
    checkbox: {
      id: "privacy",
      label:
        'I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>',
    },
    submitButton: "Send Message",
  },
};
