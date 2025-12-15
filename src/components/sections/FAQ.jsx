import React, { useState } from "react";
import { AccordionItem } from "@/components/ui/Accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "How do I join the server?",
        a: "Click the 'Apply Now' button in the navigation. You'll need to join our Discord, read the rules, and submit a quick application. Once approved, you'll be whitelisted automatically."
    },
    {
        q: "Is this server controller friendly?",
        a: "Yes! We have custom keybinds mapping for controllers. Driving feels great, and menu navigation is optimized for D-pad usage."
    },
    {
        q: "Do I need to pay to play?",
        a: "Absolutely not. NexusRP is free-to-play. We have a donation store for cosmetic perks and queue priority to support server costs, but no 'pay-to-win' mechanics exist."
    },
    {
        q: "What is the age requirement?",
        a: "We strictly enforce a 16+ age requirement to ensure mature and high-quality roleplay scenarios."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 container mx-auto px-4 relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="sticky top-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                        <HelpCircle size={20} />
                        <span className="font-bold uppercase tracking-wider text-sm">Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Frequently Asked <br /><span className="text-primary">Questions</span></h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Can't find what you're looking for? Join our Discord and ask our support team directly.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            title={faq.q}
                            isOpen={openIndex === idx}
                            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            {faq.a}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
