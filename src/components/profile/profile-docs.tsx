import React, {useState,useEffect} from 'react';
import {baseUrl} from "@/config";
import {Button, Svg, useQuery} from "@/components/rn-alpha";
import {folder, upload} from "@/svg/icons";
import {download} from "@/utils/icons/icons";
import {useRouter} from "next/router";
import PATHS from "@/paths";

type ProfileDocsProps = {
    customerID:string
}

const ProfileDocs: React.FC<ProfileDocsProps> = (props) => {
    const { customerID} = props;
    const router = useRouter();

    const {data} = useQuery(PATHS.getEntityById, { variables:{customerID}})

    return (
        <div className="bg mt-2">
            <div className="w-full overflow-x-auto flex flex-wrap gap-4 p-5">
                {data?.Docs&&JSON.parse(data?.Docs)?.map((file:any,i:number)=>(
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
                    onClick={()=>router.push(`/signup/${data?.Type==="Individual"?"individual":"corporate"}/documents?customerID=${customerID}&update=true`)}
                />
            </div>
        </div>
    );
};

export default ProfileDocs;
