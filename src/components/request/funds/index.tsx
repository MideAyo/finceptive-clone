import React, {useState,useEffect} from 'react';
import Table from "@/components/global/table";
import {Button, useQuery} from "@/components/rn-alpha";
import {cancel, check} from "@/utils/icons/icons";
import PATHS from "@/paths";

type FundsProps = {
	transactionID: string
}

const Funds: React.FC<FundsProps> = (props) => {
    const {transactionID} = props;
	const {loading,error,data} = useQuery(PATHS.getFundingByID, {variables:{transactionID}, networkPolicy:"network-and-cache"})


	const Action =()=>(
		<div className="flex gap-2">
			<Button
				title={"Decline"}
				className={"btn-secondary w-auto px-5"}
				onClick={()=>{}}
				icon={cancel}
				iconClassName={"w-3"}
			/>
			<Button
				title={"Decline"}
				className={"btn-primary w-auto px-5"}
				onClick={()=>{}}
				icon={check}
			/>
		</div>
	)

	const table = {
		header: ["Funding Partner", "Amount", "Interest Rate", "Status", "Date", "Action"],
		data: [
			[
				"Musa Ali",
				"300,000.00",
				"10%",
				"Pending",
				"24-05-2023",
				<Action/>
			],
		],
		statusIndex: 3
	}

    return (
		<div className="w-full mt-10">
			<Table
				title={"Funds"}
				header={table.header}
				data={table.data}
				statusIndex={table.statusIndex}
				headerRight={
					<Button
						title={"Close Funding"}
						className={"btn-secondary w-auto px-5"}
						onClick={()=>{}}
					/>
				}
				enableFilter={false}
				emptyText={""}
			/>
		</div>
    );
};

export default Funds;
