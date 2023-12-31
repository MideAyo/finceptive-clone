import React, {useState} from 'react';
import Layout from "@/components/auth/layout";
import {Button, Checkbox, Formik, Input, useMutation, Yup} from "@/components/rn-alpha";
import Link from "next/link";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import {withoutAuth} from "@/hoc/without-auth";
import useCache from "@/hooks/use-cache";
import {enable2fa} from "@/config";
import Logo from "@/components/layouts/logo";
import SignUpSuccess from "@/components/signup/sign-up-success";

type LoginProps = {}

const Login: React.FC<LoginProps> = (props) => {
	const {} = props;
	const {mutate,loading,error,data, query} = useMutation(enable2fa?PATHS.login2fa:PATHS.login)
	const {setAuth, Toast, setUser, redirectTo, setModule} = useApp();
	const router = useRouter();
	const {setCache} = useCache();

	const formHandler=(values:any)=>{
		mutate(values).then(({data,status,error})=>{
			if (status === 200){
				setAuth(data)
				query(PATHS.getUser, {user_id:data.user_id}, data).then(({data, status})=>{
					if (status === 200){
						setUser(data)
						router.push(data.ResetStatus === "Active"?"/settings/change-password":(redirectTo||"/")).catch(()=>{})
					}else {
						setAuth({})
						Toast("Oops! unable to login, kindly contact Customer support", "red")
					}
				})
			}else {
				Toast(error?.includes("Failed")?"Your internet is not stable. Please check your internet and try again":"Email or password incorrect!", "red")
			}
		})
	}

	const formHandler2Fa=(values:any)=>{
		mutate(values).then(({data,status,error})=>{
			if (status === 200){
				setCache("2fa",data)
				if (data?.ProvisioningURI){
					router.push("/auth/security").catch(()=>{})
				}else {
					router.push("/auth/otp").catch(()=>{})
				}
			}else {
				Toast(error?.includes("Failed")?"Your internet is not stable. Please check your internet and try again":"Email or password incorrect!", "red")
			}
		})
	}

	const Schema = Yup.object().shape({
		email: Yup.string().required('Email or Mobile or Account no is required'),
		password: Yup.string().required('Password is required')
	});

	return (
		<>
			<Layout title={"Login - Grow"}>
				<Formik
					initialValues={{
						password:"",
						email:"",
					}}
					onSubmit={(values => enable2fa?formHandler2Fa(values):formHandler(values))}
					validationSchema={Schema}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
						<div>
							<h3 className="text-2xl font-semibold text-center mt-5">Sign in</h3>
							{/*<p className="text-sm text mt-5 font-light text-center">Sign in to continue to your Dashboard</p>*/}
							<div className="mt-5">
								<Input
									setValue={(value)=>{setFieldValue("email",value)}}
									placeholder={"Email Address"}
									value={values.email}
									error={errors.email}
									// autoComplete={"off"}
								/>
								<Input
									setValue={(value)=>{setFieldValue("password",value)}}
									placeholder={"Enter Password"}
									mt={20}
									value={values.password}
									error={errors.password}
									type={"password"}
									// autoComplete={"new-password"}
								/>
							</div>

							<div className="flex-between">
								<div className="flex-item gap-3">
									{/*<Checkbox selected={checked} setSelected={setChecked} box color={"primary"}/>*/}
									{/*<p className="text-sm text font-light">Keep me signed in</p>*/}
								</div>
								<Link href={"/forgot-password"}>
									<p className="text-sm text-secondary my-5">Forgot Password?</p>
								</Link>
							</div>

							<div className="mt-10">
								<Button
									title={"Log in"}
									className={"btn btn-primary w-full"}
									onClick={handleSubmit}
									loading={loading}
								/>
							</div>

							<div className="mt-8">
								<p className="text-sm text text-center">
									Don’t have an account?
									<Link href={"/signup"}>
										<span className="text-secondary ml-2">Create Account</span>
									</Link>
								</p>
							</div>
						</div>
					)}
				</Formik>
			</Layout>
		</>
	);
};

export default withoutAuth(Login);
