"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
    const certificates = [
        {
            title: "The Bits and Bytes of Computer Networking",
            file: "Bits and Bytes Certificate.pdf"
        },
        {
            title: "Computer Communications",
            file: "Computer Communications Certificate.pdf"
        },
        {
            title: "Digital Systems",
            file: "Digital Systems certificate.pdf"
        },
        {
            title: "Fundamentals of Network Communication",
            file: "Fundamentals of Network Communication.pdf"
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            file: "Introduction to Hardware and Operating Systems Certificate.pdf"
        },
        {
            title: "Peer-to-Peer Protocols and Local Area Networks",
            file: "Peer-to-Peer Protocols and Local Area Networks.pdf"
        },
        {
            title: "Software Engineering Implementation and Testing",
            file: "Software Engineering Implementation and Testing.pdf"
        },
        {
            title: "TCP/IP and Advanced Topics",
            file: "TCPIP and Advanced Topics.pdf"
        },
        {
            title: "C++ Certification",
            file: "Udemy - C++ Certificate.pdf"
        },
        {
            title: "Responsive Web Design",
            file: "free code camp certificate.pdf"
        }
    ];

    return (
        <section id="certificates" className="py-20 relative bg-black/40 border-y border-white/5">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00f0ff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow">
                        <Award className="text-[#00f0ff]" size={40} /> Certificates
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Professional validations to demonstrate my technical proficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, idx) => (
                        <motion.a
                            href={`/certifications/${cert.file}`}
                            target="_blank"
                            rel="noreferrer"
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="glass p-6 rounded-xl border border-white/10 hover:border-[#00f0ff]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-[#00f0ff]/10 rounded-lg border border-[#00f0ff]/20 group-hover:bg-[#00f0ff]/20 transition-colors">
                                    <Award className="text-[#00f0ff]" size={24} />
                                </div>
                                <ExternalLink size={20} className="text-gray-500 group-hover:text-[#00f0ff] transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors line-clamp-2 mt-auto">
                                {cert.title}
                            </h3>
                            <div className="text-sm text-gray-500 mt-2 font-mono truncate">
                                PDF Document
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
