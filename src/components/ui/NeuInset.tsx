import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NeuInsetProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'light' | 'blue';
}

export function NeuInset({ children, className, variant = 'light', ...props }: NeuInsetProps) {
    return (
        <div
            className={cn(
                'rounded-[var(--radius-inner)]',
                variant === 'light'
                    ? 'shadow-[var(--shadow-inset-light)] bg-[#FAFAFA]'
                    : 'shadow-[var(--shadow-inset-dark)] bg-[#131b29]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
