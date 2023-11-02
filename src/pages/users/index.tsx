import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import {useRouter} from "next/router";
import Link from "next/link";
import Table from "@/components/global/table";
import TitleSection from "@/components/dashboard/title-section";
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {withAuth} from "@/hoc/with-auth";
import TabBar from "@/components/global/tab-bar";
import RoleTable from "@/components/users/role-table";

type VendorsProps = {}

const Vendors: React.FC<VendorsProps> = (props) => {
    const [tab,setTab] = useState("Vendor");

    return (
        <Layout back>
            <TitleSection
                title={"Users"}
                text={"Track and manage all users"}
            />

            <TabBar
                options={[
                    { label:"Vendors", value:"Vendor" },
                    { label:"Funding Partners", value:"FundingPartner" },
                    { label:"Issuers", value:"Issuer" },
                ]}
                tab={tab}
                setTab={setTab}
            />

            <RoleTable key={tab} role={tab}/>
        </Layout>
    );
};

export default withAuth(Vendors);
