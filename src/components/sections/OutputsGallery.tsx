"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { FileText, MessagesSquare, FileCode, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const outputs = [
    {
        title: "Pre meeting outputs",
        icon: FileText,
        items: [
            "Company profile, size, and ARR data",
            "Growth stage and funding signals",
            "Decision authority and contact mapping",
            "Skills, interests, and content signals",
            "Competitive analysis and gaps",
            "Strategic positioning angles",
            "A complete pre meeting brief"
        ]
    },
    {
        title: "Discovery outputs",
        icon: MessagesSquare,
        items: [
            "Strategic focus and goals",
            "Value narrative and storytelling",
            "Key positioning and differentiation",
            "Smart objection handling guide",
            "Technical requirements and considerations",
            "Suggested client questions",
            "Post discovery email ready to send"
        ]
    },
    {
        title: "Sales call outputs",
        icon: FileCode,
        items: [
            "Project name and validation dates",
            "Detailed scope of work",
            "Logical implementation phases",
            "Tech stack requirements",
            "Timeline and key milestones",
            "Pricing breakdown and deliverables",
            "PandaDoc proposal ready for approval"
        ]
    }
];

export function OutputsGallery() {
    return (
        <section id="outputs" className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-[36px] md:text-[56px] font-bold text-[var(--color-brand-blue)] mb-6 max-w-[800px] leading-tight">
                        <span className="text-[var(--color-brand-green)]">Tangible outputs</span>, not generic summaries
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {outputs.map((item, i) => (
                        <NeuCard key={i} className="group hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
                            {/* Header: Increased Padding & Spacing */}
                            <div className="p-8 border-b border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#05B29B]/10 flex items-center justify-center text-[#05B29B] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300 shrink-0">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-green)] transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Content: Increased Padding & Typography */}
                            <div className="p-8 flex-1 bg-gray-50/50">
                                <ul className="space-y-4">
                                    {item.items.map((str, idx) => {
                                        const isLast = idx === item.items.length - 1;
                                        if (isLast) {
                                            return (
                                                <li key={idx} className="mt-6 p-4 rounded-xl bg-[var(--color-brand-green)]/10 border border-[var(--color-brand-green)]/20 text-[15px] font-medium text-[var(--color-brand-blue)] leading-relaxed">
                                                    {str}
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={idx} className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-brand-blue)]/70 font-medium">
                                                <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]/60 shrink-0" />
                                                <span>{str}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </NeuCard>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-8 text-center">
                    <p className="text-lg font-medium text-[var(--color-brand-blue)]/60">
                        You keep control. Closably creates the assets. Your team approves the send.
                    </p>
                    <Button
                        variant="primary"
                        className="h-14 px-8 text-lg shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-glow-hover)]"
                        onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}
                    >
                        Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
