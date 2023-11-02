import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import {Loader, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import Layout from "@/components/layouts";
import ErrorView from "@/components/global/error-view";
import RequestDetails from "@/components/request/details";
import {withAuth} from "@/hoc/with-auth";

type RequestViewProps = {}

const RequestView: React.FC<RequestViewProps> = (props) => {
	const {} = props;
	const router = useRouter();

	const transactionID = String(router.query.transactionID)
	const type:any = String(router.query.type).toUpperCase()
	const variables = { transactionID, type }
	const {loading,error,data, refetch, updateValue} = useQuery(PATHS.request, {variables, networkPolicy:"network-and-cache"})

	return (
		<Layout back>
			{loading && !data&&(
				<div className="min-h-half flex-center">
					<Loader loading/>
				</div>
			)}

			{(!loading && !data && error)&&(
				<ErrorView
					className={"min-h-half flex-center"}
					error={error}
					onClick={()=>refetch()}
				/>
			)}

			{data && transactionID && type && (
				<RequestDetails variables={variables}/>
			)}
		</Layout>
	);
};

export default withAuth(RequestView);

export async function getServerSideProps({query}:any) {
	return {
		props: { query },
	}
}

