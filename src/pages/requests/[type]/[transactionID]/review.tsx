import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import {Button, Svg, useMutation, useQuery} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {chevronBack, save} from "@/svg/icons";
import {chevronRight} from "@/utils/icons/icons";
import ReviewSteps from "@/components/request/review/review-steps";
import StepValidation from "@/components/request/review/step-validation";
import {withAuth} from "@/hoc/with-auth";
import Visibility from "@/components/layouts/visibility";

type VerifyProps = {}

const Review: React.FC<VerifyProps> = (props) => {
    const {} = props;
	const [step,setStep] = useState(1);
	const router = useRouter();
	const transactionID = String(router.query.transactionID)
	const type:any = String(router.query.type).toUpperCase()

	const variables = { transactionID, type }
	const {error,data, updateValue} = useQuery(PATHS.request, {variables})
	const {Toast} = useApp();

	const [checks,setChecks] = useState<any>({});
	const {mutate, loading} = useMutation(PATHS.updateReviewStatus)

	useEffect(()=>{
	    setStep(Number(router.query.tab)||1)
	},[]);

	useEffect(()=>{
	    if (data?.ReviewStatus){
			setChecks(JSON.parse(data?.ReviewStatus))
		}
	},[data]);

	const ReviewStatus = data?.ReviewStatus?JSON.parse(data.ReviewStatus):null

	const steps = [
		{ label:"Credit Check", key:"CreditCheck", verified:ReviewStatus?.CreditCheck?.valid},
		{ label:"Document Review", key:"DocumentReview", verified:ReviewStatus?.DocumentReview?.valid},
		{ label:"Confirm Amount", key:"ValidAmount", verified:ReviewStatus?.ValidAmount?.valid},
	]

	const formHandler=()=>{
	    mutate({...variables, status:JSON.stringify(checks)}).then(({data,status,error})=>{
	        if (status===200){
	            Toast("Saved Successfully");
				updateValue("ReviewStatus", JSON.stringify(checks))
		        router.back()
	        }else {
	            Toast(error||"", "red")
	        }
	    })
	}

    return (
	    <Layout title={""} back>
			<Visibility types={["BackOffice"]}>
				<div className="py-3">
					<h1 className="text-lg lg:text-xl font-bold">Request Review</h1>
					<p className="text-sm text-medium font-light mt-1">Review and verify request</p>
				</div>
				<div className="bg rounded-2xl overflow-hidden shadow mt-5 flex">
					<ReviewSteps steps={steps}/>
					<section className="flex-1 bg-[#FAFBFC]">
						<div className="container max-w-xl py-10 px-5">
							{steps.map((item, i)=>(
								<div key={"dshdsd"+i}>
									{((i+1)===step)&&(
										<div key={"dsds"+i} className="">
											<div className="flex-item">
												<div className="flex-1">
													<h2 className="text-lg lg:text-xl font-semibold text">{item.label}</h2>
												</div>
												<div className="flex-item gap-2">
													<button
														onClick={()=>{
															setStep(prevState => prevState - 1)
														}}
														className={"verify-btn"}
														disabled={step===1}
													>
														<Svg icon={chevronBack} className="w-3 text"/>
													</button>
													<button
														onClick={()=>{
															setStep(prevState => prevState + 1)
														}}
														className={"verify-btn"}
														disabled={step === 3}
													>
														<Svg icon={chevronRight} className="w-3 text"/>
													</button>
												</div>
											</div>
											<StepValidation
												transactionID={transactionID}
												data={checks[item.key]||{}}
												setData={(key, value)=>{
													setChecks((prev:any)=>{
														const spr = { ...prev };
														spr[item.key] = {
															...spr[item.key],
															[key]: value,
														}
														return spr
													})
												}}
											/>
										</div>
									)}
								</div>
							))}

							<Visibility types={["BackOffice"]} roles={["Compliance"]}>
								<div className="flex flex-row-reverse mt-5">
									<Button
										title={"Save & Continue"}
										className={"btn-primary w-auto"}
										onClick={formHandler}
										icon={save}
										loading={loading}
									/>
								</div>
							</Visibility>
						</div>
					</section>
				</div>
			</Visibility>
	    </Layout>
    );
};

export default withAuth(Review);
