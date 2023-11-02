import React from 'react';
import Layout from "@/components/layouts";
import {Loader, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useRouter} from "next/router";
import VendorView from "@/components/vendor/vendor-view";
import ErrorView from "@/components/global/error-view";
import {withAuth} from "@/hoc/with-auth";

type VendorProps = {}

const Vendor: React.FC<VendorProps> = (props) => {
    const {} = props;
	const router = useRouter();

	const customerID = router.query.id
	const {loading,error,data, refetch} = useQuery(PATHS.getEntityById,{variables:{customerID}, networkPolicy:"network-and-cache"})

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

		    {data && customerID&&(
				<VendorView customerID={String(customerID)}/>
		    )}
	    </Layout>
    );
};

export default withAuth(Vendor);

export async function getServerSideProps({query}:any) {
    return {
        props: { query },
    }
}
