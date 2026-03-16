"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#7000ff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-16 lg:-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-5"
                    >
                        {/* Badge removed per user request */}

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-glow">Harveer Singh Nagpal</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed">
                            Software Developer | Backend & AI Systems <br />
                            <span className="text-lg text-gray-400">B.Tech CSE (Minor in Data Science)</span>
                        </h2>

                        <div className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed space-y-3">
                            <p>
                                I am a Computer Science undergraduate at Lovely Professional University with a minor in Data Science. I enjoy building backend systems and full stack applications and integrating them with AI capabilities such as RAG pipelines, LLM agents, and machine learning models.
                            </p>
                            <p>
                                My work focuses on combining strong software engineering practices with modern AI tools to build intelligent applications.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                                href="#projects"
                                className="group relative px-6 py-3 bg-transparent text-[#00f0ff] font-semibold border border-[#00f0ff] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                            >
                                <div className="absolute inset-0 bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                                    View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-3 ml-2">
                                <a href="https://github.com/harveersinghnagpal" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 hover:text-[#00f0ff] rounded-lg border border-white/10 transition-all group">
                                    <span className="sr-only">GitHub</span>
                                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://linkedin.com/in/harveersn" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 hover:text-[#0077b5] rounded-lg border border-white/10 transition-all group">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <Link href="#contact" className="p-3 bg-white/5 hover:bg-white/10 hover:text-[#ff0055] rounded-lg border border-white/10 transition-all group">
                                    <span className="sr-only">Contact</span>
                                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Integrated Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.2 }}
                        className="hidden lg:flex relative items-center justify-center w-full max-w-[500px] mx-auto lg:ml-10"
                    >
                        {/* Subtle glowing background orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-[#00f0ff] to-[#0070ff] rounded-full blur-[60px] opacity-30 animate-pulse pointer-events-none" />

                        <div className="relative group">
                            {/* Circular Image Container hovering over background */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative w-[400px] h-[400px] rounded-full border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden z-10"
                            >
                                <Image
                                    src="/profile pic.jpeg"
                                    alt="Harveer Singh Nagpal"
                                    fill
                                    className="object-cover object-[center_10%]"
                                    priority
                                />
                            </motion.div>

                            {/* "HIRE ME PLEASE!" Tooltip/Cloud */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-20 pointer-events-none">
                                <div className="bg-white text-black font-bold px-4 py-2 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.4)] whitespace-nowrap text-sm lg:text-base relative">
                                    HIRE ME PLEASE!
                                    {/* Tooltip triangle tail */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-white border-r-[8px] border-r-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
