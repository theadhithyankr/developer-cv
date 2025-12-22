import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Personality() {
    return (
        <section className="py-24 px-6 md:px-12 bg-primary text-primary-foreground">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">How I Think</h2>
                    <p className="text-primary-foreground/80 text-lg leading-relaxed">
                        Code is a liability. Features are a means to an end. value is the only metric that guarantees survival.
                    </p>
                </div>

                <div className="space-y-4">
                    <PhilosophyCard text="I optimize for clarity before cleverness." />
                    <PhilosophyCard text="If it can be automated, I automate it." />
                    <PhilosophyCard text="I prefer shipping over polishing endlessly." />
                </div>
            </div>
        </section>
    );
}

function PhilosophyCard({ text }: { text: string }) {
    return (
        <Card className="bg-primary-foreground/5 border-none text-primary-foreground shadow-none">
            <CardContent className="flex items-center gap-4 p-4">
                <Quote className="h-5 w-5 opacity-50 shrink-0" />
                <span className="font-medium">{text}</span>
            </CardContent>
        </Card>
    );
}
