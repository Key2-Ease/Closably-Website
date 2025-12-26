"use client";

import React, { useState } from 'react';
import { NavbarSticky } from '@/components/NavbarSticky';
import { Hero } from '@/components/Hero';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { ValuePropCards } from '@/components/sections/ValuePropCards';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { OutputsGallery } from '@/components/sections/OutputsGallery';
import { UseCases } from '@/components/sections/UseCases';
import { CredibilityTrust } from '@/components/sections/CredibilityTrust';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/Footer';
import { PilotModal } from '@/components/PilotModal';
import { motion } from 'framer-motion';

// Scroll Reveal Wrapper
function Reveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-brand-white)] overflow-x-hidden selection:bg-[var(--color-brand-cta)]">
      <NavbarSticky />

      <main>
        <Hero />

        <Reveal><BeforeAfter /></Reveal>
        <Reveal><ValuePropCards /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><OutputsGallery /></Reveal>
        {/* Integrations Removed */}
        <Reveal><UseCases /></Reveal>
        <Reveal><CredibilityTrust /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><FAQAccordion /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>

      <Footer />
      <PilotModal isOpen={isPilotModalOpen} onClose={() => setIsPilotModalOpen(false)} />
    </div>
  );
}
