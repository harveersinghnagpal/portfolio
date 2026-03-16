"use client";

import { motion } from "framer-motion";
import { User, Code, Database, BrainCircuit, Globe } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4 text-glow">
                        <User className="text-[#00f0ff]" size={40} /> About Me
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed mix-blend-lighten"
                    >
                        <p>
                            I am currently pursuing a <span className="text-white font-semibold">B.Tech in Computer Science Engineering</span> at Lovely Professional University with a <span className="text-[#00f0ff] font-semibold">minor in Data Science</span>.
                        </p>
                        <p>
                            My primary interest lies in backend development and building full stack applications that integrate artificial intelligence capabilities. I enjoy working with technologies such as Node.js, Flask, MongoDB, Python, and JavaScript while also experimenting with modern AI frameworks including LangChain and Retrieval Augmented Generation (RAG) pipelines.
                        </p>
                        <p>
                            Alongside development, I actively practice data structures and algorithms on platforms such as LeetCode and Codeforces.
                        </p>
                        <p>
                            My goal is to work as a Software Development Engineer where I can build scalable backend systems and integrate AI technologies into real world products.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Database, title: "Backend Systems", desc: "Building scalable node and python backends." },
                            { icon: BrainCircuit, title: "AI Integration", desc: "RAG pipelines, LangChain, and MCP servers." },
                            { icon: Code, title: "Problem Solving", desc: "500+ DSA problems solved." },
                            { icon: Globe, title: "Full Stack", desc: "Deploying end-to-end web applications." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="glass p-6 rounded-xl border border-white/10 hover:border-[#00f0ff]/50 hover:-translate-y-1 transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]"
                            >
                                <item.icon className="text-[#7000ff] group-hover:text-[#00f0ff] transition-colors mb-4" size={32} />
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
