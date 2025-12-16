import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import { Scroll, AlertTriangle, ShieldCheck, HeartPulse, Gavel, Radio, Lock, Skull } from "lucide-react";
import { cn } from "@/lib/utils";

const ruleSections = [
    {
        category: "General Constitution",
        icon: ShieldCheck,
        description: "Core expectations for community conduct.",
        rules: [
            { title: "1.0 Respect & Community", content: "Toxicity, hate speech, racial slurs, and harassment are strictly prohibited. We are a welcoming community; treat everyone with respect." },
            { title: "1.1 Microphone Requirement", content: "A working, good-quality microphone is mandatory. You must be able to communicate effectively in English." },
            { title: "1.2 18+ Rule", content: "This is an adult community. You must be 18 years or older to play on this server." },
            { title: "1.3 Bug Exploiting", content: "Abusing server mechanics or bugs for gain leads to an immediate permanent ban. Report all bugs via Discord." }
        ]
    },
    {
        category: "Core Roleplay",
        icon: Scroll,
        description: "The fundamental laws of roleplay physics.",
        rules: [
            { title: "2.0 Value of Life (NVL)", content: "You must value your life and the lives of others at all times. If someone has a gun to your head, you must comply. You cannot run or fight if you are outnumbered or outgunned." },
            { title: "2.1 Metagaming", content: "Using external information (Discord, Streams, OOC chat) in-character is strictly forbidden. You cannot use knowledge your character has not learned in-game." },
            { title: "2.2 Powergaming", content: "Forcing roleplay on others without giving them a chance to respond (e.g., /me ties shoes so tight they break ankles). Use /me commands fairly." },
            { title: "2.3 Fail Roleplay", content: "Actions that are unrealistic or break immersion (e.g., driving a sports car up a mountain, speaking OOC in voice) are prohibited." },
            { title: "2.4 New Life Rule (NLR)", content: "If you are downed and respawn at the hospital (skip medical timer), you forget the immediate events leading to your death. You cannot return to the scene for 15 minutes." }
        ]
    },
    {
        category: "Criminal Rules",
        icon: Lock,
        description: "Hostilities, crime, and gang regulations.",
        rules: [
            { title: "3.0 RDM (Random Deathmatch)", content: "Attacking another player without valid storyline initiation is strictly prohibited. You must have a roleplay reason to harm someone." },
            { title: "3.1 VDM (Vehicle Deathmatch)", content: "Using a vehicle as a weapon to ram or kill players is not allowed." },
            { title: "3.2 Gang Limits", content: "Gangs are capped at 15 members. A maximum of 6 members can participate in any single hostile situation (shootout, robbery)." },
            { title: "3.3 Robbery Cooldowns", content: "You cannot chain robberies. Wait 30 minutes between convenience stores and 60 minutes between major banks." },
            { title: "3.4 Hostage Taking", content: "You cannot use friends as fake hostages. Hostages must be genuine players and must be treated with some level of RP value (not just props)." }
        ]
    },
    {
        category: "Medical & Emergency",
        icon: HeartPulse,
        description: "Interacting with EMS and Police.",
        rules: [
            { title: "4.0 Cop Baiting", content: "Intentionally committing crimes in front of police solely to get a chase is prohibited." },
            { title: "4.1 EMS Neutrality", content: "EMS are neutral civilians. You cannot rob on-duty EMS or steal their vehicles/equipment." },
            { title: "4.2 Combat Logging", content: "Logging out during an active roleplay scenario, combat, or police chase results in an automatic ban." }
        ]
    }
];

const RuleCard = ({ rule, isOpen, onClick }) => {
    return (
        <motion.div
            className={cn(
                "group relative overflow-hidden rounded-xl bg-white/5 border transition-all duration-300 cursor-pointer",
                isOpen ? "border-red-500/50 bg-white/10" : "border-white/5 hover:border-white/20 hover:bg-white/10"
            )}
            onClick={onClick}
            layout
        >
            <div className="p-4 flex items-center justify-between">
                <h3 className={cn("font-bold transition-colors duration-300", isOpen ? "text-white" : "text-white/70 group-hover:text-white")}>
                    {rule.title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-white/40 group-hover:text-white transition-colors"
                >
                    <Gavel className="w-4 h-4" />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 text-white/60 leading-relaxed font-light text-sm border-t border-white/5 mt-2">
                            {rule.content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isOpen && (
                <motion.div
                    layoutId="activeRuleGlow"
                    className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </motion.div>
    );
};

const Rules = () => {
    const [openRule, setOpenRule] = useState(null);

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="text-6xl md:text-8xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl">
                    Server <ShinyText text="Constitution" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </h1>
                <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                    Ignorance of the law is no excuse. These rules ensure a high-quality, serious roleplay standard for all citizens.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {ruleSections.map((section, sIdx) => (
                    <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: sIdx * 0.1 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-red-500">
                                <section.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{section.category}</h2>
                                <p className="text-sm text-white/40">{section.description}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {section.rules.map((rule, rIdx) => (
                                <RuleCard
                                    key={rIdx}
                                    rule={rule}
                                    isOpen={openRule === rule.title}
                                    onClick={() => setOpenRule(openRule === rule.title ? null : rule.title)}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Rules;
