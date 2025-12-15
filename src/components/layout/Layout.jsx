import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import PageTransition from "./PageTransition";
import ParticleBackground from "./ParticleBackground";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import Snowfall from "@/components/ui/Snowfall";

const Layout = () => {
    useEffect(() => {
        const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        let current = 0;

        const handleKey = (e) => {
            if (e.key === konami[current]) {
                current++;
                if (current === konami.length) {
                    document.documentElement.classList.add('matrix-mode');
                    current = 0;
                }
            } else {
                current = 0;
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            <LoadingScreen />
            <Snowfall />
            {/* Background Ambience */}
            <ParticleBackground />
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] opacity-40 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] opacity-30" />
            </div>

            <Navbar />
            <main className="flex-grow">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
