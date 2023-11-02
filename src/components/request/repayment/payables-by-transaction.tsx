import React, {useState,useEffect} from 'react';
import {Button, Svg, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {baseUrl} from "@/config";
import {file} from "@/svg/icons";
import Visibility from "@/components/layouts/visibility";
import Link from "next/link";
import Table from "@/components/global/table";
import money from "@/utils/money";
import MakePaymentModal from "@/components/request/repayment/make-payment-modal";
import {RequestVariables} from "@/types";

type PayablesByTransactionProps = {
    variables: RequestVariables

}

const PayablesByTransaction: React.FC<PayablesByTransactionProps> = (props) => {
    const {variables} = props;
    const {loading,error,data, refetch} = useQuery(PATHS.payablesByTransactionId, {variables})
    const [modal,setModal] = useState(false);
    const [selected,setSelected] = useState<any>({});

    const list = data?.map((item:any, i:number)=>(
        [
            item.Name,
            money(Number(item.Amount),2),
            item.Status,
            <div className="flex gap-2">
                {JSON.parse(item.ProofOfPayment).map((item:any,i:number)=>(
                    <a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
                        <Svg icon={file} className="w-8 text-primary"/>
                    </a>
                ))}
            </div>,
            item.DateDue,
            <div className="flex gap-4">
                {item.Status==="New"&&(
                    <Visibility types={["BackOffice"]} roles={["Finance","Compliance"]}>
                        <Button
                            onClick={()=>{
                                setSelected(item)
                                setModal(true)
                            }}
                            title={"Make Payment"}
                            className={"btn-primary w-auto py-2"}
                        />
                    </Visibility>
                )}
            </div>
        ]
    ));

    return (
        <div className="mt-10">
            <Table
                header={["Funding Partner", "Amount", "Status", "Proof Of Payment", "Date Due", "Action"]}
                data={list||[]}
                statusIndex={2}
                title={"Payables"}
                emptyText={"There are currently no data to track"}
                loading={loading && !data}
            />
            {modal&&(
                <MakePaymentModal
                    modal={true}
                    setModal={setModal}
                    data={selected}
                    refetch={refetch}
                />
            )}
        </div>
    );
};

export default PayablesByTransaction;
