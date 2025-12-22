import { Hero } from "@/components/sections/hero";
import { ProblemSolver } from "@/components/sections/problem-solver";
import { SkillsEvidence } from "@/components/sections/skills-evidence";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GrowthTimeline } from "@/components/sections/growth-timeline";
import { Personality } from "@/components/sections/personality";
import { Separator } from "@/components/ui/separator";

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>
      <Hero />
      <Separator />
      <ProblemSolver />
      <SkillsEvidence />
      <FeaturedProjects />
      <GrowthTimeline />
      <Personality />

      <footer className="py-12 px-6 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Aswin. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
