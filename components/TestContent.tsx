import React from 'react';

interface textContentProps {
    textContent: string;
}

const TestContent = ({ textContent }: textContentProps) => {
    return (
        <div className="min-h-screen bg-red-800 flex items-center justify-center text-4xl font-bold font-mono">
            {textContent}
        </div>
    );
};

export default TestContent;