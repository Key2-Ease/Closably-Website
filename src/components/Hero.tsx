"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BentoWorkflowSlider } from '@/components/BentoWorkflowSlider';
import { ArrowRight, Star, StarHalf } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-24 overflow-hidden">
            {/* Centered Max width 1200px */}
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center gap-10 md:gap-12">

                {/* Top Content: Copy & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-8 max-w-[900px]"
                >
                    {/* Pill - Keep existing style */}
                    <div className="bg-blue-50 border border-blue-100 text-[var(--color-brand-blue)] text-[13px] md:text-sm font-semibold px-4 py-1.5 rounded-[999px] uppercase tracking-wider font-[family-name:var(--font-inter)]">
                        Purpose built for B2B SaaS sales cycles
                    </div>

                    {/* H1 - Centered */}
                    {/* H1 - Centered */}
                    <h1 className="text-[42px] md:text-[80px] font-[800] leading-[1.1] text-[var(--color-brand-blue)] tracking-tight font-[family-name:var(--font-jakarta)] -tracking-[0.04em]">
                        Close more deals,<br />
                        <span className="text-[var(--color-brand-green)]">effortlessly</span>
                    </h1>

                    {/* Body - Centered */}
                    <p className="text-[18px] md:text-[20px] leading-[1.6] text-[var(--color-brand-blue)]/70 font-[family-name:var(--font-inter)] font-medium max-w-[760px]">
                        Closably is an AI sales co-pilot that automates everything from meeting booked → deal closed, giving sales teams back 10+ hours each week to focus on closing deals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button
                            variant="primary"
                            className="h-14 px-8 text-base shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-glow-hover)]"
                            onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}
                        >
                            Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Rating Section - Replaces previous trust footer */}
                    <div className="flex flex-col gap-3 mt-4 items-center">
                        <p className="text-[14px] font-medium text-[var(--color-brand-blue)]/60 font-[family-name:var(--font-inter)]">
                            Rated <span className="font-bold text-[var(--color-brand-blue)]">4.5 out of 5</span> by users at <span className="font-bold">Ben.AI</span>
                        </p>
                        <div className="flex items-center gap-1">
                            <Star size={20} fill="#FACC15" className="text-yellow-400" />
                            <Star size={20} fill="#FACC15" className="text-yellow-400" />
                            <Star size={20} fill="#FACC15" className="text-yellow-400" />
                            <Star size={20} fill="#FACC15" className="text-yellow-400" />
                            <StarHalf size={20} fill="#FACC15" className="text-yellow-400" />
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Content: Visual (Workflow) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full flex justify-center"
                >
                    <BentoWorkflowSlider />
                </motion.div>

            </div>
        </section>
    );
}
