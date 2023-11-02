import React, {useState} from 'react';
import Layout from "@/components/auth/layout";
import {Button} from "@/components/rn-alpha";
import SelectAccountType from "@/components/signup/select-account-type";
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";

type SignUpProps = {}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [type,setType] = useState("");
    const router = useRouter();
    const {setCache, getData} = useCache();

    // FundingPartner,Vendor

    return (
        <Layout title={"Sign Up - Grow"} logo={false}>
            <div>
                <SelectAccountType type={type} setType={setType}/>
                <Button
                    disabled={!type}
                    title={"Next"}
                    className={"btn-primary mt-10"}
                    onClick={()=>{
                        setCache("regType",type)
                        if (type === "individual") {
                            router.push("/signup/individual")
                        }else {
                            router.push("/signup/corporate")
                        }
                    }}
                />
            </div>
        </Layout>
    );
};

export default SignUp;
