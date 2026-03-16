"use client";

import { motion } from "framer-motion";
import { ServerCog, Database, ArrowRightLeft } from "lucide-react";

export default function Architecture() {
    return (
        <section id="architecture" className="py-20 relative bg-black/40 border-y border-white/5 my-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow">
                        <ServerCog className="text-[#00f0ff]" size={40} /> System Architecture
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deep dive into the problem statement and system design of one of my core projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Explanation Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-[#00f0ff] mb-2 flex items-center gap-2">
                                Problem Statement
                            </h3>
                            <p className="text-gray-300">
                                [Placeholder: Explain the core problem the project solves, e.g., "Users needed a real-time collaborative code editor with instant AI debugging capabilities without high latency."]
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#7000ff] mb-2 flex items-center gap-2">
                                Challenges Faced
                            </h3>
                            <p className="text-gray-300">
                                [Placeholder: Describe technical obstacles, e.g., "Handling concurrent document edits while maintaining vector embeddings for AI context."]
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#ff0055] mb-2 flex items-center gap-2">
                                Outcome
                            </h3>
                            <p className="text-gray-300">
                                [Placeholder: Describe the result, e.g., "Achieved sub-50ms sync latency and 95% AI suggestion accuracy."]
                            </p>
                        </div>
                    </motion.div>

                    {/* Diagram Simulation Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-7 glass p-8 rounded-2xl border border-[#00f0ff]/20 shadow-[0_0_40px_rgba(0,240,255,0.05)]"
                    >
                        {/* User will replace this with their actual Mermaid diagram or image */}
                        <h3 className="text-center font-mono text-gray-500 mb-8 border-b border-gray-800 pb-4">
                            [ Architecture Diagram Placeholder ]
                        </h3>

                        {/* Mock diagram layout */}
                        <div className="flex flex-col items-center gap-8 py-8 opacity-70">
                            {/* Frontend Node */}
                            <div className="w-48 text-center p-4 border border-[#00f0ff] bg-[#00f0ff]/10 rounded-lg text-white font-mono shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                Next.js Frontend
                            </div>

                            <ArrowRightLeft className="text-gray-500 rotate-90" size={24} />

                            {/* Backend Nodes Layout */}
                            <div className="flex gap-8 w-full justify-center">
                                <div className="w-40 text-center p-4 border border-[#7000ff] bg-[#7000ff]/10 rounded-lg text-white font-mono flex flex-col items-center gap-2">
                                    <ServerCog size={20} className="text-[#7000ff]" />
                                    Node/Express API
                                </div>

                                <div className="w-40 text-center p-4 border border-[#ff0055] bg-[#ff0055]/10 rounded-lg text-white font-mono flex flex-col items-center gap-2">
                                    <ServerCog size={20} className="text-[#ff0055]" />
                                    Python AI Microservice
                                </div>
                            </div>

                            <div className="flex gap-32">
                                <ArrowRightLeft className="text-gray-500 rotate-90" size={24} />
                                <ArrowRightLeft className="text-gray-500 rotate-90" size={24} />
                            </div>

                            {/* Database Layer */}
                            <div className="flex gap-8 w-full justify-center">
                                <div className="w-40 text-center p-4 border border-gray-600 bg-gray-800/50 rounded-lg text-white font-mono flex flex-col items-center gap-2">
                                    <Database size={20} className="text-gray-400" />
                                    PostgreSQL
                                </div>

                                <div className="w-40 text-center p-4 border border-green-500 bg-green-500/10 rounded-lg text-white font-mono flex flex-col items-center gap-2">
                                    <Database size={20} className="text-green-400" />
                                    Vector DB (Pinecone)
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
