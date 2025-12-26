"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function FinalCTA() {
    return (
        <section className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1000px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl bg-[#161E2E]"
                >
                    {/* Background Gradient/Mesh */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6DF5B9]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 text-center max-w-[600px] mx-auto">
                        <h2 className="text-[36px] md:text-[56px] font-bold mb-4 leading-tight text-white">
                            Ready to close more deals?
                        </h2>
                        <p className="text-white/70 text-lg mb-10 leading-relaxed">
                            Book a demo and we will show you exactly what Closably will generate before and after your next meeting.
                        </p>

                        <form
                            className="flex flex-col gap-4 max-w-[400px] mx-auto w-full"
                            action="https://formspree.io/f/xeolnrpe"
                            method="POST"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] transition-all"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                required
                                className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] transition-all"
                            />
                            <Button
                                type="submit"
                                className="w-full justify-center bg-[var(--color-brand-green)] hover:bg-[#049d89] text-white font-bold h-12 rounded-xl border-none"
                            >
                                Submit
                            </Button>
                        </form>

                        <div className="mt-8 flex items-center justify-center gap-6 text-[11px] font-bold tracking-widest text-white/30 uppercase">
                            <span>No credit card required</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span>SOC2 Certified</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
