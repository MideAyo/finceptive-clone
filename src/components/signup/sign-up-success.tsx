import React from 'react';
import {ModalProps} from "@/types";
import {Button, Svg} from "@/components/rn-alpha";
import {useRouter} from "next/router";
import {check} from "@/utils/icons/icons";
import Image from "next/image";

type SignUpSuccessProps = {}

const SignUpSuccess: React.FC<SignUpSuccessProps&ModalProps> = (props) => {
    const {modal} = props;
    const router = useRouter();

    return (
        <>
            {modal&&(
                <div className="fixed inset-0 z-1000 bg-primary lg:bg-[#F1F5F9] bg-no-repeat lg:bg-[url(/images/bg.svg)]">
                    <div className="flex h-full">
                        <div className="sticky top-0 w-1/2 hidden lg:block my-auto">
                            <div className="h-full mx-10">
                                <Image src={"/images/curvecenter.png"} alt={""} width={467} height={456} priority/>
                            </div>
                        </div>

                        <div className="w-full lg:flex-1 my-auto px-2">
                            <div className="container lg:mx-20 bg rounded-lg px-5 lg:px-10 py-10 max-w-md flex-center flex-col">
                                <div className="w-20 h-20 bg-success rounded-full flex-center">
                                    <Svg icon={check} className="w-10 text-white"/>
                                </div>
                                <h1 className="text-center text-2xl mt-4">Sign Up Complete</h1>
                                <p className="text-center mt-4 text-[#667085]">
                                    Please check your email for your login details
                                </p>
                                <Button
                                    title={"Done"}
                                    className={"mt-5 btn-primary"}
                                    onClick={()=>router.push("/login")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUpSuccess;
