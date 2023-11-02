import React from 'react';
import Svg from "@/components/global/svg";
import {useRouter} from "next/router";
import {
	disburse,
	home, issuers,
	payment,
	profile,
	request,
	settings, vendors,
} from "@/svg/menu";
import {logout} from "@/svg/icons";
import {useApp} from "@/store/contexts/app-context";
import {quick2} from "@/svg/quick";

type SideBarContentProps = {}

const SideBarContent: React.FC<SideBarContentProps> = (props) => {
    const {} = props;
	const router = useRouter();
	const {user} = useApp();

	const list = [
		{
			name:"Dashboard",
			icon:home,
			path:"/",
			width:"w-5",
			roles:"*",
			exclude: ""
		},
		{
			name:"Users",
			icon:vendors,
			path:"/users",
			width:"w-5",
			roles:"BackOffice",
			exclude: ""
		},
		{
			name:"Requests",
			icon:quick2,
			path:"/requests",
			roles:"*",
			exclude: "FundingPartner",
			width:"w-5",
		},
		{
			name:"Funding",
			icon:payment,
			path:"/funding-requests",
			width:"w-5",
			roles:"FundingPartner, BackOffice",
			exclude: ""
		},
		{
			name:"Commitments",
			icon:quick2,
			path:"/commitments",
			roles:"FundingPartner",
			exclude: "",
			width:"w-5",
		},
		{
			name:"Receivables",
			icon:disburse,
			path:"/receivables",
			roles:"BackOffice, FundingPartner",
			exclude: "",
			width:"w-5",
		},
		{
			name:"Payables",
			icon:payment,
			path:"/payables",
			roles:"BackOffice",
			exclude: "",
			width:"w-5",
		},
		{
			name:"Repayments",
			icon:disburse,
			path:"/repayments",
			roles:"Vendor",
			exclude: "",
			width:"w-5",
		},
		{
			name:"Profile",
			icon:profile,
			path:"/profile",
			roles:"*",
			exclude: ""
		},
		{
			name:"Settings",
			icon:settings,
			path:"/settings",
			roles:"*",
			exclude: ""
		}
	]

	return (
        <div className="">
	        <div className="flex flex-col gap-3">
		        {list.map((item,i)=>{
			        const active = router.pathname===item.path
			        if ((item.roles.includes(user.Type||"")||item.roles.includes("*"))&&!item.exclude.includes(user.Type||"")) {
				        return (
					        <div className="relative">
						        <div key={"menu"+i} role={"button"}
						             onClick={()=>router.push(item.path)}
						             className={`flex-item px-6 lg:px-9 py-5 ${active?"bg-[#F1F5F9]":""} group rounded-l-full`}
						        >
							        <Svg className={`${active?"text-[#7D26CD]":"text-white"} group-hover:opacity-70 ${item.width||"w-4"}`} icon={item.icon}/>
							        <p className={`${active?"text":"text-white"} group-hover:opacity-70 ml-4 flex-1 font-semibold`}>{item.name}</p>
						        </div>
						        {active&&(
									<>
										<div className="w-10 h-10 absolute -top-10 right-0 bg-[#F1F5F9]">
											<div className={`w-full h-full rounded-br-[2.0rem] ${user?.Type==="BackOffice"?"bg-black":"bg-primary"}`}></div>
										</div>
										<div className="w-10 h-10 absolute -bottom-10 right-0 bg-[#F1F5F9]">
											<div className={`w-full h-full rounded-tr-[2.0rem] ${user?.Type==="BackOffice"?"bg-black":"bg-primary"}`}></div>
										</div>
									</>
						        )}
					        </div>
				        )
			        }
		        })}
	        </div>
        </div>
    );
};

export default SideBarContent;
