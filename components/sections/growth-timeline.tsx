"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2023",
        title: "Deepening Fundamentals",
        description: "Mastered React internals and focused on algorithmic problem solving (LeetCode/System Design)."
    },
    {
        year: "2024",
        title: "Building Tools",
        description: "Shifted focus to DevTools and internal libraries. Published 2 npm packages and contributed to open source."
    },
    {
        year: "2025",
        title: "Shipping Productions Systems",
        description: "Leading end-to-end feature development. Validating product market fit and scaling infrastructure."
    }
];

export function GrowthTimeline() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Growth Curve</h2>
                    <p className="text-muted-foreground">
                        I don't stay stagnant. My trajectory is constant improvement.
                    </p>
                </div>

                <div className="md:w-2/3 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex items-start group"
                        >
                            <div className="absolute left-0 mt-1.5 h-2 w-2 rounded-full border border-primary bg-background ring-4 ring-background group-hover:bg-primary transition-colors ml-[1.15rem]" />
                            <div className="pl-12">
                                <span className="text-sm font-mono text-primary mb-1 block">{item.year}</span>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
