import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket, Home, Info, Zap, ScrollText, ShoppingBag, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "../ui/Magnetic";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "About", path: "/about", icon: Info },
        { name: "Features", path: "/features", icon: Zap },
        { name: "Rules", path: "/rules", icon: ScrollText },
        { name: "Contact", path: "/contact", icon: MessageSquare },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/50 backdrop-blur-2xl border-white/5 py-4 shadow-lg shadow-primary/5 supports-[backdrop-filter]:bg-black/20"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,0,0,0.5)] relative overflow-hidden">
                        <Rocket size={24} />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full blur-[2px]" />
                    </div>
                    <span className="text-2xl font-bold font-heading text-white tracking-tighter">
                        NEXUS<span className="text-red-500">RP</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                to={link.path}
                                className={cn(
                                    "relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
                                    location.pathname === link.path ? "text-red-400" : "text-white/60 hover:text-white"
                                )}
                            >
                                <link.icon size={18} />
                                <span className="text-sm font-medium">{link.name}</span>
                                {location.pathname === link.path && (
                                    <>
                                        {/* Background Glow */}
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-red-600/20 rounded-xl -z-10 shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                        {/* Top Indicator */}
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute -top-[10px] inset-x-0 mx-auto w-5 h-1 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    </>
                                )}
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Magnetic>
                        <Link to="/apply">
                            <Button className="rounded-full px-6 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-500 hover:to-green-500 text-white shadow-[0_0_20px_rgba(255,0,0,0.4)] border-none">
                                Play Now 🎁
                            </Button>
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 120 }}
                        className="md:hidden fixed top-0 right-0 h-screen w-full bg-black/95 backdrop-blur-xl border-l border-white/10 overflow-hidden z-[60]"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-heading font-bond text-white hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link to="/apply" onClick={() => setIsOpen(false)}>
                                <Button size="lg" className="w-48 mt-4">Join Server</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
