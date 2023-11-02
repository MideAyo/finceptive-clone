import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {order} from "@/svg/icons";
import {chevronDown, chevronUp} from "@/utils/icons/icons";
import toWord from "@/utils/toWord";

type VendorTab1Props = {
	data:any[]
}

const VendorTab1: React.FC<VendorTab1Props> = (props) => {
    const {data} = props;
	const [view,setView] = useState("");

    return (
        <>
	        <div className="p-5">
		        {data?.map((item:any, i:number)=>(
			        <div key={"dsjhsf"+i} className="flex flex-col grid-5">
				        <div
					        onClick={()=> {
						        setView(prevState => prevState === item.customerID ? "" : item.customerID)
					        }}
					        className="border rounded-md px-5 py-3 flex-item cursor">
					        <div className="flex-1 flex-item gap-4">
						        <Svg icon={order} className="w-8 text-medium"/>
						        <p>{item.Firstname} {item.Lastname}</p>
					        </div>
					        <Svg icon={view===item.customerID? chevronUp:chevronDown} className="w-5 text-sm text-medium"/>
				        </div>
				        {view===item.customerID&&(
					        <div className="vendor-grid border mt-2">
						        {Object.keys(item).map((key)=>(
							        <div key={"dshdd"+i} className="">
								        <p className="text-sm text-medium">{toWord(key)}</p>
								        <p className="text mt-1">{item[key]||"-"}</p>
							        </div>
						        ))}
					        </div>
				        )}
			        </div>
		        ))}
	        </div>
        </>
    );
};

export default VendorTab1;
