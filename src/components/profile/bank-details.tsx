import React, {useState,useEffect} from 'react';
import BankAccountInput from "@/components/profile/bank-account-input";
import {Button, Loader, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";

type BankDetailsProps = {
    customerID?:string
}

const BankDetails: React.FC<BankDetailsProps> = (props) => {
    const {customerID} = props;
    const [modal,setModal] = useState(false);
    const {loading,error,data, refetch} = useQuery(PATHS.getBankDetails,{variables:{customerID}})

    return (
        <div className="mt-2 bg p-5">

            {!customerID&&(
                <div className="flex">
                    <div className="flex-1"/>
                    <Button
                        title={"Edit Bank Details"}
                        onClick={()=> {
                            setModal(true)
                        }}
                        className={"btn-primary-border w-44"}
                    />
                </div>
            )}

            <Loader loading={(loading && (!data || data?.length < 1))}/>

            {data?.map((item:any, i:number)=>(
                <div key={"shdsd"+i} className="vendor-grid rounded-xl bg mt-2 py-5 border-b">
                    <div className="">
                        <p className="text-sm text-medium">Account Name</p>
                        <p className="text mt-1">{item?.AccountName}</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-medium">Account Number</p>
                        <p className="text mt-1">{item?.AccountNo}</p>
                    </div>
                    <div className="">
                        <p className="text-sm text-medium">Bank</p>
                        <p className="text mt-1">{item?.Bank}</p>
                    </div>
                </div>
            ))}

            {modal&&(
                <BankAccountInput close={()=> {
                    setModal(false)
                    refetch()
                }}/>
            )}
        </div>
    );
};

export default BankDetails;
