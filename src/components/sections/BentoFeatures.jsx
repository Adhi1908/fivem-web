import React from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Shield, Zap, Users, Briefcase, Key, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Shield,
        title: "Protected & Secure",
        desc: "Enterprise-grade anti-cheat and DDOS protection.",
        className: "md:col-span-2",
    },
    {
        icon: Zap,
        title: "Optimized Core",
        desc: "144FPS Guaranteed.",
        className: "md:col-span-1",
    },
    {
        icon: Briefcase,
        title: "Real Economy",
        desc: "Player-driven markets and inflation systems.",
        className: "md:col-span-1",
    },
    {
        icon: Users,
        title: "25k+ Members",
        desc: "Join the largest roleplay community.",
        className: "md:col-span-2",
    },
];

const BentoFeatures = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Engineered for <br /> <span className="text-primary">Perfection</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, i) => (
                        <SpotlightCard key={i} className={cn("group p-8", feature.className)}>
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed max-w-xs">{feature.desc}</p>
                        </SpotlightCard>
                    ))}

                    {/* Large Visual Card */}
                    <SpotlightCard className="md:col-span-3 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl font-heading font-bold text-white mb-4">Start Your Legacy</h3>
                            <p className="text-white/70 max-w-lg mx-auto">From street racer to business mogul, your path is yours to define.</p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
