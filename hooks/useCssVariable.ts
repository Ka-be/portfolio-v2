import { useTheme } from '@/lib/contexts/ThemeContext';
import { useState, useLayoutEffect } from 'react';

// Hook personnalisé pour récupérer la couleur CSS
function useCssVariable(variableName: string, defaultValue: string) {
    const { theme } = useTheme();
    const [value, setValue] = useState(defaultValue);
    
    // UseLayoutEffect se déclenche avant le rendu visuel
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
        
        // Appelé immédiatement
        updateValue();
        
        // Observer les changements de thème
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