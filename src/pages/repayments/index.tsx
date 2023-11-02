import React from 'react';
import Layout from "@/components/layouts";
import TitleSection from "@/components/dashboard/title-section";
import DisbursedRequests from "@/components/request/repayment/disbursed-requests";
import Visibility from "@/components/layouts/visibility";

type RepaymentsProps = {}

const Repayments: React.FC<RepaymentsProps> = (props) => {
    const {} = props;
    return (
        <Layout back>
			<TitleSection
				title={"Repayments"}
				text={"Track and manage credit requests"}
			/>
			<Visibility types={["Vendor"]}>
				<DisbursedRequests/>
			</Visibility>
        </Layout>
    );
};

export default Repayments;
