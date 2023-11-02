import React, {useState} from 'react';
import CorporateLayout from "@/components/signup/corporate-layout";
import {Button} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";
import CorporateUploads from "@/components/signup/documents/corporate-uploads";
import SignUpSuccess from "@/components/signup/sign-up-success";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";

type DocumentsProps = {}

const Documents: React.FC<DocumentsProps> = (props) => {
    const {} = props;
    const [allow,setAllow] = useState(false);
    const [modal,setModal] = useState(false);
    const {showAlert} = useApp();
    const router = useRouter();

    return (
        <CorporateLayout
            step={4}
            className="max-w-3xl"
            title={`Upload${router.query.update?" additional ":" "}documents`}
            text={"Upload the following documents to complete your registration"}
            back={false}
        >

            <div className="mt-10"></div>
            <CorporateUploads setAllow={setAllow}/>

            <div className="flex flex-row-reverse">
                <Button
                    title={"Done"}
                    className={"btn-primary mt-10 w-auto"}
                    onClick={()=>{
                        if (router.query.update) {
                            showAlert({
                                title:"Success",
                                text:"Files uploaded successfully!",
                                btn: { text:"Done", onClick:()=>router.back()}
                            })
                        }else {
                            setModal(true)
                        }
                    }}
                    icon={check}
                    disabled={!allow}
                />
            </div>

            <SignUpSuccess modal={modal} setModal={setModal}/>
        </CorporateLayout>
    );
};

export default Documents;
