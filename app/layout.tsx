import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Giờ Footer là server component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FlexiNet Solutions - Leading Technology Company",
    description:
        "Innovative technology solutions for modern businesses. Outsourcing, insourcing, and custom development services.",
    icons: {
        icon: "/images/0a379107-9b83-4a8d-a19b-5139bedca43a.jpeg"
    }    
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Gọi thẳng như 1 server component */}
        </body>
        </html>
    );
}
