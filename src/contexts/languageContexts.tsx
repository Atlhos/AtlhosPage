import { createContext, useEffect, useState } from "react";
import i18n from "@/i18n";
import Loading from "@/components/my/ui/loading";
interface LanguageContextsTypes {
    language: languageTypes['string'];
    changeLanguage: (language:languageTypes['string']) => void
}

interface LanguageContextsProviderProps {
    children: React.ReactNode;
}

interface languageTypes{
    string: 'PT' | 'EN'
}

const LanguageContexts = createContext({} as LanguageContextsTypes); 

export default function LanguageProvider({children}:LanguageContextsProviderProps){
    const [isLoading, setIsLoading] = useState(true); // vou usar para pegar o idioma do localStorage

    const [language, setLanguage] = useState<languageTypes['string']>('PT');
    
    const changeLanguage = (language:languageTypes['string']) => {
        i18n.changeLanguage(language);
        setLanguage(language);
    }

    useEffect(()=>{
        localStorage.setItem('language', language);
    },[language]);

    useEffect(()=>{
        const language = localStorage.getItem('language') as languageTypes['string'];
        i18n.changeLanguage(language);
        setLanguage(language);
        setIsLoading(false);
    },[]);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <LanguageContexts.Provider value={{language, changeLanguage }}>
            {children}
        </LanguageContexts.Provider>
    )


}

export {LanguageContexts};