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
    if (!ready) return <Loading/>;

    const services: servicesProps[] = t("section-3-cards", { returnObjects: true }) as servicesProps[];
    const plans: plansProps[] = t("section-4-plans", { returnObjects: true }) as plansProps[];
    const projects: projectsProps[] = t("section-5-projects", { returnObjects: true }) as projectsProps[];
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
            
            <main className="w-full overflow-hidden">
                <div className="w-full flex flex-col">
                    {/* Hero Section */}
                    <section className="bg-white py-20 md:py-32 px-6 md:px-8">
                        <div className="w-full max-w-5xl mx-auto aspect-square lg:aspect-video rounded-xl overflow-hidden relative shadow-lg">
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('./background1.png')" }}
                            >
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <div className="flex flex-col gap-4 max-w-2xl px-6 text-center md:text-left md:px-8">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                            {t('section-1-h1')}
                                        </h1>
                                        <p className="text-neutral-200 text-lg md:text-xl">
                                            {t('section-1-p')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* About Section */}
                    <section id="about" className="bg-neutral-50 py-20 md:py-24 px-6 md:px-8">
                        <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {t('section-2-h1')}
                            </h2>
                            <div className="text-neutral-700 text-lg leading-relaxed">
                                <div dangerouslySetInnerHTML={{ __html: t('section-2-p') }} />
                            </div>
                        </div>
                    </section>
                    
                    {/* Services Section */}
                    <section id="services" className="bg-neutral-50 py-20 md:py-24 px-6 md:px-8">
                        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
                            <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto text-center">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    {t('section-3-h1')}
                                </h2>
                                <p className="text-neutral-700 text-lg">
                                    {t('section-3-p')}
                                </p>
                            </div>

                            <article>
                                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {services.map((service, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-neutral-200 shadow-sm hover:shadow-md"
                                        >
                                            <div className="p-6 md:p-8 flex flex-col gap-4">
                                                <div 
                                                    dangerouslySetInnerHTML={{ __html: service.codeIcon }}
                                                    className="text-3xl text-main bg-main/10 w-fit p-3 rounded-lg" 
                                                />
                                                <h3 className="font-bold text-gray-800 text-xl md:text-2xl">
                                                    {service.h3}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {service.p}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </section>
                    
                    {/* Plans Section */}
                    <section id="plans" className="py-20 md:py-24 px-6 md:px-8 bg-white">
                        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    {t('section-4-h1')}
                                </h2>
                            </div>
                            
                            <Carousel 
                                className="w-full mt-4"
                                plugins={[plugin.current]}
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                            >
                                <CarouselContent className="flex items-stretch -ml-4"> 
                                    {plans.map((plan, index) => (
                                        <CarouselItem
                                            key={`${plan.name}-${index}`}
                                            className="pl-4 md:basis-1/2 lg:basis-1/3 flex" 
                                        >
                                            <article className="flex flex-col justify-between w-full border border-neutral-200 rounded-lg p-6 gap-6 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="space-y-6">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-bold text-xl text-gray-800">
                                                            {plan.name}
                                                        </p>
                                                        <span className="bg-main py-1 px-3 rounded-md text-white text-xs font-medium">
                                                            {plan.badge}
                                                        </span>
                                                    </div>

                                                    <div className="font-bold text-gray-900 flex items-end gap-1">
                                                        <h3 className="text-3xl">R${plan.price}</h3>
                                                        {plan.period && (
                                                            <h4 className="text-gray-500 text-lg">/{plan.period}</h4>
                                                        )}
                                                    </div>

                                                    <ButtonTwo className="w-full hover:scale-[1.02] transition-transform">
                                                        <a 
                                                            className="w-full h-full flex items-center justify-center" 
                                                            href={`https://api.whatsapp.com/send?phone=5511984339692&text=Olá, gostaria de saber mais sobre o plano ${plan.name}`}
                                                        >
                                                            {t("section-4-button")}
                                                        </a>
                                                    </ButtonTwo>

                                                    <div className="flex flex-col gap-3">
                                                        {plan.features?.map((feature, index) => (
                                                            <span
                                                                key={`${feature}-${index}`}
                                                                className="text-neutral-600 text-sm flex gap-2 items-start"
                                                            >
                                                                <FaCheck className="text-main mt-0.5 flex-shrink-0" />
                                                                <p>{feature}</p>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </article>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
                            </Carousel>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="bg-neutral-50 py-20 md:py-24 px-6 md:px-8">
                        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    {t('section-5-h1')}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {projects && projects.length > 0 && projects.map((project, index: number) => (
                                    <article 
                                        key={`${project.name}-${index}`} 
                                        className="flex flex-col rounded-xl overflow-hidden border border-neutral-200 hover:translate-y-2 duration-300 transition-all shadow-sm hover:shadow-md"
                                    >
                                        <div className="bg-neutral-100 px-4 pt-16 pb-8">
                                            <div className="flex flex-col items-center">
                                                <div className="aspect-video bg-white w-full border-4 border-neutral-800 rounded-sm shadow-lg">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.name} 
                                                        className="w-full h-full object-cover" 
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 flex flex-col gap-3 h-full">
                                            <h3 className="font-bold text-lg text-main">{project.name}</h3>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                
                    {/* CTA Section */}
                    <section className="bg-neutral-50 py-20 md:py-24 px-6 md:px-8">
                        <div className="flex flex-col gap-8 items-center justify-center max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                {t('section-6-h1')}
                            </h2>
                            <ButtonOne className="transform hover:scale-105 transition-transform">
                                <a 
                                    className="w-full h-full flex items-center justify-center px-8" 
                                    href="https://api.whatsapp.com/send?phone=5511984339692&text=" 
                                    target="_blank"
                                >
                                    {t("section-6-button")}
                                </a>
                            </ButtonOne>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-main w-full text-white" id="contacts">
                <div className="w-full max-w-7xl mx-auto py-16 md:py-20 px-6 md:px-8 flex flex-col gap-12">
                    <div className="flex flex-col items-center gap-8 md:flex-row w-full justify-between">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full md:w-auto">
                            {footer && footer.length > 0 && footer.map((item: string, index: number) => (
                                <span 
                                    key={`${item}-${index}`} 
                                    className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            {contacts && contacts.length > 0 && contacts.map((contact, index) => (
                                <a 
                                    href={`${contact.type === 'Tel' ? `tel:${contact.href}` : contact.href}`}  
                                    target="_blank" 
                                    className="text-2xl hover:scale-90 duration-200 text-white/80 hover:text-white"
                                    key={`${contact.name}-${index}`}
                                    aria-label={contact.name}
                                >
                                    <div dangerouslySetInnerHTML={{ __html:contact.icon }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full pt-6 border-t border-white/10 text-center">
                        <span className="text-xs text-white/60">
                            &copy; {new Date().getFullYear()} Atlhos. Todos os direitos reservados.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}