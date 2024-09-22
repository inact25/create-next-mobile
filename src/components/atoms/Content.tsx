import React from 'react';

interface ContentProps {
    children: React.ReactNode;
    type?: 'static' | 'dynamic';
    position?: 'top-left' | 'top-center' | 'top-right' | 'mid-left' | 'middle' | 'mid-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    mode?: "header-only" | "nav-only" | "full" | "screen-only";
}

const Content: React.FC<ContentProps> = ({position = 'top-left', children, type = 'dynamic', mode = "full"}) => {
    const positionClasses = {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'mid-left': 'items-center justify-start',
        'middle': 'items-center justify-center',
        'mid-right': 'items-center justify-end',
        'bottom-left': 'items-end justify-start',
        'bottom-center': 'items-end justify-center',
        'bottom-right': 'items-end justify-end',
    };

    return (
        <div
            className={`w-full ${mode === "header-only" ? "h-content-size-header sm:h-content-size-header-sm" : mode === "nav-only" ? "h-content-size-footer sm:h-content-size-footer-sm" : mode === "full" ? "h-content-size sm:h-content-size-sm" : "h-[100dvh]"} flex ${positionClasses[position]} ${
                type === 'static' ? 'overflow-y-hidden' : 'overflow-y-auto'
            }`}
        >
            {children}
        </div>
    );
};

export default Content;
