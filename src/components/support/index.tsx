import React, {useState,useEffect} from 'react';
import {Button} from "@/components/rn-alpha";
import {close2, help} from "@/svg/icons";
import Faq from "@/components/support/faq";
import Contact from "@/components/support/contact";
import {useRouter} from "next/router";

type SupportProps = {}

const Support: React.FC<SupportProps> = (props) => {
    const {} = props;
	const [open,setOpen] = useState(false);
	const [faq,setFaq] = useState(false);
	const [contact,setContact] = useState(false);
	const router = useRouter();

	const menu = [
		{name:"FAQs", onClick:()=>{setFaq(true)}},
		{name:"Contact us", onClick:()=>{setContact(true)}},
	]

    return (
        <>
	        <div className="fixed bottom-10 right-5 lg:right-10 xl:right-20">
		        <div className="flex flex-row-reverse">
			        <Button
				        title={open?"CLOSE":"SUPPORT"}
				        className={"btn-secondary rounded-2xl w-auto"}
				        icon={open?close2:help}
				        onClick={()=>setOpen(prevState => !prevState)}
			        />
		        </div>
	        </div>
	        <Contact modal={open} setModal={setOpen}/>
        </>
    );
};

export default Support;
