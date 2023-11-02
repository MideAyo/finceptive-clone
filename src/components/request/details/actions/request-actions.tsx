import React from 'react';
import {Button, Preloader, useMutation, useQuery} from "@/components/rn-alpha";
import Visibility from "@/components/layouts/visibility";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import {RequestStatus, RequestVariables} from "@/types";
import MakeCommitment from "@/components/request/details/funding/make-commitment";
import {payment} from "@/svg/menu";
import IssuersAction from "@/components/request/details/actions/issuers-action";
import ComplianceAction from "@/components/request/details/actions/compliance-action";
import OfferLetterReview from "@/components/request/details/offer/offer-letter-review";

type RequestActionsProps = {
	variables:RequestVariables
}

const RequestActions: React.FC<RequestActionsProps> = (props) => {
    const {variables} = props;
	const {data, updateValue} = useQuery(PATHS.request, {variables})
	const {mutate, loading} = useMutation(PATHS.updateRequestStatus)
	const {Toast, showAlert} = useApp();
	const router = useRouter();

	const formHandler=(requestStatus:RequestStatus, callback:()=>void, reason?:string)=>{
	    mutate({...variables, status:requestStatus, reason}).then(({status,error})=>{
	        if (status===200){
				updateValue("Status", requestStatus)
				callback()
	        }else {
				Toast(error||"", "red")
	        }
	    })
	}

    return (
        <>
			<Preloader loading={loading}/>
	        <Visibility types={["Vendor"]} customerID={data.CustomerID}>
				<OfferLetterReview variables={variables}/>
		        {!["Disbursed","Approved"].includes(data.Status)&&(
			        <Button
				        title={"Upload Additional Document"}
				        className={"btn-primary mt-16"}
				        onClick={()=>{
					        router.push(`/requests/new?type=${variables.type}&transactionID=${variables.transactionID}`)
				        }}
			        />
		        )}
	        </Visibility>

	        <IssuersAction status={data.Status} formHandler={formHandler}/>


	        <Visibility types={["Issuer", "Vendor"]}>
		        {data.Status === "Disbursed"&&(
			        <Button
				        title={"Make Payment"}
				        className={"btn-primary mt-16"}
				        onClick={()=>{
					        router.push(`${router.asPath}/make-payment`)
				        }}
				        icon={payment}
			        />
		        )}
	        </Visibility>

			<ComplianceAction
				status={data.Status}
				formHandler={formHandler}
				updateValue={updateValue}
			    variables={variables}
				reviewStatus={data?.ReviewStatus?JSON.parse(data.ReviewStatus):null}
			/>

	        <Visibility types={["FundingPartner"]}>
		        <MakeCommitment variables={variables}/>
	        </Visibility>
        </>
    );
};

export default RequestActions;
