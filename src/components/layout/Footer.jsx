import React from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Youtube, Disc } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Gamepad2 className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-heading font-bold text-white">
                                NEXUS<span className="text-primary">RP</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The ultimate immersive roleplay experience. Join thousands of players in a living, breathing city where your story matters.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Server</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/rules" className="hover:text-primary transition-colors">Server Rules</Link></li>
                            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link to="/status" className="hover:text-primary transition-colors">Server Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Forums</a></li>
                            <li><Link to="/apply" className="hover:text-primary transition-colors">Applications</Link></li>
                            <li><Link to="/support" className="hover:text-primary transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Disc className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>© 2024 Nexus Roleplay. All rights reserved. Not affiliated with Rockstar Games.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
