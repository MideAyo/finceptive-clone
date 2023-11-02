import React, {useState,useEffect} from 'react';
import Visibility from "@/components/layouts/visibility";
import {Button, useQuery} from "@/components/rn-alpha";
import {edit} from "@/svg/icons";
import {cancel, check} from "@/utils/icons/icons";
import {disburse} from "@/svg/menu";
import FundingTypeModal from "@/components/request/details/funding/funding-type-modal";
import {RequestStatus, RequestVariables} from "@/types";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import sweetalert from "@/utils/sweetalert";
import PATHS from "@/paths";

type ComplianceActionProps = {
	status:RequestStatus
	formHandler:(status:RequestStatus, callback:()=>void, reason?:string)=>void
	variables:RequestVariables
	updateValue:(arg:string,value:any)=>void
	reviewStatus:any
}

const ComplianceAction: React.FC<ComplianceActionProps> = (props) => {
    const {status, formHandler, variables, updateValue, reviewStatus} = props;
	const [modal,setModal] = useState(false);
	const {Toast, showAlert} = useApp();
	const router = useRouter();
	const {data} = useQuery(PATHS.getFundingByID, {variables})

	const closeRequest=()=>{
		sweetalert({
			title:"Close Request",
			text:"By closing this request you are confirming that the repayment has been made",
			confirm:{ text:"Confirm", className:"btn-primary" }
		}).then((okay)=>{
			if (okay){
				formHandler("Closed", ()=>{
					updateValue("Status", "Closed")
					showAlert({
						title:"Success",
						text:"You have successfully closed this request",
						btn:{
							text:"Done",
							onClick:()=>{
								router.back()
							}
						}
					})
				})
			}
		})
	};

	return (
        <>
	        <Visibility types={["BackOffice"]} roles={["Compliance"]}>
		        {(status === "Issuer-Verified"|| status === "IssuerPending")&&(
			        <Button
				        title={"Start Review"}
				        className={"btn-primary mt-16"}
				        onClick={()=>{
					        formHandler("UnderReview", ()=>{
						        router.push(`${router.asPath}/review`)
					        })
				        }}
				        icon={edit}
			        />
		        )}
		        {["Disbursed","IssuerPaid"].includes(status)&&(
			        <Button
				        title={"Confirm Repayment"}
				        className={"btn-primary mt-16"}
				        onClick={closeRequest}
				        icon={check}
			        />
		        )}
		        {status === "Pending"&&(
			        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
				        <Button
					        title={"Decline"}
					        className={"btn-danger"}
					        onClick={()=>{
						        sweetalert({
							        title:"Decline",
							        text:"Are you sure you want to decline this request?",
							        confirm:{ text:"Decline", className:"bg-danger hover:bg-danger" },
							        input: true
						        }).then((reason)=>{
							        if (!!reason){
								        formHandler("Declined", ()=>{
									        Toast("Request Declined Successfully!")
								        }, reason as string)
							        }else if (reason === "") {
								        Toast("Reason is required","red")
							        }
						        })
					        }}
					        icon={cancel}
					        iconClassName={"w-3"}
				        />
				        <Button
					        title={"Send to Issuer"}
					        className={"btn-primary"}
					        onClick={()=>{
						        sweetalert({
							        title:"",
							        text:"You are about to send this request to the Issuer",
							        confirm:{ text:"Send", className:"btn-primary" }
						        }).then((ok)=>{
							        if (ok){
								        formHandler("IssuerPending", ()=>{
									        Toast("Request Sent Successfully!")
								        })
							        }
						        })
					        }}
					        icon={check}
				        />
			        </div>
		        )}

		        {status === "UnderReview"&&(
			        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
				        <Button
					        title={"Decline"}
					        className={"btn-danger"}
					        onClick={()=>{
						        sweetalert({
							        title:"Decline",
							        text:"Are you sure you want to decline this request?",
							        confirm:{ text:"Decline", className:"bg-danger hover:bg-danger" },
							        input: true
						        }).then((reason)=>{
							        if (!!reason){
								        formHandler("Declined", ()=>{
									        Toast("Request Declined Successfully!")
								        }, reason as string)
							        }else if (reason === "") {
								        Toast("Reason is required","red")
							        }
						        })
					        }}
					        icon={cancel}
					        iconClassName={"w-3"}
				        />
				        <Button
					        title={"Approve"}
					        className={"btn-success"}
					        onClick={()=>{
						        setModal(true)
					        }}
					        icon={check}
							disabled={!reviewStatus?.CreditCheck?.valid || !reviewStatus?.DocumentReview?.valid || !reviewStatus?.ValidAmount?.valid}
				        />
			        </div>
		        )}

		        {(status === "OfferAccepted" && data?.Status==="Closed")&&(
			        <Button
				        title={"Disburse"}
				        className={"btn-primary mt-16"}
				        onClick={()=>{
					        formHandler("Disbursed", ()=>{
						        showAlert({
							        title:"Success",
							        text:"Funds has been disbursed successfully",
							        btn:{
								        text:"Done",
							        }
						        })
					        })
				        }}
				        icon={disburse}
				        iconClassName={"w-5"}
			        />
		        )}
	        </Visibility>
	        <FundingTypeModal
		        modal={modal}
		        setModal={setModal}
		        close={()=>{setModal(false)}}
		        variables={variables}
		        callback={(type)=>{
			        setModal(false)
			        formHandler("Approved", ()=>{
				        showAlert({
					        title:"Request Approved",
					        text:"An approved offer letter has been sent to the vendor",
					        btn:{
						        text:"Done",
					        }
				        })
				        updateValue("FundingType", type)
			        })
		        }}
	        />
        </>
    );
};

export default ComplianceAction;
