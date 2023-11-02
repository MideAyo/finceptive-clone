import React, {useState,useEffect} from 'react';
import SelectBox from "@/components/inputs/select-box";
import {corporate, individual, issuer, partner, vendor} from "@/svg/icons";

type SelectAccountPreferenceProps = {
    value:string
    setValue:(value:string)=>void
}

const SelectAccountPreference: React.FC<SelectAccountPreferenceProps> = (props) => {
    const {value,setValue} = props;
    return (
        <div className="">
            <h3 className="text-2xl font-semibold text-center">Sign Up</h3>
            {/*<p className="text-sm text mt-1 font-light text-center">Sign up as a Vendor of Funding Partner</p>*/}

            <div className="grid grid-cols-2 gap-5 mt-8">
                <SelectBox selected={value==="Vendor"} setSelected={()=>setValue("Vendor")} icon={vendor} text={"Vendor"}/>
                <SelectBox selected={value==="FundingPartner"} setSelected={()=>setValue("FundingPartner")} icon={partner} text={"Funding Partner"}/>
                <div className="col-span-2">
                    <SelectBox selected={value==="Issuer"} setSelected={()=>setValue("Issuer")} icon={issuer} text={"Issuer"}/>
                </div>
            </div>
        </div>
    );
};

export default SelectAccountPreference;
