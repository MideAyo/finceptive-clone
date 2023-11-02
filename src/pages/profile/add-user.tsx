import React from 'react';
import Layout from "@/components/layouts";
import {Button, dayjs, Formik, Input, Select, useMutation, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import States from "@/components/signup/states";
import {useRouter} from "next/router";
import Visibility from "@/components/layouts/visibility";
import {withAuth} from "@/hoc/with-auth";

type AddUserProps = {}

const AddUser: React.FC<AddUserProps> = (props) => {
	const {mutate,loading,error,data} = useMutation(PATHS.addUser)
	const {Toast, user, showAlert} = useApp();
	const router = useRouter();

	const formHandler=(values:any)=>{
		mutate(values).then(({data,status,error})=>{
			if (status===200){
				showAlert({
					title:"Success",
					text:"User created successfully",
					btn:{
						text:"Done",
						onClick:()=>{
							router.back()
						}
					}
				})
			}else {
				Toast(error||"","red")
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
		// "role":Yup.string().required('Email is required'),
	});
    return (
        <Layout back>
	        <Visibility types={["FundingPartner", "Issuer", "Vendor"]}>
		        <div className="container max-w-2xl p-5 lg:p-10 bg rounded-lg">
			        <h1 className="text-xl font-semibold">Add User</h1>
			        <Formik
				        initialValues={{
					        "customerId":user.CustomerID,
					        "contact_firstname":"",
					        "contact_lastname":"",
					        "contact_mobile":"",
					        "contact_email":"",
					        "contact_bvn":"",
					        "contact_address":"",
					        "contact_gender":"",
					        "contact_designation":"",
					        "contact_state":"",
					        "contact_dateOfBirth":"",
				        }}
				        onSubmit={(values => formHandler(values))}
				        validationSchema={Schema}
				        validateOnBlur={false}
				        validateOnChange={false}
			        >
				        {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
					        <div>
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

						        <Button
							        title={"Submit"}
							        className={"btn-primary mt-10"}
							        onClick={handleSubmit}
							        loading={loading}
						        />
					        </div>
				        )}
			        </Formik>
		        </div>
	        </Visibility>
        </Layout>
    );
};

export default withAuth(AddUser);
