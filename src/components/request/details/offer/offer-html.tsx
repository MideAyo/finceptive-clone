import React, {useState,useEffect} from 'react';
import {Loader, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {RequestVariables} from "@/types";

type OfferHtmlProps = {
    variables:RequestVariables
}

const OfferHtml: React.FC<OfferHtmlProps> = (props) => {
    const {variables} = props;

    const {data, loading} = useQuery(PATHS.getOffer,{
        variables:{
            "type":variables.type,
            "transaction_id":variables.transactionID,
            "media":"html"
        }
    })

    return (
        <>
            <Loader loading={(loading && !data)}/>
            <div dangerouslySetInnerHTML={{__html: data?.offer}}/>
        </>
    );
};

export default OfferHtml;
