import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const SpotlightCard = ({ children, className = "" }) => {
    const ref = useRef(null);
    const [opacity, setOpacity] = useState(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(mouseX, { stiffness: 500, damping: 100 });
    const y = useSpring(mouseY, { stiffness: 500, damping: 100 });

    // Tilt values
    const rotateX = useSpring(0, { stiffness: 150, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 150, damping: 30 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        // Calculate rotation (max 15 degrees)
        rotateX.set(((clientY - centerY) / height) * -15);
        rotateY.set(((clientX - centerX) / width) * 15);
    }

    function handleFocus() {
        setOpacity(1);
    }

    function handleBlur() {
        setOpacity(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    function handleMouseEnter() {
        setOpacity(1);
    }

    function handleMouseLeave() {
        setOpacity(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-200 ease-out",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 h-full"
            >
                {children}
            </div>

            <motion.div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${x}px ${y}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
        </motion.div>
    );
};

export default SpotlightCard;
