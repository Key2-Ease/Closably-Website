"use client";

import React from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { Star } from 'lucide-react';

export function Testimonials() {
    return (
        <section className="py-24 bg-[var(--color-brand-white)] border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-[36px] md:text-[56px] font-bold mb-6 max-w-[800px] text-[var(--color-brand-blue)] leading-tight">
                        Loved by sales teams at top companies
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <NeuCard variant="light" className="p-8 hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-lg leading-relaxed text-[var(--color-brand-blue)]/80 mb-6 italic">
                            "Closably replaced hours of manual prep and follow up with a repeatable system. Our reps sound sharper overnight."
                        </p>
                    </NeuCard>

                    <NeuCard variant="light" className="p-8 hover:-translate-y-1 transition-transform duration-300">
                        <p className="text-lg leading-relaxed text-[var(--color-brand-blue)]/80 mb-6 italic">
                            "The biggest win is consistency. Every meeting produces the same quality outputs without chasing people."
                        </p>
                    </NeuCard>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={20} fill="var(--color-brand-cta)" className="text-[var(--color-brand-cta)]" />
                        ))}
                    </div>
                    <span className="text-lg font-bold text-[var(--color-brand-blue)]">Rated 4.9 out of 5</span>
                </div>
            </div>
        </section>
    );
}
