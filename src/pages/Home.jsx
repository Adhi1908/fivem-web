import React from "react";
import CinematicHero from "@/components/sections/CinematicHero";
import BentoFeatures from "@/components/sections/BentoFeatures";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

import ShinyText from "@/components/react-bits/ShinyText";
import StarBorder from "@/components/react-bits/StarBorder";

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
                {/* Background Effects - Transparent to let Footer bleed through */}
                <div className="absolute inset-0 bg-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-sans font-black text-white mb-8 tracking-widest uppercase drop-shadow-2xl flex items-center justify-center gap-4">
                        Start Your <ShinyText text="Legacy" speed={3} className="text-red-500 font-black drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                    </h2>
                    <p className="text-xl md:text-2xl text-red-100/60 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                        Join the most immersive roleplay community in Los Santos today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <Button size="lg" className="group relative h-16 px-12 text-xl font-bold tracking-wider overflow-hidden rounded-full bg-red-600 hover:bg-red-700 text-white shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(220,38,38,0.7)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-3">
                                Join Discord Server <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>

                        <StarBorder as="div" color="#ef4444" speed="5s">
                            <span className="text-xs text-red-100 uppercase tracking-[0.2em] font-bold">
                                Application Required
                            </span>
                        </StarBorder>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
