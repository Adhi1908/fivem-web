import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Shield, Zap, Users, Briefcase, Key, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Shield,
        title: "Protected & Secure",
        desc: "Advanced anti-cheat systems and DDOS protection ensure a safe and uninterrupted experience for all players.",
        color: "text-emerald-400"
    },
    {
        icon: Zap,
        title: "Optimized Performance",
        desc: "Custom-built framework designed for high FPS and low latency, even in populated areas.",
        color: "text-amber-400"
    },
    {
        icon: Briefcase,
        title: "Unique Economy",
        desc: "Player-driven economy with legal and illegal jobs, custom businesses, and realistic market fluctuations.",
        color: "text-cyan-400"
    },
    {
        icon: Users,
        title: "Active Community",
        desc: "Thousands of registered members, daily events, and a dedicated staff team ready to help.",
        color: "text-purple-400"
    },
    {
        icon: Key,
        title: "Housing & Properties",
        desc: "Buy and furnish your own home, warehouse, or office. Real estate is fully player-controlled.",
        color: "text-rose-400"
    },
    {
        icon: Trophy,
        title: "Competitive Events",
        desc: "Regular racing tournaments, gang wars, and community competitions with exclusive rewards.",
        color: "text-indigo-400"
    }
];

const FeaturesGrid = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Why Choose <span className="text-primary">NexusRP</span>?</h2>
                    <p className="text-lg text-muted-foreground">We've rebuilt the roleplay experience from the ground up to provide features you won't find anywhere else.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <Card key={idx} gradient className="group hover:-translate-y-2 transition-transform duration-300">
                            <CardHeader>
                                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                                <CardDescription className="text-base leading-relaxed">{feature.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
