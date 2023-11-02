import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";

type VerifyStepsProps = {
	steps:any[]
}

const ReviewSteps: React.FC<VerifyStepsProps> = (props) => {
	const {steps} = props;

	return (
		<aside className="w-auto lg:w-1/4 py-10 px-4 lg:px-10">
			{steps.map((item,i)=>(
				<div key={"dsghjd"+i} className="">
					{i!==0&&(
						<div className="w-8 flex-center">
							<div className={`border-l border-[#BEC9CD] h-10 w-0 border-dashed`}/>
						</div>
					)}
					<div key={""+i} className="flex-item gap-3">
						<div
							className={`w-8 h-8 shrink-0 rounded-full border ${item.verified?'border-secondary':'border-medium'} flex-center ${item.verified?'bg-secondary text-light':'bg'}`}>
							<Svg icon={check} className={`w-3 ${item.verified?'text-white':'text-medium'}`}/>
						</div>
						<p className={`text-sm ${item.verified?'text-secondary':'text-[#818A97]'} font-semibold hidden lg:block`}>{item.label}</p>
					</div>
				</div>
			))}
		</aside>
	);
};

export default ReviewSteps;
