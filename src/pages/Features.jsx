import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Car, Briefcase, Gavel, Cpu, Home as HomeIcon, Skull } from "lucide-react";
import { Button } from "@/components/ui/Button";

const featureCategories = [
    {
        id: "legal",
        name: "Legal Roleplay",
        items: [
            { title: "Police Department", desc: "Custom MDT, optimized fleet, and ranking system.", icon: Gavel },
            { title: "EMS / Medical", desc: "Advanced injury system, hospitals, and playable medic roles.", icon: Briefcase },
            { title: "Mechanic Shops", desc: "Vehicle tuning, cosmetic upgrades, and repair services.", icon: Car },
        ]
    },
    {
        id: "illegal",
        name: "Illegal Activities",
        items: [
            { title: "Gang Systems", desc: "Turf wars, graffiti, and drug manufacturing.", icon: Skull },
            { title: "Heists", desc: "Pacific Standard, Fleeca, and Jewelry store robberies.", icon: Briefcase },
            { title: "Black Market", desc: "Hidden locations for weapon trading and contraband.", icon: Skull },
        ]
    },
    {
        id: "assets",
        name: "Custom Assets",
        items: [
            { title: "Import Vehicles", desc: "Over 300+ custom handling vehicles.", icon: Car },
            { title: "Housing", desc: "Buy any house with custom interiors and furniture.", icon: HomeIcon },
            { title: "Unique Clothing", desc: "Thousands of custom clothing items and accessories.", icon: Cpu },
        ]
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState("legal");

    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl font-heading font-bold text-white mb-6">Server <span className="text-primary">Features</span></h1>
                <p className="text-xl text-muted-foreground">Explore the vast possibilities within NexusRP.</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
                {featureCategories.map((cat) => (
                    <Button
                        key={cat.id}
                        variant={activeTab === cat.id ? "primary" : "outline"}
                        onClick={() => setActiveTab(cat.id)}
                        className="min-w-[150px]"
                    >
                        {cat.name}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {featureCategories.find(c => c.id === activeTab).items.map((item, idx) => (
                    <Card key={idx} className="h-full hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

export default Features;
