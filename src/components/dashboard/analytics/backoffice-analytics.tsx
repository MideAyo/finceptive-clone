import React, {useState,useEffect} from 'react';
import {quick1, quick2, quick3, quick4, quick5, quick6, vendor} from "@/svg/quick";
import config from "@/config";
import {Svg} from "@/components/rn-alpha";

type BackofficeAnalyticsProps = {}

const BackofficeAnalytics: React.FC<BackofficeAnalyticsProps> = (props) => {
    const {} = props;

    const menu = [
        {name:"New Vendors", icon:vendor, value:0, color:"#FF5F1533", iconColor:"#FF5F15"},
        {name:"Active Vendors", icon:vendor, value:0, color:"#D9E9FF", iconColor: "#1358BA"},
        {name:"Total Vendors", icon:vendor, value:0, color:"#E0FFED", iconColor:"#12B76A"},
        {name:"Total Issuers (Corporate)", icon:quick1, value:0, color:"#D9E9FF"},
        {name:"Confirmed Requests", icon:quick3, value:0, color:"rgba(255, 95, 21, 0.2)"},
        {name:"Pending Requests", icon:quick4, value:0, color:"rgba(155, 81, 224, 0.2)"},
    ]

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
                {menu.map((item,i)=>(
                    <div key={"dsd"+i} className="bg shadow py-5 rounded-md flex-between items-start px-5">
                        <div className="">
                            <div className={`w-12 h-12 rounded-full flex-center`} style={{backgroundColor:item.color}}>
                                <Svg icon={item.icon} color={item.iconColor} className={`w-6`}/>
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

export default BackofficeAnalytics;
