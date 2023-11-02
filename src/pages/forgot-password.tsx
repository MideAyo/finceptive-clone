import React, {useState,useEffect} from 'react';
import Layout from "@/components/auth/layout";
import {Button, Formik, Input, useMutation, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import SuccessModal from "@/components/auth/success-modal";

type ForgotPasswordProps = {}

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
    const {} = props;
	const {mutate,loading,error,data} = useMutation(PATHS.resetPassword)
	const {Toast} = useApp();
	const [text,setText] = useState("");
	const [modal,setModal] = useState(false);
	const router = useRouter();

	const formHandler=(values:any)=>{
		const form = {
			email:values.email
		}
	    mutate(form).then(({data,status,error})=>{
	        if (status===200){
		        setText("Your default password has been sent to your email address")
		        setModal(true)
	        }else {
	            Toast(error||"","red")
	        }
	    })
	}

	const Schema = Yup.object().shape({
	    email:Yup.string().email().required('Email is required'),
	});

    return (
        <Layout title={"Forgot Password - Finceptive"}>
	        <Formik
	            initialValues={{
		            email:"",
	            }}
	            onSubmit={(values => formHandler(values))}
	            validationSchema={Schema}
	            validateOnBlur={false}
	            validateOnChange={false}
	        >
	            {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
		            <div>

			            <h3 className="text-2xl font-semibold text-center mt-5">Recover Password</h3>
			            <p className="text-sm text mt-5 font-light text-center">Enter your email, you will receive an email with instructions on how to reset your password in a few minutes. You can also get a new password if you’ve never set one before.</p>

			            <div className="mt-10">
				            <Input
					            setValue={(value)=>{setFieldValue("email",value)}}
					            value={values.email}
					            error={errors.email}
					            placeholder={"Enter Email Address"}
					            type={"email"}
				            />
			            </div>

			            <div className="mt-10">
				            <Button
					            title={"Continue"}
					            className={"btn btn-primary w-full"}
					            onClick={handleSubmit}
					            loading={loading}
				            />
			            </div>
		            </div>
	            )}
	        </Formik>

	        <SuccessModal
		        title={"Success!"}
		        text={text}
		        modal={modal}
		        btn={{
					href:"/login",
			        text:"Proceed to Login"
		        }}
		        setModal={setModal}
	        />

        </Layout>
    );
};

export default ForgotPassword;
