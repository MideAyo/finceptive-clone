import React from 'react';
import {dayjs, Loader, Svg, useQuery} from "@/components/rn-alpha";
import {empty2} from "@/svg/icons";
import {RequestVariables} from "@/types";
import PATHS from "@/paths";
import {KEY} from "@/config";
import ErrorView from "@/components/global/error-view";

type TransactionActivitiesProps = {
    variables:RequestVariables
}

const TransactionActivities: React.FC<TransactionActivitiesProps> = (props) => {
    const {variables} = props;

    const {loading,error,data, refetch} = useQuery(PATHS.transactionEvents,{variables, networkPolicy:"network-and-cache"})

    return (
        <>
            <div className="bg rounded-xl p-5 pb-20">
                <h3 className="font-semibold mb-4">Transaction Activity</h3>
                {!loading && (!data || data?.length < 1) && !error && (
                    <div className="mt-6">
                        <div className="flex-center">
                            <Svg icon={empty2} className="w-auto"/>
                        </div>
                        <p className="text-center font-semibold mt-4">No activity yet</p>
                        <p className="text-center text-sm mt-2">This request does not have any activity yet.</p>
                    </div>
                )}

                {(loading && (!data || data?.length < 1))&&(
                    <Loader loading/>
                )}

                {error && !loading && (!data || data?.length < 1)&&(
                    <ErrorView onClick={refetch} error={"Oop! an error occurred!"}/>
                )}

                {data?.map((item:any, i:number)=>(
                    <div key={KEY+i} className="flex gap-2 mt-5">
                        <div className="w-10 h-10 rounded-full bg-shade"></div>
                        <div className="flex-1">
                            <div className="flex-item gap-2">
                                <p className="font-semibold text-sm text">{item.Firstname} {item.Lastname}</p>
                                {/*// @ts-ignore*/}
                                <p className="text-xs text-medium">{dayjs(item.DateCreated).fromNow()}</p>
                            </div>
                            <p className="text-sm mt-2 text">{item.Event}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TransactionActivities;
