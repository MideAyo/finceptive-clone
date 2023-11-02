import React, {useState,useEffect} from 'react';
import {Button, Formik, Input, useMutation, useQuery, Yup} from "@/components/rn-alpha";
import CustomSelect from "@/components/inputs/custom-select";
import ValidateBanks from "@/components/request/new/validate-banks";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";
import Modal from "@/components/global/modal";

type BankAccountInputProps = {
    close:()=>void
}

const BankAccountInput: React.FC<BankAccountInputProps> = (props) => {
    const {close} = props;
    const bk = useQuery(PATHS.getBanks)
    const {mutate,loading,error,data} = useMutation(PATHS.updateBankDetails)
    const {Toast} = useApp();

    const formHandler=(values:any)=>{
        mutate(values).then(({data,status,error})=>{
            if (status===200){
                close()
                Toast("Updated Successfully")
            }else {
                Toast(error||"","red")
            }
        })
    }

    const Schema = Yup.object().shape({
        "sortcode": Yup.string().required('Select Banks is required'),
        "cod_acct_no": Yup.string().length(10).required('Account Number is required'),
        "cod_acct_title": Yup.string().required('Account details requires validation'),
    });

    return (
        <Modal modal setModal={close} className="max-w-md">
            <div className="p-10">
                <Formik
                    initialValues={{
                        "sortcode":"",
                        "cod_acct_no":"",
                        "cod_acct_title":""
                    }}
                    onSubmit={(values => formHandler(values))}
                    validationSchema={Schema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors,setFieldValue }) => (
                        <div className="">
                            <h1 className="text-base font-semibold mb-5">Edit Bank Details</h1>
                            <Input
                                label={"Account Number"}
                                setValue={(value)=>{setFieldValue("cod_acct_no",value.replace(/\D/g,""))}}
                                mt={20}
                                value={values.cod_acct_no}
                                error={errors.cod_acct_no}
                                maxLength={10}
                            />

                            <CustomSelect
                                label={"Bank"}
                                setValue={(value)=>{setFieldValue("sortcode",value)}}
                                mt={20}
                                options={bk.data?.map((data:any)=>(
                                    {label:data.Bank,value:data.Sortcode}
                                ))||[]}
                                value={values.sortcode}
                                error={errors.sortcode||errors.cod_acct_title}
                                placeholder={"Select Bank"}
                                loading={bk.loading}
                            />

                            <ValidateBanks
                                value={values.cod_acct_title}
                                setValue={(value)=>{
                                    setFieldValue("cod_acct_title",value)
                                }}
                                accountNumber={values.cod_acct_no}
                                bankCode={values.sortcode}
                            />

                            <Button
                                title={"Submit"}
                                onClick={handleSubmit}
                                className="btn-primary mt-8"
                                loading={loading}
                            />
                        </div>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default BankAccountInput;
