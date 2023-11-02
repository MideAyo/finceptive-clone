import React from 'react';
import {Loader, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {RequestVariables} from "@/types";

type OfferPdfProps = {
    variables:RequestVariables
}

const OfferPdf: React.FC<OfferPdfProps> = (props) => {
    const {variables} = props;

    const {data, loading} = useQuery(PATHS.getOffer,{
        variables:{
            "type":variables.type,
            "transaction_id":variables.transactionID,
            "media":"pdf"
        }
    })

    return (
        <>
            <Loader loading={(loading && !data)}/>
            <div style={{height:"70vh"}}>
                <embed src={data?.offer} type="application/pdf" width="100%" height="100%"/>
            </div>
        </>
    );
};

export default OfferPdf;
