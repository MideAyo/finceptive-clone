import React, {useState,useEffect} from 'react';
import {Button, Formik, Input, useMutation, useQuery, Yup} from "@/components/rn-alpha";
import {edit} from "@/svg/icons";
import Modal from "@/components/global/modal";
import config from "@/config";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import money from "@/utils/money";
import SuccessModal from "@/components/global/success-modal";
import {useRouter} from "next/router";
import {RequestVariables} from "@/types";

type MakeCommitmentProps = {
	variables: RequestVariables
}

const MakeCommitment: React.FC<MakeCommitmentProps> = (props) => {
    const {variables} = props;
	const [modal,setModal] = useState(false);
	const {loading,error,data} = useQuery(PATHS.getFundingByID, {variables, networkPolicy:"network-and-cache"})
	const mt = useMutation(PATHS.createCommitments)
	const {Toast, showAlert} = useApp();
	const router = useRouter();

	const formHandler=(values:any)=>{
	    mt.mutate(values).then(({data,status,error})=>{
	        if (status===200){
	            setModal(false)
		        showAlert({
			        title:"Success",
			        text:"Your request has been sent successfully, you will be able to make the payment when it is approved.",
			        btn:{
						text:"Done",
				        onClick:()=>{
					        router.back()
				        }
			        }
		        })
	        }else {
	            Toast("Unable to create commitment","red")
	        }
	    })
	}

	const Schema = Yup.object().shape({
	    amount:Yup.number().min(data?.MinAmount||data?.Amount).required('amount is required'),
	});

    return (
        <>
	        <Button
		        title={"Create Commitment"}
		        className={"btn-primary mt-16"}
		        onClick={()=>{setModal(true)}}
		        icon={edit}
	        />

	        <Modal modal={modal} setModal={setModal} className="max-w-lg">
		        <div className="p-5 lg:p-10">
			        <h1 className="text-lg lg:-mt-5 font-semibold capitalize">make commitment</h1>
			        <Formik
			            initialValues={{
							...variables,
			                "amount":"",
				            "fundingRequestID":data?.ID,
			            }}
			            onSubmit={(values => formHandler(values))}
			            validationSchema={Schema}
			            validateOnBlur={false}
			            validateOnChange={false}
			        >
			            {({ handleChange, initialValues, handleSubmit, values, errors,setFieldValue }) => (
				            <div className="mt-5">
					            <Input
						            setValue={(value)=>{setFieldValue("amount",value)}}
						            placeholder={`Minimum Amount: ${config.naira}${money(Number(data?.MinAmount||data?.Amount), 2)}`}
						            label={"Amount"}
						            money
						            value={values.amount}
						            error={errors.amount}
					            />

					            <div className="flex-item gap-5 mt-10">
						            <Button
							            title={"Cancel"}
							            className={"btn-primary-border"}
							            onClick={()=>setModal(false)}
						            />
						            <Button
							            title={"Submit"}
							            className={"btn-primary"}
							            onClick={handleSubmit}
							            loading={mt.loading}
						            />
					            </div>
				            </div>
			            )}
			        </Formik>
		        </div>
	        </Modal>
        </>
    );
};

export default MakeCommitment;
