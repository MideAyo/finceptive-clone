import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import PATHS from "@/paths";
import {Button, useMutation} from "@/components/rn-alpha";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import FileUploader from "@/components/inputs/file-uploader";
import money from "@/utils/money";
import TitleSection from "@/components/dashboard/title-section";
import {withAuth} from "@/hoc/with-auth";

type MakePaymentProps = {}

const MakePayment: React.FC<MakePaymentProps> = (props) => {
    const {mutate,loading,error,data} = useMutation(PATHS.makePayment);
    const {Toast, showAlert} = useApp();
    const router = useRouter();
    const [files,setFiles] = useState([]);
    const [allow,setAllow] = useState(false);

    const formHandler=(file:string, onSuccess:(value:boolean)=>void)=>{
        const values = {
            "transactionID":router.query.transactionID,
            "commitmentID":Number(router.query.commitmentID),
            "fundingRequestID":Number(router.query.fundingRequestID),
            "files":[file]
        }
        mutate(values).then(({data,status,error})=>{
            if (status===200){
                onSuccess(true)
                setAllow(true)
            }else {
                onSuccess(false)
                Toast("Unable to upload payment reference!", "red")
            }
        })
    }

    return (
        <Layout back>
            <TitleSection title={"Make Payment"} text={"Upload your payment evidence to validate the commitment"}/>
            <div className="container max-w-2xl mx-0 mt-10">
                <div className="bg p-5 lg:p-10 rounded-2xl">
                    <div className="bg-[#F1F7FE] py-10">
                        <h2 className="text-3xl text-center">{money(Number(router.query.amount), 2)}</h2>
                    </div>
                    <FileUploader
                        label={"Upload payment evidence"}
                        setFiles={setFiles}
                        className="mt-5"
                        onUpload={formHandler}
                    />
                    <Button
                        title={"Complete Payment"}
                        className={"btn-primary mt-10"}
                        onClick={()=>{
                            showAlert({
                                title:"Success",
                                text:"Payment was successful",
                                btn:{
                                    text:"Done",
                                    onClick:()=>{ router.back() }
                                }
                            })
                        }}
                        disabled={!allow}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default withAuth(MakePayment);
