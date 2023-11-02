import React from 'react';
import {Button} from "@/components/rn-alpha";
import sweetalert from "@/utils/sweetalert";
import {cancel, check} from "@/utils/icons/icons";
import {payment} from "@/svg/menu";
import Visibility from "@/components/layouts/visibility";
import {RequestStatus} from "@/types";
import {useRouter} from "next/router";
import {useApp} from "@/store/contexts/app-context";

type IssuersActionProps = {
    status:RequestStatus
    formHandler:(status:RequestStatus, callback:()=>void, reason?:string)=>void
}

const IssuersAction: React.FC<IssuersActionProps> = (props) => {
    const {status, formHandler} = props;
    const router = useRouter();
    const {Toast, showAlert} = useApp();

    return (
        <Visibility types={["Issuer"]}>
            {status === "IssuerPending"&&(
                <div className="flex gap-5 mt-5">
                    <Button
                        title={"Decline"}
                        className={"btn-danger"}
                        onClick={()=>{
                            sweetalert({
                                title:"Decline",
                                text:"Are you sure you want to decline this request? enter your reason below",
                                confirm:{ text:"Decline", className:"bg-danger hover:bg-danger" },
                                input: true
                            }).then((reason)=>{
                                if (!!reason){
                                    formHandler("Issuer-Declined", ()=>{
                                        Toast("Request Declined")
                                    }, reason as string)
                                }else if (reason === "") {
                                    Toast("Reason is required","red")
                                }
                            })
                        }}
                        icon={cancel}
                        iconClassName={"w-3"}
                    />
                    <Button
                        title={"Confirm"}
                        className={"btn-success"}
                        onClick={()=>{
                            sweetalert({
                                title:"Confirm",
                                text:"Are you sure you want to confirm this request?",
                                confirm:{ text:"Confirm", className:"bg-success hover:bg-success" },
                                input: true
                            }).then((reason)=>{
                                if (reason !== null){
                                    formHandler("Issuer-Verified", ()=>{
                                        Toast("Request approved successfully")
                                    }, reason as string)
                                }
                            })
                        }}
                        icon={check}
                    />
                </div>
            )}
        </Visibility>
    );
};

export default IssuersAction;
