import Link from "next/link";
import Image from "next/image";
import { getDynamicIcon } from "@/lib/useDynamicIcon";
import clientPromise from "@/lib/mongodb";

export default async function Footer() {
    // 🔹 Gọi DB trực tiếp
    const client = await clientPromise;
    const db = client.db("Flexinet");
    const footer = await db.collection("footer").findOne({});

    if (!footer) return null;

    const { company, quickLinks, contactInfo, policies, copyright } = footer;

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={60}
                                    height={60}
                                    className="object-contain rounded-md"
                                />
                            </div>
                            <span className="text-xl font-bold">{company.name}</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">{company.description}</p>

                        <div className="flex space-x-4">
                            {company.socialLinks.map(({ icon, href }: any) => {
                                const Icon = getDynamicIcon(icon);
                                return (
                                    <a
                                        key={icon}
                                        href={href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(({ label, href }: any) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            {contactInfo.map(({ icon, text }: any) => {
                                const Icon = getDynamicIcon(icon);
                                return (
                                    <div key={text} className="flex items-center space-x-2">
                                        <Icon className="h-4 w-4 text-blue-400" />
                                        <span className="text-gray-300">{text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">{copyright}</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {policies.map(({ label, href }: any) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="text-gray-300 hover:text-white text-sm transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
