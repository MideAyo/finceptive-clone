import React, {useState,useEffect} from 'react';
import {ModalProps} from "@/types";
import Modal from "@/components/global/modal";
import {Button, Formik, Input, useMutation, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";

type AddUserProps = {}

const AddUser: React.FC<AddUserProps&ModalProps> = (props) => {
    const {modal, setModal} = props;
	const {mutate,loading,error,data} = useMutation(PATHS.addUser)
	const {Toast, user} = useApp();

	const formHandler=(values:any)=>{
	    mutate(values).then(({data,status,error})=>{
	        if (status===200){
		        setModal(false)
		        Toast("User created successfully","green",10)
	        }else {
	            Toast(error||"")
	        }
	    })
	}

	const Schema = Yup.object().shape({
		"contact_firstname":Yup.string().required('Firstname is required'),
		"contact_lastname":Yup.string().required('Lastname is required'),
		"contact_mobile":Yup.string().length(11).required('Mobile number is required'),
		"contact_email":Yup.string().email().required('Email is required is required'),
		"contact_bvn":Yup.string().email().required('BVN is required is required'),
		"contact_address":Yup.string().email().required('Address is required is required'),
		"contact_gender":Yup.string().email().required('Gender is required is required'),
		"contact_designation":Yup.string().email().required('Designation is required is required'),
		"contact_state":Yup.string().email().required('State is required is required'),
		"contact_dateOfBirth":Yup.string().email().required('Date Of Birth is required is required'),
	});


    return (
        <Modal modal={modal} setModal={setModal} className="max-w-xl p-5 lg:p-10" align={"py-20"} close>
	        <h1 className="text-xl font-semibold">Invite a user</h1>
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
		            <div className="mt-4">
			            <Input
				            setValue={(value)=>{setFieldValue("contact_firstname",value)}}
				            value={values.contact_firstname}
				            error={errors.contact_firstname}
				            label="Firstname"
				            placeholder={""}
				            mt={20}
			            />
			            <Input
				            setValue={(value)=>{setFieldValue("contact_lastname",value)}}
				            value={values.contact_lastname}
				            error={errors.contact_lastname}
				            label="Lastname"
				            placeholder={""}
				            mt={20}
			            />
			            <Input
				            setValue={(value)=>{setFieldValue("contact_mobile",value)}}
				            value={values.contact_mobile}
				            error={errors.contact_mobile}
				            label="Phone Number"
				            placeholder={""}
				            mt={20}
			            />
			            <Input
				            setValue={(value)=>{setFieldValue("contact_email",value)}}
				            value={values.contact_email}
				            error={errors.contact_email}
				            label={"Email Address"}
				            placeholder={""}
				            mt={20}
			            />

			            <Button
				            title={"Create User"}
				            className={"btn-primary mt-10"}
				            onClick={handleSubmit}
				            loading={loading}
			            />
		            </div>
	            )}
	        </Formik>
        </Modal>
    );
};

export default AddUser;
