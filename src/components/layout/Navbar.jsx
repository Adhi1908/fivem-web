import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Rules", path: "/rules" },
        { name: "Store", path: "/store" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 h-20" : "bg-transparent h-24"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-shadow">
                        <Gamepad2 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        NEXUS<span className="text-primary">RP</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium tracking-wide hover:text-primary transition-colors relative",
                                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={() => window.open('https://discord.gg', '_blank')}>
                        Discord
                    </Button>
                    <Button variant="primary" size="sm" className="shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                        Play Now
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-lg font-medium p-2 rounded-md hover:bg-white/5",
                                    location.pathname === link.path ? "text-primary bg-primary/10" : "text-muted-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 my-2" />
                        <Button className="w-full">Play Now</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
