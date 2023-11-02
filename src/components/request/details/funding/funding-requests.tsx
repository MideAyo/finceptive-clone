import React from 'react';
import {Preloader, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import FundingCommitments from "@/components/request/details/funding/funding-commitments";
import sweetalert from "@/utils/sweetalert";
import {useApp} from "@/store/contexts/app-context";
import PayablesByTransaction from "@/components/request/repayment/payables-by-transaction";
import {RequestVariables} from "@/types";

type FundingRequestsProps = {
	variables: RequestVariables
}

const FundingRequests: React.FC<FundingRequestsProps> = (props) => {
    const {variables} = props;
	const {data, updateValue} = useQuery(PATHS.getFundingByID, {variables, networkPolicy:"network-and-cache"})
	const close = useMutation(PATHS.closeFunding)
	const {Toast} = useApp();

	const closeFunding=()=>{
		sweetalert({
			title:"Close Funding",
			text:"You are about to close this funding pool",
			confirm:{
				text:"Close",
				className:"bg-primary hover:bg-primary"
			}
		}).then((ok)=>{
			if (ok){
				close.mutate({fundingRequestID:data.ID}).then(({data,status,error})=>{
					if (status===200){
						Toast("Funding closed successfully")
						updateValue("Status", "Closed")
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}

	return (
	    <div>
		    <Preloader loading={close.loading}/>
		    {data&&(
			    <FundingCommitments
				    status={data.Status}
				    fundingRequestID={data.ID}
				    closeFunding={closeFunding}
			    />
		    )}

		    {data?.Status==="Closed"&&(
			    <PayablesByTransaction variables={variables}/>
		    )}
	    </div>
    );
};

export default FundingRequests;
