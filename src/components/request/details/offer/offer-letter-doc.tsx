import React, {useState,useEffect} from 'react';
import {Svg, useQuery} from "@/components/rn-alpha";
import {file} from "@/svg/icons";
import {RequestVariables} from "@/types";
import PATHS from "@/paths";

type OfferLetterDocProps = {
	variables:RequestVariables
}

const OfferLetterDoc: React.FC<OfferLetterDocProps> = (props) => {
    const {variables} = props;

	const {data, loading} = useQuery(PATHS.getOffer,{
		variables:{
			"type":variables.type,
			"transaction_id":variables.transactionID,
			"media":"pdf"
		}
	})

	return (
        <>
	        {data?.offer&&(
		        <a href={data?.offer} target="_blank" rel="noopener noreferrer" className="">
			        <div className="py-2">
				        <div className="flex-item gap-4 py-4 px-5 bg-[#F4F4F4] border border-dashed rounded border-[#002E6E99]">
					        <Svg icon={file} className="w-5 text-primary"/>
					        <div className="flex-1 overflow-hidden">
						        <p className="text-sm overflow-hidden text-ellipsis">Offer Letter</p>
					        </div>
				        </div>
			        </div>
		        </a>
	        )}
        </>
    );
};

export default OfferLetterDoc;
