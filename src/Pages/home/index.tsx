import Header from "@/components/my/ui/header";
import ButtonOne from "@/components/my/ui/buttonOne";
import ButtonTwo from "@/components/my/ui/buttonTwo";
import { useTranslation } from "react-i18next";
import Loading from "@/components/my/ui/loading";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaCheck } from "react-icons/fa6";



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
            <Header/>
            <main className="m-auto w-full max-w-6xl py-16 px-4 flex flex-col gap-32 overflow-hidden">

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

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {services && services.length > 0 && services.map((service, index: number) => (
                            <article key={`${service.h3}-${index}`}
                            className="p-4 border-2 rounded-md flex flex-col gap-2 w-full">
                                <div className="flex flex-col gap-1 text-lg font-semibold justify-between items-start">
                                    <div dangerouslySetInnerHTML={{ __html: service.codeIcon }} />
                                    <h3>{service.h3}</h3>
                                </div>

                                <p className="text-main clamp-lines text-xs md:text-sm">{service.p}</p>
                            </article>
                            ))}
                        </div>
                    </article>
                </section>

                <section  id="technologies"  className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-4-h1')}</h2>
                    <div className="flex gap-4 items-center flex-wrap">
                        {skills && skills.length > 0 && skills.map((skill: string, index: number) => (
                            <article key={index} className="flex gap-4 items-center bg-mainLight py-1 px-4 rounded-lg text-xs text-black md:text-md mt-4">
                                <p>{skill}</p>
                            </article>
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
                            </article>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>

                <section id="portfolio"  className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-black">{t('section-6-h1')}</h2>
                    <Carousel className="w-full mt-2"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}>
                        <CarouselContent>
                            {projects && projects.length > 0 && projects.map((skill, index: number) => (
                                <CarouselItem key={`${skill.name}-${index}`} className="w-full md:basis-1/2 lg:basis-1/3">
                                    <div className="w-full flex flex-col gap-2">
                                        <div className="h-full aspect-video overflow-hidden rounded-sm">
                                            <img src={skill.image} alt={skill.name} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="px-2">
                                            <h3 className="font-semibold">{skill.name}</h3>
                                            <p className="text-sm">{skill.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
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

            <footer className="bg-mainLight/40 w-full text-neutral-500" id="contacts">

                <div className="w-full m-auto flex items-center justify-between max-w-7xl py-24 px-8 flex-col gap-12">

                    <span className="flex flex-col gap-2 w-full text-center md:flex-row items-center justify-center md:gap-4 lg:gap-8">
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

                    <span className="text-xs"> &copy; {new Date().getFullYear()} Atlhos</span>
                </div>

            </footer>
        </>
    )
}
