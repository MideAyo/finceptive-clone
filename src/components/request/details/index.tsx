import React from 'react';
import {dayjs, Svg, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import money from "@/utils/money";
import RequestStatusView from "@/components/request/details/request-status-view";
import RequestDocs from "@/components/request/details/request-docs";
import SupplierDetails from "@/components/request/details/supplier-details";
import RequestActions from "@/components/request/details/actions/request-actions";
import Visibility from "@/components/layouts/visibility";
import Activities from "@/components/request/details/activities";
import FundingRequests from "@/components/request/details/funding/funding-requests";
import {RequestVariables} from "@/types";
import {baseUrl} from "@/config";
import {file} from "@/svg/icons";

type RequestDetailsProps = {
	variables: RequestVariables
}

const RequestDetails: React.FC<RequestDetailsProps> = (props) => {
	const { variables } = props;
	const {data} = useQuery(PATHS.request, {variables})

	const list = [
		{label:"Request ID", value:`#000000000${variables.transactionID}`},
		{label:"Contract Type", value:variables.type==="IDF"?"Invoice Discounting Finance":"Local Purchase Order"},
		{label:"Issuer", value:data?.IssuerName||data?.Issuer},
		{label:"Purchase Order Number", value:data.PONumber},
		{label:"Invoice Payable Date", value:data.InvoicePayableDate},
		{label:"Expected Delivery Date", value:data.DeliveryDate, type:"LPO"},
		{label:"Amount Requested", value:money(Number(data.Amount), 2)},
		{label:"Offered Amount", value:money(Number(data.FundedAmount), 2)},
		{label:"Date Created", value:dayjs(data.DateCreated).format("dddd MMM DD, YYYY | h:mm A")},
	];

	return (
		<>
			<h1 className="text-lg lg:text-xl font-bold">{variables.type} Request Details</h1>
			<div className="flex flex-wrap gap-10 mt-5">
				<section className="w-full lg:flex-1 bg rounded-xl px-5 lg:px-10 py-10">
					<RequestStatusView status={data.Status} reason={data?.Reasons}/>
					<div className="bg-[#56941E19] rounded-lg p-5 flex flex-col gap-5">
						{list
							.filter((r)=>!r.type || r.type === variables.type)
							.map((item, i)=>(
								<div key={"dhdssf"+i} className="flex-between">
									<p className="text-sm text font-bold">
										{item.label}
									</p>
									<p className="text-sm font-light">{item.value}</p>
								</div>
						))}
						<RequestDocs status={data.Status} variables={variables} files={JSON.parse(data.Docs)||[]}/>
					</div>

					<SupplierDetails data={data}/>

					{JSON.parse(data.ProofOfPayment)?.length>0&&(
						<Visibility types={["BackOffice"]}>
							<div className="mt-5">
								<p className="text-base font-semibold">Proof Of Payment</p>
								{JSON.parse(data.ProofOfPayment).map((item:any, i:number)=>(
									<a key={"proof"+i} download href={baseUrl+"/"+item} target="_blank" rel="noopener noreferrer" className="">
										<div className="py-2">
											<div className="flex-item gap-4 py-4 px-5 bg-[#F4F4F4] border border-dashed rounded border-[#002E6E99]">
												<Svg icon={file} className="w-5 text-primary"/>
												<div className="flex-1 overflow-hidden">
													<p className="text-sm overflow-hidden text-ellipsis">{item.split("/").reverse()?.[0]}</p>
												</div>
											</div>
										</div>
									</a>
								))}
							</div>
						</Visibility>
					)}

					<RequestActions variables={variables}/>

				</section>
				<Activities variables={variables}/>
			</div>

			{data.FundingType === "Open"&&(
				<Visibility types={["BackOffice"]}>
					<FundingRequests variables={variables}/>
				</Visibility>
			)}
		</>
	);
};

export default RequestDetails;
