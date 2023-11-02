import React, {useState,useEffect} from 'react';
import DocUpload from "@/components/signup/documents/doc-upload";

type IndividualUploadsProps = {
    setAllow:any
}

const IndividualUploads: React.FC<IndividualUploadsProps> = (props) => {
    const {setAllow} = props;

    const [checks,setChecks] = useState([
        {name:"Government issued ID of individual",status:false},
        {name:"Address Verification (Utility bill)",status:false},
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

export default IndividualUploads;
