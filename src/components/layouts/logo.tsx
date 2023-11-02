import React from 'react';
import Link from "next/link";
import {Svg} from "@/components/rn-alpha";
import {logo, logow} from "@/svg/icons";

type LogoProps = {
    light?:boolean
}

const Logo: React.FC<LogoProps> = (props) => {
    const {light} = props;
    return (
        <Link href={"/"}>
            <Svg icon={light?logow:logo} className="w-24"/>
        </Link>
    );
};

export default Logo;
