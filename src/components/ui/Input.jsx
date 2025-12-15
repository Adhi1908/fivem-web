import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, label, error, ...props }, ref) => {
    return (
        <div className="relative w-full group">
            <input
                type={type}
                className={cn(
                    "flex h-12 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-white transition-all peer pt-4",
                    error && "border-red-500 focus-visible:ring-red-500",
                    className
                )}
                placeholder={label} // Placeholder required for peer-placeholder-shown trick
                ref={ref}
                {...props}
            />
            {label && (
                <label
                    className={cn(
                        "absolute left-3 top-1 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary pointer-events-none",
                        error && "text-red-500 peer-focus:text-red-500"
                    )}
                >
                    {label}
                </label>
            )}
            {error && <span className="text-xs text-red-500 mt-1 ml-1">{error}</span>}
        </div>
    )
})
Input.displayName = "Input"

export { Input }
