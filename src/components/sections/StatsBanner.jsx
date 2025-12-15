import React from "react";

const StatItem = ({ label, value }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{value}</div>
        <div className="text-sm uppercase tracking-widest text-muted-foreground font-medium">{label}</div>
    </div>
);

const StatsBanner = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <StatItem label="Active Players" value="500+" />
                    <StatItem label="Registered Users" value="25k+" />
                    <StatItem label="Custom Vehicles" value="120+" />
                    <StatItem label="Uptime" value="99.9%" />
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
