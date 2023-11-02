import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import RequestsList from "@/components/request/requests-list";
import TitleSection from "@/components/dashboard/title-section";
import {useRouter} from "next/router";
import {withAuth} from "@/hoc/with-auth";
import Visibility from "@/components/layouts/visibility";

type RequestsProps = {}

const Requests: React.FC<RequestsProps> = (props) => {
    const {} = props;
    const router = useRouter();

    return (
        <Layout title={""} back>
            <Visibility types={["Vendor"]}>
                <TitleSection
                    title={"Loan Request"}
                    text={"Track and manage credit requests"}
                    btn={"Create Request"}
                    onClick={()=>{router.push("/requests/new")}}
                />
            </Visibility>
            <Visibility types={"*"} exclude={["Vendor"]}>
                <TitleSection
                    title={"Loan Request"}
                />
            </Visibility>
            <RequestsList/>
        </Layout>
    );
};

export default withAuth(Requests);
