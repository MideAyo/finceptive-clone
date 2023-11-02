import React, {useState,useEffect} from 'react';
import {useApp} from "@/store/contexts/app-context";
import Visibility from "@/components/layouts/visibility";

export type ProfileInfoProps = {
    setTab:any
    tab:number
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({tab,setTab}) => {
    const {auth,user} = useApp();

    return (
        <div className="bg rounded-xl mt-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 border-b">
                <div
                    className="w-20 h-20 p-2 rounded-full"
                    style={{background:"linear-gradient(180deg, #F8EDFF 0%, rgba(196, 196, 196, 0.00) 100%)"}}>
                    <div className="h-full w-full flex-center bg-[#9B51E0] rounded-full">
                        <p className="text-xl text-white">{user?.Firstname?.[0]?.[0]} {user?.Lastname?.[1]?.[0]}</p>
                    </div>
                </div>
                <div>
                    <div className="flex-item gap-2">
                        <h1 className="text-lg font-semibold">{user?.Firstname} {user?.Lastname}</h1>
                    </div>
                    <p className="text text-sm">{user?.Role}</p>
                    <div className="flex-between gap-4 mt-4">
                        <div className="flex">
                            <p className="text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 flex gap-4">
                <button onClick={()=>setTab(1)} className={`${tab===1&&'border-b-2 border-primary'} py-3 text-sm px-5`}>Personal Detail</button>
                <button onClick={()=>setTab(2)} className={`${tab===2&&'border-b-2 border-primary'} py-3 text-sm px-5`}>Users</button>
                <button onClick={()=>setTab(3)} className={`${tab===3&&'border-b-2 border-primary'} py-3 text-sm px-5`}>KYC Docs</button>
                <Visibility types={["FundingPartner"]}>
                    <button onClick={()=>setTab(4)} className={`${tab===4&&'border-b-2 border-primary'} py-3 text-sm px-5`}>Bank Details</button>
                </Visibility>
            </div>
        </div>
    );
};

export default ProfileInfo;
