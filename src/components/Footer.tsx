"use client";

import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 bg-[var(--color-brand-white)] border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left: Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <img src="/closably-logo.png" alt="Closably" className="h-8 w-auto" />
                        <div className="text-sm font-medium text-[var(--color-brand-blue)]/50">
                            © {new Date().getFullYear()} Closably Inc.
                        </div>
                    </div>

                    {/* Center: Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/company/closably/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#05B29B]/5 hover:bg-[#05B29B]/10 text-[#05B29B] transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://x.com/closably?s=20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#05B29B]/5 hover:bg-[#05B29B]/10 text-[#05B29B] transition-colors"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/closably?igsh=MTBqcGl0aGV0YzU5dQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#05B29B]/5 hover:bg-[#05B29B]/10 text-[#05B29B] transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>

                    {/* Right: Links */}
                    <div className="flex gap-6">
                        <a href="#" className="text-sm font-medium text-[var(--color-brand-blue)]/60 hover:text-[var(--color-brand-blue)] transition-colors">Privacy</a>
                        <a href="#" className="text-sm font-medium text-[var(--color-brand-blue)]/60 hover:text-[var(--color-brand-blue)] transition-colors">Terms</a>
                        <a href="#" className="text-sm font-medium text-[var(--color-brand-blue)]/60 hover:text-[var(--color-brand-blue)] transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
