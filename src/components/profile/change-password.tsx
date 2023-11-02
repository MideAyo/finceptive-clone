import React, {useState,useEffect} from 'react';
import {Button, Formik, Input, useMutation, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";

type ChangePasswordProps = {}

const ChangePassword: React.FC<ChangePasswordProps> = (props) => {
    const {} = props;
    const {mutate,loading,error,data} = useMutation(PATHS.changePassword);
    const {Toast, showAlert} = useApp();
    const router = useRouter();

    const formHandler=(values:any)=>{
        const form = {
            current_password:values.OldPassword,
            new_password:values.password,
        }
        mutate(form).then(({data,status,error})=>{
            if (status===200){
                showAlert({
                    title:"Success",
                    text:"Password changed successfully",
                    btn:{
                        text:"Done",
                        onClick:()=>{
                            router.back()
                        }
                    }
                })
            }else {
                Toast("Oops! unable to change password","red")
            }
        })
    }

    const Schema = Yup.object().shape({
        OldPassword: Yup.string().required("Password is required"),
        password: Yup.string().min(8).required('New Password is required').matches(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s])/,"Password must contain 1 or more uppercase characters.\nPassword must contain 1 or more digit characters.\nPassword must contain 1 or more special characters."),
        confirmPassword: Yup.string().required('Confirm New Password is required').when("password", {
            is: (val:string) => (!!(val && val.length > 0)),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password and confirm password does not match"
            )
        }),
    });

    return (
        <Formik
            initialValues={{
                OldPassword:"",
                password:"",
                confirmPassword:"",
            }}
            onSubmit={(values => formHandler(values))}
            validationSchema={Schema}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                <div>
                    <h3 className="text-2xl font-semibold">Change Password</h3>
                    <Input
                        setValue={(value)=>{setFieldValue("OldPassword",value)}}
                        label={"Old Password"}
                        cs={"mt-8"}
                        type={"password"}
                        value={values.OldPassword}
                        error={errors.OldPassword}
                    />
                    <Input
                        setValue={(value)=>{setFieldValue("password",value)}}
                        label={"New Password"}
                        cs={"mt-5"}
                        type={"password"}
                        value={values.password}
                        error={errors.password}
                    />
                    <Input
                        setValue={(value)=>{setFieldValue("confirmPassword",value)}}
                        label={"Confirm Password"}
                        cs={"mt-5"}
                        type={"password"}
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                    />

                    <Button
                        title={"Change Password"}
                        className={"btn btn-primary mt-10"}
                        loading={loading}
                        onClick={handleSubmit}
                    />
                </div>
            )}
        </Formik>
    );
};

export default ChangePassword;
