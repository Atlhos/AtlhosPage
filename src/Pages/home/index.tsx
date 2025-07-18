import Header from "@/components/my/ui/header";
import ButtonOne from "@/components/my/ui/buttonOne";
import ButtonTwo from "@/components/my/ui/buttonTwo";
import { useTranslation } from "react-i18next";
import Loading from "@/components/my/ui/loading";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaCheck } from "react-icons/fa6";
import Blur from "@/components/my/ui/blur";
import ScrollPercentage from "@/components/my/ui/scrollPercentage";


interface servicesProps{
    h3: string,
    p: string,
    codeIcon:string
}

interface plansProps{
    name:string;
    badge:string;
    price:number,
    period?:string;
    features:[string];
}

interface projectsProps{
    name:string,
    description:string,
    image:string
}

interface contactsProps{
    name:string,
    href:string,
    type:string,
    icon:string
}

export default function Home(){

    const { t,  ready } = useTranslation("home");

    if (!ready) return Loading();

    const services: servicesProps[] = t("section-3-cards", { returnObjects: true }) as servicesProps[];

    const skills: string[] = t("section-4-skills", { returnObjects: true }) as string[];

    const plans: plansProps[] = t("section-5-plans", { returnObjects: true }) as plansProps[];

    const projects: projectsProps[] = t("section-6-projects", { returnObjects: true }) as projectsProps[];

    const footer: string[] = t("footer-span", { returnObjects: true }) as string[];

    const contacts: contactsProps[] = t("footer-contacts", { returnObjects: true }) as contactsProps[];

    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )

    return(
        <>  
            <ScrollPercentage/>
            <Blur/>
            <Header/>
            <main className="m-auto w-full max-w-6xl py-16 px-4 flex flex-col gap-32 overflow-hidden 
            ">

                <section  className="w-full min-h-96 rounded-md image md:min-h-[546px] relative overflow-hidden" style={{ 
                    backgroundImage: "url('./background1.png')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover" }}>

                        <div className="bg-black/50 absolute left-0 top-0 w-full h-full flex items-center">
                            <div className=" flex flex-col gap-2 max-w-96 md:max-w-xl items-start justify-end h-full px-4 pb-8">
                                <h1 className="text-lg text-white font-bold md:text-2xl lg:text-4xl">{t('section-1-h1')}</h1>
                                <p className="text-neutral-200 text-md md:text-lg">{t('section-1-p')}</p>
                            </div>
                        </div>
                </section>

                <section id="about" className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-2-h1')}</h2>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: t('section-2-p') }} />
                    </p>
                </section>

                <section id="services" className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-3-h1')}</h2>

                    <article className="flex flex-col gap-4">
                        <p>
                            {t('section-3-p')}
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2  border-2"
                                >
                                    <div className="p-6 space-y-4">
                                        <div className="text-2xl text-main mb-4">
                                            <div dangerouslySetInnerHTML={{ __html: service.codeIcon }} />
                                        </div>
                                        <h3 className=" font-bold text-gray-800">{service.h3}</h3>
                                        <p className="text-gray-600">{service.p}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <section  id="technologies"  className="flex flex-col gap-8">
                    <h2 className="text-xl font-bold text-black">{t('section-4-h1')}</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {skills.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="bg-main/10 text-main px-6 py-2 rounded-full font-medium hover:bg-main/20 transition-colors duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                </section>

                <section id="plans"  className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-5-h1')}</h2>
                    <Carousel className="w-full mt-2"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}>
                        <CarouselContent className="flex items-stretch"> 
                        {plans.map((plan, index) => (
                            <CarouselItem
                            key={`${plan.name}-${index}`}
                            className="w-full md:basis-1/2 lg:basis-1/3 flex" 
                            >
                            <article className="flex flex-col justify-between w-full border-2 rounded-md p-6 pb-12 gap-4">
                                <div className="p-4 space-y-4">
                                    <div className="flex items-center gap-2 justify-between w-full">
                                        <p className="font-bold text-black">{plan.name}</p>
                                        <span className="bg-main py-1 px-2 rounded-md text-white text-xs text-center">
                                            {plan.badge}
                                        </span>
                                        </div>

                                    <div className="font-bold text-black flex items-end">
                                        <h3 className="text-2xl">R${plan.price}</h3>
                                        {plan.period && <h4>/{plan.period}</h4>}
                                    </div>

                                    <ButtonTwo className="w-full">
                                        <a className="w-full h-full" 
                                        href={`https://api.whatsapp.com/send?phone=5511984339692&text=Olá, gostaria de saber mais sobre o plano ${plan.name}`}>
                                            {t("section-5-button")}
                                        </a>
                                    </ButtonTwo>

                                    <div className="flex flex-col gap-3">
                                    {plan.features?.map((feature, index) => (
                                        <span
                                        key={`${feature}-${index}`}
                                        className="font-semibold text-neutral-500 text-sm flex gap-1 items-center"
                                        >
                                        <FaCheck />
                                        <p>{feature}</p>
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </article>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                </section>

                <section id="portfolio"  className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-6-h1')}</h2>

                        <div className="flex flex-col gap-8 p-2">
                            {projects && projects.length > 0 && projects.map((skill, index: number) => (
                                <article key={`${skill.name}-${index}`} className="flex flex-col gap-4">
                                    
                                    <p className={`text-xl font-semibold text-main md:hidden ${index % 2 === 0 ? "text-start" : "text-end"}`}>{skill.name}</p>

                                    <div className={`bg-neutral-50 md:bg-transparent md:shadow-none p-8 flex flex-col gap-8 justify-between items-stretch shadow-md md:flex-row md:relative
                                        ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                        
                                        <div className={`md:absolute md:w-1/2 ${index % 2 === 0 ? "left-0 text-start" : "right-0 text-end"} md:top-1/2 md:-translate-y-1/2 md:flex flex-col gap-4`}>
                                            <p className="hidden md:block text-main text-xl font-bold">{skill.name}</p>
                                            <div className={` md:bg-main md:text-white md:px-8 md:py-4  md:text-sm lg:text-md lg:py-8`}>
                                                <p>{skill.description}</p>
                                            </div>
                                        </div>

                                        <div className={`w-full aspect-video bg-mainLight/40 rounded-xs flex p-8 items-center md:w-2/3 group
                                            ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                            <div className="w-2/3 group-hover:w-full duration-500 aspect-video border-8 border-black rounded-md overflow-hidden shadow-xl">
                                                <img src={skill.image} alt={skill.name} className="w-full h-full object-cover"/>
                                            </div>
                                        </div>

                                    </div>

                                </article>
                            ))}
                        </div>

                </section>

                <section className="flex flex-col gap-8 items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center max-w-3xl">{t('section-7-h1')}</h2>
                    <ButtonOne>
                        <a className="w-full h-full" 
                        href="https://api.whatsapp.com/send?phone=5511984339692&text=" target="_blank">
                            {t("section-7-button")}
                        </a>
                        
                    </ButtonOne>
                </section>
            </main>

            <footer className="bg-mainLight/40 w-full text-neutral-500 mt-32" id="contacts">

                <div className="w-full m-auto flex items-center justify-between max-w-7xl py-24 px-8 flex-col gap-12">
                    
                    <div className="flex flex-col items-center gap-6 md:flex-row w-full justify-between">

                        
                        <span className="flex flex-col gap-2 w-full text-center md:flex-row items-center">
                            {footer && footer.length > 0 && footer.map((item: string, index: number) => (
                                <span key={`${item}-${index}`} className="text-xs ">
                                    {item}
                                </span>
                            ))}
                        </span>

                        <div className="flex  items-center gap-4">
                            {contacts && contacts.length > 0 && contacts.map((contact, index) => (
                                <a href={`${contact.type === 'Tel' ? `tel:${contact.href}` : contact.href}`}  
                                target="_blank" className="text-2xl hover:scale-90 duration-200"
                                key={`${contact.name}-${index}`}>
                                    <div dangerouslySetInnerHTML={{ __html:contact.icon }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <span className="text-xs w-full p-2 border-t-mainLight border-t"> &copy; {new Date().getFullYear()} Atlhos</span>
                </div>

            </footer>
        </>
    )
}
