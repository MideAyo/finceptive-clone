import React, {useState,useEffect} from 'react';
import {dayjs, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import money from "@/utils/money";
import Link from "next/link";
import Table from "@/components/global/table";
import Layout from "@/components/layouts";
import TitleSection from "@/components/dashboard/title-section";
import Visibility from "@/components/layouts/visibility";

type FundingRequestsProps = {}

const FundingRequests: React.FC<FundingRequestsProps> = (props) => {
    const {} = props;
    const limit = 10;
    const {loading,error,data, fetchMore} = useQuery(PATHS.getFundingRequests,{variables:{ offset:0, limit}, networkPolicy:"network-and-cache"})

    const list = data?.data?.map((item:any)=>([
        item.DateCreated,
        money(Number(item.Amount), 2),
        money(Number(item.MinAmount), 2),
        item.Rate+"%",
        dayjs(item.ClosingDate).format("ddd, DD MMM YYYY"),
        item.Status,
        <>
            <Visibility types={["FundingPartner"]}>
                <Link href={`/requests/${item.Type?.toLowerCase()}/${item.TransactionID}`}>
                    <p className="text-primary py-2 cursor-pointer">View</p>
                </Link>
            </Visibility>
            <Visibility types={["BackOffice"]}>
                <Link href={`/funding-requests/${item.Type?.toLowerCase()}/${item.TransactionID}`}>
                    <p className="text-primary py-2 cursor-pointer">View</p>
                </Link>
            </Visibility>
        </>
    ]))

    return (
        <Layout title={""} back>
            <TitleSection
                title={"Funding"}
                text={""}
            />
            <div className="mt-5">
                <Table
                    header={["Date Created", "Amount", "Minimum Amount", "Interest Rate", "Closing Date", "Status", "Action"]}
                    data={list||[]}
                    statusIndex={5}
                    title={""}
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
        </Layout>
    );
};

export default FundingRequests;
