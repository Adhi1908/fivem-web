import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ShinyText from "@/components/react-bits/ShinyText";
import { Car, Briefcase, Gavel, Cpu, Home as HomeIcon, Skull, Shield, Zap, Coins } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const featureCategories = [
    {
        id: "legal",
        name: "Legal Roleplay",
        items: [
            { title: "Police Department", desc: "Custom MDT, optimized fleet, and ranking system.", icon: Gavel, color: "text-blue-400" },
            { title: "EMS / Medical", desc: "Advanced injury system, hospitals, and playable medic roles.", icon: Shield, color: "text-red-400" },
            { title: "Mechanic Shops", desc: "Vehicle tuning, cosmetic upgrades, and repair services.", icon: Car, color: "text-orange-400" },
        ]
    },
    {
        id: "illegal",
        name: "Illegal Activities",
        items: [
            { title: "Gang Systems", desc: "Turf wars, graffiti, and drug manufacturing.", icon: Skull, color: "text-purple-400" },
            { title: "Heists", desc: "Pacific Standard, Fleeca, and Jewelry store robberies.", icon: Briefcase, color: "text-green-400" },
            { title: "Black Market", desc: "Hidden locations for weapon trading and contraband.", icon: Coins, color: "text-yellow-400" },
        ]
    },
    {
        id: "assets",
        name: "Custom Assets",
        items: [
            { title: "Import Vehicles", desc: "Over 300+ custom handling vehicles.", icon: Car, color: "text-cyan-400" },
            { title: "Housing", desc: "Buy any house with custom interiors and furniture.", icon: HomeIcon, color: "text-pink-400" },
            { title: "Unique Clothing", desc: "Thousands of custom clothing items and accessories.", icon: Cpu, color: "text-indigo-400" },
        ]
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState("legal");

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl"
                >
                    Server <ShinyText text="Features" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/60 font-light"
                >
                    Explore the vast possibilities within NexusRP.
                </motion.p>
            </div>

            {/* Premium Animated Tabs */}
            <div className="flex justify-center mb-16">
                <div className="relative flex p-1 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
                    {featureCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={cn(
                                "relative px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 z-10",
                                activeTab === cat.id ? "text-white" : "text-white/40 hover:text-white/80"
                            )}
                        >
                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTabFeatures"
                                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="uppercase tracking-widest">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Premium Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featureCategories.find(c => c.id === activeTab).items.map((item, idx) => (
                        <SpotlightCard key={idx} className="h-full p-8 group border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2">

                            {/* Colorful Glow Effect behind Icon */}
                            <div className={cn("absolute top-8 left-8 w-16 h-16 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500", item.color.replace('text-', 'bg-'))} />

                            <div className={cn("relative w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-white/20", item.color)}>
                                <item.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 font-sans uppercase tracking-wide group-hover:text-red-500 transition-colors">{item.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light text-sm">{item.desc}</p>

                            {/* Bottom colored line */}
                            <div className={cn("absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-current to-transparent", item.color)} />
                        </SpotlightCard>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Features;
