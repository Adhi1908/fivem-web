import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
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
                    className="text-6xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter"
                >
                    Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Features</span>
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

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-16">
                {featureCategories.map((cat, i) => (
                    <Button
                        key={cat.id}
                        variant={activeTab === cat.id ? "primary" : "ghost"}
                        onClick={() => setActiveTab(cat.id)}
                        className={cn(
                            "min-w-[140px] transition-all duration-300",
                            activeTab === cat.id ? "shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)]" : "text-white/50 hover:text-white"
                        )}
                    >
                        {cat.name}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {featureCategories.find(c => c.id === activeTab).items.map((item, idx) => (
                        <SpotlightCard key={idx} className="h-full p-8 group hover:bg-white/5 transition-colors duration-500">
                            <div className={cn("w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500", item.color)}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                            <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
                        </SpotlightCard>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Features;
