import React, {useState} from 'react';
import Modal from "@/components/global/modal";
import {ModalProps} from "@/types";
import TitleSection from "@/components/dashboard/title-section";
import money from "@/utils/money";
import FileUploader from "@/components/inputs/file-uploader";
import {Button, useMutation} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";

type MakePaymentProps = {
    data:{
        ID:number
        Name:string
        Amount:number
        Status:string
    }
    refetch:()=>void
}

const MakePaymentModal: React.FC<MakePaymentProps&ModalProps> = (props) => {
    const {modal, setModal, data, refetch} = props;
    const {mutate,loading} = useMutation(PATHS.payablesPayment);
    const {Toast, showAlert} = useApp();
    const [files,setFiles] = useState([]);
    const [allow,setAllow] = useState(false);

    const formHandler=(file:string, onSuccess:(value:boolean)=>void)=>{
        const values = {
            "payableID":data.ID,
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
        <Modal modal={modal} setModal={setModal} className="max-w-2xl" close>
            <div className="px-5 lg:px-10 mt-5">
                <TitleSection
                    title={"Make Payment"}
                    text={"Upload payment reference"}
                />
            </div>
            <div className="bg px-5 lg:px-10 mt-5 pb-10 rounded-2xl">
                <div className="bg-[#F1F7FE] py-10">
                    <h2 className="text-3xl text-center">{money(Number(data.Amount), 2)}</h2>
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
                        setModal(false)
                        refetch()
                        showAlert({
                            title:"Success",
                            text:"Payment was successful",
                            btn:{
                                text:"Done",
                            }
                        })
                    }}
                    disabled={!allow}
                />
            </div>
        </Modal>
    );
};

export default MakePaymentModal;
