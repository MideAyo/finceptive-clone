import React from 'react';
import {Select} from "@/components/rn-alpha";
import states from "@/utils/states";

type StatesProps = {
	label:string
	setValue:(value:string)=>void
	value:string
	error?:any
	cs?:string
	className?: string
}

const States: React.FC<StatesProps> = (props) => {
    let {
		error,
	    label,
	    setValue,
	    value,
	    className,
	    cs
	} = props;

    return (
        <>
	        <Select
		        className={className}
		        setValue={(value)=>{setValue(value)}}
		        label={label||"State"}
		        cs={cs}
		        options={states.map((item)=>({label:item, value:item}))}
		        value={value}
		        error={error}
	        />
        </>
    );
};

export default States;
