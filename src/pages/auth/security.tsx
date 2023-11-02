import React, {useState,useEffect} from 'react';
import Image from "next/image";
import {Button} from "@/components/rn-alpha";
import Layout from "@/components/auth/layout";
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";

type SecurityProps = {}

const Security: React.FC<SecurityProps> = (props) => {
    const {} = props;
    const router = useRouter();

    const {getData} = useCache();

    return (
        <Layout title={"Security - Finceptive"}>
            <div>
                <h3 className="text-2xl font-semibold text-center mt-5">2-Factor Authentication</h3>
                <p className="text-sm text mt-5 font-light text-center">Scan the code into your authenticator</p>

                <div className="flex-center mt-5">
                    <img src={getData("2fa")?.ProvisioningURI} alt={""} className="w-64 h-64"/>
                </div>

                <div className="mt-10">
                    <Button
                        title={"Proceed"}
                        className={"btn btn-primary w-full"}
                        onClick={()=>{router.push("/auth/otp")}}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Security;
