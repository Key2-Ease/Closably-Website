"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function NavbarSticky() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <header className="bg-white shadow-xl rounded-[24px] px-2 pl-6 py-2 flex items-center justify-between gap-8 md:gap-12 pointer-events-auto max-w-[1000px] w-full mx-auto">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <img src="/closably-logo.png" alt="Closably" className="h-10 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-[#161E2E] font-[family-name:var(--font-jakarta)]">Closably</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {/* Note: 'Product' and 'Integrations' are added as requested by visual reference, linking to # for now or re-purposed sections */}
                        <Link href="#" className="text-[14px] font-semibold text-[#161E2E]/80 hover:text-[#161E2E] transition-colors">
                            Product
                        </Link>
                        <Link href="#mechanics" className="text-[14px] font-semibold text-[#161E2E]/80 hover:text-[#161E2E] transition-colors">
                            How it works
                        </Link>
                        <Link href="#outputs" className="text-[14px] font-semibold text-[#161E2E]/80 hover:text-[#161E2E] transition-colors">
                            Outputs
                        </Link>
                        <Link href="#" className="text-[14px] font-semibold text-[#161E2E]/80 hover:text-[#161E2E] transition-colors">
                            Integrations
                        </Link>
                        <Link href="#faq" className="text-[14px] font-semibold text-[#161E2E]/80 hover:text-[#161E2E] transition-colors">
                            FAQ
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block shrink-0">
                        <Button
                            className="bg-[#6bf1b6] hover:bg-[#5ae0a5] text-[#161E2E] font-bold text-sm px-6 h-10 rounded-[16px] border-none shadow-none"
                            onClick={() => window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank')}
                        >
                            Book a Call
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[#161E2E] mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center text-center">
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#161E2E]">
                                Product
                            </Link>
                            <Link href="#mechanics" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#161E2E]">
                                How it works
                            </Link>
                            <Link href="#outputs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#161E2E]">
                                Outputs
                            </Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#161E2E]">
                                Integrations
                            </Link>
                            <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#161E2E]">
                                FAQ
                            </Link>
                            <div className="w-full h-px bg-gray-100 my-2" />
                            <Button
                                className="w-full justify-center bg-[#6bf1b6] hover:bg-[#5ae0a5] text-[#161E2E] font-bold h-12 rounded-[16px]"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.open('https://calendar.app.google/BQZkN9GSMkKeMvNg6', '_blank');
                                }}
                            >
                                Book a Call
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
