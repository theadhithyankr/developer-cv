"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProjects() {
    return (
        <section className="py-24 px-6 md:px-12 bg-muted/20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Project Deep Dives</h2>

                <div className="space-y-12">
                    {PROJECTS.map((project, idx) => (
                        <div key={idx} className="group relative grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <Link href="#" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                                    </Link>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </div>

                            <Card className="bg-background border-none shadow-sm ring-1 ring-border/50">
                                <CardHeader>
                                    <CardTitle className="text-lg">Thinking Process</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">The Problem</h4>
                                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">Technical Decision</h4>
                                        <p className="text-sm text-muted-foreground">{project.decision}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">Final Outcome</h4>
                                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const PROJECTS = [
    {
        title: "E-Commerce Analytics Engine",
        summary: "A real-time analytics dashboard for shop owners to track conversion rates and inventory velocity.",
        tags: ["Next.js", "ClickHouse", "Tremor", "Vercel SDK"],
        problem: "Shop owners were waiting 24 hours for sales data updates, leading to stock-outs during flash sales.",
        decision: "Migrated from standard Postgres queries to ClickHouse for analytical queries and implemented optimistic UI updates with SWR.",
        outcome: "Reduced data latency from 24h to <500ms. Increased inventory turnover for beta users by 18%."
    },
    {
        title: "AI Code Review Assistant",
        summary: "CLI tool that runs locally to provide security and style suggestions before commit.",
        tags: ["Rust", "Ollama", "Tree-sitter"],
        problem: "CI/CD pipelines were clogged with simple style errors, wasting compute minutes and developer time.",
        decision: "Built a local-first CLI using Rust for performance. Integrated local LLM inference to avoid sending proprietary code to cloud APIs.",
        outcome: "Cut CI bill by 30% by catching 60% of errors pre-push. Adopted by 4 engineering teams."
    }
];
