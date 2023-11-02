import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import DocUpload from "@/components/signup/documents/doc-upload";

type CorporateUploadsProps = {
    setAllow:any
}

const CorporateUploads: React.FC<CorporateUploadsProps> = (props) => {
    const {setAllow} = props;

    const [checks,setChecks] = useState([
        {name:"Certificate of Incorporation/Registration", status:false},
        {name:"Status Report from CAC or Certified True Copy of CAC 2, CAC 3, and CAC 7", status:false},
        {name:"Board resolution authorising that the company be onboarded to the Finceptive platform", status:false},
        {name:"Government issued IDs of Directors", status:false},
        {name:"Government issued IDs of all Shareholders holding 20% shareholding or more", status:false},
        {name:"Company’s address verification (Utility bill)", status:false},
        {name:"Director’s address verification (Utility bill) ", status:false},
        {name:"Shareholder’s address verification (Utility bill) for shareholders with a minimum of 20% shareholding", status:false},
        {name:"Others", status:false}
    ]);

    return (
        <div className="flex flex-col gap-10 mt-2 relative">
            {checks.map((item,i)=>(
                <DocUpload
                    item={item}
                    key={"hdsd"+i}
                    id={"hdsd"+i}
                    setAllow={setAllow}
                />
            ))}
            <div className="absolute inset-y-0 left-0 w-10">
                <div className="h-[80%] flex-center">
                    <div className="w-0 border-l h-full"/>
                </div>
            </div>
        </div>
    );
};

export default CorporateUploads;
