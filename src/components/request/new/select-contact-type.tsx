import React, {useState,useEffect} from 'react';
import SelectBox from "@/components/inputs/select-box";
import {idf, lpo} from "@/svg/icons";
import {Button} from "@/components/rn-alpha";
import {NewRequest} from "@/types";

type SelectContactTypeProps = {
	setType:(val:string)=>void
	type:string
}

const SelectContactType: React.FC<SelectContactTypeProps&NewRequest> = (props) => {
    const {
		type,
	    setType,
	    next,
	} = props;

    return (
        <>
	        <h2 className="text-lg lg:text-xl font-semibold text">Select Contract Type</h2>
	        <p className="text-sm mt-2 font-light text-medium">Select a contract type category</p>

	        <div className="flex flex-wrap gap-5 mt-8">
		        <SelectBox
			        selected={type==="lpo"}
			        setSelected={()=>setType("lpo")}
			        icon={lpo}
			        text={"Local Purchase Order"}
		        />
		        <SelectBox
			        selected={type==="idf"}
			        setSelected={()=>setType("idf")}
			        icon={idf}
			        text={"Invoice Discounting Finance"}
		        />
	        </div>

	        <div className="mt-10 flex flex-row-reverse gap-2">
		        <Button
			        title={"Next"}
			        className={"btn-primary w-auto"}
			        onClick={next}
			        disabled={!type}
		        />
	        </div>
        </>
    );
};

export default SelectContactType;
