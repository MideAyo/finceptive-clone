import React from 'react';
import {useRouter} from "next/router";
import {useApp} from "@/store/contexts/app-context";
import Layout from "@/components/layouts";
import TitleSection from "@/components/dashboard/title-section";
import {Button} from "@/components/rn-alpha";

export type SettingsProps = {}

const Settings: React.FC<SettingsProps> = () => {
    const router = useRouter();
    const {auth,user} = useApp();

    return (
        <Layout back>
            <TitleSection title={"Settings"} text={""}/>
            <div className="bg rounded-b-lg mt-8 rounded-md border p-5">
                <div className="flex-between">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div>
                        <Button
                            title={"Change Password"}
                            className={"border py-1.5"}
                            onClick={()=>{router.push("/settings/change-password")}}
                        />
                    </div>
                </div>
                <div className="border-y py-5 mt-5">
                    <h3 className="text2">Email Address</h3>
                    <p className="text text-sm">{user.Email}</p>
                </div>
                <div className="py-5 flex-between flex-wrap gap-4">
                    <div className="w-full md:flex-1">
                        <h3 className="text2">Sign out </h3>
                    </div>
                    <div>
                        <Button
                            onClick={()=>{router.push("/logout")}}
                            title={"Sign out"}
                            className={"border border-danger text-danger py-1.5"}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Settings;
