import React, {useState,useEffect} from 'react';
import SelectBox from "@/components/inputs/select-box";
import {corporate, individual} from "@/svg/icons";

type SelectAccountTypeProps = {
    type:string
    setType:(val:string)=>void
}

const SelectAccountType: React.FC<SelectAccountTypeProps> = (props) => {
    const {type,setType} = props;
    return (
        <div className="">
            <h3 className="text-2xl font-semibold text-center">Sign Up</h3>
            {/*<p className="text-sm text mt-1 font-light text-center">Select the account type in which you want to create</p>*/}

            <div className="flex gap-5 mt-8">
                <SelectBox selected={type==="individual"} setSelected={()=>setType("individual")} icon={individual} text={"Individual"}/>
                <SelectBox selected={type==="corporate"} setSelected={()=>setType("corporate")} icon={corporate} text={"Corporate"}/>
            </div>
        </div>
    );
};

export default SelectAccountType;
