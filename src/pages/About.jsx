import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ShinyText from "@/components/react-bits/ShinyText";
import StarBorder from "@/components/react-bits/StarBorder";
import TiltedCard from "@/components/react-bits/TiltedCard";
import AnimatedGridPattern from "@/components/ui/AnimatedGridPattern";
import { Users, History, Target, Sparkles } from "lucide-react";

const teamForAbout = [
    { name: "Alex", role: "Owner / Dev", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" },
    { name: "Sarah", role: "Community Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede" },
    { name: "Mike", role: "Head Admin", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&backgroundColor=ffdfbf" },
    { name: "Jessica", role: "Event Coordinator", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica&backgroundColor=d1d4f9" },
];

const timelineData = [
    { year: "2023", title: "The Inception", desc: "NexusRP was founded with a single goal: immersive storytelling over pay-to-win mechanics." },
    { year: "Late 2023", title: "Core Framework", desc: "Custom engine development began, focusing on 144FPS optimization and seamless syncing." },
    { year: "2024", title: "Community Explosion", desc: "Reached 25,000+ members. Introduced dynamic economy and player-owned businesses." },
    { year: "Future", title: "Project: Neon", desc: "Upcoming massive expansion into customized heist mechanics and territory wars." }
];

const About = () => {
    return (
        <div className="pt-32 min-h-screen relative overflow-hidden">

            {/* BACKGROUND GRID */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
                <AnimatedGridPattern
                    width={50}
                    height={50}
                    className="text-red-900/40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
                />
            </div>

            {/* 1. Hero Section with ShinyText */}
            <section className="relative py-20 overflow-hidden z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-sans font-black text-white mb-8 tracking-widest uppercase drop-shadow-2xl flex items-center justify-center gap-4">
                            About <ShinyText text="NEXUSRP" speed={3} className="text-red-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <StarBorder as="div" color="#ef4444" speed="6s" className="p-1">
                            <div className="bg-zinc-950/80 backdrop-blur-md px-8 py-6 rounded-2xl max-w-2xl border border-white/5 shadow-2xl">
                                <p className="text-xl text-white/80 font-light leading-relaxed">
                                    "Built by roleplayers, for roleplayers. We are rewriting the rules of immersion in Los Santos."
                                </p>
                            </div>
                        </StarBorder>
                    </motion.div>
                </div>
            </section>

            {/* 2. Timeline Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-sans font-black text-white text-center mb-16 uppercase tracking-widest">Our Journey</h2>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />

                        <div className="space-y-12">
                            {timelineData.map((item, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content Card */}
                                    <div className="flex-1 w-full md:w-auto pl-12 md:pl-0">
                                        <SpotlightCard className="p-6 group hover:border-red-500/30 transition-colors bg-zinc-950/90">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-mono font-bold border border-red-500/20">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-bold text-white font-sans uppercase tracking-wide">{item.title}</h3>
                                            </div>
                                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                        </SpotlightCard>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-3 h-3 rounded-full bg-black border border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20 mt-1.5 md:mt-0" />

                                    {/* Empty space for balance */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Team Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Users className="w-12 h-12 text-red-500 mx-auto mb-4 opacity-80" />
                        <h2 className="text-4xl font-sans font-black text-white uppercase tracking-widest mb-4">The Architects</h2>
                        <p className="text-white/40 max-w-xl mx-auto">The passionate team behind the code, the community, and the chaos.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 h-[400px]">
                        {teamForAbout.map((member, idx) => (
                            <div key={idx} className="h-[320px]">
                                <TiltedCard className="group">
                                    <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-gradient-to-b from-zinc-900/80 to-black/90 border border-white/10 group-hover:border-red-500/50 transition-colors duration-500">
                                        <div className="w-24 h-24 mx-auto rounded-full bg-zinc-900 mb-6 overflow-hidden border-2 border-red-500/20 group-hover:border-red-500 transition-all duration-300 relative shadow-[0_0_15px_rgba(220,38,38,0.2)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 font-sans uppercase tracking-wide drop-shadow-md group-hover:text-red-500 transition-colors">{member.name}</h3>
                                        <p className="text-xs text-red-200 font-mono tracking-widest uppercase bg-red-900/20 px-3 py-1 rounded-full border border-red-500/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                                            {member.role}
                                        </p>
                                    </div>
                                </TiltedCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
