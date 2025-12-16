import React, { useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare, Send, Radio, ShieldCheck } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            {/* Background Decoration (Matches Rules) */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="text-6xl md:text-8xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl flex items-center justify-center gap-4">
                    Contact <ShinyText text="Support" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </h1>
                <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
                    Communication is key. Reach out to administration or support staff for assistance.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Section 1: Direct Channels */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-red-500">
                            <Radio className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Direct Frequencies</h2>
                            <p className="text-sm text-white/40">Instant communication channels.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <SpotlightCard className="group cursor-pointer bg-white/5 border-white/5 hover:border-blue-500/50 transition-all duration-300" onClick={() => window.open('https://discord.gg', '_blank')}>
                            <div className="flex items-center gap-6 p-6">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">Discord Server</h3>
                                    <p className="text-sm text-white/40">Open a ticket for immediate support.</p>
                                </div>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="group cursor-pointer bg-white/5 border-white/5 hover:border-red-500/50 transition-all duration-300">
                            <div className="flex items-center gap-6 p-6">
                                <div className="p-3 rounded-full bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-red-400 transition-colors">Email Administration</h3>
                                    <p className="text-sm text-white/40">Business inquiries & bans.</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </motion.div>

                {/* Section 2: Message Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-red-500">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Secure Uplink</h2>
                            <p className="text-sm text-white/40">Send a direct message to staff.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-xl p-6 md:p-8 space-y-6 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/40 focus:bg-black/40 transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Contact</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/40 focus:bg-black/40 transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Briefing Topic..."
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/40 focus:bg-black/40 transition-all text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Message Payload</label>
                                <textarea
                                    placeholder="Enter details..."
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500/40 focus:bg-black/40 transition-all text-sm h-32 resize-none"
                                />
                            </div>

                            <Button
                                className="w-full h-12 text-sm font-bold tracking-wider uppercase bg-red-600 hover:bg-red-700 transition-all group"
                            >
                                <span className="flex items-center gap-2">
                                    Send Transmission <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
