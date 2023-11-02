import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import ProfileEntity from "../../components/profile/profile-entity";
import ProfileInfo from "../../components/profile/profile-info";
import ProfileDocs from "../../components/profile/profile-docs";
import Layout from "@/components/layouts";
import TitleSection from "@/components/dashboard/title-section";
import {useApp} from "@/store/contexts/app-context";
import Users from "@/components/profile/users";
import {withAuth} from "@/hoc/with-auth";
import BankDetails from "@/components/profile/bank-details";

export type ProfileProps = {}

const Profile: React.FC<ProfileProps> = () => {
    const {user} = useApp();
    const [tab,setTab] = useState(1);

    return (
        <Layout>
            <div>
                <TitleSection
                    title={"Profile"}
                    text={"Manage your profile details"}
                />
                <ProfileInfo tab={tab} setTab={setTab}/>
                {tab===1&&(
                    <ProfileEntity/>
                )}

                {tab===2&&(
                    <Users/>
                )}

                {tab===3&&(
                    <ProfileDocs customerID={user.CustomerID as string}/>
                )}

                {tab===4&&(
                    <BankDetails/>
                )}
            </div>
        </Layout>
    );
};

export default withAuth(Profile);
