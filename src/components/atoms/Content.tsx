import React from 'react';

interface ContentProps {
    children: React.ReactNode;
    type?: 'static' | 'dynamic';
    position?: 'top-left' | 'top-center' | 'top-right' | 'mid-left' | 'middle' | 'mid-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const Content: React.FC<ContentProps> = ({position, children, type = 'dynamic'}) => {
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
            className={`w-full h-content-size sm:h-content-size-sm flex ${positionClasses[position]} ${
                type === 'static' ? 'overflow-y-hidden' : 'overflow-y-auto'
            }`}
        >
            {children}
        </div>
    );
};

export default Content;
