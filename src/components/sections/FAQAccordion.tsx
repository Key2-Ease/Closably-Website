"use client";

import React, { useState } from 'react';
import { NeuCard } from '@/components/ui/NeuCard';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        q: "How long does setup take?",
        a: "Most teams are live quickly because Closably sits on Airtable and n8n. We map your meeting types, connect tools, and tailor templates."
    },
    {
        q: "Does it send emails automatically?",
        a: "No. Drafts are generated and queued. Sending requires your approval."
    },
    {
        q: "Can we customize the fields and outputs?",
        a: "Yes. We tailor Airtable views, templates, and outputs to match your team workflow."
    },
    {
        q: "What meeting types are supported?",
        a: "Closably runs different outputs for discovery and sales calls, with different asset packs for each."
    },
    {
        q: "What if contact email is missing?",
        a: "Closably uses smart fallbacks from calendar context to keep records usable and reduce duplicates."
    }
];

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[800px] mx-auto px-6">
                <h2 className="text-[36px] md:text-[56px] font-bold text-[var(--color-brand-blue)] text-center mb-16 leading-tight">
                    Frequently Answered
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <NeuCard key={i} className="overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-[var(--color-brand-blue)] text-lg">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus size={20} className="text-[var(--color-brand-green)]" />
                                ) : (
                                    <Plus size={20} className="text-[var(--color-brand-blue)]/30" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-[var(--color-brand-blue)]/60 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NeuCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
