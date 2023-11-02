import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {clock} from "@/svg/icons";
import {RequestStatus} from "@/types";
import Visibility from "@/components/layouts/visibility";

type RequestStatusViewProps = {
	status: RequestStatus
	reason?: string
}

const RequestStatusView: React.FC<RequestStatusViewProps> = (props) => {
    const {status, reason} = props;

	const statusCase=()=>{
		switch (status) {
			case "Pending":
				return { color:"text-warning", bg:"bg-warning-shade", text:"Request is awaiting confirmation" };
			case "IssuerPending":
				return { color:"text-warning", bg:"bg-warning-shade", text:"Request is awaiting confirmation from Issuer" };
			case "Issuer-Verified":
				return { color:"text-primary", bg:"bg-[#28A2D928]", text:"Request is awaiting review" };
			case "Issuer-Declined":
				return { color:"text-danger", bg:"bg-[#FDECEC]", text:"Request was declined by the Issuer" };
			case "UnderReview":
				return { color:"text-primary", bg:"bg-[#28A2D928]", text:"Request is under review" };
			case "Approved":
				return { color:"text-primary", bg:"bg-[#28A2D928]", text:"Request is awaiting offer approval" };
			case "OfferAccepted":
				return { color:"text-success", bg:"bg-[#D7FFE8]", text:"Request is awaiting disbursement" };
			case "OfferDeclined":
				return { color:"text-danger", bg:"bg-[#FDECEC]", text:"Offer was declined" };
			case "Declined":
				return { color:"text-danger", bg:"bg-[#FDECEC]", text:"Request was declined" };
			case "Disbursed":
				return { color:"text-success", bg:"bg-[#D7FFE8]", text:"Funds has been disbursed" };
			default:
				return { color:"text-primary", bg:"bg-[#28A2D928]", text:status };
		}
	}
    return (
	    <Visibility types={["Vendor", "BackOffice"]}>
		    <div className={`${statusCase().bg} px-5 py-2 flex-item gap-5 rounded-lg mb-5`}>
			    <Svg icon={clock} className={`w-8 ${statusCase().color}`}/>
			    <div className="">
				    <p className="text-sm font-bold">Request Status</p>
				    <p className={`text-sm ${statusCase().color} mt-1`}>{statusCase().text}</p>
					{reason&&(
						<p className="text-xs text">PS: {reason}</p>
					)}
			    </div>
		    </div>
	    </Visibility>
    );
};

export default RequestStatusView;
