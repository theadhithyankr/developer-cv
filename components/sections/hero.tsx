"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
    return (
        <section className="h-[80vh] w-full flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground font-medium text-base">
                        <Terminal className="h-4 w-4" />
                        <span>Software Engineer | Data Scientist</span>
                    </div>
                    I build data-driven software systems <br /> that turn ideas into scalable solutions.
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-4 font-normal text-base text-slate-300 max-w-lg text-center mx-auto"
                >
                    Hi, I'm Adhithyan K R. I bridge the gap between data science and engineering, focusing on clarity, performance, and real-world impact.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                >
                    <Button size="lg" className="group">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg">
                        Download Resume
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="flex gap-6 justify-center mt-10 md:mt-12"
                >
                    <a href="https://github.com/theadhithyankr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/adhithyan-k-r/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:theadithyankr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
