"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { UserCheck, ShieldAlert, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export function CredibilityTrust() {
    return (
        <section id="proof" className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-[36px] md:text-[56px] font-bold mb-6 max-w-[800px] text-[var(--color-brand-blue)] leading-tight">
                        <span className="text-[var(--color-brand-green)]">Enterprise discipline</span> without enterprise friction
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    <NeuCard variant="light" className="p-8 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#05B29B]/10 shadow-none flex items-center justify-center mb-6 text-[#05B29B] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300">
                            <UserCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-green)] transition-colors duration-300">Human in the loop by default</h3>
                        <p className="text-[var(--color-brand-blue)]/60 leading-relaxed">
                            Emails and proposals are generated automatically and sent only with approval.
                        </p>
                    </NeuCard>

                    <NeuCard variant="light" className="p-8 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#05B29B]/10 shadow-none flex items-center justify-center mb-6 text-[#05B29B] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300">
                            <ShieldAlert size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-green)] transition-colors duration-300">Built for messy real world data</h3>
                        <p className="text-[var(--color-brand-blue)]/60 leading-relaxed">
                            When calendar details are incomplete, Closably uses fallbacks to keep records consistent.
                        </p>
                    </NeuCard>

                    <NeuCard variant="light" className="p-8 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#05B29B]/10 shadow-none flex items-center justify-center mb-6 text-[#05B29B] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300">
                            <BadgeCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-green)] transition-colors duration-300">Purpose built for B2B SaaS sales cycles</h3>
                        <p className="text-[var(--color-brand-blue)]/60 leading-relaxed">
                            Your briefs, follow ups, and proposals follow the logic of SaaS deals, not generic templates.
                        </p>
                    </NeuCard>

                    {/* Decorative Visual Card */}
                    <div className="relative rounded-[32px] overflow-hidden bg-[var(--color-brand-blue)]/5 min-h-[240px] flex items-center justify-center group">
                        <Image
                            src="/security_lock_3d.png"
                            alt="Enterprise Ready Security"
                            fill
                            className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/50 to-transparent" />

                        <div className="relative z-10 flex flex-col items-center gap-3 mt-auto mb-8">
                            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                                Enterprise Ready
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm font-medium text-[var(--color-brand-blue)]/40 uppercase tracking-widest">
                        Security and access are scoped to your tools and permissions.
                    </p>
                </div>
            </div>
        </section>
    );
}
