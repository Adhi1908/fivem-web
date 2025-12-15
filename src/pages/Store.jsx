import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
        <div className="pt-24 pb-20 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl font-heading font-bold text-white mb-6">Support the <span className="text-primary">Server</span></h1>
                <p className="text-xl text-muted-foreground">All donations go directly towards server costs and development.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((tier, idx) => (
                    <Card key={idx} className={`relative flex flex-col ${tier.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] scale-105 z-10' : ''}`}>
                        {tier.popular && (
                            <div className="absolute top-0 right-0 p-3 bg-gradient-to-bl from-primary to-transparent text-black font-bold text-xs rounded-bl-xl">
                                MOST POPULAR
                            </div>
                        )}
                        <CardHeader className="text-center pb-2">
                            <div className={`mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 ${tier.color}`}>
                                <tier.icon className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-2xl">{tier.name}</CardTitle>
                            <div className="text-4xl font-bold text-white mt-2">{tier.price}<span className="text-base text-muted-foreground font-normal">/mo</span></div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4 pt-6">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={tier.popular ? "primary" : "outline"}>
                                Purchase Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Store;
