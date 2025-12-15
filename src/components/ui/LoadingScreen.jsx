import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-background z-[9999] flex items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
