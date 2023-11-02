import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import {useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Link from "next/link";
import TitleSection from "@/components/dashboard/title-section";
import Table from "@/components/global/table";
import {withAuth} from "@/hoc/with-auth";
import DisbursedRequests from "@/components/request/repayment/disbursed-requests";
import Visibility from "@/components/layouts/visibility";
import PayableRequests from "@/components/request/repayment/payable-requests";

type PayablesProps = {}

const Payables: React.FC<PayablesProps> = (props) => {

	return (
		<Layout back>
			<TitleSection
				title={"Payables"}
				text={"Track and manage credit requests"}
			/>
			<Visibility types={["Issuer", "Vendor"]}>
				<DisbursedRequests/>
			</Visibility>
			<Visibility types={["BackOffice"]}>
				<PayableRequests/>
			</Visibility>
		</Layout>
	);
};

export default withAuth(Payables);
