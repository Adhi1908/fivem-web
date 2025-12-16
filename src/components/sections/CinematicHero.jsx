import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight, Copy, Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import GlitchText from "@/components/ui/GlitchText";
import { useToast } from "@/context/ToastContext";

const CinematicHero = () => {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const { addToast } = useToast();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const handleCopyIp = () => {
        navigator.clipboard.writeText("play.nexus-rp.com");
        addToast("Server IP Copied to Clipboard!", "success");
    };

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video Layer */}
            {/* Background Video Layer */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker Overlay for contrast */}
                {/* Gradient Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background z-20 opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20" />

                {videoError ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black transition-opacity duration-1000" />
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                        poster="https://images.unsplash.com/photo-1605218427306-022ba951ddb2?q=80&w=2671&auto=format&fit=crop"
                        onError={() => setVideoError(true)}
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-traffic-at-night-aerial-view-37580-large.mp4" type="video/mp4" />
                    </video>
                )}
            </motion.div>

            {/* Depth Layers */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
                className="absolute inset-0 z-20 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                >
                    <div className="bg-red-500/20 backdrop-blur-md rounded-full px-4 py-1.5 border border-red-500/30 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-mono tracking-widest text-red-100 uppercase">Holiday Event Active 🎄</span>
                    </div>
                </motion.div>

                {/* Glitch Headline */}
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: 150 }}
                        animate={isLoaded ? { y: 0 } : { y: 150 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter text-white mix-blend-overlay"
                    >
                        <GlitchText>NEXUS</GlitchText>
                    </motion.h1>
                    <motion.h1
                        initial={{ y: 150 }}
                        animate={isLoaded ? { y: 0 } : { y: 150 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 -mt-2 md:-mt-6"
                    >
                        ROLEPLAY
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl font-light mb-10 leading-relaxed font-sans"
                >
                    Winter has arrived in Los Santos. <br />
                    <span className="text-white">Experience the magic of NexusRP this holiday season.</span>
                </motion.p>

                {/* Magnetic Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <MagneticButton onClick={handleCopyIp} size="lg" className="h-16 px-8 text-lg bg-white text-black hover:bg-white/90 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] border-none rounded-full group">
                        <Play className="mr-2 w-5 h-5 fill-current group-hover:hidden" />
                        <Copy className="mr-2 w-5 h-5 hidden group-hover:block" />
                        <span className="group-hover:hidden">Start Playing</span>
                        <span className="hidden group-hover:inline">Copy Server IP</span>
                    </MagneticButton>
                    <MagneticButton size="lg" variant="outline" className="h-16 px-8 text-lg border-white/20 hover:bg-white/5 rounded-full backdrop-blur-sm">
                        Join Community <ArrowRight className="ml-2 w-5 h-5" />
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Hero Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-hero-glow blur-[120px] opacity-20 pointer-events-none" />
        </div>
    );
};

export default CinematicHero;
