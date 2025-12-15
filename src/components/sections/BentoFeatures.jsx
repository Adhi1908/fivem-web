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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, i) => (
                        <SpotlightCard key={i} className={cn("group p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.3)] bg-black/40 backdrop-blur-md border-white/5", feature.className)}>
                            <div>
                                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/5 text-primary group-hover:text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,240,255,0.2)]">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4 font-heading group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </div>
                        </SpotlightCard>
                    ))}

                    {/* Large Visual Card */}
                    <SpotlightCard className="md:col-span-3 min-h-[400px] flex items-center justify-center relative overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)] border-white/5 bg-black/40 backdrop-blur-md">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        <div className="relative z-10 text-center p-8">
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 drop-shadow-lg">Start Your Legacy</h3>
                            <p className="text-white/80 max-w-xl mx-auto text-xl mb-8 leading-relaxed">From street racer to business mogul, your path is yours to define in a city that never sleeps.</p>
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                Begin Journey
                            </button>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
