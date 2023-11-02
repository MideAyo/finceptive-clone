import React, {useState,useEffect} from 'react';

type SideStepsProps = {
	step:number
}

const SideSteps: React.FC<SideStepsProps> = (props) => {
    const {step} = props;

	const steps = [
		{ label:"Select Contact type" },
		{ label:"Issuer" },
		{ label:"Contract Information" },
		{ label:"Upload Documents" },
	]

    return (
	    <aside className="w-auto lg:w-1/4 py-10 px-4 lg:px-10">
		    {steps.map((item,i)=>(
			    <div key={"dsghjd"+i} className="">
				    {i!==0&&(
					    <div className="w-8 flex-center">
						    <div className={`border-l ${(i+1===step || step > i+1)?'border-secondary':'border-[#BEC9CD]'} h-10 w-0 border-dashed`}/>
					    </div>
				    )}
				    <div key={""+i} className="flex-item gap-3">
					    <div
						    className={`w-8 h-8 shrink-0 rounded-full border ${i+1===step?'border-secondary text-secondary':'border-[#818A97] text-[#818A97]'} flex-center ${step > i+1?'bg-secondary text-light':'bg'}`}>{i+1}</div>
					    <p className={`text-sm ${(i+1===step || step > i+1)?'text-secondary':'text-[#818A97]'} font-semibold hidden lg:block`}>{item.label}</p>
				    </div>
			    </div>
		    ))}
	    </aside>
    );
};

export default SideSteps;
