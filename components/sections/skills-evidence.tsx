"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function SkillsEvidence() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Skills in Action</h2>
                <p className="text-muted-foreground max-w-2xl">
                    I don't just know these tools. I've used them to solve real problems.
                </p>
            </div>

            <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="mb-8 w-full justify-start h-auto flex-wrap gap-2 bg-transparent p-0">
                    <TabsTrigger value="frontend" className="text-base px-4 py-2 ring-1 ring-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Frontend Architecture</TabsTrigger>
                    <TabsTrigger value="ai" className="text-base px-4 py-2 ring-1 ring-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">AI & Machine Learning</TabsTrigger>
                    <TabsTrigger value="backend" className="text-base px-4 py-2 ring-1 ring-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Backend & Systems</TabsTrigger>
                </TabsList>

                <TabsContent value="frontend">
                    <SkillCard
                        title="Design Systems at Scale"
                        built="Component library consumed by 3+ internal products"
                        stack={["React", "TypeScript", "Storybook", "Figm"]}
                        details={[
                            "Implemented an atomic design system reducing standard UI dev time by ~40%",
                            "Built accessibility-first primitives (Radix) ensuring WCAG 2.1 compliance",
                            "Established automated visual regression testing with Percy"
                        ]}
                    />
                </TabsContent>

                <TabsContent value="ai">
                    <SkillCard
                        title="NLP Matching Engine"
                        built="Resume-to-Job matching system with 85% relevance accuracy"
                        stack={["Python", "FastAPI", "scikit-learn", "OpenAI API"]}
                        details={[
                            "Used TF-IDF and Cosine Similarity for initial candidate filtering",
                            "Implemented RAG pipeline for generating candidate summaries",
                            "Deployed microservice handling 500+ requests/minute"
                        ]}
                    />
                </TabsContent>

                <TabsContent value="backend">
                    <SkillCard
                        title="Real-time Collaboration Engine"
                        built="WebSocket service for multiplayer document editing"
                        stack={["Node.js", "Redis", "PostgreSQL", "Docker"]}
                        details={[
                            "Designed CRDT-based conflict resolution for concurrent edits",
                            "Optimized Redis pub/sub for sub-50ms latency",
                            "Scaled to support 10k concurrent connections via horizontal scaling"
                        ]}
                    />
                </TabsContent>
            </Tabs>
        </section>
    );
}

function SkillCard({ title, built, stack, details }: { title: string, built: string, stack: string[], details: string[] }) {
    return (
        <Card className="border-l-4 border-l-primary shadow-sm">
            <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                    Built: <span className="text-foreground font-medium">{built}</span>
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 bg-secondary/50">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="space-y-3">
                    {details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-sm md:text-base leading-relaxed">{detail}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
