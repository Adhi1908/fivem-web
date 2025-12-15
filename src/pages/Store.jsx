import React from "react";

import { Button } from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ShinyText from "@/components/react-bits/ShinyText";
import { Check, Star, Crown, Zap } from "lucide-react";

const tiers = [
    {
        name: "VIP Bronze",
        price: "$10",
        icon: Star,
        color: "text-amber-600",
        features: ["Queue Priority (Tier 1)", "Custom Discord Role", "$50,000 In-Game Cash", "1x Common Crate Key"]
    },
    {
        name: "VIP Silver",
        price: "$25",
        icon: Zap,
        color: "text-gray-300",
        popular: true,
        features: ["Queue Priority (Tier 2)", "Reserved Slot", "$150,000 In-Game Cash", "1x Rare Crate Key", "Custom Phone Number"]
    },
    {
        name: "VIP Gold",
        price: "$50",
        icon: Crown,
        color: "text-yellow-400",
        features: ["Queue Priority (Tier 3)", "Reserved Slot", "$500,000 In-Game Cash", "1x 1-of-1 Import Vehicle", "Gang Whitelist Access"]
    }
];

const Store = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl">
                    Support the <ShinyText text="Server" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </h1>
                <p className="text-xl text-muted-foreground">All donations go directly towards server costs and development.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((tier, idx) => (
                    <SpotlightCard key={idx} className={`relative flex flex-col p-8 h-full ${tier.popular ? 'border-primary/50 shadow-[0_0_40px_rgba(0,240,255,0.1)] scale-105 z-10 bg-black/60' : 'bg-black/40 border-white/10'}`}>
                        {tier.popular && (
                            <div className="absolute top-0 right-0 p-3 bg-gradient-to-bl from-primary to-transparent text-black font-bold text-xs rounded-bl-xl z-20">
                                MOST POPULAR
                            </div>
                        )}
                        <div className="text-center pb-6 border-b border-white/5 mb-6 relative">
                            {tier.popular && <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-50 pointer-events-none" />}
                            <div className={`mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 ${tier.color} relative z-10 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                <tier.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="text-4xl font-bold text-white mt-2">{tier.price}<span className="text-base text-muted-foreground font-normal">/mo</span></div>
                        </div>
                        <div className="flex-grow">
                            <ul className="space-y-4">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300 group/item">
                                        <Check className="w-5 h-5 text-primary shrink-0 group-hover/item:text-green-400 transition-colors" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <Button className="w-full shadow-lg" variant={tier.popular ? "primary" : "outline"}>
                                Purchase Now
                            </Button>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Store;
