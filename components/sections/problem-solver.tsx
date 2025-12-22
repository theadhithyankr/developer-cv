"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
    Cpu,
    Palette,
    Zap,
    LayoutTemplate
} from "lucide-react";

const problems = [
    {
        icon: <Cpu className="h-6 w-6" />,
        title: "Turning raw data into decisions",
        description: "Building dashboards and analytics tools that simplify complex datasets for non-technical stakeholders.",
        badge: "Data Visualization"
    },
    {
        icon: <Palette className="h-6 w-6" />,
        title: "Designing fast, accessible UIs",
        description: "Creating design systems that ensure consistency and accessibility without slowing down development.",
        badge: "Design Systems"
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Automating repetitive workflows",
        description: "Identifying bottlenecks in team processes and building custom tooling to solve them.",
        badge: "Tooling"
    },
    {
        icon: <LayoutTemplate className="h-6 w-6" />,
        title: "Building AI features that ship",
        description: "Integrating LLMs into production apps with robust fallback handling and real user value.",
        badge: "AI Engineering"
    }
];

export function ProblemSolver() {
    return (
        <section className="py-24 px-6 md:px-12 bg-muted/30">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">What I'm Good At Solving</h2>
                    <p className="text-muted-foreground">Focusing on outcomes, not just output.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <HoverBorderGradient
                                containerClassName="p-0 h-full border-0"
                                className="bg-background dark:bg-card h-full w-full"
                                as="div"
                            >
                                <Card className="h-full border-0 shadow-none bg-transparent">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="p-2 bg-primary/10 rounded-md text-primary">
                                                {problem.icon}
                                            </div>
                                            <Badge variant="outline">{problem.badge}</Badge>
                                        </div>
                                        <CardTitle className="text-xl leading-tight">
                                            {problem.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </HoverBorderGradient>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
