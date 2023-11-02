import React from 'react';
import Image from "next/image";
import SideSteps from "@/components/signup/side-steps";
import {Svg} from "@/components/rn-alpha";
import {arrowBack} from "@/svg/icons";
import {useRouter} from "next/router";
import Logo from "@/components/layouts/logo";

type CorporateLayoutProps = {
    children:React.ReactNode
    step: number
    title?: string
    text?: string
    className?: string
    back?: boolean
}

const CorporateLayout: React.FC<CorporateLayoutProps> = (props) => {
    const {
        children,
        step,
        title,
        text,
        className,
        back=true
    } = props;
    const router = useRouter();

    return (
        <div className="flex relative">
            <aside className="hidden lg:block w-1/3 bg-primary bg-[url(/images/pattern.png)] h-screen bg-no-repeat bg-top p-10 sticky top-0">
                <Logo light/>
                <SideSteps
                    steps={[
                        "Company Information",
                        "Director Information",
                        "Contact Information",
                        "Upload Documents"
                    ]}
                    step={step}
                />
            </aside>
            <section className={`flex-1 container ${className} max-w-2xl py-10 px-4 lg:px-10 relative`}>
                {back&&(
                    <div className="absolute top-10 left-8">
                        <div className="w-10 h-10 flex-center cursor-pointer" onClick={()=>router.back()}>
                            <Svg icon={arrowBack} className="w-6 text"/>
                        </div>
                    </div>
                )}
                <h1 className="text-center text-2xl font-bold">{title}</h1>
                {/*<p className="text-center mt-2 text-medium font-light">{text}</p>*/}
                {children}
            </section>
        </div>
    );
};

export default CorporateLayout;
