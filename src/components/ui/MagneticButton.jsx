import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { Button } from "./Button";

export const MagneticButton = ({ children, ...props }) => {
    const ref = useRef(null);
    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            className="inline-block"
        >
            <Button {...props}>{children}</Button>
        </motion.div>
    );
};

export default MagneticButton;
