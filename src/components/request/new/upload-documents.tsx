import React, {useState,useEffect} from 'react';
import {Button, Input, Svg, useMutation} from "@/components/rn-alpha";
import FileUploader from "@/components/inputs/file-uploader";
import {NewRequest} from "@/types";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import SuccessModal from "@/components/global/success-modal";
import {useRouter} from "next/router";
import sweetalert from "@/utils/sweetalert";
import {check} from "@/utils/icons/icons";

type UploadDocumentsProps = {
	transactionID: any
	type:string
}

const UploadDocuments: React.FC<UploadDocumentsProps&NewRequest> = (props) => {
    const {type, transactionID} = props;
	const [files,setFiles] = useState([]);
	const {mutate,loading,error,data} = useMutation(PATHS.requestDocs)
	const {Toast} = useApp();
	const [modal,setModal] = useState(false);
	const [allow,setAllow] = useState(false);
	const router = useRouter();

	const formHandler=(file:string, onSuccess:(value:boolean)=>void, name:string)=>{
		const values = {
			"type":type.toUpperCase(), //IDF, LPO
			"transactionID":transactionID,
			"docname":name,
			"files":[file]
		}
		mutate(values).then(({data,status,error})=>{
			if (status===200){
				onSuccess(true)
				setAllow(true)
			}else {
				onSuccess(false)
				Toast(error||"","red")
			}
		})
	}

	const list = [
		{name:`Evidence of ${type.toUpperCase()}`, status:false, type:"invoice", required:true},
		{name:"Company profile", status:false, type:"others", required:true},
		{name:"12 months bank statement", status:false, type:"others", required:true},
		{name:"Collateral Documents", status:false, type:"others", required:false},
		{name:"3 years of audited financials", status:false, type:"others", required:false},
		{name:"Evidence of previous work done", status:false, type:"others", required:false},
	]

    return (
        <div>
	        <h2 className="text-lg lg:text-xl font-semibold text">{`Upload${router.query?.transactionID ? " Additional " : " "}Documents`}</h2>

			<div className="flex flex-col gap-10 mt-5 relative">
				{list.map((item,i)=>(
					<div className="flex gap-8">
						<div className={`h-10 w-10 ${item.status?'bg-secondary':'bg-shade'} flex-center rounded-full z-10`}>
							<Svg icon={check} className="w-4 text-light"/>
						</div>
						<div className="flex-1 bg relative px-5 py-3 border">
							<div className="w-5 h-5 absolute -left-5 top-2 arrow-left"/>
							<h3 className="text text-sm font-medium">{item.name} {item.required&&(<span className="text-danger">*</span>)}</h3>

							<FileUploader
								setFiles={setFiles}
								className="mt-2"
								id={item.name+i}
								onUpload={(file, onSuccess)=>{
									formHandler(file, onSuccess, item.type+"-"+item.name)
								}}
							/>
						</div>
					</div>
				))}
				<div className="absolute inset-y-0 left-0 w-10">
					<div className="h-[80%] flex-center">
						<div className="w-0 border-l h-full"/>
					</div>
				</div>
			</div>

			<div className="mt-10 flex flex-row-reverse gap-2">
				<Button
					title={"Submit"}
					className={"btn-primary w-auto"}
					onClick={()=>{
						sweetalert({
							title:"Please Hold On!",
							text:"Are you sure you have uploaded all the required documents",
							confirm:{text:"Yes, proceed", className:"btn-primary"}
						}).then((okay)=>{
							if (okay){
								if (router.query?.transactionID){
									router.push(`/requests/${type}/${transactionID}`).catch(()=>{})
								}else {
									setModal(true)
								}
							}
						})
					}}
					disabled={!allow}
				/>
			</div>


	        <SuccessModal
		        title={"Request Created"}
		        text={"We will get back to you shortly"}
		        btn={{
					text:"View Request Detail",
			        href: `/requests/${type}/${transactionID}`
		        }}
		        modal={modal}
		        setModal={setModal}
	        />
        </div>
    );
};

export default UploadDocuments;
