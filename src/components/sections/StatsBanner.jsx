import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Parse value (remove non-numeric chars for counting)
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));

    // Spring configuration for smooth counting
    const springValue = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: 2
    });

    useEffect(() => {
        if (inView) {
            springValue.set(numericValue);
        }
    }, [inView, numericValue, springValue]);

    // Update text content with formatting
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + (value.toString().includes('k') ? 'k+' : '+');
            }
        });
    }, [springValue, value]);

    return <span ref={ref} className="tabular-nums font-mono text-primary font-bold">0</span>;
};

const stats = [
    { label: "Active Players", value: "500+" },
    { label: "Registered Users", value: "25k+" },
    { label: "Custom Vehicles", value: "300+" },
    { label: "Uptime", value: "99%" },
];

const StatsBanner = () => {
    return (
        <section className="border-y border-white/5 bg-black/40 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="py-8 text-center group">
                            <h3 className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                <AnimatedCounter value={stat.value} />
                            </h3>
                            <p className="text-sm text-white/40 uppercase tracking-widest font-heading group-hover:text-white transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
