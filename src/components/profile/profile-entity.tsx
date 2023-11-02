import React, {useState,useEffect} from 'react';
import toWord from "@/utils/toWord";
import {useApp} from "@/store/contexts/app-context";

export type ProfileEntityProps = {
}

const ProfileEntity: React.FC<ProfileEntityProps> = ({}) => {
    const {auth,user} = useApp();
    // const {data} = useQuery(PATHS.getUser, { variables:{user_id:auth.user_id}, networkPolicy:"network-and-cache"})

    const data:any = {...user}
    delete data.CustomerID
    delete data.DateApproved
    delete data.ApprovedBy
    delete data.UserID

    return (
        <div className="">
            <div className="vendor-grid rounded-xl bg mt-2">
                {Object.keys(data).map((key,i)=>(
                    <div key={"dshdd"+i} className="">
                        <p className="text-sm text-medium">{toWord(key)}</p>
                        <p className="text mt-1">{data[key]||"-"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileEntity;
