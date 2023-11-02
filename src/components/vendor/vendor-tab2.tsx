import React, {useState,useEffect} from 'react';
import {Button, Svg} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import {folder, upload} from "@/svg/icons";
import {baseUrl} from "@/config";
import {download} from "@/utils/icons/icons";

type VendorTab2Props = {
    data:any[]
    customerID:string
    type:"Individual"|"Corporate"
}

const VendorTab2: React.FC<VendorTab2Props> = (props) => {
    const {data, customerID, type} = props;
    const router = useRouter();

    return (
        <>

            <div className="w-full overflow-x-auto flex flex-wrap gap-4 p-5">
                {data.map((file,i)=>(
                    <a key={"doc"+i} download href={baseUrl+"/"+file} target="_blank" rel="noopener noreferrer" className="">
                        <div className="border-2 border-dashed bg-[#F4F4F4] rounded-md flex-item px-5 py-4 gap-4">
                            <div className="flex-item gap-4">
                                <Svg icon={folder} className="w-8"/>
                                <p className="text-sm">{file.split("/").reverse()?.[0]}</p>
                            </div>
                            <Svg icon={download} className="w-4 text-medium"/>
                        </div>
                    </a>
                ))}
            </div>
            <div className="px-5 py-5 flex flex-row-reverse">
                <Button
                    title={"Upload New Doc"}
                    className={"btn-primary-border w-auto"}
                    icon={upload}
                    onClick={()=>router.push(`/signup/${type==="Individual"?"individual":"corporate"}/documents?customerID=${customerID}&update=true`)}
                />
            </div>
        </>
    );
};

export default VendorTab2;
