import React from 'react';
import {Select} from "@/components/rn-alpha";
import states from "@/utils/states";
import {titles} from "@/utils/constants";

type TitlesProps = {
	label:string
	setValue:(value:string)=>void
	value:string
	error?:any
	cs?:string
	className?: string
}

const Titles: React.FC<TitlesProps> = (props) => {
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
		        label={label||"Title"}
		        cs={cs}
		        options={titles.map((item)=>({label:item, value:item}))}
		        value={value}
		        error={error}
	        />
        </>
    );
};

export default Titles;
