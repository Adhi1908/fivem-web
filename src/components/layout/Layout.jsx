import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import PageTransition from "./PageTransition";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            </div>

            <Navbar />
            <main className="flex-grow pt-20">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
