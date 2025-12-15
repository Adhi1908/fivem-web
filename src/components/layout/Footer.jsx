import React from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Youtube, Disc, ArrowRight } from "lucide-react";

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
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to our newsletter for server updates and events.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full hover:bg-white/10 transition-colors"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-black p-2 rounded-lg transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all hover:scale-110">
                                <Disc className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all hover:scale-110">
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
