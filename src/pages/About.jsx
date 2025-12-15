import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const teamForAbout = [
    { name: "Alex", role: "Owner / Dev", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
    { name: "Sarah", role: "Community Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "Mike", role: "Head Admin", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
    { name: "Jessica", role: "Event Coordinator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" },
];

const About = () => {
    return (
        <div className="pt-32">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
                    >
                        About <span className="text-primary">NexusRP</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl mx-auto font-light"
                    >
                        Built by roleplayers, for roleplayers. Our mission is to create the most immersive and story-diven environment in FiveM.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-heading font-bold text-white">Our Story</h2>
                        <p className="text-white/60 leading-relaxed font-light text-lg">
                            NexusRP started in 2023 with a simple vision: to break the mold of "pay-to-win" servers and focus purely on narrative-driven roleplay.
                        </p>
                        <p className="text-white/60 leading-relaxed font-light text-lg">
                            We've spent thousands of hours developing custom frameworks, unique jobs, and a balanced economy. Every script is optimized for performance, ensuring your immersion is never broken by technical issues.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/5 font-heading text-9xl font-bold select-none">
                            2024
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-black/40 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {teamForAbout.map((member, idx) => (
                            <SpotlightCard key={idx} className="text-center p-8 group">
                                <div className="w-24 h-24 mx-auto rounded-full bg-white/5 mb-6 overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 font-heading">{member.name}</h3>
                                <p className="text-sm text-primary uppercase tracking-widest">{member.role}</p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
