import { useTheme } from '@/lib/contexts/ThemeContext';
import { useState, useLayoutEffect } from 'react';

// Récupération couleur css
function useCssVariable(variableName: string, defaultValue: string) {
    const { theme } = useTheme();
    const [value, setValue] = useState(defaultValue);
    
    useLayoutEffect(() => {
        function updateValue() {
            if (typeof window !== 'undefined') {
                const computedStyle = getComputedStyle(document.documentElement);
                const cssValue = computedStyle.getPropertyValue(variableName).trim();
                if (cssValue) {
                    setValue(`hsl(${cssValue})`);
                }
            }
        }
        updateValue();
        const observer = new MutationObserver(updateValue);
        if (typeof document !== 'undefined') {
            observer.observe(document.documentElement, { 
                attributes: true,
                attributeFilter: ['class'] 
            });
        }
        
        return () => observer.disconnect();
    }, [variableName, theme]);

    return value;
}

export default useCssVariable;