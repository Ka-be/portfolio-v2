import React from 'react';

interface textContentProps {
    textContent: string;
}

const TestContent = ({ textContent }: textContentProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
            {textContent}
        </div>
    );
};

export default TestContent;