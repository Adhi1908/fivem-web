import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Youtube, Disc, ArrowRight } from "lucide-react";

const Footer = () => {
    const [serverOnline, setServerOnline] = useState(true);
    const [playerCount, setPlayerCount] = useState(342);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlayerCount(prev => prev + Math.floor(Math.random() * 3 - 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="relative z-10 pt-32 pb-12 overflow-hidden bg-gradient-to-t from-red-950/40 via-black to-transparent">
            {/* Soft Ambient Glow - Ultra subtle, dark crimson */}
            <div className="absolute bottom-0 inset-x-0 h-[600px] bg-gradient-to-t from-red-950/20 to-transparent blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link to="/" className="flex items-center gap-3 group w-fit">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <Gamepad2 className="text-primary w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-heading font-bold text-white tracking-wide">
                                    NEXUS<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">RP</span>
                                </span>
                                <span className="text-xs text-white/40 tracking-widest uppercase">Los Santos Roleplay</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
                            The ultimate immersive roleplay experience. Join thousands of players in a living, breathing city where your story matters.
                        </p>

                        {/* Status Widget */}
                        <div className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-4 py-2 rounded-full cursor-help relative group">
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${serverOnline ? 'bg-green-400' : 'bg-red-400'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${serverOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            </span>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    {serverOnline ? 'Systems Operational' : 'Offline'}
                                </span>
                                <span className="text-[10px] text-white/50 font-mono">
                                    {serverOnline ? `${playerCount} Players Online` : 'Maintenance Mode'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full" /> Server
                        </h4>
                        <ul className="space-y-4">
                            {['About Us', 'Server Rules', 'Features', 'Status'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-secondary rounded-full" /> Community
                        </h4>
                        <ul className="space-y-4">
                            {['Discord', 'Forums', 'Applications', 'Support'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-muted-foreground hover:text-white hover:translate-x-1 transition-all duration-300 block text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Newsletter */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-3 mb-8">
                            {[Disc, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2024 Nexus Roleplay. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
