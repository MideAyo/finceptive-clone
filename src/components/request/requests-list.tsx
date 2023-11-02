import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Table from "@/components/global/table";
import {useApp} from "@/store/contexts/app-context";
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";

type RecentRequestsProps = {}

const RequestsList: React.FC<RecentRequestsProps> = (props) => {
	const {} = props;
	const {user} = useApp();


	const limit = 10;
	const {loading,error,data, fetchMore} = useQuery(PATHS.requests,{variables:{ offset:0, limit}, networkPolicy:"network-and-cache"})

	const list = data?.data?.filter((r:any)=>(user?.Type==="Issuer"?r.Status!=="Pending":true)).map((item:any)=>([
		item.DateCreated,
		item.Type,
		item.PONumber,
		item.Name,
		item.InvoicePayableDate,
		item.Status,
		<Link href={`/requests/${item.Type.toLowerCase()}/${item.TransactionID}`}>
			<p className="text-primary py-2 cursor-pointer">View</p>
		</Link>
	]))

	return (
		<div className="mt-10">
			<Table
				header={["Date Created", "Contract Type", "Purchase Order No", "Vendor", "Invoice Payable Date", "Status", "Action"]}
				data={list||[]}
				statusIndex={5}
				title={"Recent Requests"}
				emptyText={"You currently do not have any request.\nTap the button below to create a request."}
				offsetType={"paginate"}
				loading={loading && !data}
				btn={user.Type==="Vendor"?{
					text:"Create Request",
					href:"/requests/new"
				}:undefined}
				pagination={{
					limit,
					dataCount:data?.pagination?.dataCount,
					total: data?.pagination?.total,
					fetchMore
				}}
			/>
		</div>
	);
};

export default RequestsList;
