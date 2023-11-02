import React, {useState} from 'react';
import {RequestStatus, RequestVariables} from "@/types";
import {Button, Preloader, useMutation, useQuery} from "@/components/rn-alpha";
import {file} from "@/svg/icons";
import PATHS from "@/paths";
import Modal from "@/components/global/modal";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import OfferPdf from "@/components/request/details/offer/offer-pdf";
import OfferHtml from "@/components/request/details/offer/offer-html";

type OfferLetterReviewProps = {
    variables:RequestVariables
}

const OfferLetterReview: React.FC<OfferLetterReviewProps> = (props) => {
    const {variables} = props;
    const {data, updateValue} = useQuery(PATHS.request, {variables});
    const [modal,setModal] = useState(false);
    const {mutate, loading} = useMutation(PATHS.updateRequestStatus)
    const {Toast,showAlert} = useApp();
    const router = useRouter();


    const formHandler=(requestStatus:RequestStatus, callback:()=>void)=>{
        mutate({...variables, status:requestStatus}).then(({status,error})=>{
            if (status===200){
                updateValue("Status", requestStatus)
                setModal(false)
                callback()
            }else {
                Toast(error||"", "red")
            }
        })
    }

    return (
        <>
            {data.Status==="Approved"&&(
                <Button
                    title={"View Offer Letter"}
                    className={"btn-primary mt-16"}
                    onClick={()=>{setModal(true)}}
                    icon={file}
                    iconClassName={"w-5"}
                />
            )}

           <Modal modal={modal} setModal={setModal} className="max-w-5xl" close>
               <h1 className="text-2xl text mt-5 ml-5 lg:ml-10 font-semibold">Offer Letter</h1>
               <div className="p-5 lg:p-10 max-h-80 overflow-y-auto">
                   <OfferPdf variables={variables}/>
               </div>
               <div className="flex-item flex-row-reverse gap-5 py-5 px-5 lg:px-10">
                   <Button
                       title={"Accept"}
                       className={"btn-success w-auto"}
                       onClick={()=>{
                           formHandler("OfferAccepted", ()=>{
                               showAlert({
                                   title:"Offer Accepted",
                                   text:"Funds will be disbursed shortly",
                                   btn:{
                                       text:"Done",
                                       onClick:()=>{
                                           router.back()
                                       }
                                   }
                               })
                           })
                       }}
                   />
                   <Button
                       title={"Reject"}
                       className={"btn-danger w-auto"}
                       onClick={()=>{
                           formHandler("OfferDeclined", ()=>{
                               router.back()
                           })
                       }}
                   />
               </div>
           </Modal>
            <Preloader loading={loading}/>
        </>
    );
};

export default OfferLetterReview;
