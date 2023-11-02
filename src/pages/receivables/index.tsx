import React from 'react';
import Layout from "@/components/layouts";
import TitleSection from "@/components/dashboard/title-section";
import Visibility from "@/components/layouts/visibility";
import PayableRequests from "@/components/request/repayment/payable-requests";
import DisbursedRequests from "@/components/request/repayment/disbursed-requests";

type ReceivablesProps = {}

const Receivables: React.FC<ReceivablesProps> = (props) => {

	return (
		<Layout back>
			<TitleSection
				title={"Receivables"}
				text={"Track and manage credit requests"}
			/>

			<Visibility types={["BackOffice"]}>
				<DisbursedRequests/>
			</Visibility>

			<Visibility types={["FundingPartner"]}>
				<PayableRequests/>
			</Visibility>
		</Layout>
	);
};

export default Receivables;
