"use client";

import { motion } from "framer-motion";
import { Zap, Bot, BrainCircuit, LayoutTemplate, Trophy } from "lucide-react";

export default function Highlights() {
    const highlights = [
        {
            icon: Bot,
            text: "Built a complete RAG-based document chatbot using Python, Flask, LangChain, and FAISS",
            color: "text-[#00f0ff]",
            bg: "group-hover:bg-[#00f0ff]/10"
        },
        {
            icon: BrainCircuit,
            text: "Developed an agent-based AI debugging system using MCP server and multi-agent architecture",
            color: "text-[#7000ff]",
            bg: "group-hover:bg-[#7000ff]/10"
        },
        {
            icon: Zap,
            text: "Built machine learning models for stock price prediction using Random Forest, Linear Regression, and XGBoost",
            color: "text-[#ff0055]",
            bg: "group-hover:bg-[#ff0055]/10"
        },
        {
            icon: LayoutTemplate,
            text: "Built full stack applications using MERN stack and Flask backends",
            color: "text-[#00f0ff]",
            bg: "group-hover:bg-[#00f0ff]/10"
        },
        {
            icon: Trophy,
            text: "Solved 500+ algorithmic problems across multiple competitive programming platforms",
            color: "text-[#7000ff]",
            bg: "group-hover:bg-[#7000ff]/10"
        }
    ];

    return (
        <section id="highlights" className="py-20 relative bg-black/40 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow">
                        <Zap className="text-[#ff0055]" size={40} /> Key Technical Highlights
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`glass p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-start gap-4 ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                        >
                            <div className={`p-3 rounded-xl bg-black/50 border border-white/5 transition-colors ${item.bg}`}>
                                <item.icon className={item.color} size={24} />
                            </div>
                            <p className="text-gray-300 leading-relaxed font-medium">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
