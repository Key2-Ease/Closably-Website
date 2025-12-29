"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquareText, Share2, FileText, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        icon: Search,
        title: "Pre-meeting Brief",
        desc: "Company context, stakeholder notes, conversation starters, and likely painpoints in one place."
    },
    {
        icon: MessageSquareText,
        title: "Sales Conversation Guidance",
        desc: "Positioning points, objection handling, and technical considerations aligned to your SaaS cycle."
    },
    {
        icon: Share2,
        title: "Follow-up that Actually Ships",
        desc: "A post-discovery email drafted and ready to send the second you approve."
    },
    {
        icon: FileText,
        title: "Proposal Acceleration",
        desc: "Scope, timeline, pricing, deliverables plus a PandaDoc proposal created instantly."
    }
];

export function ValuePropCards() {
    return (
        <section className="py-24 bg-[var(--color-brand-white)]">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-4 md:mb-16 flex flex-col items-center">
                    <h2 className="text-xl sm:text-2xl md:text-[48px] font-bold text-[var(--color-brand-blue)] mb-2 md:mb-4 max-w-[800px] font-[family-name:var(--font-jakarta)] leading-[1.1]">
                        Everything your team needs to <br className="hidden md:block" />
                        move <span className="text-[var(--color-brand-green)]">Forward</span>
                    </h2>
                    <p className="text-xs md:text-[16px] text-[var(--color-brand-blue)]/60 font-medium mt-1 md:mt-2">
                        Designed for speed, built for B2B scale.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
                    {features.map((f, i) => (
                        <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group relative bg-white rounded-[20px] md:rounded-[28px] p-4 md:p-10 flex flex-col md:flex-row items-start gap-3 md:gap-6 transition-all duration-300 border border-transparent hover:border-[#05B29B]/50 hover:shadow-[0_20px_40px_rgba(5,178,155,0.15)] shadow-[var(--shadow-raised)]"
        >
            {/* Icon Box */}
            <motion.div
                variants={{
                    initial: { backgroundColor: "rgba(5, 178, 155, 0.1)", color: "#05B29B" },
                    hover: { backgroundColor: "#05B29B", color: "#FFFFFF" }
                }}
                className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[20px] flex-shrink-0 flex items-center justify-center transition-colors duration-300 bg-[#05B29B]/10 text-[#05B29B]"
            >
                <Icon size={20} className="md:hidden" strokeWidth={2} />
                <Icon size={32} className="hidden md:block" strokeWidth={2} />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col gap-1 md:gap-2">
                <motion.h3
                    variants={{
                        initial: { color: "#161E2E" },
                        hover: { color: "#05B29B" }
                    }}
                    className="text-sm md:text-2xl font-bold font-[family-name:var(--font-jakarta)] transition-colors duration-300 leading-tight"
                >
                    {title}
                </motion.h3>

                <p className="text-xs md:text-[15px] leading-relaxed text-[var(--color-brand-blue)]/60 font-[family-name:var(--font-inter)] font-medium line-clamp-3 md:line-clamp-none">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}
