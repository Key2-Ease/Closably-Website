"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles, Zap, ChevronRight } from 'lucide-react';

export function BentoWorkflowSlider() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const cardVariants: Variants = {
        inactive: {
            scale: 1,
            borderColor: "rgba(255,255,255,0)",
            boxShadow: "0px 10px 30px rgba(22, 30, 46, 0.08)"
        },
        active: {
            scale: 1.1,
            borderColor: "#05B29B",
            boxShadow: "0px 20px 40px rgba(5, 178, 155, 0.2)",
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <div className="w-full py-20 flex items-center justify-center gap-6 md:gap-12 overflow-visible">

            {/* 1. Meeting Booked */}
            <div className="relative group w-32 md:w-48 h-32 md:h-48 flex items-center justify-center z-10">
                {/* Glow - Sibling Behind */}
                <motion.div
                    animate={{ opacity: activeStep === 0 ? 1 : 0, scale: activeStep === 0 ? 1.2 : 0.9 }}
                    className="absolute inset-0 bg-[#05B29B] blur-[60px] rounded-full -z-10 pointer-events-none"
                />

                <motion.div
                    variants={cardVariants}
                    initial="inactive"
                    animate={activeStep === 0 ? "active" : "inactive"}
                    className="w-full h-full bg-white rounded-[32px] border-2 flex flex-col items-center justify-center p-4"
                >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-3 text-gray-400">
                        <Calendar size={24} className="md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-[var(--color-brand-blue)] text-center leading-none font-[family-name:var(--font-jakarta)] mb-1">
                        Meeting<br />Booked
                    </h3>
                    <p className="text-[10px] md:text-[13px] font-semibold text-gray-400 mt-1 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                        Auto-Synced
                    </p>
                </motion.div>
            </div>

            {/* Arrow 1 */}
            <div className="text-gray-200">
                <ChevronRight size={24} className="md:w-8 md:h-8" />
            </div>

            {/* 2. Closably AI - Center */}
            <div className="relative z-20 w-40 md:w-56 h-40 md:h-56 flex items-center justify-center">
                {/* Glow - Sibling Behind */}
                <motion.div
                    animate={{ opacity: activeStep === 1 ? 0.8 : 0, scale: activeStep === 1 ? 1.2 : 0.9 }}
                    className="absolute inset-0 bg-[#05B29B] blur-[70px] rounded-full -z-10Pointer-events-none"
                />

                <motion.div
                    variants={cardVariants}
                    initial="inactive"
                    animate={activeStep === 1 ? "active" : "inactive"}
                    className="w-full h-full bg-white rounded-[32px] border-2 flex flex-col items-center justify-center p-4 relative"
                >
                    {/* Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 md:w-14 md:h-14 bg-[#161E2E] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <Zap size={16} className="md:w-6 md:h-6 text-[var(--color-brand-green)] fill-[var(--color-brand-green)]" />
                    </div>

                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[var(--color-brand-cta)] flex items-center justify-center mb-5 text-[#161E2E] shadow-sm">
                        <Sparkles size={32} className="md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-[var(--color-brand-blue)] text-center leading-none mb-1 font-[family-name:var(--font-jakarta)]">
                        Closably AI
                    </h3>
                    <p className="text-[10px] md:text-[13px] font-semibold text-gray-400 uppercase tracking-wider text-center max-w-[140px] font-[family-name:var(--font-inter)]">
                        Accelerating Strategy
                    </p>
                </motion.div>
            </div>

            {/* Arrow 2 */}
            <div className="text-gray-200">
                <ChevronRight size={24} className="md:w-8 md:h-8" />
            </div>


            {/* 3. Deal Closed */}
            <div className="relative group w-32 md:w-48 h-32 md:h-48 flex items-center justify-center z-10">
                {/* Glow - Sibling Behind */}
                <motion.div
                    animate={{ opacity: activeStep === 2 ? 1 : 0, scale: activeStep === 2 ? 1.2 : 0.9 }}
                    className="absolute inset-0 bg-[#05B29B] blur-[60px] rounded-full -z-10 pointer-events-none"
                />

                <motion.div
                    variants={cardVariants}
                    initial="inactive"
                    animate={activeStep === 2 ? "active" : "inactive"}
                    className="w-full h-full bg-white rounded-[32px] border-2 flex flex-col items-center justify-center p-4"
                >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-3 text-gray-400">
                        <CheckCircle2 size={24} className="md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-[var(--color-brand-blue)] text-center leading-none font-[family-name:var(--font-jakarta)] mb-1">
                        Deal<br />Closed
                    </h3>
                    <p className="text-[10px] md:text-[13px] font-semibold text-gray-400 mt-1 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                        Revenue Locked
                    </p>
                </motion.div>
            </div>

        </div>
    );
}
