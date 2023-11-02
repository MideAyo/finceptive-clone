import React from 'react';
import {Button, Formik, Input, Select, useMutation, Yup} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import {ModalProps, RequestVariables} from "@/types";
import Modal from "@/components/global/modal";
import Textarea from "@/components/inputs/textarea";

type CreateOfferProps = {
    rate: string
    fee: string
    onEnd:()=>void
    amount:number
}

const CreateOffer: React.FC<CreateOfferProps&RequestVariables&ModalProps> = (props) => {
    const {
        type,
        transactionID,
        rate,
        fee,
        modal,
        setModal,
        onEnd,
        amount
    } = props;

    const {mutate,loading,error} = useMutation(PATHS.createOffer)
    const {Toast} = useApp();

    const formHandler=(values:any)=>{
        mutate(values).then(({data,status,error})=>{
            if (status===200){
                setModal(false)
                onEnd()
            }else {
                Toast(error||"")
            }
        })
    }

    const Schema = Yup.object().shape({
        rate:Yup.string().required('Rate is required'),
        fee:Yup.string().required('Fee is required'),
        tenor:Yup.string().required('Tenor is required'),
        funded_amount:Yup.number().required('Amount is required'),
        security:Yup.string().required('Security is required'),
        repayment_source:Yup.string().required('Repayment source is required'),
    });

    return (
        <Modal modal={modal} setModal={setModal} align={"py-20"} className="max-w-lg">
            <Formik
                initialValues={{
                    "type":type,
                    "transaction_id":transactionID,
                    "rate":rate,
                    "fee":fee,
                    "tenor":"",
                    "security":"",
                    "funded_amount":amount,
                    "repayment_source": ""
                }}
                onSubmit={(values => formHandler(values))}
                validationSchema={Schema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                   <div className="flex flex-col gap-5 p-5 lg:p-10">
                       <h3 className="text-lg lg:-mt-5">Create Offer</h3>

                       <Input
                           setValue={(value)=>{setFieldValue("funded_amount",value)}}
                           value={values.funded_amount}
                           error={errors.funded_amount}
                           label={"Offered Amount"}
                           money
                       />

                       <Input
                           setValue={(value)=>{setFieldValue("rate",value.replace(/[^.0-9]/g,''))}}
                           value={values.rate}
                           error={errors.rate}
                           label={"Interest Rate"}
                           placeholder={"%"}
                       />
                       <Input
                           setValue={(value)=>{setFieldValue("fee",value.replace(/[^.0-9]/g,''))}}
                           value={values.fee}
                           error={errors.fee}
                           label={"Management Fee"}
                           placeholder={"%"}
                       />
                       <Select
                           setValue={(value)=>{setFieldValue("tenor",value)}}
                           value={values.tenor}
                           error={errors.tenor}
                           label={"Tenor"}
                           options={[...Array(32).keys()].map((index)=>(
                               {label:`${index + 1} Month${index!==0?'s':''}`, value:String(index + 1)}
                           ))}
                       />
                       <Textarea
                           setValue={(value)=>{setFieldValue("security",value)}}
                           value={values.security}
                           error={errors.security}
                           label={"Security"}
                       />
                       <Input
                           setValue={(value)=>{setFieldValue("repayment_source",value)}}
                           value={values.repayment_source}
                           error={errors.repayment_source}
                           label={"Repayment Source"}
                       />

                       <Button
                           title={"Create Offer"}
                           className={"btn-primary"}
                           onClick={handleSubmit}
                           loading={loading}
                       />
                   </div>
                )}
            </Formik>
        </Modal>
    );
};

export default CreateOffer;
