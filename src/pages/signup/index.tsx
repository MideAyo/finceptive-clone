import React, {useState,useEffect} from 'react';
import Layout from "@/components/auth/layout";
import SelectAccountType from "@/components/signup/select-account-type";
import SelectAccountPreference from "@/components/signup/select-account-preference";
import {Button} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";

type AccountTypeProps = {}

const Preference: React.FC<AccountTypeProps> = (props) => {
	const {} = props;
	const [preference,setPreference] = useState("");
	const router = useRouter();
	const {setCache, getData} = useCache();

	return (
		<Layout title={"Sign Up - Grow"} logo={false}>
			<div>
				<SelectAccountPreference value={preference} setValue={setPreference}/>
				<Button
					disabled={!preference}
					title={"Next"}
					className={"btn-primary mt-10"}
					onClick={()=>{
						setCache("accType",preference)
						if (preference === "FundingPartner"){
							router.push("/signup/account-type")
						}else {
							router.push("/signup/corporate")
						}
					}}
				/>
			</div>
		</Layout>
	);
};

export default Preference;
