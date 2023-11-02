import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useApp} from "@/store/contexts/app-context";
import Svg from "@/components/global/svg";
import Image from "next/image";
import Logo from "@/components/layouts/logo";

export const withAuth = (Page:any) => {
    return (props:any) => {
        const router = useRouter();
        const {setLogout, auth, setRedirectTo} = useApp();

        useEffect(() => {
            (async () => {
                if (!auth.user_id) {
                    await setLogout()
                    setRedirectTo(window.location.pathname+window.location.search)
                    await router.push("/login")
                }
            })()
        }, []);

        return auth.user_id?
            <Page {...props}/> :
            <div className="w-full h-screen flex-center">
                <Logo/>
            </div>
    };
};
