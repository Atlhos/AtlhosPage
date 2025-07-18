import { createContext, useEffect, useState } from "react";
import i18n from "@/i18n";
import Loading from "@/components/my/ui/loading";

interface LanguageContextsTypes {
    language: languageTypes['string'];
    changeLanguage: (language: languageTypes['string']) => void
}

interface LanguageContextsProviderProps {
    children: React.ReactNode;
}

interface languageTypes {
    string: 'PT' | 'EN' | 'ES' // Adicionei ES já que está nas suas configurações
}

const LanguageContexts = createContext({} as LanguageContextsTypes); 

export default function LanguageProvider({ children }: LanguageContextsProviderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState<languageTypes['string']>('PT');
    
    const changeLanguage = (language: languageTypes['string']) => {
        i18n.changeLanguage(language);
        setLanguage(language);
        localStorage.setItem('language', language);
    }

    useEffect(() => {
        // Verifica se estamos no cliente (não SSR)
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            
            // Verifica se o idioma armazenado é válido
            if (storedLanguage && ['PT', 'EN', 'ES'].includes(storedLanguage)) {
                i18n.changeLanguage(storedLanguage);
                setLanguage(storedLanguage as languageTypes['string']);
            } else {
                // Se não houver idioma armazenado ou for inválido, use o padrão 'PT'
                localStorage.setItem('language', 'PT');
            }
            
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <LanguageContexts.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContexts.Provider>
    )
}

export { LanguageContexts };