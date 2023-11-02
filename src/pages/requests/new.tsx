import React, {useEffect, useState} from 'react';
import Layout from "@/components/layouts";
import {lpo} from "@/svg/icons";
import SideSteps from "@/components/request/new/side-steps";
import SelectContactType from "@/components/request/new/select-contact-type";
import SelectIssuers from "@/components/request/new/select-issuers";
import ContractInfo from "@/components/request/new/contract-info";
import Visibility from "@/components/layouts/visibility";
import UploadDocuments from "@/components/request/new/upload-documents";
import {withAuth} from "@/hoc/with-auth";
import {useRouter} from "next/router";

type NewProps = {}

const New: React.FC<NewProps> = (props) => {
    const [type,setType] = useState("lpo");
    const [issuer,setIssuer] = useState("");

    const [step,setStep] = useState(1);
    const [transactionID,setTransactionID] = useState("");
    const router = useRouter();
    const [na,setNa] = useState(false);

    useEffect(()=>{
        if (router.query.transactionID){
            setType(router.query.type as string || "lpo")
            setTransactionID(router.query.transactionID as string || "")
            setStep(4)
        }
    },[]);

    const next=()=>{
        setStep(prevState => prevState + 1)
    }
    const previous=()=>{
        setStep(prevState => prevState - 1)
    }

    return (
        <Visibility types={["Vendor"]}>
            <Layout title={""} back>
                <div className="py-3">
                    <h1 className="text-lg lg:text-xl font-bold">New Credit Request</h1>
                    <p className="text-sm text-medium font-light mt-1">Create new credit request</p>
                </div>
                <div className="bg rounded-2xl overflow-hidden shadow mt-5 flex">
                    <SideSteps step={step}/>
                    <section className="flex-1 bg-[#FAFBFC]">
                        <div className="container max-w-xl py-10 px-5">
                            {step===1&&(
                                <SelectContactType
                                    setType={setType}
                                    type={type}
                                    next={next}
                                />
                            )}

                            {step===2&&(
                                <SelectIssuers
                                    next={next}
                                    previous={previous}
                                    setIssuer={setIssuer}
                                    issuer={issuer}
                                    na={na}
                                    setNa={setNa}
                                />
                            )}

                            {step===3&&(
                                <ContractInfo
                                    type={type}
                                    next={next}
                                    previous={previous}
                                    issuer={issuer}
                                    setTransactionID={setTransactionID}
                                    na={na}
                                />
                            )}

                            {step===4&&transactionID&&(
                                <UploadDocuments
                                    next={next}
                                    previous={previous}
                                    transactionID={transactionID}
                                    type={type}
                                />
                            )}

                        </div>
                    </section>
                </div>
            </Layout>
        </Visibility>
    );
};

export default withAuth(New);

/*export async function getServerSideProps({query}:any) {
    return {
        props: { query },
    }
}*/
