"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { CalendarClock, CheckCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HowItWorks() {
    return (
        <section id="mechanics" className="py-12 bg-[var(--color-brand-white)]">
            <div className="w-full mx-auto px-4 md:px-6">
                <div className="bg-[var(--color-brand-blue)] rounded-[40px] py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">

                    {/* Background Blur Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-green)]/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-[1400px] mx-auto">
                        <div className="text-center mb-16 flex flex-col items-center">
                            <h2 className="text-[36px] md:text-[56px] font-bold mb-4 max-w-[800px] leading-tight text-white">
                                Two automations. <span className="text-[var(--color-brand-green)]">One system of record.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                            {/* Automation 1 */}
                            <NeuCard variant="blue" className="p-8 md:p-12 relative overflow-hidden group h-full border border-white/5 bg-[#161E2E]/50 hover:bg-[#161E2E] transition-colors">
                                <div className="absolute top-0 right-0 p-32 bg-[var(--color-brand-green)]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-green)]">
                                        <CalendarClock size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Pre meeting automation</h3>
                                </div>

                                <div className="mb-6">
                                    <div className="text-xs font-bold text-[var(--color-brand-green)] uppercase tracking-widest mb-2">Trigger</div>
                                    <div className="text-lg font-medium text-white/90">When a meeting is booked</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Closably enriches the company and contact</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Builds a pre meeting brief with focus points</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Saves the record in Airtable</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Notifies the rep in Slack</span>
                                    </li>
                                </ul>

                                <div className="p-4 rounded-xl bg-[var(--color-brand-green)]/10 border border-[var(--color-brand-green)]/20">
                                    <span className="font-bold text-[var(--color-brand-green)]">Outcome:</span>
                                    <span className="text-white/80 ml-2">Reps start calls prepared and calm.</span>
                                </div>
                            </NeuCard>

                            {/* Automation 2 */}
                            <NeuCard variant="blue" className="p-8 md:p-12 relative overflow-hidden group h-full border border-white/5 bg-[#161E2E]/50 hover:bg-[#161E2E] transition-colors">
                                <div className="absolute top-0 right-0 p-32 bg-[var(--color-brand-green)]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-green)]">
                                        <CheckCheck size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Post meeting automation</h3>
                                </div>

                                <div className="mb-6">
                                    <div className="text-xs font-bold text-[var(--color-brand-green)] uppercase tracking-widest mb-2">Trigger</div>
                                    <div className="text-lg font-medium text-white/90">When the meeting ends</div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Closably detects the meeting type</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Generates the right assets inside Airtable</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Prepares next steps for approval</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-white/70">
                                        <Zap size={18} className="text-[var(--color-brand-green)] mt-1 shrink-0" />
                                        <span>Sends emails or proposals only when you allow it</span>
                                    </li>
                                </ul>

                                <div className="p-4 rounded-xl bg-[var(--color-brand-green)]/10 border border-[var(--color-brand-green)]/20">
                                    <span className="font-bold text-[var(--color-brand-green)]">Outcome:</span>
                                    <span className="text-white/80 ml-2">Momentum stays high.</span>
                                </div>
                            </NeuCard>

                        </div>

                        <div className="flex justify-center">
                            <Button variant="primary" className="h-16 px-10 text-lg font-semibold" onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}>Book a Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
