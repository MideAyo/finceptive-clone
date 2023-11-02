import React from 'react';
import Link from "next/link";
import Table from "@/components/global/table";
import PATHS from "@/paths";
import {useQuery} from "@/components/rn-alpha";
import {useApp} from "@/store/contexts/app-context";

type RecentRequestsIssuerProps = {}

const RecentRequestsIssuer: React.FC<RecentRequestsIssuerProps> = (props) => {
    const {} = props;
	const {user} = useApp();

	const limit = 10;
	const variables = {offset:0, limit, status:"IssuerPending"}
	const {loading,error,data, fetchMore} = useQuery(PATHS.getTransactionByStatus,{variables, networkPolicy:"network-and-cache"})

	const list = data?.data?.map((item:any)=>([
		item.DateCreated,
		item.Type,
		item.PONumber,
		item.IssuerName||item.Issuer,
		item.InvoicePayableDate,
		item.Status,
		<Link href={`/requests/${item.Type.toLowerCase()}/${item.TransactionID}`}>
			<button className="btn btn-primary py-1 px-5">
				View
			</button>
		</Link>
	]))

    return (
        <div className="mt-10">
	        <Table
		        header={["Date Created", "Contract Type", "Purchase Order No", "Issuer", "Invoice Payable Date", "Status", "Action"]}
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

export default RecentRequestsIssuer;
