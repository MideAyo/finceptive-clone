import React from 'react';
import {useRouter} from "next/router";
import {Button, Svg, useQuery} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";
import StatusView from "@/components/global/status-view";
import Visibility from "@/components/layouts/visibility";
import PATHS from "@/paths";
import {RequestVariables} from "@/types";
import {file} from "@/svg/icons";
import {baseUrl} from "@/config";

type VerificationActivityProps = {
	variables:RequestVariables
}

const VerificationActivities: React.FC<VerificationActivityProps> = (props) => {
	const {variables} = props
	const {data} = useQuery(PATHS.request, {variables})
	const router = useRouter();

	const ReviewStatus = data?.ReviewStatus?JSON.parse(data.ReviewStatus):null
	const checks = [
		{ name:"Credit Check", data:ReviewStatus?.CreditCheck},
		{ name:"Document Review", data:ReviewStatus?.DocumentReview},
		{ name:"Confirm Amount", data:ReviewStatus?.ValidAmount},
	]

	return (
		<>
			<div className="flex flex-col gap-10 mt-2 relative">
				{checks.map((item,i)=>(
					<div key={"hdsd"+i} className="flex gap-8">
						<div className={`h-10 w-10 ${item.data?.valid?'bg-secondary':'bg-shade'} flex-center rounded-full z-10`}>
							<Svg icon={check} className="w-4 text-light"/>
						</div>
						<div className="flex-1 bg relative px-5 py-3">
							<div className="w-5 h-5 absolute -left-5 top-2 arrow-left"/>
							<h3 className="font-semibold">{item.name}</h3>
							<Visibility types={"*"} exclude={["FundingPartner"]}>
								{item.data?.comment&&(
									<div className="mt-2">
										<p className="text-xs text-[#4F4F4F]">{item.data?.comment}</p>
									</div>
								)}
								{item.data?.files?.map((item:string, i:number)=>(
									<a key={"doc"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
										<div key={"bnsfdf"+i} className="flex-item gap-2 mt-2">
											<Svg icon={file} className="w-4 text-medium"/>
											<p className="text-xs text-[#4F4F4F]">{item}</p>
										</div>
									</a>
								))}
							</Visibility>
							<div className="flex-between mt-2">
								<StatusView text={item.data?.valid?"verified":"pending"} color={item.data?.valid?"success":"warning"}/>
								<Visibility types={["BackOffice"]}>
									{!item.data?.valid && data.Status === "UnderReview"&&(
										<Button
											title={"Verify"}
											className={"btn-primary w-auto py-2 px-3 text-sm"}
											onClick={()=>{router.push(`${router.asPath}/review?tab=${i+1}`)}}
										/>
									)}
								</Visibility>
							</div>
						</div>
					</div>
				))}
				<div className="absolute inset-y-0 left-0 w-10">
					<div className="h-[80%] flex-center">
						<div className="w-0 border-l h-full"/>
					</div>
				</div>
			</div>
		</>
	);
};

export default VerificationActivities;
