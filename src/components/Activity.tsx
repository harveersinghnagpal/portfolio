"use client";

import { motion } from "framer-motion";
import { Activity as ActivityIcon, Github, Zap } from "lucide-react";

export default function Activity() {
    const currentBuilds = [
        {
            title: "AI Code Debugger Agent",
            description: "Building an autonomous tool that analyzes Python errors and suggests intelligent fixes using local LLMs.",
            status: "In Development",
        },
        {
            title: "RAG Document Chatbot",
            description: "Experimenting with vector search mechanisms to query large technical PDFs instantly.",
            status: "Testing Phase",
        }
    ];

    return (
        <section id="building" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* GitHub Activity Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Github className="text-gray-400" size={28} /> Activity Snapshot
                        </h2>
                        <div className="glass p-8 rounded-2xl border border-white/5 shadow-lg h-[300px] flex flex-col items-center justify-center text-center">
                            <ActivityIcon className="text-gray-600 mb-4" size={48} />
                            <p className="text-gray-400 font-mono mb-2">GitHub integration placeholder</p>
                            <p className="text-sm text-gray-500 max-w-sm">
                                (You can integrate GitHub API here later to show real-time commits, top languages, and contribution graphs.)
                            </p>
                        </div>
                    </motion.div>

                    {/* Currently Building */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 text-glow-purple">
                            <Zap className="text-[#ff0055]" size={28} /> Currently Building
                        </h2>

                        <div className="space-y-6">
                            {currentBuilds.map((build, idx) => (
                                <div
                                    key={idx}
                                    className="glass p-6 rounded-xl border border-white/10 hover:border-[#ff0055]/30 transition-colors relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff0055]/5 rounded-bl-[100px] -z-10 group-hover:bg-[#ff0055]/10 transition-colors" />

                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white">{build.title}</h3>
                                        <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                                            {build.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {build.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
