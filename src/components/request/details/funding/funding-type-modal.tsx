import React, {useState,useEffect} from 'react';
import {ModalProps, RequestVariables} from "@/types";
import {Button, Checkbox, Formik, Input, Select, useMutation, useQuery, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import Modal from "@/components/global/modal";
import CustomSelect from "@/components/inputs/custom-select";
import CreateOffer from "@/components/request/details/offer/create-offer";

type FundingTypeModalProps = {
    variables:RequestVariables
    callback:(type:string)=>void
    close:()=>void
}

const FundingTypeModal: React.FC<FundingTypeModalProps&ModalProps> = (props) => {
    const {modal, setModal, variables, callback, close} = props;
    const {mutate,loading,error} = useMutation(PATHS.createFundingRequest)
    const {Toast} = useApp();
    const [type,setType] = useState("");
    const [partial,setPartial] = useState(true);
    const {data, updateValue} = useQuery(PATHS.request, {variables})
    const [offer,setOffer] = useState(false);
    const [rateFee,setRateFee] = useState({rate:"", fee:""});

    const formHandler=(values:any)=>{
        setOffer(values)
        mutate({
            ...values,
            minAmount: values.minAmount||values.amount
        }).then(({data,status,error})=>{
            if (status===200){
                close()
                setOffer(true)
            }else {
                Toast(error||"", "red")
            }
        })
    }

    const Schema = Yup.object().shape({
        amount:Yup.number().required('Amount is required'),
        // fee:Yup.string().required('Fee is required'),
        rate:Yup.string().max(100).required('Rate is required'),
        closingDate:Yup.string().required('Closing Date is required'),
        minAmount:Yup.number().max(data.Amount).optional()
    });

    return (
        <>
            <CreateOffer
                amount={data.Amount}
                modal={offer}
                setModal={setOffer}
                {...rateFee}
                {...variables}
                onEnd={()=>{
                    callback(type)
                }}
            />

            <Modal modal={modal} setModal={setModal} align={"py-20"} className="max-w-lg" close>
                <div className="p-5 lg:p-10">
                    <h3 className="text-center text-lg lg:-mt-5">Funding Type</h3>
                    <Formik
                        initialValues={{
                            ...variables,
                            "amount":data.Amount,
                            "fee":0,
                            "rate":"",
                            "closingDate":"",
                            "minAmount":"",
                        }}
                        onSubmit={(values => formHandler(values))}
                        validationSchema={Schema}
                        validateOnBlur={false}
                        validateOnChange={false}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                            <div className="mt-5">
                                <CustomSelect
                                    value={type}
                                    setValue={(value)=>{setType(value)}}
                                    options={[
                                        { label:"Closed Funding", value:"Close" },
                                        { label:"Public Funding", value:"Open" }
                                    ]}
                                    label={"Select Funding Type"}
                                    placeholder={"Select Funding Type"}
                                />

                                {type==="Open"&&(
                                    <div className="mt-2">
                                        <Input
                                            setValue={(value)=>{setFieldValue("amount",value)}}
                                            value={values.amount}
                                            error={errors.amount}
                                            label={"Amount"}
                                            cs="mt-2"
                                            money
                                        />

                                        <Input
                                            setValue={(value)=>{setFieldValue("rate",value.replace(/[^.0-9]/g,''))}}
                                            label={"Interest Rate"}
                                            cs="mt-2"
                                            max={100}
                                            placeholder={"%"}
                                            value={values.rate}
                                            error={errors.rate}
                                        />

                                        {/*<Input
                                            setValue={(value)=>{setFieldValue("fee",value.replace(/[^.0-9]/g,''))}}
                                            label={"Management Fee"}
                                            cs="mt-2"
                                            max={100}
                                            placeholder={"%"}
                                            value={values.fee}
                                            error={errors.fee}
                                        />*/}

                                        <Input
                                            setValue={(value)=>{setFieldValue("closingDate",value)}}
                                            label={"Closing Date"}
                                            cs="mt-2"
                                            value={values.closingDate}
                                            error={errors.closingDate}
                                            type={"date"}
                                            min={new Date().toISOString().slice(0,10)}
                                        />

                                        <div className="flex-item gap-2 mt-2 py-2">
                                            <Checkbox
                                                selected={partial}
                                                color={"primary"}
                                                setSelected={(value)=>{
                                                    setPartial(value)
                                                    if (!value){
                                                        setFieldValue("minAmount","")
                                                    }
                                                }}
                                            />
                                            <p className="text-sm text">
                                                Allow Partial Funding
                                            </p>
                                        </div>

                                        {partial&&(
                                            <Input
                                                setValue={(value)=>{setFieldValue("minAmount",value)}}
                                                label={"Minimum Amount"}
                                                cs="mt-2"
                                                value={values.minAmount}
                                                error={errors.minAmount}
                                                money
                                            />
                                        )}

                                    </div>
                                )}

                                <div className="mt-5 flex-item gap-4">
                                    <Button
                                        title={"Cancel"}
                                        className={"btn-primary-border"}
                                        onClick={()=>setModal(false)}
                                    />
                                    <Button
                                        title={"Approve"}
                                        className={"btn-primary"}
                                        loading={loading}
                                        disabled={!type}
                                        onClick={
                                            type==="Open"?
                                                handleSubmit: ()=> {
                                                    close()
                                                    setOffer(true)
                                                }
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    );
};

export default FundingTypeModal;
