"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    const education = [
        {
            school: "Lovely Professional University",
            degree: "B.Tech Computer Science Engineering",
            minor: "Minor in Data Science",
            score: "CGPA: 8.78",
            year: "2023 - 2027 (Expected)",
            location: "Jalandhar, Punjab"
        },
        {
            school: "Dr Virendra Swarup Education Centre",
            degree: "Class 12",
            minor: "",
            score: "95%",
            year: "2022 - 2023",
            location: "Kanpur, Uttar Pradesh"
        },
        {
            school: "Dr Virendra Swarup Education Centre",
            degree: "Class 10",
            minor: "",
            score: "96.6%",
            year: "2020 - 2021",
            location: "Kanpur, Uttar Pradesh"
        }
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-4 text-glow-purple">
                        <GraduationCap className="text-[#7000ff]" size={40} /> Education Timeline
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#7000ff] to-[#ff0055] rounded-full mx-auto"></div>
                </motion.div>

                <div className="relative border-l border-[#7000ff]/30 space-y-12 ml-4 sm:ml-6 md:ml-12">
                    {education.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-8 sm:pl-12 group"
                        >
                            {/* Timeline marker */}
                            <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-black border-2 border-[#7000ff] group-hover:bg-[#7000ff] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(112,0,255,0.5)]"></div>

                            <div className="glass p-8 rounded-2xl border border-white/5 group-hover:border-[#7000ff]/50 transition-colors shadow-lg group-hover:shadow-[0_10px_30px_rgba(112,0,255,0.1)]">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.school}</h3>

                                <div className="text-[#00f0ff] font-semibold text-lg mb-1">{item.degree}</div>
                                {item.minor && <div className="text-gray-400 text-sm mb-4">{item.minor}</div>}

                                <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
                                    <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded border border-white/10 text-white font-medium">
                                        {item.score}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={16} className="text-[#7000ff]" /> {item.year}
                                    </span>
                                    {item.location && (
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} className="text-[#ff0055]" /> {item.location}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
