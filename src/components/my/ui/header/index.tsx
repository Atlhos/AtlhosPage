import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import ButtonOne from "../buttonOne";
import{ memo, useContext} from "react";
import { LuGlobe } from "react-icons/lu";
import miniIcon from "../../../../assets/iconBlack.svg";
import icon from "../../../../assets/AtlhosBlack.svg";
import { LanguageContexts } from "@/contexts/languageContexts";
import { useTranslation } from "react-i18next";
import Loading from "../loading";


interface hrefProps{
    href:string,
    name:string
} 

function Header(){

    const {changeLanguage} = useContext(LanguageContexts);

    const { t,  ready } = useTranslation("home");

    if (!ready) return Loading();

    const languages = t('header-languages', { returnObjects: true }) as string[];

    const sections: hrefProps[] = t("header-navigations", { returnObjects: true }) as hrefProps[];

    const idNavigate = (url:string) => {
        window.location.href = `#${url}`;
    }

    return(
        <header className=" p-6  border-b-2 border-neutral-100">
            <div className="w-full m-auto flex items-center justify-between max-w-7xl">
                <div className="w-full max-w-8 md:max-w-36">
                    <img src={miniIcon} alt="logo" className="w-full md:hidden"/>
                    <img src={icon} alt="logo" className="w-full hidden md:block"/>
                </div>
                <nav className="flex items-center gap-2 sm:gap-4">

                    <div className="w-full max-w-32 md:hidden">
                        <Select value="" onValueChange={idNavigate}>
                            <SelectTrigger className="w-full  border-none shadow-md text-xs cursor-pointer" >
                                <SelectValue placeholder="Navegar"/>
                            </SelectTrigger>

                            <SelectContent>
                                {sections.map((section) => (
                                    <SelectItem className="cursor-pointer"  
                                    key={section.name} value={section.href}>
                                        {section.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-auto hidden md:flex">
                        <ul className="flex items-center gap-4 ">
                            {sections && sections.length > 0 && sections.map((section) => (
                                <li key={section.name} className="hover:text-neutral-400 duration-200">
                                    <a href={`#${section.href}`}>{section.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <ButtonOne  className="text-xs md:text-sm" asChild={true}>
                        <a target="_blank" 
                        href="https://api.whatsapp.com/send?phone=5511984339692&text=Olá, gostaria de fazer um orçamento">
                            {t("header-button")}
                        </a>
                    </ButtonOne>
                    

                    <div className="w-full max-w-16">
                        <Select value="" onValueChange={changeLanguage}>
                            <SelectTrigger className="w-full bg-neutral-100 border-none shadow-md cursor-pointer">
                                <LuGlobe/>
                            </SelectTrigger>

                            <SelectContent>
                                {languages.map((lang, index) => (
                                    <SelectItem className="cursor-pointer"   
                                    key={index} value={lang}>
                                        {lang}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>



                    
                </nav>
            </div>
        </header>
    )
}

export default memo (Header);