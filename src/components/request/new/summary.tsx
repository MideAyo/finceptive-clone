import React, {useState,useEffect} from 'react';
import {Button, Svg} from "@/components/rn-alpha";
import {bank, clock, edit, file} from "@/svg/icons";
import {NewRequest} from "@/types";

type SummaryProps = {}

const Summary: React.FC<SummaryProps&NewRequest> = (props) => {
    const {} = props;

    const data = [
        {label:"Date Created", value:"Wednesday Jun 7, 2023 | 4:15pm"},
        {label:"Contact Type", value:"Local Purchase Order"},
        {label:"Issuer", value:"ECL Global Ventures"},
        {label:"Purchase Order Number", value:"PO-00001"},
        {label:"Invoice Payable Date", value:"12-06-2023"},
        {label:"Expected Delivery Date", value:"08-06-2023"},
        {label:"Loan Amount", value:"100,000.00"},
    ];

    const details = [
        {label:"Name", value:"Kenneth Irechukwu"},
        {label:"Address", value:"56 Olasonde, Mushin Lagos"},
        {label:"Email Address", value:"kenneth.irechukwu@gmail.com"},
        {label:"Phone Number", value:"08155250425"},
    ];

    return (
        <section className="">
            <h2 className="text-lg lg:text-xl font-semibold text">Summary</h2>

            <div className="bg-[#F1F7FE] p-5 mt-5">
                <div className="bg-[#F1F7FE] rounded-lg mt-5 flex flex-col gap-5">
                    {data.map((item, i)=>(
                        <div key={"dhdssf"+i} className="flex-between">
                            <p className="text-sm text font-bold">
                                {item.label}
                            </p>
                            <p className="text-sm font-light">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="py-10">
                    <div className="flex-item gap-4 py-4 px-5 bg-[#F4F4F4] border border-dashed rounded border-[#002E6E99]">
                        <Svg icon={file} className="w-5"/>
                        <p className="text-sm">Stamped Invoice Document</p>
                    </div>
                </div>

                <h2 className="text-base font-bold mt-5">Supplier Details</h2>
                <div className="bg-[#F1F7FE] rounded-lg mt-5 flex flex-col gap-5">
                    {details.map((item, i)=>(
                        <div key={"dhdssf"+i} className="flex-between">
                            <p className="text-sm text-[#848485] font-bold">
                                {item.label}
                            </p>
                            <p className="text-sm font-light">{item.value}</p>
                        </div>
                    ))}

                    <div className="flex-item gap-5 bg px-5 lg:px-10 py-2">
                        <Svg icon={bank} className="w-6"/>
                        <div className="flex-1">
                            <p className="text text-sm font-bold">IRECHUKWU KENNETH TOBECHUKWU</p>
                            <p className="text-xs lg:text-sm text-medium">First Bank of Nigeria  3150106059</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
