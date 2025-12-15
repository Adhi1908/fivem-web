import { motion } from "framer-motion";

export const GlitchText = ({ children }) => (
    <div className="relative inline-block">
        <span className="relative z-10">{children}</span>
        <motion.span
            animate={{
                x: [0, -2, 2, -2, 0],
                opacity: [0, 0.8, 0, 0.8, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 text-primary opacity-70 mix-blend-screen pointer-events-none"
            style={{ textShadow: "2px 0 #00F0FF" }}
        >
            {children}
        </motion.span>
        <motion.span
            animate={{
                x: [0, 2, -2, 2, 0],
                opacity: [0, 0.8, 0, 0.8, 0]
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4, delay: 0.2 }}
            className="absolute inset-0 text-secondary opacity-70 mix-blend-screen pointer-events-none"
            style={{ textShadow: "-2px 0 #FF0055" }}
        >
            {children}
        </motion.span>
    </div>
);

export default GlitchText;
