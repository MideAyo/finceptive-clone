import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {bank} from "@/svg/icons";
import Visibility from "@/components/layouts/visibility";

type SupplierDetailsProps = {
	data:any
}

const SupplierDetails: React.FC<SupplierDetailsProps> = (props) => {
    const {data} = props;

	const details = [
		{label:"Name", value:data.Name},
		{label:"Email Address", value:data.Email},
	];

    return (
        <Visibility types={"*"} exclude={["FundingPartner", "Issuer"]}>
	        <h2 className="text-base font-bold mt-10">Supplier Details</h2>
	        <div className="bg-[#56941E19] rounded-lg mt-5 p-5 flex flex-col gap-5">
		        {details.map((item, i)=>(
			        <div key={"dhdssf"+i} className="flex-between gap-5">
				        <p className="text-sm text-[#848485] font-bold">
					        {item.label}
				        </p>
				        <p className="text-sm font-light">{item.value}</p>
			        </div>
		        ))}

		        <div className="flex-item gap-5 bg px-5 lg:px-10 py-2">
			        <Svg icon={bank} className="w-8 text-primary"/>
			        <div className="flex-1">
				        <p className="text text-sm lg:text-base font-bold">{data.AccountName}</p>
				        <p className="text-xs lg:text-sm text-medium">{data.Bank} {data.AccountNo}</p>
			        </div>
		        </div>
	        </div>
        </Visibility>
    );
};

export default SupplierDetails;
