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
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white relative z-10">
                            Ready to Start Your Story?
                        </h2>
                        <p className="text-xl text-muted-foreground relative z-10">
                            Join the most immersive roleplay community today. Your legacy awaits.
                        </p>
                        <div className="flex justify-center gap-4 relative z-10">
                            <Button size="lg" className="shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                Join Discord Server <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
