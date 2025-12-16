import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Car, Server, Activity } from "lucide-react";

const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Extract numeric value properly
    const numericValue = parseInt(value.toString().match(/\d+/)?.[0] || '0');

    useEffect(() => {
        if (!inView || hasAnimated) return;
        setHasAnimated(true);

        const duration = 2500; // Slower for epic feel
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(ease * numericValue);

            if (ref.current) {
                ref.current.innerText = current.toLocaleString() + (value.toString().includes('k') ? 'k+' : '+') + (value.toString().includes('%') ? '%' : '');
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, hasAnimated, numericValue, value]);

    return <span ref={ref} className="tabular-nums font-sans font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">0</span>;
};

const stats = [
    { label: "Active Players", value: "500+", icon: Users, color: "text-blue-500" },
    { label: "Registered Users", value: "25k+", icon: Activity, color: "text-purple-500" },
    { label: "Custom Vehicles", value: "300+", icon: Car, color: "text-red-500" },
    { label: "Server Uptime", value: "99%", icon: Server, color: "text-green-500" },
];

const StatsBanner = () => {
    return (
        <section className="relative z-40 py-20 overflow-hidden bg-transparent">


            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="relative group perspective-1000">
                            <div className="relative p-6 text-center group transition-all duration-500 hover:-translate-y-2">
                                {/* Bottom Gradient Line (Idle: Faint, Hover: Bright & Colored) */}
                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-${stat.color.split('-')[1]}-500 group-hover:to-transparent transition-all duration-500`} />

                                {/* Hover Glow */}
                                <div className={`absolute inset-0 bg-${stat.color.split('-')[1]}-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full`} />

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Icon Badge - Floating style */}
                                    <div className={`mb-4 p-4 rounded-full bg-white/5 ring-1 ring-white/10 group-hover:ring-${stat.color.split('-')[1]}-500/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                                        <stat.icon className={`w-8 h-8 ${stat.color} transition-all duration-300`} />
                                    </div>

                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, type: "spring", bounce: 0.5 }}
                                        className="mb-2"
                                    >
                                        <AnimatedCounter value={stat.value} />
                                    </motion.div>

                                    <p className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase group-hover:text-white/80 transition-colors">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
