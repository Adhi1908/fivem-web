import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

const teamForAbout = [
    { name: "Alex", role: "Owner / Dev", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
    { name: "Sarah", role: "Community Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "Mike", role: "Head Admin", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
    { name: "Jessica", role: "Event Coordinator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica" },
];

const About = () => {
    return (
        <div className="pt-20">
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
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Built by roleplayers, for roleplayers. Our mission is to create the most immersive and story-diven environment in FiveM.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            NexusRP started in 2023 with a simple vision: to break the mold of "pay-to-win" servers and focus purely on narrative-driven roleplay.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We've spent thousands of hours developing custom frameworks, unique jobs, and a balanced economy. Every script is optimized for performance, ensuring your immersion is never broken by technical issues.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden glass neo-glow">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading text-9xl font-bold">
                            2024
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {teamForAbout.map((member, idx) => (
                            <Card key={idx} className="text-center group hover:border-primary/50 transition-colors">
                                <CardContent className="pt-6">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-white/5 mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-sm text-primary/80">{member.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
