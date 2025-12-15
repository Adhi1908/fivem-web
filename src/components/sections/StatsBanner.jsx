import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Extract numeric value properly
    const numericValue = parseInt(value.toString().match(/\d+/)?.[0] || '0');

    useEffect(() => {
        if (!inView || hasAnimated) return;
        setHasAnimated(true);

        let start = 0;
        const duration = 2000;
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

    return <span ref={ref} className="tabular-nums font-mono text-primary font-bold text-4xl">0</span>;
};

const stats = [
    { label: "Active Players", value: "500+" },
    { label: "Registered Users", value: "25k+" },
    { label: "Custom Vehicles", value: "300+" },
    { label: "Uptime", value: "99%" },
];

const StatsBanner = () => {
    return (
        <section className="relative z-40 py-8">
            {/* Glass Background Strip */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="py-6 text-center group hover:bg-primary/5 transition-all duration-500 relative">
                            <div className="absolute inset-0 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="mb-2"
                            >
                                <AnimatedCounter value={stat.value} />
                            </motion.div>
                            <p className="text-sm text-white/40 uppercase tracking-widest font-heading group-hover:text-white transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>


            </div>
        </section >
    );
};

export default StatsBanner;
