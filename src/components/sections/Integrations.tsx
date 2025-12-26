"use client";

import React from 'react';

// Using simple string names or placeholders since we are using Lucide mostly, but for logos text is cleaner if no assets.
const logos = ["Google Calendar", "Slack", "Airtable", "n8n", "Fireflies", "PandaDoc"];

export function Integrations() {
    return (
        <section id="integrations" className="py-24 bg-[var(--color-brand-white)] border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-brand-blue)] mb-12">
                    Fits your stack in a week, not a quarter
                </h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center mb-12">
                    {logos.map((logo, i) => (
                        <div key={i} className="text-lg md:text-xl font-bold text-[var(--color-brand-blue)]/40 flex items-center gap-3 hover:text-[var(--color-brand-blue)] hover:scale-105 transition-all duration-300 cursor-default">
                            {/* Placeholder circle for logo icon */}
                            <div className="w-8 h-8 rounded-full bg-gray-100" />
                            {logo}
                        </div>
                    ))}
                </div>

                <p className="text-sm font-medium text-[var(--color-brand-blue)]/50 uppercase tracking-widest">
                    Custom fields and templates match your process, not the other way around.
                </p>
            </div>
        </section>
    );
}
