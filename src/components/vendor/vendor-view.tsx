import React, {useState} from 'react';
import TitleSection from "@/components/dashboard/title-section";
import {Button, dayjs, Svg, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import TabList from "@/components/vendor/tab-list";
import {chevronDown, chevronUp} from "@/utils/icons/icons";
import {order} from "@/svg/icons";
import toWord from "@/utils/toWord";
import VendorTab1 from "@/components/vendor/vendor-tab1";
import VendorTab0 from "@/components/vendor/vendor-tab0";
import VendorTab2 from "@/components/vendor/vendor-tab2";
import VendorAction from "@/components/vendor/vendor-action";
import BankDetails from "@/components/profile/bank-details";

type VendorViewProps = {
	customerID:string
}

const VendorView: React.FC<VendorViewProps> = (props) => {
    const {customerID} = props;
	const {data} = useQuery(PATHS.getEntityById,{variables:{customerID}})
	const [tab,setTab] = useState(0);

	const split = data.BusinessName?.split(" ")
    return (
	    <>
		    <VendorAction customerID={customerID}/>
		    <section className="bg rounded-lg mt-5">
			    <div className="flex-between flex-wrap gap-5 p-5">
				    <div className="flex-item gap-2">
					    <div
						    className="w-20 h-20 p-2 rounded-full"
						    style={{background:"linear-gradient(180deg, #F8EDFF 0%, rgba(196, 196, 196, 0.00) 100%)"}}>
						    <div className="h-full w-full flex-center bg-[#9B51E0] rounded-full">
							    <p className="text-xl text-white">{split?.[0]?.[0]} {split?.[1]?.[0]}</p>
						    </div>
					    </div>

					    <div>
						    <p className="text-xl text font-semibold">{data.BusinessName}</p>
						    <p className="text-sm text-medium">{data.Type} - {data.Role}</p>
					    </div>
				    </div>
				    <div>
					    <p className="text-sm text-medium">Date Created</p>
					    <p className="text text-sm font-medium">{dayjs(data.DateCreated).format("dddd MMM DD, YYYY | h:mm A")}</p>
				    </div>
			    </div>

			    <TabList tab={tab} setTab={setTab}/>

			    {tab===0&&(
				    <VendorTab0 customerID={customerID}/>
			    )}

			    {tab===1&&(
				    <VendorTab1 data={data?.Directors||[]}/>
			    )}

			    {tab===2&&(
				    <VendorTab2
						data={data?.Docs?JSON.parse(data?.Docs):[]}
						customerID={customerID}
						type={data.Type}
					/>
			    )}


				{tab===3&&(
					<BankDetails customerID={customerID}/>
				)}
		    </section>
	    </>
    );
};

export default VendorView;
