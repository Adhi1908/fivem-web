import React, { useState } from "react";
import { AccordionItem } from "@/components/ui/Accordion";
import ShinyText from "@/components/react-bits/ShinyText";
import { Scroll, AlertTriangle, ShieldCheck } from "lucide-react";

const ruleSections = [
    {
        category: "General Rules",
        icon: ShieldCheck,
        rules: [
            { title: "1.0 Respect & Toxicity", content: "Always respect fellow players and staff. Toxicity, racism, or harassment of any kind is strictly prohibited and leads to a permanent ban." },
            { title: "1.1 RDM (Random Deathmatch)", content: "Attacking another player without a valid in-character reason and prior initiation is not allowed." },
            { title: "1.2 VDM (Vehicle Deathmatch)", content: "Using your vehicle as a weapon to harm other players is strictly prohibited." },
        ]
    },
    {
        category: "Roleplay Standards",
        icon: Scroll,
        rules: [
            { title: "2.0 New Life Rule (NLR)", content: "If you are incapacitated and respawn at the hospital, you forget the events leading up to your death." },
            { title: "2.1 Metagaming", content: "Using out-of-character information (Discord, streams) for in-character advantage is forbidden." },
            { title: "2.2 Powergaming", content: "Forcing roleplay on others without giving them a chance to respond (e.g., 'ties shoes so tight they can't walk')." },
        ]
    },
    {
        category: "Criminal Activities",
        icon: AlertTriangle,
        rules: [
            { title: "3.0 Gang Limits", content: "Gangs are limited to 15 members max. Only 6 members can participate in a single hostile situation." },
            { title: "3.1 Robbery Cooldowns", content: "You must wait 30 minutes between major robberies (Banks, Jewelry)." },
        ]
    }
];

const Rules = () => {
    const [openSection, setOpenSection] = useState("1.0 Respect & Toxicity");

    return (
        <div className="pt-32 pb-20 container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl">
                    Server <ShinyText text="Rules" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </h1>
                <p className="text-xl text-muted-foreground">Familiarize yourself with our laws to ensure a great experience for everyone.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                {ruleSections.map((section, sIdx) => (
                    <div key={sIdx}>
                        <div className="flex items-center gap-3 mb-6">
                            <section.icon className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold text-white">{section.category}</h2>
                        </div>

                        <div className="space-y-4">
                            {section.rules.map((rule, rIdx) => (
                                <AccordionItem
                                    key={rIdx}
                                    title={rule.title}
                                    isOpen={openSection === rule.title}
                                    onToggle={() => setOpenSection(openSection === rule.title ? null : rule.title)}
                                >
                                    {rule.content}
                                </AccordionItem>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rules;
