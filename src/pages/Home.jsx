import React from "react";
import CinematicHero from "@/components/sections/CinematicHero";
import BentoFeatures from "@/components/sections/BentoFeatures";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

import ShinyText from "@/components/react-bits/ShinyText";
import StarBorder from "@/components/react-bits/StarBorder";

const Home = () => {
    return (
        <>
            <CinematicHero />
            <StatsBanner />
            <BentoFeatures />
            <Testimonials />
            <FAQ />

            {/* Bottom CTA */}

        </>
    );
};

export default Home;
