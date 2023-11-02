import React, {useState,useEffect} from 'react';
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Link from "next/link";
import Table from "@/components/global/table";
import money from "@/utils/money";

type DisbursedRequestsProps = {}

const DisbursedRequests: React.FC<DisbursedRequestsProps> = (props) => {
    const {} = props;
    const variables = {offset:0, limit:10, status:"Disbursed"}
    const {loading,error,data, fetchMore} = useQuery(PATHS.getTransactionByStatus, {variables, networkPolicy:"network-and-cache"})

    const status =(value:string)=>{
        switch (value) {
            case "Disbursed":
                return "Pending"
            case "IssuerPaid":
                return "Paid"
            default:
                return value
        }
    }

    const list = data?.data?.map((item:any)=>([
        item.DateCreated,
        money(Number(item.Amount),2),
        item.Type,
        item.PONumber,
        item.IssuerName,
        item.Name,
        item.InvoicePayableDate,
        status(item.Status),
        <Link href={`/requests/${item.Type.toLowerCase()}/${item.TransactionID}`}>
            <button className="btn btn-primary py-1 px-5">
                View
            </button>
        </Link>
    ]))

    return (
        <>
            <Table
                header={["Date Created", "Amount", "Contact Type", "Purchase Order No", "Issuer","Vendor", "Invoice Payable Date", "Status", "Action"]}
                data={list||[]}
                statusIndex={6}
                title={""}
                emptyText={"No records to track"}
                offsetType={"paginate"}
                loading={loading && !data}
                pagination={{
                    limit: variables.limit,
                    dataCount:data?.pagination?.dataCount,
                    total: data?.pagination?.total,
                    fetchMore
                }}
            />
        </>
    );
};

export default DisbursedRequests;
