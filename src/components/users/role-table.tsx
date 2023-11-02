import React, {useState,useEffect} from 'react';
import Table from "@/components/global/table";
import {useRouter} from "next/router";
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Link from "next/link";

type RoleTableProps = {
	role:string
}

const RoleTable: React.FC<RoleTableProps> = (props) => {
    const {role} = props;
	const router = useRouter();
	const limit = 20
	const {loading,error,data, fetchMore} =
		useQuery(PATHS.getEntitiesByRole, {
			variables:{
				role,
				"offset":0,
				"limit":limit
			},
			networkPolicy:"network-and-cache"
		})

	const list =  data?.data?.map((item:any, i:number)=>(
		[
			i+1,
			item.Name||item.BusinessName||"-",
			item.Email,
			item.Type,
			item.Role,
			item.Status,
			item.ReferralCode||"-",
			item.DateCreated,
			<Link href={`/vendors/${item.CustomerID}`}>
				<p className="text-primary py-2 cursor-pointer">View</p>
			</Link>
		]
	))

    return (
        <>
	        <Table
		        header={["#", "Name", "Email", "Type", "Role", "Status", "Referral", "Date", "Action"]}
		        data={list}
		        statusIndex={5}
		        title={""}
		        emptyText={"You currently do not have any vendors"}
		        offsetType={"paginate"}
		        loading={loading && !data}
		        pagination={{
			        limit,
			        dataCount:data?.pagination?.dataCount,
			        total: data?.pagination?.total,
			        fetchMore
		        }}
	        />
        </>
    );
};

export default RoleTable;
