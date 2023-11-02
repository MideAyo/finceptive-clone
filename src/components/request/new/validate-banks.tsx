import React, {useState,useEffect} from 'react';
import {Input, Loader, useMutation, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";

export type ValidateBanksProps = {
    value:string
    setValue:(val:string)=>void
    accountNumber:string
    bankCode:string
}

const ValidateBanks: React.FC<ValidateBanksProps> = (props) => {
    const {accountNumber, bankCode, setValue, value} = props;

    const {mutate, loading} = useMutation(PATHS.confirmAccount)
    const {Toast} = useApp();

    useEffect(()=>{
        if (accountNumber.length===10&&bankCode){
            validateAccount(accountNumber)
        }
    },[accountNumber,bankCode]);

    const validateAccount=(accountNumber:string)=>{
        const values = {
            "sortcode":bankCode,
            "account_no":accountNumber
        }
        mutate(values).then(({data,status,error})=>{
            if (status===200){
                setValue(data?.data?.accountName)
            }else if(data?.resultCode==="91") {
                Toast(data?.resultDescription||"", "red")
            }else {
                Toast(error||"", "red")
            }
        })
    };

    return (
        <div className="relative">
            {value&&(
                <Input
                    setValue={(value)=>{}}
                    value={value}
                    label={"Account Name"}
                    disabled
                    mt={20}
                />
            )}
            {loading&&(
                <div className="">
                    <Loader loading text={"Please wait.."}/>
                </div>
            )}
        </div>
    );
};

export default ValidateBanks;
