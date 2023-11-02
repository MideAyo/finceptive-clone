import React, {useState,useEffect} from 'react';
import {Checkbox, useMutation} from "@/components/rn-alpha";
import Textarea from "@/components/inputs/textarea";
import FileUploader from "@/components/inputs/file-uploader";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";

type ValidInvalidProps = {
	data:any
	setData:(key:string, value:any)=>void
	transactionID:string
}

const StepValidation: React.FC<ValidInvalidProps> = (props) => {
    const {data, setData, transactionID} = props;
	const {mutate,loading,error} = useMutation(PATHS.upload)
	const {Toast} = useApp();

	const formHandler=(file:string, onSuccess:(value:boolean)=>void)=>{
		const files = data.files;
	    mutate({
			transactionID,
			file
		}).then(({data,status,error})=>{
	        if (status===200){
		        onSuccess(true)
				setData("files", [...(files||[]), data.file])
	        }else {
		        onSuccess(false)
	            Toast(error||"")
	        }
	    })
	}


	const list = [
		{label:"valid", color:"success", value:true},
		{label:"invalid", color:"danger", value:false},
	]

    return (
		<div>
			<div className="flex gap-2 mt-5 border-success">
				{list.map((item, i)=>{
					const checked = data["valid"] !== null && data["valid"] === item.value
					return (
						<div
							key={"bhsjhsf"+i}
							onClick={()=>{setData("valid", item.value)}}
							className={`flex-item gap-2 py-3 border rounded-md bg flex-1 px-5 ${checked&&`border-${item.color}`} cursor-pointer`}
						>
							<Checkbox selected={checked} color={item.color} setSelected={()=>{setData("valid", item.value)}}/>
							<p className={`text text-sm capitalize ${checked&&`text-${item.color}`}`}>{item.label}</p>
						</div>
					)
				})}
			</div>

			<Textarea
				setValue={(value)=>{setData("comment", value)}}
				value={data.comment}
				label={"Add comment"}
				placeholder={"Write a comment"}
				className="h-12"
				mt={20}
			/>

			<FileUploader
				multiple={false}
				label={"Upload Document"}
			    setFiles={(files)=>{}}
				className="mt-2"
				onUpload={(file, onSuccess)=>{
					formHandler(file, onSuccess)
				}}
			/>

		</div>
    );
};

export default StepValidation;
