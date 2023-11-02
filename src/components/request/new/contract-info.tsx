import React from 'react';
import {Button, Formik, Input, useMutation, useQuery, Yup} from "@/components/rn-alpha";
import {NewRequest} from "@/types";
import {useApp} from "@/store/contexts/app-context";
import PATHS from "@/paths";
import banks from "@/utils/banks";
import CustomSelect from "@/components/inputs/custom-select";
import ValidateBanks from "@/components/request/new/validate-banks";

type ContractInfoProps = {
	type:string
	issuer:string
	setTransactionID:(value:string)=>void
	na:boolean
}

const ContractInfo: React.FC<ContractInfoProps&NewRequest> = (props) => {
    const {
	    next,
	    previous,
	    type,
	    issuer,
	    setTransactionID,
		na
    } = props;

	const {Toast} = useApp();
	const {mutate,loading} = useMutation(type==="lpo"?PATHS.createLPO:PATHS.createIDF)
	const bk = useQuery(PATHS.getBanks)

	const Schema = Yup.object().shape({
		poNumber: Yup.string().required('PO Number is required'),
		invoicePayableDate: Yup.string().required('Date is required'),
		loanAmount: Yup.number().required('Loan amount is required'),
		bank_code: Yup.string().required('Select Banks is required'),
		account_no: Yup.string().length(10).required('Account Number is required'),
		account_title: Yup.string().required('Account details requires validation'),
		deliveryDate: type==="lpo"?Yup.string().required('Expected delivery date is required'):Yup.string().notRequired()
	});

	const formHandler=(values:any)=>{
	    mutate(values).then(({data,status,error})=>{
	        if (status===200){
		        setTransactionID(data.transactionID)
		        next()
	        }else {
	            Toast(error||"", "red")
	        }
	    })
	}

    return (
        <div>
	        <h2 className="text-lg lg:text-xl font-semibold text">Contract Information</h2>
	        <p className="text-sm mt-2 font-light text-medium">Fill in the details of your <span className="uppercase">{type}</span></p>

	        <Formik
	            initialValues={{
		            issuer:na?"":issuer,
		            issuerName:na?issuer:"",
		            poNumber:"",
		            invoicePayableDate:"",
		            loanAmount:"",
		            bank_code:"",
		            account_no:"",
		            account_title:"",
		            deliveryDate:type==="lpo"?"":undefined
	            }}
	            onSubmit={(values => formHandler(values))}
	            validationSchema={Schema}
	            validateOnBlur={false}
	            validateOnChange={false}
	        >
	            {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
	               <>
		               <Input
			               label={"Purchase Order Number"}
			               setValue={(value)=>{setFieldValue("poNumber",value)}}
			               value={values.poNumber}
			               error={errors.poNumber}
			               mt={20}
		               />
		               <Input
			               label={"Invoice Payable Date"}
			               setValue={(value)=>{setFieldValue("invoicePayableDate",value)}}
			               value={values.invoicePayableDate}
			               error={errors.invoicePayableDate}
			               mt={20}
			               type={"date"}
		               />

		               {type==="lpo"&&(
			               <Input
				               label={"Expected Delivery Date"}
				               setValue={(value)=>{setFieldValue("deliveryDate",value)}}
				               value={values.deliveryDate}
				               error={errors.deliveryDate}
				               mt={20}
				               type={"date"}
			               />
		               )}

		               <Input
			               label={"Loan Amount"}
			               setValue={(value)=>{setFieldValue("loanAmount",value)}}
			               mt={20}
			               money
			               value={values.loanAmount}
			               error={errors.loanAmount}
		               />

		               <Input
			               label={"Account Number"}
			               setValue={(value)=>{setFieldValue("account_no",value.replace(/\D/g,""))}}
			               mt={20}
			               value={values.account_no}
			               error={errors.account_no}
			               maxLength={10}
		               />

		               <CustomSelect
			               label={"Bank"}
			               setValue={(value)=>{setFieldValue("bank_code",value)}}
			               mt={20}
			               options={bk.data?.map((data:any)=>(
							   {label:data.Bank,value:data.Sortcode}
			               ))||[]}
			               value={values.bank_code}
			               error={errors.bank_code||errors.account_title}
			               placeholder={"Select Bank"}
			               loading={bk.loading}
		               />

		               <ValidateBanks
			               value={values.account_title}
			               setValue={(value)=>{
				               setFieldValue("account_title",value)
			               }}
			               accountNumber={values.account_no}
			               bankCode={values.bank_code}
		               />

		               <div className="mt-10 flex flex-row-reverse gap-2">
			               <Button
				               title={"Next"}
				               className={"btn-primary w-auto"}
				               onClick={handleSubmit}
				               loading={loading}
			               />
			               <Button
				               title={"Previous"}
				               className={"w-auto bg border"}
				               onClick={previous}
			               />
		               </div>
	               </>
	            )}
	        </Formik>
        </div>
    );
};

export default ContractInfo;
