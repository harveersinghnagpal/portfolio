"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TerminalSquare } from "lucide-react";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

export default function ProblemSolving() {
    const platforms = [
        {
            name: "LeetCode",
            icon: SiLeetcode,
            color: "text-yellow-500",
            border: "hover:border-yellow-500/50",
            image: "/leetcode profile.png",
            url: "https://leetcode.com/u/harveersn/",
            stats: [
                { label: "Problems Solved", value: "330+" },
                { label: "Medium", value: "220+" },
                { label: "Hard", value: "40+" },
                { label: "Easy", value: "75+" },
                { label: "Rating", value: "~1544" },
                { label: "Contests", value: "6" }
            ]
        },
        {
            name: "Codeforces",
            icon: SiCodeforces,
            color: "text-red-500",
            border: "hover:border-red-500/50",
            image: "/codeforces profile.png",
            url: "https://codeforces.com/profile/harveersinghnagpal",
            stats: [
                { label: "Rating", value: "548" },
                { label: "Contests", value: "2" }
            ]
        },
        {
            name: "GeeksforGeeks",
            icon: SiGeeksforgeeks,
            color: "text-green-500",
            border: "hover:border-green-500/50",
            image: "/geeksforgeeks profile.png",
            url: "https://www.geeksforgeeks.org/profile/harveersinlxeg",
            stats: [
                { label: "Problems Solved", value: "65" }
            ]
        },
    ];

    return (
        <section id="problem-solving" className="py-20 relative bg-black/40 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow">
                        <TerminalSquare className="text-[#00f0ff]" size={40} /> Problem Solving
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My algorithmic journey across various competitive programming platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {platforms.map((platform, idx) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`glass p-6 rounded-xl border border-white/10 ${platform.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col h-full`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>

                            <div className="flex items-center gap-4 mb-4">
                                <platform.icon className={`text-3xl ${platform.color}`} />
                                <h3 className="text-xl font-bold text-white group-hover:tracking-wide transition-all">{platform.name}</h3>
                            </div>

                            {/* Profile Snapshot */}
                            <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden border border-white/10 mb-6 group-hover:border-white/20 transition-colors">
                                <Image
                                    src={platform.image}
                                    alt={`${platform.name} profile`}
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-auto mb-6">
                                {platform.stats.map((stat) => (
                                    <div key={stat.label} className="bg-black/30 rounded p-3 border border-white/5">
                                        <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                                        <div className="text-lg font-bold text-white whitespace-nowrap">{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            <a 
                                href={platform.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all"
                            >
                                View Profile
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
