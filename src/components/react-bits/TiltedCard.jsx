import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltedCard = ({ children, className = "" }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-full h-full rounded-xl transition-all duration-200 ease-linear ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 rounded-xl shadow-lg"
            >
                {/* Shadow/Depth Layer */}
                <div className="absolute inset-0 bg-black/50 blur-xl transform translate-z-[-20px]" />
            </div>

            <div className="relative h-full w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 dark:border-white/10">
                {children}

                {/* Glare/Sheen Effect */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 60%)",
                        mixBlendMode: "screen",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default TiltedCard;
