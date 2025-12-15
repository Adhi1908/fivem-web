import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const Apply = () => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-4xl font-heading font-bold text-white mb-4">Application Submitted!</h2>
                <p className="text-muted-foreground mb-8">Roleplay is about patience. Please allow 24-48 hours for our staff to review your application.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another</Button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-heading font-bold text-white mb-6">Whitelist <span className="text-primary">Application</span></h1>
                <p className="text-xl text-muted-foreground">Join our community by showing us your roleplay capability.</p>
            </div>

            <Card className="glass">
                <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Discord Username" placeholder="username#0000" />
                        <Input label="Age" type="number" />
                    </div>
                    <Input label="Steam Hex ID" />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Roleplay Experience</label>
                        <textarea
                            className="flex w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-32"
                            placeholder="Tell us about your previous roleplay experience..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Character Backstory</label>
                        <textarea
                            className="flex w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-32"
                            placeholder="Detailed backstory for your character (min 200 words)..."
                        />
                    </div>

                    <Button size="lg" className="w-full" onClick={() => setSubmitted(true)}>
                        Submit Application
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Apply;
