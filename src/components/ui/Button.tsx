import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
}

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
    // Radius 16px, Inter 500
    const baseStyles = "h-12 px-6 rounded-[16px] font-[family-name:var(--font-inter)] font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 text-[15px]";

    const variants = {
        primary: "bg-[var(--color-brand-cta)] text-[var(--color-brand-blue)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-glow-hover)] hover:-translate-y-0.5 border border-white/20",
        secondary: "bg-[var(--color-brand-white)] text-[var(--color-brand-blue)] shadow-[var(--shadow-raised)] hover:shadow-[var(--shadow-raised-hover)] border border-gray-100",
        ghost: "bg-transparent text-[var(--color-brand-blue)] hover:bg-gray-100/50 shadow-none border-none"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            {...(props as HTMLMotionProps<"button">)}
        >
            {children}
        </motion.button>
    );
}
