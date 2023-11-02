import React from 'react';
import Layout from "@/components/layouts";
import {useRouter} from "next/router";
import RecentRequests from "@/components/dashboard/recent-requests";
import Support from "@/components/support";
import TitleSection from "@/components/dashboard/title-section";
import {withAuth} from "@/hoc/with-auth";
import {useApp} from "@/store/contexts/app-context";
import Analytics from "@/components/dashboard/analytics";
import Visibility from "@/components/layouts/visibility";
import FundingRequest from "@/components/dashboard/funding-request";
import RecentRequestsIssuer from "@/components/dashboard/recent-requests-issuer";

type DashboardProps = {}

const Home: React.FC<DashboardProps> = (props) => {
    const router = useRouter();
    const {user} = useApp();

    return (
        <Layout title={"Dashboard"}>
            <TitleSection
                title={`Welcome, ${user?.Firstname}`}
                text={""}
                btn={user.Type==="Vendor"?"Create Request":""}
                onClick={()=>{router.push("/requests/new")}}
            />

            <Analytics/>

            <Visibility types={["Vendor", "BackOffice"]} roles={[]}>
                <RecentRequests/>
            </Visibility>

            <Visibility types={["Issuer"]} roles={[]}>
                <RecentRequestsIssuer/>
            </Visibility>

            <Visibility types={["FundingPartner"]}>
                <FundingRequest/>
            </Visibility>
            <Support/>
        </Layout>
    );
};

export default withAuth(Home);
