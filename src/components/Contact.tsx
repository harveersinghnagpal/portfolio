"use client";

import { motion } from "framer-motion";
import { Download, Mail, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow">
                        <Mail className="text-[#00f0ff]" size={40} /> Get In Touch
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col space-y-8 glass p-8 rounded-2xl border border-white/10"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:harveersinghnagpal@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-[#ff0055] transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#ff0055]/10 border border-white/10 group-hover:border-[#ff0055]/30">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-lg">harveersinghnagpal@gmail.com</span>
                                </a>

                                <a href="https://github.com/harveersinghnagpal" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 border border-white/10 group-hover:border-white/30">
                                        <Github size={24} />
                                    </div>
                                    <span className="text-lg">github.com/harveersinghnagpal</span>
                                </a>

                                <a href="https://linkedin.com/in/harveersn" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-[#0077b5] transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#0077b5]/10 border border-white/10 group-hover:border-[#0077b5]/30">
                                        <Linkedin size={24} />
                                    </div>
                                    <span className="text-lg">linkedin.com/in/harveersn</span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="group relative px-8 py-4 bg-[#00f0ff]/10 text-[#00f0ff] font-bold border border-[#00f0ff] rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] block text-center"
                            >
                                <div className="absolute inset-0 bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                                    <Download size={20} /> Download CV
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-[#7000ff]/30 transition-colors"
                    >
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7000ff]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#7000ff]/20 transition-colors"></div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7000ff] focus:ring-1 focus:ring-[#7000ff] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7000ff] focus:ring-1 focus:ring-[#7000ff] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#7000ff] focus:ring-1 focus:ring-[#7000ff] transition-all resize-none"
                                    placeholder="Let's build something amazing together..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-white/5 text-white border border-white/20 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
