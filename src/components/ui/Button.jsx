import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] border border-primary/50",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(255,0,110,0.3)] hover:shadow-[0_0_30px_rgba(255,0,110,0.5)] border border-secondary/50",
    outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
    ghost: "hover:bg-white/10 text-foreground",
    glow: "bg-transparent border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:border-white/40",
};

const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg uppercase tracking-wider",
    icon: "h-10 w-10",
};

const Button = React.forwardRef(({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? motion.slot : motion.button;
    return (
        <Comp
            ref={ref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-heading",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
});

Button.displayName = "Button";

export { Button };
