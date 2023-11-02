import React, {useState,useEffect} from 'react';
import {Button, dayjs, Formik, Input, Select, Svg, Yup} from "@/components/rn-alpha";
import {idTypes, marital} from "@/utils/constants";
import {close} from "@/svg/icons";
import useCache from "@/hooks/use-cache";
import {useRouter} from "next/router";
import ListenForError from "@/components/signup/listen-for-error";
import States from "@/components/signup/states";
import Titles from "@/components/signup/titles";

type DirectorsFormProps = {
    save:(values:any)=>void
    add:()=>void
    next:()=>void
    index:number
    onRemove:(index:number)=>void
    last: number
}

const DirectorsForm: React.FC<DirectorsFormProps> = (props) => {
    const {add, save, onRemove, index, last, next} = props;
    const {getData, setCache} = useCache();
    const router = useRouter();

    const Schema = Yup.object().shape({
        "firstname":Yup.string().required('Firstname is required'),
        "title":Yup.string().required('Title is required'),
        "lastname":Yup.string().required('Lastname is required'),
        "middlename":Yup.string().optional(),
        "maritalStatus":Yup.string().required('Marital status is required'),
        "state":Yup.string().required('State is required'),
        "dateOfBirth":Yup.string().required('Date Of Birth is required'),
        "address":Yup.string().required('Address is required'),
        "bvn":Yup.string().length(11).required('BVN is required'),
        "mobile":Yup.string().length(11).required('Mobile no is required'),
        "email":Yup.string().required('Email is required'),
        "gender":Yup.string().required('Gender is required'),
        "MeansOfID": Yup.object().shape({
            "Type":Yup.string().required('ID Type is required'),
            "IDNumber":Yup.string().required('ID Number is required'),
            "PlaceOfIssuance":Yup.string().required('PlaceOfIssuance is required'),
            "ID_Issue_Date":Yup.string().required('Date is required'),
            "ID_Expiry_Date":Yup.string().optional()
        }),
        // "ID_Document":Yup.string().required(' is required')
    });


    return (
        <>
            <Formik
                initialValues={{
                    "firstname":"",
                    "title":"",
                    "lastname":"",
                    "maritalStatus":"",
                    "state":"",
                    "dateOfBirth":"",
                    "address":"",
                    "bvn":"",
                    "mobile":"",
                    "email":"",
                    "MeansOfID": {
                        "Type":"",
                        "IDNumber":"",
                        "PlaceOfIssuance":"",
                        "ID_Issue_Date":"",
                        "ID_Expiry_Date":""
                    },
                    "gender":"",
                    "ID_Document":"",
                    ...(getData("regDirectors")?.[index]||{})
                }}
                onSubmit={(values => save(values))}
                validationSchema={Schema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ handleChange, validateField, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                    <>
                        <div className="mt-10">
                            <div className="border-b border-secondary flex-between">
                                <p className="text-secondary font-semibold">Director Information</p>

                                {index!==0&&(
                                    <div onClick={()=>onRemove(index)} className="w-10 h-10 flex-center bg-[#F1F7FE] mb-1 rounded-full cursor-pointer">
                                        <Svg icon={close} className="w-6 text-danger"/>
                                    </div>
                                )}

                            </div>

                            <div className="flex gap-5 mt-5">
                                <Titles
                                    setValue={(value)=>{setFieldValue("title",value)}}
                                    label={"Title"}
                                    cs="flex-1"
                                    value={values.title}
                                    error={errors.title}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("firstname",value)}}
                                    label={"First Name"}
                                    cs="flex-1"
                                    value={values.firstname}
                                    error={errors.firstname}
                                />
                            </div>

                            <Input
                                setValue={(value)=>{setFieldValue("middlename",value)}}
                                label={"Middlename"}
                                cs="mt-5"
                                value={values.middlename}
                                error={errors.middlename}
                            />

                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("lastname",value)}}
                                    label={"Last Name"}
                                    cs="flex-1"
                                    value={values.lastname}
                                    error={errors.lastname}
                                />
                                <Select
                                    setValue={(value)=>{setFieldValue("maritalStatus",value)}}
                                    label={"Marital Status"}
                                    cs="flex-1"
                                    options={marital}
                                    value={values.maritalStatus}
                                    error={errors.maritalStatus}
                                />
                            </div>

                            <div className="flex gap-5 mt-5">
                                <States
                                    setValue={(value)=>{setFieldValue("state",value)}}
                                    label={"State of Origin"}
                                    cs="flex-1"
                                    value={values.state}
                                    error={errors.state}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("dateOfBirth",value)}}
                                    label={"Date of Birth"}
                                    cs="flex-1"
                                    type={"date"}
                                    value={values.dateOfBirth}
                                    error={errors.dateOfBirth}
                                    max={dayjs().subtract(18, 'year').toISOString().slice(0,10)}
                                />
                                <Select
                                    options={[{label:"Male", value:"Male"},{label:"Female", value:"Female"}]}
                                    setValue={(value)=>{setFieldValue("gender",value)}}
                                    label={"Gender"}
                                    cs="flex-1"
                                    value={values.gender}
                                    error={errors.gender}
                                />
                            </div>

                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("mobile",value)}}
                                    label={"Phone Number"}
                                    cs="flex-1"
                                    value={values.mobile}
                                    error={errors.mobile}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("bvn",value.replace(/\D/g,""))}}
                                    label={"BVN"}
                                    cs="flex-1"
                                    value={values.bvn}
                                    error={errors.bvn}
                                    maxLength={11}
                                />
                            </div>

                            <Input
                                setValue={(value)=>{setFieldValue("address",value)}}
                                label={"Residential Address"}
                                placeholder={""}
                                cs={"mt-5"}
                                value={values.address}
                                error={errors.address}
                            />

                            <Input
                                setValue={(value)=>{setFieldValue("email",value)}}
                                label={"Email Address"}
                                placeholder={""}
                                cs={"mt-5"}
                                value={values.email}
                                error={errors.email}
                            />

                            <div className="flex gap-5 mt-5">
                                <Select
                                    setValue={(value)=>{setFieldValue("MeansOfID.Type",value)}}
                                    label={"Mode of Identification"}
                                    cs="flex-1"
                                    options={idTypes}
                                    value={values.MeansOfID.Type}
                                    // @ts-ignore
                                    error={errors.MeansOfID?.Type}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("MeansOfID.IDNumber",value)}}
                                    label={"ID Number"}
                                    cs="flex-1"
                                    value={values.MeansOfID.IDNumber}
                                    // @ts-ignore
                                    error={errors.MeansOfID?.IDNumber}
                                />
                            </div>

                            <Input
                                setValue={(value)=>{setFieldValue("MeansOfID.PlaceOfIssuance",value)}}
                                label={"Place of Issuance"}
                                placeholder={""}
                                cs={"mt-5"}
                                value={values.MeansOfID.PlaceOfIssuance}
                                // @ts-ignore
                                error={errors.MeansOfID?.PlaceOfIssuance}
                            />

                            <div className="flex gap-5 mt-5">
                                <Input
                                    setValue={(value)=>{setFieldValue("MeansOfID.ID_Issue_Date",value)}}
                                    label={"ID Issue Date"}
                                    cs="flex-1"
                                    value={values.MeansOfID.ID_Issue_Date}
                                    // @ts-ignore
                                    error={errors.MeansOfID?.ID_Issue_Date}
                                    type={"date"}
                                    max={new Date().toISOString().slice(0,10)}
                                />
                                <Input
                                    setValue={(value)=>{setFieldValue("MeansOfID.ID_Expiry_Date",value)}}
                                    label={"ID Expiry Date"}
                                    cs="flex-1"
                                    value={values.MeansOfID.ID_Expiry_Date}
                                    // @ts-ignore
                                    error={errors.MeansOfID?.ID_Expiry_Date}
                                    type={"date"}
                                    min={new Date().toISOString().slice(0,10)}
                                />
                            </div>
                        </div>


                        {last === index&&(
                            <div className="">
                                <ListenForError
                                    errors={errors}
                                    onClick={handleSubmit}
                                    onSuccess={add}
                                >
                                    <div className="py-2 mt-5">
                                        <p className="text-primary">+ Add another director</p>
                                    </div>
                                </ListenForError>


                                <ListenForError
                                    errors={errors}
                                    onClick={handleSubmit}
                                    onSuccess={next}
                                >
                                    <Button
                                        title={"Continue"}
                                        className={"btn-primary mt-10"}
                                        onClick={()=>{}}
                                    />
                                </ListenForError>
                            </div>
                        )}
                    </>
                )}
            </Formik>
        </>
    );
};

export default DirectorsForm;
