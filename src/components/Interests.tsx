"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Interests() {
    const interests = [
        "LLM Systems",
        "AI Agents",
        "RAG Pipelines",
        "Backend Architecture",
        "Machine Learning Pipelines",
        "AI Integrated Full Stack Applications"
    ];

    return (
        <section id="interests" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow-purple">
                        <Sparkles className="text-[#7000ff]" size={40} /> Technical Interests
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#7000ff] to-[#ff0055] rounded-full mx-auto"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {interests.map((interest, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="glass px-6 py-4 rounded-full border border-white/10 hover:border-[#7000ff]/50 hover:bg-[#7000ff]/5 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg text-lg font-medium text-gray-300 hover:text-white"
                        >
                            {interest}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
