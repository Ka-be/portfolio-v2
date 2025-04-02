import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
    return (
        <div className="px-3 py-1 border border-foreground text-sm opacity-80">
            {children}
        </div>
    );
};

export default Badge;