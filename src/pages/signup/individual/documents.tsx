import React, {useState} from 'react';
import {Button} from "@/components/rn-alpha";
import {check} from "@/utils/icons/icons";
import {useApp} from "@/store/contexts/app-context";
import {useRouter} from "next/router";
import SignUpSuccess from "@/components/signup/sign-up-success";
import IndividualUploads from "@/components/signup/documents/individual-uploads";
import IndividualLayout from "@/components/signup/individual-layout";

type DocumentsProps = {}

const Documents: React.FC<DocumentsProps> = (props) => {
    const {} = props;
    const {Toast, showAlert} = useApp();
    const router = useRouter();
    const [allow,setAllow] = useState(false);
    const [modal,setModal] = useState(false);

    return (
        <IndividualLayout
            step={3}
            className="max-w-3xl"
            title={`Upload${router.query.update?" additional ":" "}Documents`}
            text={"Upload the following documents to complete your registration"}
            back={false}
        >

            <div className="mt-10"></div>
            <IndividualUploads setAllow={setAllow}/>

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
        </IndividualLayout>
    );
};

export default Documents;
