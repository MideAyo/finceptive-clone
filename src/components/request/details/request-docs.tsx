import React, {useState,useEffect} from 'react';
import {Svg, useQuery} from "@/components/rn-alpha";
import {file} from "@/svg/icons";
import {baseUrl} from "@/config";
import Visibility from "@/components/layouts/visibility";
import PATHS from "@/paths";
import {RequestStatus, RequestVariables} from "@/types";
import OfferLetterDoc from "@/components/request/details/offer/offer-letter-doc";

type RequestDocsProps = {
	files:string[]
	variables:RequestVariables
	status:RequestStatus
}

const RequestDocs: React.FC<RequestDocsProps> = (props) => {
    const {files,variables, status} = props;

    return (
	    <div>
			<Visibility types={"*"}  exclude={["FundingPartner"]}>
				{files.filter((r)=>(r.includes("invoice.") || r.includes("invoice-"))).map((item,i)=>(
					<a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
						<div className="py-2">
							<div className="flex-item gap-4 py-4 px-5 bg-[#F4F4F4] border border-dashed rounded border-[#002E6E99]">
								<Svg icon={file} className="w-5 text-primary"/>
								<div className="flex-1 overflow-hidden">
									<p className="text-sm overflow-hidden text-ellipsis">{item.split("/").reverse()?.[0]}</p>
								</div>
							</div>
						</div>
					</a>
				))}
			</Visibility>

		    <Visibility types={"*"}  exclude={["FundingPartner", "Issuer"]}>
			    {files.filter((r)=>!(r.includes("invoice.") || r.includes("invoice-"))).map((item,i)=>(
				    <a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
					    <div className="py-2">
						    <div className="flex-item gap-4 py-4 px-5 bg-[#F4F4F4] border border-dashed rounded border-[#002E6E99]">
							    <Svg icon={file} className="w-5 text-primary"/>
							    <div className="flex-1 overflow-hidden">
								    <p className="text-sm overflow-hidden text-ellipsis">{item.split("/").reverse()?.[0]}</p>
							    </div>
						    </div>
					    </div>
				    </a>
			    ))}
		    </Visibility>

		    {status==="OfferAccepted"&&(
			    <Visibility types={["BackOffice", "Vendor"]}>
				    <OfferLetterDoc variables={variables}/>
			    </Visibility>
		    )}
	    </div>
    );
};

export default RequestDocs;
