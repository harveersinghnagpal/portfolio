"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import {
    SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss, SiReact,
    SiNodedotjs, SiExpress, SiFlask, SiScikitlearn, SiMongodb,
    SiMysql, SiGit, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: SiPython, color: "text-blue-400" },
                { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
                { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
                { name: "Java", icon: FaJava, color: "text-red-500" },
            ],
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: SiReact, color: "text-cyan-400" },
                { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
                { name: "CSS", icon: SiCss, color: "text-blue-500" },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
                { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
                { name: "Flask", icon: SiFlask, color: "text-white" },
            ],
        },
        {
            title: "AI / Machine Learning",
            skills: [
                { name: "Scikit Learn", icon: SiScikitlearn, color: "text-orange-400" },
                { name: "LangChain", icon: null, color: "" },
                { name: "RAG Pipelines", icon: null, color: "" },
                { name: "LLM Applications", icon: null, color: "" },
                { name: "Model Context Protocol", icon: null, color: "" },
            ],
        },
        {
            title: "Databases & Analytics",
            skills: [
                { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
                { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
                { name: "ChromaDB", icon: null, color: "" },
                { name: "Power BI", icon: null, color: "text-yellow-500" },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: SiGit, color: "text-orange-600" },
                { name: "GitHub", icon: SiGithub, color: "text-white" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7000ff]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4 text-glow-purple">
                        <Wrench className="text-[#7000ff]" size={40} /> Technical Skills
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#7000ff] to-[#00f0ff] rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#7000ff]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(112,0,255,0.15)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7000ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-sm text-gray-300 font-medium hover:text-white hover:border-[#00f0ff]/50 transition-colors cursor-default"
                                    >
                                        {skill.icon && <skill.icon className={`text-lg ${skill.color}`} />}
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
