import React, {useState, useRef} from 'react';
import {Button, useMutation} from "@/components/rn-alpha";
import Layout from "@/components/auth/layout";
import {useRouter} from "next/router";
import {useApp} from "@/store/contexts/app-context";
import PATHS from "@/paths";
import useCache from "@/hooks/use-cache";

type OtpProps = {}

const Otp: React.FC<OtpProps> = (props) => {
    const {} = props;

	const ref = useRef<any>();
	const [otp,setOtp] = useState("");
	const router = useRouter();
	const {setAuth, setUser, Toast, redirectTo} = useApp();
	const {mutate,loading,error, query} = useMutation(PATHS.validateOtp)
	const {getData, deleteCache} = useCache();

	const formHandler=(otp:string)=>{
		const values = {
			"userId":getData("2fa")?.user_id,
			"otp_code":otp
		}
		mutate(values).then(({data,status,error})=>{
			if (status === 200){
				setAuth(data)
				query(PATHS.getUser, {user_id:data.user_id}, data).then(({data, status})=>{
					if (status === 200){
						deleteCache("2fa")
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

    return (
	    <Layout title={"OTP - Finceptive"}>
		    <div>
			    <h3 className="text-2xl font-semibold text-center mt-5">OTP Authentication</h3>
			    <p className="text-sm text mt-5 font-light text-center">Enter the pin on your authenticator</p>


			    <div className="mt-10">
				    <div className="flex-between gap-2 md:gap-4">
					    {[0,0,0,0,0,0].map((_,index)=>(
						    <div
							    key={"kddd"+index}
							    onClick={()=>ref.current.focus()}
							    className={`flex-1 rounded-lg text-center border h-12 md:h-14 text-3xl flex-center cursor-text ${otp[index]?'border-primary':'border-gray-300'}`}
						    >
							    {otp[index]}
						    </div>
					    ))}
				    </div>
				    <input
					    ref={ref}
					    onChange={(e)=> {
						    setOtp(e.target.value.replace(/\D/,""))
						    if(e.target.value.length===6){
							    formHandler(e.target.value)
						    }
					    }}
					    value={otp}
					    className="text-[#f9f9f9] h-0"
					    maxLength={6}
					    autoFocus={true}
				    />
			    </div>
			    <div className="mt-10">
				    <Button
					    title={"Verify"}
					    className={"btn btn-primary w-full"}
					    onClick={()=>{
						    formHandler(otp)
					    }}
					    disabled={!otp}
					    loading={loading}
				    />
			    </div>
		    </div>
	    </Layout>
    );
};

export default Otp;
