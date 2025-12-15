import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const AccordionItem = ({ title, children, isOpen, onToggle, variant = "default" }) => {
    return (
        <div className={cn(
            "border border-white/10 rounded-lg overflow-hidden transition-all duration-300",
            isOpen ? "bg-white/5 border-primary/30" : "bg-black/20 hover:bg-white/5"
        )}>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-white transition-colors"
            >
                <span className={cn("text-lg", isOpen && "text-primary")}>{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className={cn("w-5 h-5", isOpen ? "text-primary" : "text-muted-foreground")} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed border-t border-white/5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
