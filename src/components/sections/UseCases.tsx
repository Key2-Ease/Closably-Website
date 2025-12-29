"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { Users, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const cases = [
    {
        role: "For Sales Reps",
        icon: Target,
        benefit: "Walk into every call with clarity. Follow up while the conversation is still warm."
    },
    {
        role: "For Sales Ops",
        icon: Users,
        benefit: "Clean records. Standardized outputs. A workflow your team actually follows."
    },
    {
        role: "For Founders",
        icon: TrendingUp,
        benefit: "Less admin. Faster proposals. More energy spent on closing."
    }
];

export function UseCases() {
    return (
        <section className="py-12 md:py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-4 md:mb-16 flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl lg:text-[56px] font-bold text-[var(--color-brand-blue)] max-w-[800px] leading-tight px-4">
                        Designed for sales leaders who care about <span className="text-[var(--color-brand-green)]">speed and consistency</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8 mb-12">
                    {cases.map((c, i) => (
                        <NeuCard key={i} className="p-4 md:p-8 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-[#05B29B]/10 shadow-none flex items-center justify-center mb-3 md:mb-6 text-[#05B29B] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300">
                                <c.icon size={16} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-sm md:text-2xl font-bold text-[var(--color-brand-blue)] mb-2 md:mb-3 group-hover:text-[var(--color-brand-green)] transition-colors duration-300">{c.role}</h3>
                            <p className="text-xs md:text-base text-[var(--color-brand-blue)]/60 leading-relaxed line-clamp-3 md:line-clamp-none">
                                {c.benefit}
                            </p>
                        </NeuCard>
                    ))}


                    {/* Decorative Visual Card */}
                    <div className="relative rounded-[32px] overflow-hidden bg-[var(--color-brand-blue)]/5 min-h-[240px] flex items-center justify-center group">
                        <Image
                            src="/velocity_speedometer_3d.png"
                            alt="Velocity and Control"
                            fill
                            className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/50 to-transparent" />

                        <div className="relative z-10 flex flex-col items-center gap-4 mt-auto mb-8">
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold text-white shadow-sm border border-white/20">
                                Velocity & Control
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h4 className="text-lg font-medium text-[var(--color-brand-blue)]">If meetings drive revenue, Closably should run around them</h4>
                    <Button variant="primary" onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}>Book a Demo <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
            </div>
        </section>
    );
}
