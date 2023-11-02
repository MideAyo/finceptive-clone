import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {chevronDown} from "@/utils/icons/icons";
import {ModalProps} from "@/types";

type FaqProps = {}

const Faq: React.FC<FaqProps&ModalProps> = (props) => {
    const {setModal, modal} = props;

	useEffect(()=>{
		if (modal){
			document.body.classList.add("overflow-hidden")
		}else {
			document.body.classList.remove("overflow-hidden")
		}
	},[modal]);

    return (
		<>
			{modal&&(
				<div className="fixed inset-0 bg-modal z-2000">
					<div className="flex w-full h-full px-2 lg:px-10 py-10">
						<div className="flex-1" onClick={()=>setModal(false)}/>
						<div className="w-full lg:w-1/3 bg rounded-lg overflow-hidden shadow-2xl">
							<div className="bg-primary relative py-5">
								<h1 className="font-semibold text-center text-white">Frequently Asked Questions</h1>
								<div className="absolute right-0 top-0 bottom-0 flex-center px-2">
									<div className="w-10 h-10 flex-center cursor-pointer" onClick={()=>setModal(false)}>
										<Svg icon={chevronDown} className="w-4 text-light"/>
									</div>
								</div>
							</div>
							<div className="h-full overflow-y-auto">
								{[0,0,0,0,0,0,0,0,0,0,0].map(()=>(
									<div className="px-5 py-5 border-b">
										<h3 className="font-semibold">What are Credit Requests</h3>
										<p className="text text-sm mt-2">Lorem ipsum dolor sit amet consectetur. Consequat ante sit non malesuada amet egestas eget quis dignissim. Elit vel aliquam vitae tempor ultrices egestas. Posuere ipsum dolor elementum et lectus proin nunc varius. Arcu etiam ac fringilla sit quis suspendisse diam est.</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
    );
};

export default Faq;
