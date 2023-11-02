import React from 'react';
import {Svg} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";

type SideStepsProps = {
	step:number
	steps:string[]
}

const SideSteps: React.FC<SideStepsProps> = (props) => {
    const {step, steps} = props;
	console.log(step);
	

    return (
	    <aside className="py-10">
		    {steps.map((item,i)=>(
			    <div key={"dsghjd"+i} className="">
				    {i!==0&&(
					    <div className="w-8 flex-center">
						    <div className={`border-l border-[#BEC9CD] h-10 w-0 border-dashed`}/>
					    </div>
				    )}
				    <div className="flex-item gap-3">
					    <div
						    className={`w-8 h-8 shrink-0 rounded-full border ${i+1===step?'border-secondary text-secondary':'border-white text-[#818A97]'} flex-center ${step > i+1?'bg-secondary text-light':'bg'}`}>
							{i+1<step?
								<Svg icon={check}className="w-4 text-white"/>:
								i+1
							}
						</div>
					    <p className={`text-sm text-white font hidden lg:block`}>{item}</p>
				    </div>
			    </div>
		    ))}
	    </aside>
    );
};

export default SideSteps;
