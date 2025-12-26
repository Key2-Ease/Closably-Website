"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuInset } from '@/components/ui/NeuInset';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';

interface PilotModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PilotModal({ isOpen, onClose }: PilotModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-lg"
                        >
                            <NeuCard className="p-8 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={24} />
                                </button>

                                <h2 className="text-2xl font-bold text-[var(--color-brand-blue)] mb-2">Join the Pilot</h2>
                                <p className="text-sm text-[var(--color-brand-blue)]/60 mb-8">
                                    Get early access to the automated workspace.
                                </p>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-[var(--color-brand-blue)]/50 uppercase tracking-widest pl-1 mb-1 block">First Name</label>
                                            <NeuInset className="p-1">
                                                <input type="text" className="w-full bg-transparent p-2 outline-none text-[var(--color-brand-blue)]" />
                                            </NeuInset>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-[var(--color-brand-blue)]/50 uppercase tracking-widest pl-1 mb-1 block">Last Name</label>
                                            <NeuInset className="p-1">
                                                <input type="text" className="w-full bg-transparent p-2 outline-none text-[var(--color-brand-blue)]" />
                                            </NeuInset>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-[var(--color-brand-blue)]/50 uppercase tracking-widest pl-1 mb-1 block">Business Email</label>
                                        <NeuInset className="p-1">
                                            <input type="email" className="w-full bg-transparent p-2 outline-none text-[var(--color-brand-blue)]" />
                                        </NeuInset>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-[var(--color-brand-blue)]/50 uppercase tracking-widest pl-1 mb-1 block">Company Name</label>
                                        <NeuInset className="p-1">
                                            <input type="text" className="w-full bg-transparent p-2 outline-none text-[var(--color-brand-blue)]" />
                                        </NeuInset>
                                    </div>

                                    <div className="pt-4">
                                        <Button variant="primary" className="w-full justify-center">
                                            Request Access
                                        </Button>
                                    </div>
                                </form>
                            </NeuCard>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
