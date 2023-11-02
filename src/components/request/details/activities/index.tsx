import React from 'react';
import VerificationActivities from "@/components/request/details/activities/verification-activities";
import TransactionActivities from "@/components/request/details/activities/transaction-activities";
import Visibility from "@/components/layouts/visibility";

type ActivitiesProps = {
	variables:any
}

const Activities: React.FC<ActivitiesProps> = (props) => {
    const {variables} = props;
    return (
	    <aside className="w-full lg:w-2/5">
		    <Visibility types={["Vendor"]}>
		        <TransactionActivities variables={variables}/>
		    </Visibility>

		    <Visibility types={["BackOffice","FundingPartner"]}>
			    <VerificationActivities variables={variables}/>
		    </Visibility>
	    </aside>
    );
};

export default Activities;
