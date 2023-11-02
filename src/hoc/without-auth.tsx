import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useApp} from "@/store/contexts/app-context";
import Image from "next/image";
import Logo from "@/components/layouts/logo";

export const withoutAuth = (Page:any) => {
    return () => {
        const router = useRouter();
        const {auth,redirectTo} = useApp();

        useEffect(() => {
            (async () => {
                if (auth?.user_id) {
                    await router.push(redirectTo||'/');
                }
            })()
        }, []);

        return !auth?.user_id? <Page/>:
            <div className="w-full h-screen flex-center">
                <Logo/>
            </div>;
    };
};
