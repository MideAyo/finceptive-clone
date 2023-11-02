import React, {useState,useEffect} from 'react';
import {Svg} from "@/components/rn-alpha";
import {quick1, quick2, quick3, quick4, quick5, quick6} from "@/svg/quick";
import config from "@/config";

type PartnersAnalyticsProps = {}

const PartnersAnalytics: React.FC<PartnersAnalyticsProps> = (props) => {
    const {} = props;
    const menu = [
        {name:"Total Request", icon:quick1, value:0, color:"#D9E9FF"},
        {name:"Approved Requests", icon:quick2, value:0, color:"#E0FFED"},
        {name:"Pending Requests", icon:quick3, value:0, color:"rgba(255, 95, 21, 0.2)"},
        {name:"Total Approved Amount", icon:quick4, value:0, color:"rgba(155, 81, 224, 0.2)"},
        {name:"Total Rejected Amount", icon:quick5, value:0, color:"rgba(235, 87, 87, 0.2)"},
        {name:"Rejected Requests", icon:quick6, value:0, color:"rgba(255, 0, 51, 0.2)"},
    ]

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
                {menu.map((item,i)=>(
                    <div key={"dsd"+i} className="bg shadow py-5 rounded-md flex-between items-start px-5">
                        <div className="">
                            <div className={`w-10 h-10 rounded-full flex-center`} style={{backgroundColor:item.color}}>
                                <Svg icon={item.icon} className="w-5"/>
                            </div>
                            <p className="text text-xs mt-5">{item.name}</p>
                        </div>
                        <div className="">
                            <p className="text-2xl">{item.value}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default PartnersAnalytics;
