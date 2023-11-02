import React, {useState,useEffect} from 'react';
import {Button, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import swal from "sweetalert";
import {useApp} from "@/store/contexts/app-context";
import {check} from "@/utils/icons/icons";
import useQueryAsync from "@/hooks/use-query-async";
import sweetalert from "@/utils/sweetalert";

type VendorActionProps = {
	customerID:string
}

const VendorAction: React.FC<VendorActionProps> = (props) => {
    const {customerID} = props;
	const {data, updateValue} = useQuery(PATHS.getEntityById,{variables:{customerID}})
	const activate = useMutation(PATHS.activate)
	const disable = useMutation(PATHS.disable)
	const enable = useMutation(PATHS.enable)
	const {Toast} = useApp();
	const query = useQueryAsync()

	const onApprove=()=>{
		sweetalert({
			title: "Activate!",
			text: `You are about to activate ${data.Name}?`,
			confirm: {
				text:"Activate",
				className:"bg-primary hover:primary"
			},
		}).then((okay)=>{
			if (okay){
				activate.mutate({customerID}).then(({data,status,error})=>{
					if (status===200){
						query(PATHS.entityUsers, {variables:{customerID}})
						updateValue("Status","Active")
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}

	const onDisable=()=>{
		swal({
			title: "Disable!",
			text: `You are about to disable ${data.Name}?`,
			// @ts-ignore
			buttons: {
				cancel: "Cancel",
				confirm: "Disable",
			},
			dangerMode:true
		}).then((okay)=>{
			if (okay){
				disable.mutate({customerID}).then(({data,status,error})=>{
					if (status===200){
						updateValue("Status","Disabled")
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}

	const onEnable=()=>{
		swal({
			title: "Enable!",
			text: `You are about to enable ${data.Name}?`,
			// @ts-ignore
			buttons: {
				cancel: "Cancel",
				confirm: "Enable",
			},
		}).then((okay)=>{
			if (okay){
				enable.mutate({customerID}).then(({data,status,error})=>{
					if (status===200){
						updateValue("Status","Active")
					}else {
						Toast(error||"", "red")
					}
				})
			}
		})
	}

    return (
        <>
	        <div className="flex flex-row-reverse gap-5">
		        {(data.Status === "Pending")&&(
			        <Button title={"Activate Account"} icon={check} onClick={onApprove} loading={activate.loading} className={"btn-primary w-auto py-2"}/>
		        )}
		        {(data.Status === "Active")&&(
			        <Button title={"Disable Account"} onClick={onDisable} loading={activate.loading} className={"btn-danger w-auto py-2"}/>
		        )}
		        {(data.Status === "Disabled")&&(
			        <Button title={"Enable Account"} onClick={onEnable} loading={activate.loading} className={"btn-secondary w-auto py-2"}/>
		        )}
	        </div>
        </>
    );
};

export default VendorAction;
