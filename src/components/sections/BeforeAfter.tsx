"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const pains = [
    "Scrambling for context five mins before the call",
    "Follow ups depend on who remembers what",
    "Proposals stall while teams chase details",
    "CRM updates become a weekend job"
];

const gains = [
    "A pre-meeting brief waiting in Airtable",
    "A Slack ping with the talking points that matter",
    "Follow up email ready right after discovery",
    "Proposal generated while intent is hot"
];

export function BeforeAfter() {
    return (
        <section className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl md:text-[56px] font-bold text-[var(--color-brand-blue)] mb-4 max-w-[700px] leading-tight">
                        From reactive selling to <br className="hidden md:block" />
                        controlled <span className="text-[var(--color-brand-green)]">Momentum</span>
                    </h2>
                </div>

                {/* Split Layout: Left Column (Stack) | Right Column (Image) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8 md:mb-16 items-stretch">

                    {/* Left Column: Stacked Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Card 1: Before */}
                        <NeuCard className="p-8 relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-l-red-400">
                            <h3 className="text-sm font-bold text-red-500 mb-6 flex items-center gap-2 uppercase tracking-wide">
                                <XCircle size={16} />
                                Before Closably
                            </h3>
                            <ul className="space-y-4">
                                {pains.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-brand-blue)]/60 text-[15px] font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-300 mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </NeuCard>

                        {/* Card 2: After */}
                        <NeuCard className="p-8 relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-l-[var(--color-brand-green)]">
                            <h3 className="text-sm font-bold text-[var(--color-brand-green)] mb-6 flex items-center gap-2 uppercase tracking-wide">
                                <CheckCircle size={16} />
                                After Closably
                            </h3>
                            <ul className="space-y-4">
                                {gains.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-brand-blue)] text-[15px] font-medium">
                                        <CheckCircle size={16} className="text-[var(--color-brand-green)] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </NeuCard>

                    </div>

                    {/* Right Column: Large Imagery - Hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-3">
                        <NeuCard className="relative overflow-hidden h-full min-h-[500px] flex items-center justify-center group p-0 bg-gray-50">
                            <Image
                                src="/growth_chart_3d.png"
                                alt="Consistent Momentum and Growth"
                                fill
                                className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/20 to-transparent" />
                        </NeuCard>
                    </div>

                </div>

                <div className="flex flex-col items-center gap-4">
                    <h4 className="text-lg font-medium text-[var(--color-brand-blue)]">Want to see it on your workflow?</h4>
                    <Button variant="primary" onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}>Book a Demo <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
            </div>
        </section>
    );
}
