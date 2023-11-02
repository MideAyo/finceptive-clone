import React from 'react';
import {Button, Preloader, Svg, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Table from "@/components/global/table";
import {useApp} from "@/store/contexts/app-context";
import {baseUrl} from "@/config";
import {file} from "@/svg/icons";
import sweetalert from "@/utils/sweetalert";
import money from "@/utils/money";

type FundingCommitmentsProps = {
	fundingRequestID:any
	status:string
	closeFunding:()=>void
}

const FundingCommitments: React.FC<FundingCommitmentsProps> = (props) => {
	const {fundingRequestID,status,closeFunding} = props;
	const variables = {fundingRequestID, "offset":0,"limit":10};
	const {loading,error,data, fetchMore, refetch} = useQuery(PATHS.getCommitments, {variables, networkPolicy:"network-and-cache"})
	const ac = useMutation(PATHS.approveCommitment)
	const dc = useMutation(PATHS.declineCommitment)
	const cp = useMutation(PATHS.confirmCommitment)
	const {Toast} = useApp();

	const approve=(commitmentID:string)=>{
	    sweetalert({
		    title:"Approve!",
		    text:"You are about to approve this commitment",
		    confirm:{
				text:"Approve",
			    className:"bg-primary hover:bg-primary"
		    }
	    }).then((okay)=>{
		    if(okay){
			    ac.mutate({commitmentID}).then(({data,status,error})=>{
				    if (status===200){
					    refetch()
				    }else {
					    Toast(error||"", "red")
				    }
			    })
		    }
	    })
	}

	const decline=(commitmentID:string)=>{
		sweetalert({
			title:"Decline!",
			text:"You are about to decline this commitment",
			confirm:{
				text:"Decline",
				className:"bg-danger hover:bg-danger"
			}
		}).then((okay)=>{
			if (okay){
				dc.mutate({commitmentID}).then(({data,status,error})=>{
					if (status===200){
						refetch()
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}

	const confirm=(commitmentID:string)=>{
		sweetalert({
			title:"Confirm Payment!",
			text:"You are about to confirm this payment",
			confirm:{
				text:"Confirm",
				className:"bg-success hover:bg-success"
			}
		}).then((okay)=>{
			if (okay){
				cp.mutate({commitmentID}).then(({data,status,error})=>{
					if (status===200){
						refetch()
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}


	const list = data?.data?.map((item:any, i:number)=>(
		[
			item.Name,
			money(Number(item.Amount),2),
			item.Status,
			<div className="flex gap-2">
				{JSON.parse(item.ProofOfPayment).map((item:any,i:number)=>(
					<a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
						<Svg icon={file} className="w-8 text-primary"/>
					</a>
				))}
			</div>,
			item.DateCreated,
			<div className="flex gap-4">
				{item.Status==="New"&&(
					<>
						<Button onClick={()=>decline(item.ID)} title={"Decline"} className={"btn-danger py-2"}/>
						<Button onClick={()=>approve(item.ID)} title={"Approve"} className={"btn-primary py-2"}/>
					</>
				)}
				{item.Status==="Paid"&&(
					<Button onClick={()=>confirm(item.ID)} title={"Confirm Payment"} className={"btn-success py-2"}/>
				)}
			</div>
		]
	));

	return (
		<div className="w-full mt-10">
			<Preloader loading={ac.loading || dc.loading || cp.loading}/>
			<div className="bg-success hover:bg-success"/>
			<Table
				title={"Commitments"}
				header={["Funding Partner", "Amount", "Status", "Proof Of Payment", "Date", "Action"]}
				data={list||[]}
				statusIndex={2}
				headerRight={
					<>
						{status==="Open"&&(
							<Button
								title={"Close Funding"}
								className={"btn-primary w-auto px-5 py-2 text-sm"}
								onClick={closeFunding}
							/>
						)}
					</>
				}
				enableFilter={false}
				emptyText={"No Commitments Yet!"}
				loading={loading}
				pagination={{
					limit: variables.limit,
					dataCount:data?.pagination?.dataCount,
					total: data?.pagination?.total,
					fetchMore
				}}
			/>
		</div>
	);
};

export default FundingCommitments;
