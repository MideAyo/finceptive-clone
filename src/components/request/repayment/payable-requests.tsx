import React, {useState,useEffect} from 'react';
import Table from "@/components/global/table";
import {Button, Svg, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Link from "next/link";
import {baseUrl} from "@/config";
import {file} from "@/svg/icons";
import Visibility from "@/components/layouts/visibility";
import MakePaymentModal from "@/components/request/repayment/make-payment-modal";
import money from "@/utils/money";

type PayableRequestsProps = {}

const PayableRequests: React.FC<PayableRequestsProps> = (props) => {
    const {} = props;
    const variables = {offset:0, limit:20}
    const {loading,error,data, fetchMore, refetch} = useQuery(PATHS.payables, {variables})
    const [modal,setModal] = useState(false);
    const [selected,setSelected] = useState<any>({});

    const list = data?.data?.map((item:any)=>([
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
    ]))

    return (
        <>
            <Table
                header={["Funding Partner", "Amount", "Status", "Proof Of Payment", "Date Due", "Action"]}
                data={list||[]}
                statusIndex={2}
                title={""}
                emptyText={"There are currently no data to track"}
                offsetType={"paginate"}
                loading={loading && !data}
                pagination={{
                    limit: variables.limit,
                    dataCount:data?.pagination?.dataCount,
                    total: data?.pagination?.total,
                    fetchMore
                }}
            />
            {modal&&(
                <MakePaymentModal
                    modal={true}
                    setModal={setModal}
                    data={selected}
                    refetch={refetch}
                />
            )}
        </>
    );
};

export default PayableRequests;
