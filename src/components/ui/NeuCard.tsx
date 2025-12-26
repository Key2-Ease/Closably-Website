import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface NeuCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'blue';
}

export function NeuCard({ children, className, variant = 'light', ...props }: NeuCardProps) {
    // Radius 28px
    const baseStyles = "rounded-[28px] transition-all duration-300";

    const variants = {
        light: "bg-[var(--color-brand-white)] shadow-[var(--shadow-raised)] border border-white/40 hover:border-[#05B29B]/50 hover:shadow-[0_20px_40px_rgba(5,178,155,0.15)]",
        blue: "bg-[var(--color-brand-blue)] shadow-[var(--shadow-raised-dark)] text-white border border-white/10"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={cn(baseStyles, variants[variant], className)}
            {...(props as HTMLMotionProps<"div">)}
        >
            {children}
        </motion.div>
    );
}
