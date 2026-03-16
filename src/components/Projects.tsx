"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "RAG Based Document Chatbot",
            description: "A document-aware chatbot that allows users to upload PDFs, HTML, or text files and ask questions related to the content. Uses a RAG pipeline to retrieve relevant chunks and generate answers with page references.",
            techStack: ["Python", "Flask", "LangChain", "FAISS"],
            features: "Document upload support, Chunk embedding using vector database, Answer generation with page citations.",
            githubUrl: "https://github.com/harveersinghnagpal/bookRAG",
            demoUrl: "",
            image: "/RAG Based Document Chatbot.png"
        },
        {
            title: "Agentic AI Debugging System (MCP)",
            description: "An AI debugging assistant built using a multi-agent architecture connected to an MCP server to analyze buggy code and generate explanations for fixes.",
            techStack: ["Python", "LLM APIs", "MCP Server", "AI Agents"],
            features: "Code Parser Agent, Validator Agent, Explanation Agent.",
            githubUrl: "https://github.com/harveersinghnagpal/ai-debugger-mcp",
            demoUrl: "",
            image: "/Agentic AI Debugging System (MCP).png"
        },
        {
            title: "Expense Management System",
            description: "A full stack application that helps users track expenses, set budgets, and visualize financial data through interactive dashboards.",
            techStack: ["React", "Node.js", "MongoDB"],
            features: "User auth, Expense tracking, Category analytics, Budget monitoring. Planned: AI chatbot via RAG.",
            githubUrl: "https://github.com/harveersinghnagpal/expense-mate",
            demoUrl: "",
            status: "",
            image: "/Expense Management System.png"
        },
        {
            title: "Stock Market Price Prediction",
            description: "A machine learning system that predicts stock prices using multiple regression models and financial indicators with R² score up to 0.68.",
            techStack: ["Python", "Flask", "React", "Scikit Learn"],
            features: "Linear Regression, Random Forest, XGBoost. 20+ tech indicators. Interactive charts.",
            githubUrl: "https://github.com/harveersinghnagpal/stock-pred",
            demoUrl: "",
            image: "/Stock Market Price Prediction.png"
        },
        {
            title: "FinTech AI Chatbot",
            description: "A finance focused chatbot that answers only finance related queries using a controlled system prompt.",
            techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
            features: "Finance only responses, Budget advice, EMI calculator.",
            githubUrl: "https://github.com/harveersinghnagpal/FinTrackBot",
            demoUrl: "",
            status: "",
            image: "/FinTechBot.png"
        },
        {
            title: "N-Queens Backtracking Visualizer",
            description: "An interactive visualization of the N-Queens backtracking algorithm showing all valid solutions through smooth animations.",
            techStack: ["HTML", "CSS", "JavaScript"],
            features: "",
            githubUrl: "https://github.com/harveersinghnagpal/nqueens-visualizer",
            demoUrl: "https://backtracking-nqueens.netlify.app/",
            status: "Live Demo Available",
            image: "/N-Queens Backtracking Visualizer.png"
        },
        {
            title: "Olympics Data Analytics Dashboard",
            description: "Power BI dashboard analyzing 200 years of Olympic data including country performance, athlete statistics, and gender participation trends.",
            techStack: ["Power BI"],
            features: "",
            githubUrl: "#",
            demoUrl: "",
            status: "",
            image: "/Olympics Data Analytics Dashboard.png"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4 text-glow">
                        <FolderGit2 className="text-[#00f0ff]" size={40} /> Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass rounded-xl overflow-hidden border border-white/10 group hover:-translate-y-2 hover:border-[#00f0ff]/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-48 bg-gray-900 border-b border-white/5 relative overflow-hidden group-hover:border-[#00f0ff]/20 transition-colors flex items-center justify-center">
                                {project.image ? (
                                    <>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                        <div className="text-gray-500 font-mono flex flex-col items-center z-20">
                                            <div className="w-12 h-12 border-2 border-dashed border-gray-600 rounded mb-2 flex items-center justify-center group-hover:border-[#00f0ff] group-hover:text-[#00f0ff] transition-colors">📷</div>
                                            No Image Available
                                        </div>
                                    </>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#7000ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow relative">
                                <div className="flex justify-between items-start mb-4 relative z-20">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00f0ff] transition-colors animate-pulse">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {(project.features || project.status) && (
                                    <div className="text-xs text-gray-500 mb-6 space-y-1">
                                        {project.features && <div><span className="text-gray-300">Key Features:</span> {project.features}</div>}
                                        {project.status && <div><span className="text-[#ff0055]">Note:</span> {project.status}</div>}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-white bg-white/5 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
