import React, {useState,useEffect} from 'react';
import {Button, Checkbox, dayjs, Formik, Input, Select, useMutation, useQuery, Yup} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import IndividualLayout from "@/components/signup/individual-layout";
import useCache from "@/hooks/use-cache";
import States from "@/components/signup/states";
import Attestation from "@/components/signup/attestation";
import {useApp} from "@/store/contexts/app-context";
import PATHS from "@/paths";

type IndividualProps = {}

const Individual: React.FC<IndividualProps> = (props) => {
    const {} = props;
    const router = useRouter();
    const {setCache, getData} = useCache();
    const [check,setCheck] = useState(false);
    const {Toast} = useApp();
    const {mutate,loading,error,data} = useMutation(PATHS.registerIndividual)

    const formHandler=(values:any)=>{
        let variables = {
            ...values,
        }
        mutate(variables).then(({status, data, error})=>{
            if (status === 200){
                setCache("customerID", data.customerID)
                router.push(`/signup/individual/documents?customerID=${data.customerID}`)
            }else {
                Toast(error||"", "red")
            }
        })
    }

    const Schema = Yup.object().shape({
        "contact_firstname":Yup.string().required('Firstname is required'),
        "contact_lastname":Yup.string().required('Lastname is required'),
        "contact_bvn":Yup.string().length(11).required('BVN is required'),
        "contact_gender":Yup.string().required('Gender is required'),
        "contact_dateOfBirth":Yup.string().required('Date of Birth is required'),
        "contact_state":Yup.string().required('State is required'),
        "contact_designation":Yup.string().required('Designation is required'),
        "contact_address":Yup.string().required('Address is required'),
        "contact_mobile":Yup.string().length(11).required('Mobile is required'),
        "contact_email":Yup.string().required('Email is required'),
    });

    return (
        <IndividualLayout title={"Welcome!"} text={"Sign up for a Individual Account below"} step={1}>
            <Formik
                initialValues={{
                    "type": getData("accType")||"Vendor",
                    "contact_firstname":"",
                    "contact_lastname":"",
                    "contact_bvn":"",
                    "contact_gender":"",
                    "contact_dateOfBirth":"",
                    "contact_state":"",
                    "contact_designation":"",
                    "contact_address":"",
                    "contact_mobile":"",
                    "contact_email":"",
                    "referral_code":"",
                    ...(getData("regInContact")||{})
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
                                <p className="text-secondary font-semibold">Contact Information</p>
                            </div>
                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_firstname",value)}}
                                    label={"First Name"}
                                    cs="flex-1"
                                    value={values.contact_firstname}
                                    error={errors.contact_firstname}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_lastname",value)}}
                                    label={"Last Name"}
                                    cs="flex-1"
                                    value={values.contact_lastname}
                                    error={errors.contact_lastname}
                                />
                            </div>
                            <Input
                                setValue={(value)=>{setFieldValue("contact_email",value)}}
                                label={"Email"}
                                cs="flex-1 mt-5"
                                value={values.contact_email}
                                error={errors.contact_email}
                            />
                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_mobile",value)}}
                                    label={"Phone Number"}
                                    cs="flex-1"
                                    value={values.contact_mobile}
                                    error={errors.contact_mobile}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_bvn",value.replace(/\D/g,''))}}
                                    label={"BVN"}
                                    cs="flex-1"
                                    value={values.contact_bvn}
                                    error={errors.contact_bvn}
                                    maxLength={11}
                                />
                            </div>
                            <div className="flex gap-5 mt-5">
                                <Select
                                    setValue={(value)=>{setFieldValue("contact_gender",value)}}
                                    label={"Gender"}
                                    cs="flex-1"
                                    options={[
                                        {label:"Male", value:"Male"},
                                        {label:"Female", value:"Female"}
                                    ]}
                                    value={values.contact_gender}
                                    error={errors.contact_gender}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_dateOfBirth",value)}}
                                    label={"Date of Birth"}
                                    cs="flex-1"
                                    value={values.contact_dateOfBirth}
                                    error={errors.contact_dateOfBirth}
                                    type={"date"}
                                    max={dayjs().subtract(25, 'year').toISOString().slice(0,10)}
                                />
                            </div>
                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("contact_designation",value)}}
                                    label={"Job Title"}
                                    cs="flex-1"
                                    value={values.contact_designation}
                                    error={errors.contact_designation}
                                />

                                <States
                                    setValue={(value)=>{setFieldValue("contact_state",value)}}
                                    label={"State of Origin"}
                                    cs="flex-1"
                                    value={values.contact_state}
                                    error={errors.contact_state}
                                />
                            </div>

                            <Input
                                setValue={(value)=>{setFieldValue("contact_address",value)}}
                                label={"Residential Address"}
                                cs="flex-1 mt-5"
                                value={values.contact_address}
                                error={errors.contact_address}
                            />

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
        </IndividualLayout>
    );
};

export default Individual;
