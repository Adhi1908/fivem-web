import React from "react";
import CinematicHero from "@/components/sections/CinematicHero";
import BentoFeatures from "@/components/sections/BentoFeatures";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const Home = () => {
    return (
        <>
            <CinematicHero />
            <StatsBanner />
            <BentoFeatures />
            <Testimonials />
            <FAQ />

            {/* Bottom CTA */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse-slow">Legacy</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join the most immersive roleplay community in Los Santos today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="h-14 px-8 text-lg shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300">
                            Join Discord Server <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <span className="text-sm text-white/40 uppercase tracking-widest font-mono">
                            Application Required
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
