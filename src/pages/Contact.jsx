import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import ShinyText from "@/components/react-bits/ShinyText";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 tracking-widest uppercase drop-shadow-2xl">
                    Contact <ShinyText text="Support" speed={3} className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
                </h1>
                <p className="text-xl text-muted-foreground">Need help? Reach out to our team.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <Card className="hover:border-primary/50 transition-colors cursor-pointer" onClick={() => window.open('https://discord.gg', '_blank')}>
                        <CardContent className="flex items-center gap-6 p-8">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <MessageSquare className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Discord Support</h3>
                                <p className="text-muted-foreground">Join our Discord and open a ticket for the fastest response.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:border-primary/50 transition-colors">
                        <CardContent className="flex items-center gap-6 p-8">
                            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <Mail className="w-8 h-8 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                                <p className="text-muted-foreground">For business inquiries or serious account issues.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="glass">
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Name" placeholder="John Doe" />
                            <Input label="Email" type="email" placeholder="john@example.com" />
                        </div>
                        <Input label="Subject" placeholder="How can we help?" />
                        <textarea
                            className="flex w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-32"
                            placeholder="Your message..."
                        />
                        <Button className="w-full">Send Message</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
