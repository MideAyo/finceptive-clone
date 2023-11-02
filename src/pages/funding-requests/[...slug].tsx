import React from 'react';
import {useRouter} from "next/router";
import Layout from "@/components/layouts";
import FundingRequests from "@/components/request/details/funding/funding-requests";

type FundingProps = {}

const Funding: React.FC<FundingProps> = (props) => {
    const {} = props;
	const router = useRouter();

	const slug = router.query.slug
	const variables = {type: slug?.[0] as 'IDF'|'LPO' , transactionID:String(slug?.[1])}

	return (
        <Layout title={""} back>
	        <FundingRequests variables={variables}/>
        </Layout>
    );
};

export default Funding;

export async function getServerSideProps({query}:any) {
	return {
		props: { query },
	}
}
