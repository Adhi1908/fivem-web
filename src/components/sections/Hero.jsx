import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Copy, ArrowRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Season 2.0 Now Live</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight text-white leading-tight">
                        REDEFINE YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-text">
                            REALITY
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        Experience the next generation of FiveM roleplay. Custom scripts, immersive jobs, and a community like no other.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto gap-2 group shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)]">
                            <Play className="w-5 h-5 fill-current" />
                            Connect Now
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 group backdrop-blur-sm">
                            <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />
                            <span>play.nexus-rp.com</span>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
