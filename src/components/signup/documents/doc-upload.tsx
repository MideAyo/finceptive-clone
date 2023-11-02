import React, {useState,useEffect} from 'react';
import {Button, Svg, useMutation} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";
import FileUploader from "@/components/inputs/file-uploader";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import useCache from "@/hooks/use-cache";
import {useRouter} from "next/router";

type DocUploadProps = {
    item:any
    id:string
    setAllow:(value:any)=>void
}

const DocUpload: React.FC<DocUploadProps> = (props) => {
    const {item, id, setAllow} = props;
    const [status,setStatus] = useState(false);
    const [files,setFiles] = useState([]);
    const {mutate,loading,error,data} = useMutation(PATHS.userUploads)
    const {Toast} = useApp();
    const {getData} = useCache();
    const router = useRouter();

    const formHandler=(file:string, onSuccess:(value:boolean)=>void)=>{
        const customerID = getData("customerID")||router.query.customerID;
        if (customerID){
            mutate({
                customerID,
                files:[file],
                doc_name:item.name
            }).then(({data,status,error})=>{
                if (status===200){
                    onSuccess(true)
                    setStatus(true)
                    setAllow(true)
                }else {
                    onSuccess(false)
                    Toast(error||"","red")
                }
            })
        }else{
            Toast("Customer ID is required","red")
        }
    }

    return (
        <>
            <div className="flex gap-8">
                <div className={`h-10 w-10 ${status?'bg-secondary':'bg-shade'} flex-center rounded-full z-10`}>
                    <Svg icon={check} className="w-4 text-light"/>
                </div>
                <div className="flex-1 bg relative px-5 py-3 border">
                    <div className="w-5 h-5 absolute -left-5 top-2 arrow-left"/>
                    <h3 className="text text-sm font-medium">{item.name}</h3>

                    <FileUploader
                        setFiles={setFiles}
                        className="mt-2"
                        id={id}
                        onUpload={(file, onSuccess)=>{
                            formHandler(file, onSuccess)
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default DocUpload;
