import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));

    useEffect(() => {
        if (!inView) return;

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
    }, [inView, numericValue, value]);

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
        <section className="border-y border-white/5 bg-black/40 backdrop-blur-md relative z-40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="py-10 text-center group hover:bg-white/5 transition-colors duration-500">
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
        </section>
    );
};

export default StatsBanner;
