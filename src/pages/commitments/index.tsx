import React from 'react';
import {Preloader, Svg, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Table from "@/components/global/table";
import Layout from "@/components/layouts";
import money from "@/utils/money";
import Link from "next/link";
import TitleSection from "@/components/dashboard/title-section";
import {file} from "@/svg/icons";
import {baseUrl} from "@/config";
import {withAuth} from "@/hoc/with-auth";

type CommitmentsProps = {}

const Commitments: React.FC<CommitmentsProps> = (props) => {
	const variables = {"offset":0,"limit":20};
	const {loading,error,data, fetchMore} = useQuery(PATHS.getFundCommitments, {variables, networkPolicy:"network-and-cache"})
	const ac = useMutation(PATHS.approveCommitment)
	const dc = useMutation(PATHS.declineCommitment)

	const list = data?.data?.map((item:any, i:number)=>(
		[
			item.Name,
			money(Number(item.Amount), 2),
			item.Status,
			<div className="flex gap-2">
				{JSON.parse(item.ProofOfPayment)?.map((item:any,i:number)=>(
					<a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
						<Svg icon={file} className="w-8 text-primary"/>
					</a>
				))}
			</div>,
			item.DateCreated,
			<div className="flex gap-4">
				{item.Status==="Approved"&&(
					<>
						<Link href={`/commitments/make-payment?commitmentID=${item.ID}&fundingRequestID=${item.FundingRequestID}&transactionID=${item.TransactionID}&amount=${item.Amount}`}>
							<p className="text-primary font-medium">
								Make Payment
							</p>
						</Link>
					</>
				)}
			</div>
		]
	));

	return (
		<Layout back>
			<TitleSection title={"Funding Commitments"} text={"Upload your payment evidence to validate the commitment"}/>
			<div className="w-full mt-10">
				<Preloader loading={ac.loading || dc.loading}/>
				<Table
					title={"Commitments"}
					header={["Funding Partner", "Amount", "Status", "Proof Of Payment", "Date", "Action"]}
					data={list||[]}
					statusIndex={2}
					emptyText={"No Commitments Yet!"}
					loading={!data?.data && loading}
					offsetType={"paginate"}
					pagination={{
						limit: variables.limit,
						dataCount:data?.pagination?.dataCount,
						total: data?.pagination?.total,
						fetchMore
					}}
				/>
			</div>
		</Layout>
	);
};

export default withAuth(Commitments);
