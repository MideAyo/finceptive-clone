import React, {useState,useEffect} from 'react';
import Table from "@/components/global/table";
import {Button, Preloader, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import swal from "sweetalert";
import {useApp} from "@/store/contexts/app-context";

type VendorTab3Props = {
    customerID:string
}

const VendorTab0: React.FC<VendorTab3Props> = (props) => {
    const {customerID} = props;
    const {loading,error,data, updateItem} = useQuery(PATHS.entityUsers, {variables:{customerID}, networkPolicy:"network-and-cache"})
    const lock = useMutation(PATHS.lockUser)
    const unlock = useMutation(PATHS.unlockUser)
    const reset2FA = useMutation(PATHS.reset2FA)
    const {Toast} = useApp();

    const onLock=(userId:string)=>{
        swal({
            title: "Lock User!",
            text: `You are about to lock this user`,
            // @ts-ignore
            buttons: {
                cancel: "Cancel",
                confirm: "Lock",
            },
            dangerMode:true
        }).then((okay)=>{
            if (okay){
                lock.mutate({user_id:userId}).then(({data,status,error})=>{
                    if (status===200){
                        updateItem(userId,{Status: "Locked"}, "UserID")
                    }else {
                        Toast(error||"", "red")
                    }
                })
            }
        })
    }

    const onUnLock=(userId:string)=>{
        swal({
            title: "Unlock User!",
            text: `You are about to unlock this user`,
            // @ts-ignore
            buttons: {
                cancel: "Cancel",
                confirm: "Unlock",
            },
        }).then((okay)=>{
            if (okay){
                unlock.mutate({user_id:userId}).then(({data,status,error})=>{
                    if (status===200){
                        updateItem(userId, {Status: "Active"}, "UserID")
                    }else {
                        Toast(error||"", "red")
                    }
                })
            }
        })
    }

    const onReset2Fa=(userId:string)=>{
        swal({
            title: "Reset 2FA",
            text: `You are about to reset this user's 2fa`,
            // @ts-ignore
            buttons: {
                cancel: "Cancel",
                confirm: "Reset",
            },
        }).then((okay)=>{
            if (okay){
                reset2FA.mutate({user_id:userId}).then(({data,status,error})=>{
                    if (status===200){
                        Toast("User 2FA has been reset successfully!", "green")
                    }else {
                        Toast(error||"", "red")
                    }
                })
            }
        })
    }


    const list = data?.map((item:any)=>([
        item.UserID,
        item.FirstName,
        item.LastName,
        item.Email,
        item.Mobile,
        item.Status,
        item.Role,
        <div className="flex-item gap-2">
            {(item.Status==="Active"||item.Status==="Verified")&&(
                <>
                    <Button title={"Lock"} onClick={()=>onLock(item.UserID)} className={"btn-danger py-1 px-3"}/>
                    <Button title={"Reset2fa"} onClick={()=>onReset2Fa(item.UserID)} className={"btn-secondary py-1 px-3"}/>
                </>
            )}
            {item.Status==="Locked"&&(
                <Button title={"Unlock"} onClick={()=>onUnLock(item.UserID)} className={"btn-success py-1 px-3"}/>
            )}
        </div>
    ]))

    return (
        <div>
            <Preloader loading={reset2FA.loading || unlock.loading || lock.loading}/>
            <Table
                enableFilter={false}
                className="pb-10"
                header={["UserID", "FirstName", "LastName", "Email", "Mobile", "Status", "Role", "Action"]}
                data={list||[]}
                statusIndex={5}
                title={""}
                emptyText={""}
                loading={loading && !data}
                // error={error}
            />
        </div>
    );
};

export default VendorTab0;
