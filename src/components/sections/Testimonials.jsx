import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "OfficerK",
        role: "Police Chief",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=OfficerK",
        content: "The custom MDT script is unlike anything I've seen. Policing actually feels procedural and fair."
    },
    {
        name: "Viper",
        role: "Gang Leader",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Viper",
        content: "Turf wars are balanced perfectly. No pay-to-win mechanics, just pure skill and strategy."
    },
    {
        name: "DocSarah",
        role: "EMS Director",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=DocSarah",
        content: "Medical RP is deep. The injury system requires actual diagnosis, not just a bandage and go."
    },
    {
        name: "Speedy",
        role: "Street Racer",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Speedy",
        content: "Handling lines are hand-tuned. Drifting feels satisfying and police chases are intense."
    },
    {
        name: "BizMogul",
        role: "Business Owner",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=BizMogul",
        content: "Economy is stable. Inflation isn't crazy like other servers. Making money feels rewarding."
    }
];

const TestimonialCard = ({ name, role, img, content }) => (
    <div className="w-[350px] bg-white/5 border border-white/10 p-6 rounded-xl flex-shrink-0 backdrop-blur-sm mr-6 hover:bg-white/10 transition-colors">
        <p className="text-white/80 mb-6 leading-relaxed italic">"{content}"</p>
        <div className="flex items-center gap-4">
            <img src={img} alt={name} className="w-10 h-10 rounded-full" />
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <p className="text-primary text-sm">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-24 overflow-hidden bg-black/20">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Player <span className="text-primary">Stories</span></h2>
                <p className="text-white/60">Hear from the citizens of Nexus City.</p>
            </div>

            <div className="relative">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex w-max animate-scroll">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
