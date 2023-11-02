import React, {useState,useEffect} from 'react';
import Table from "@/components/global/table";
import Link from "next/link";
import {dayjs, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import money from "@/utils/money";

type FundingRequestProps = {}

const FundingRequest: React.FC<FundingRequestProps> = (props) => {
	const limit = 10;
	const {loading,error,data, fetchMore} = useQuery(PATHS.getFundingRequests,{variables:{ offset:0, limit}, networkPolicy:"network-and-cache"})

	const list = data?.data?.map((item:any)=>([
		item.DateCreated,
		money(Number(item.Amount), 2),
		money(Number(item.MinAmount), 2),
		item.Rate+"%",
		item.Fees+"%",
		dayjs(item.ClosingDate).format("ddd, DD MMM YYYY"),
		item.Status,
		<Link href={`/requests/${item.Type?.toLowerCase()}/${item.TransactionID}`}>
			<p className="text-primary py-2 cursor-pointer">View</p>
		</Link>
	]))

	return (
		<div className="mt-10">
			<Table
				header={["Date Created", "Amount", "Minimum Amount", "Interest Rate", "Management Fee", "Closing Date", "Status", "Action"]}
				data={list||[]}
				statusIndex={6}
				title={"Funding Requests"}
				emptyText={"There are not funding request's yet"}
				offsetType={"paginate"}
				loading={loading && !data}
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

export default FundingRequest;
