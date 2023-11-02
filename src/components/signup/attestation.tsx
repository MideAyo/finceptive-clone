import React, {useState,useEffect} from 'react';
import {Checkbox} from "@/components/rn-alpha";
import Link from "next/link";

type AttestationProps = {
    check:boolean
    setCheck:(value:boolean)=>void
}

const Attestation: React.FC<AttestationProps> = (props) => {
    const {check,setCheck} = props;
    const [check1,setCheck1] = useState(false);
    const [check2,setCheck2] = useState(false);

    const onCheck1=(value:boolean)=>{
        setCheck1(value)
        setCheck(value && check2)
    }
    const onCheck2=(value:boolean)=>{
        setCheck2(value)
        setCheck(value && check1)
    }

    return (
        <div className="mt-5">
            <div className="border-b border-secondary">
                <p className="text-secondary font-semibold">Attestation</p>
            </div>
            <div className="py-5 flex gap-2">
                <Checkbox
                    selected={check1}
                    setSelected={onCheck1}
                    color={"primary"}
                    box
                />
                <p className="text-sm flex-1">
                    I hereby confirm that the information (including all requested documents) given to Finceptive Limited for customer onboarding is true and correct.
                </p>
            </div>

            <div className="py-5 flex gap-2">
                <Checkbox
                    selected={check2}
                    setSelected={onCheck2}
                    color={"primary"}
                    box
                />
                <p className="text-sm flex-1">
                    I confirm that I am authorized to complete this document by the above company/business, and undertake to indemnify Finceptive Limited from any liability which may arise as a result of said information and documents being inaccurate. I further confirm that I have fully read, understand, and consent to the
                    &nbsp;
                    <Link href="/terms-of-use">
                        <span className="text-primary">Terms Of Use</span>
                    </Link>
                    &nbsp; and &nbsp;
                    <Link href="/privacy-policy">
                        <span className="text-primary">Privacy Policy</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Attestation;
