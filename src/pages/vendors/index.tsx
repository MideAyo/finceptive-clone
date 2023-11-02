import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import {useRouter} from "next/router";
import Link from "next/link";
import Table from "@/components/global/table";
import TitleSection from "@/components/dashboard/title-section";
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {withAuth} from "@/hoc/with-auth";

type VendorsProps = {}

const Vendors: React.FC<VendorsProps> = (props) => {
    const {} = props;
    const router = useRouter();

    const limit = 20
    const {loading,error,data, fetchMore} = useQuery(PATHS.getEntities, {variables:{"offset":0,"limit":limit}, networkPolicy:"network-and-cache"})

    const list =  data?.data?.map((item:any, i:number)=>(
        [
            i+1,
            item.Name||item.BusinessName||"-",
            item.Email,
            item.Type,
            item.Status,
            item.DateCreated,
            <Link href={`/vendors/${item.CustomerID}`}>
                <p className="text-primary py-2 cursor-pointer">View</p>
            </Link>
        ]
    ))

    return (
        <Layout back>
            <TitleSection
                title={"Vendors"}
                text={"Track and manage all issuers"}
            />

            <Table
                header={["#", "Name", "Email", "Type", "Status", "Date", "Action"]}
                data={list}
                statusIndex={4}
                title={"List of Vendors"}
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
        </Layout>
    );
};

export default withAuth(Vendors);
