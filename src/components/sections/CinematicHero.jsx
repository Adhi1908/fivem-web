import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight } from "lucide-react";

const CinematicHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video Layer */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker Overlay for contrast */}
                {/* Gradient Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background z-20 opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                    poster="https://images.unsplash.com/photo-1605218427306-022ba951ddb2?q=80&w=2671&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-traffic-at-night-aerial-view-37580-large.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                >
                    <div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-mono tracking-widest text-primary uppercase">System Online v3.0</span>
                    </div>
                </motion.div>

                {/* Glitch Headline */}
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter text-white mix-blend-overlay"
                    >
                        NEXUS
                    </motion.h1>
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 -mt-2 md:-mt-6"
                    >
                        ROLEPLAY
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl font-light mb-10 leading-relaxed font-sans"
                >
                    Forget everything you know about FiveM. <br />
                    <span className="text-white">Enter a world where your choices echo forever.</span>
                </motion.p>

                {/* Magnetic Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Button size="lg" className="h-16 px-8 text-lg bg-white text-black hover:bg-white/90 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] border-none rounded-full">
                        <Play className="mr-2 w-5 h-5 fill-current" />
                        Start Playing
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-8 text-lg border-white/20 hover:bg-white/5 rounded-full backdrop-blur-sm">
                        Join Community <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Hero Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-hero-glow blur-[120px] opacity-20 pointer-events-none" />
        </div>
    );
};

export default CinematicHero;
