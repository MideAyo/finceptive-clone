import React, {useState,useEffect} from 'react';
import {Button} from "@/components/rn-alpha";
import {plus} from "@/svg/icons";

type TitleSectionProps = {
	title: string
	text?: string
	btn?: string
	onClick?:()=>void
}

const TitleSection: React.FC<TitleSectionProps> = (props) => {
    const {
		btn,
	    onClick,title,
	    text
    } = props;

    return (
	    <section className="flex-between flex-wrap pt-2 gap-5 mb-2">
		    <div>
			    <h1 className="text text-lg lg:text-2xl font-semibold">{title}</h1>
		    </div>
		    {btn&&(
			    <div className="w-full lg:w-auto">
				    <Button
					    title={btn}
					    className={"btn-primary"}
					    icon={plus}
					    onClick={onClick}
				    />
			    </div>
		    )}
	    </section>
    );
};

export default TitleSection;
