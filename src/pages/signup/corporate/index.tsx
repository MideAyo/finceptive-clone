import React, {useState} from 'react';
import {Button, Checkbox, Formik, Input, Yup} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";
import CorporateLayout from "@/components/signup/corporate-layout";
import Link from "next/link";
import Attestation from "@/components/signup/attestation";

type CorporateProps = {}

const Corporate: React.FC<CorporateProps> = (props) => {
	const router = useRouter();
	const {getData, setCache} = useCache();
	const [check,setCheck] = useState(false);

	const formHandler=(values:any)=>{
		setCache("regData", values)
		router.push("/signup/corporate/directors")
	}

	const Schema = Yup.object().shape({
		"business_name": Yup.string().required('Business name is required'),
		"reg_no": Yup.string().required('Reg no is required'),
		"business_email": Yup.string().required('Email is required'),
		"business_tin": Yup.string().required('Ein is required'),
		"business_phone": Yup.string().max(11).required('Phone number is required'),
		"business_type": Yup.string().required('Business Nature is required'),
		"office_address": Yup.string().required('Address is required'),
		"registered_address": Yup.string().required('Registered address is required'),
	});

    return (
        <CorporateLayout
	        step={1}
	        title={"Welcome!"}
	        text={"Sign up for a Individual Account below"}
        >
			<Formik
				initialValues={{
					"business_name":"",
					"reg_no":"",
					"business_email":"",
					"business_tin":"",
					"type": getData("accType")||"Vendor",
					"business_phone":"",
					"business_altPhone":"",
					"business_type":"",
					"office_address":"",
					"registered_address":"",
					...(getData("regData")||{}),
					"referral_code":""
				}}
				onSubmit={(values => formHandler(values))}
				validationSchema={Schema}
				validateOnBlur={false}
				validateOnChange={false}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
					<>
						<div className="mt-10">
							<div className="border-b border-secondary">
								<p className="text-secondary font-semibold">Company Information</p>
							</div>

							<Input
								setValue={(value)=>{setFieldValue("business_name",value)}}
								label={"Company / Business name"}
								placeholder={""}
								cs={"mt-5"}
								value={values.business_name}
								error={errors.business_name}
							/>

							<Input
								setValue={(value)=>{setFieldValue("business_type",value)}}
								label={"Type / Nature of Business"}
								placeholder={""}
								cs={"mt-5"}
								value={values.business_type}
								error={errors.business_type}
							/>

							<Input
								setValue={(value)=>{setFieldValue("office_address",value)}}
								label={"Operating Address"}
								placeholder={""}
								cs={"mt-5"}
								value={values.office_address}
								error={errors.office_address}
							/>
                            
							<Input
								setValue={(value)=>{setFieldValue("registered_address",value)}}
								label={"Registered Business Address"}
								placeholder={""}
								cs={"mt-5"}
								value={values.registered_address}
								error={errors.registered_address}
							/>

							<Input
								setValue={(value)=>{setFieldValue("business_email",value)}}
								label={"Business Email Address"}
								placeholder={""}
								cs={"mt-5"}
								value={values.business_email}
								error={errors.business_email}
							/>

							<div className="flex gap-5 mt-5">
								<Input
									setValue={(value)=>{setFieldValue("reg_no",value)}}
									label={"Registration Number"}
									cs="flex-1"
									value={values.reg_no}
									error={errors.reg_no}
								/>
								<Input
									setValue={(value)=>{setFieldValue("business_tin",value)}}
									label={"Tax ID Number"}
									cs="flex-1"
									value={values.business_tin}
									error={errors.business_tin}
								/>
							</div>

							<div className="flex gap-5 mt-5">
								<Input
									setValue={(value)=>{setFieldValue("business_phone",value)}}
									label={"Mobile Phone 1"}
									cs="flex-1"
									value={values.business_phone}
									error={errors.business_phone}
								/>
								<Input
									setValue={(value)=>{setFieldValue("business_altPhone",value)}}
									label={"Mobile Phone 2"}
									cs="flex-1"
									value={values.business_altPhone}
									error={errors.business_altPhone}
								/>
							</div>
							<Input
								setValue={(value)=>{setFieldValue("referral_code",value)}}
								label={"Referral Code"}
								placeholder={""}
								cs={"mt-5"}
								value={values.referral_code}
								error={errors.referral_code}
							/>
						</div>

						<Attestation check={check} setCheck={setCheck}/>

						<Button
							title={"Continue"}
							className={"btn-primary mt-10"}
							onClick={handleSubmit}
							disabled={!check}
						/>
					</>
				)}
			</Formik>
		</CorporateLayout>
    );
};

export default Corporate;
