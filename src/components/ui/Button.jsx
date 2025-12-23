import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));

export const Button = ({
    children,
    variant = 'primary',
    className,
    icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-black hover:bg-primary-hover rounded-full px-6 py-3 uppercase tracking-wide text-sm font-bold shadow-[0_0_20px_rgba(230,255,92,0.3)] hover:shadow-[0_0_30px_rgba(230,255,92,0.5)]",
        secondary: "bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-sm font-semibold",
        outline: "border border-white/20 text-white hover:bg-white/10 rounded-full px-6 py-3 uppercase tracking-wide text-sm",
        ghost: "text-text-secondary hover:text-white transition-colors"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
};
