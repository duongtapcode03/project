import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export  const contactDetailData = {
  header: {
    title: "Contact Us",
    description:
      "Ready to transform your business with cutting-edge technology? We're here to help you every step of the way.",
  },

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

  emergency: {
    title: "24/7 Emergency Support",
    description:
      "Need immediate assistance? Our emergency support team is available around the clock for critical issues.",
    button: "Emergency Contact",
  },
};
