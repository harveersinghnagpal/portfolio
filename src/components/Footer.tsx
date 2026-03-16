import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 glass mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <span className="text-xl font-bold tracking-tighter text-white">Harveer<span className="text-[#00f0ff]">.dev</span></span>
                        <p className="text-gray-400 mt-2 text-sm">Building AI tools and full stack systems.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#ff0055] transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/5 pt-8 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Harveer Singh. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <span>Designed in Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
