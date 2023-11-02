import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import {useRouter} from "next/router";
import Link from "next/link";
import TitleSection from "@/components/dashboard/title-section";
import Table from "@/components/global/table";
import {withAuth} from "@/hoc/with-auth";

type IssuersProps = {}

const Issuers: React.FC<IssuersProps> = (props) => {
    const {} = props;
    const router = useRouter();

    const data = [
        [
            "1",
            "Kenneth Irechukwu",
            "florachizzyventures@gmail.com",
            "Active",
            "19-08-2023",
            <Link href={"/requests/id"}>
                <p className="text-primary py-2 cursor-pointer">View</p>
            </Link>
        ],
        [
            "2",
            "Kenneth Irechukwu",
            "florachizzyventures@gmail.com",
            "Active",
            "19-08-2023",
            <Link href={"/requests/id"}>
                <p className="text-primary py-2 cursor-pointer">View</p>
            </Link>
        ],
    ]

    return (
        <Layout back>
            <TitleSection
                title={"Issuers"}
                text={"Track and manage all issuers"}
                btn={"Create Request"}
                onClick={()=>{router.push("/requests/new")}}
            />

            {/*<Table
                header={["#", "Name", "Email", "Status", "Date", "Action"]}
                data={data}
                statusIndex={3}
                title={"List of Issuers"}
                emptyText={"You currently do not have any issuers.\nTap the button below to create a one."}
                onNew={()=>{
                    router.push("/requests/new")
                }}
                offsetType={"paginate"}
            />*/}
        </Layout>
    );
};

export default withAuth(Issuers);
