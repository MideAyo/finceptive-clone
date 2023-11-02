import React from 'react';
import HtmlHead from "@/components/layouts/html-head";
import {useRouter} from "next/router";
import { Inter } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/layouts/logo";

const inter = Inter({ subsets: ['latin'] })


type LayoutProps = {
	children: React.ReactNode
	title: string
	logo?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
    const {
		children,
	    title,
		logo=true
	} = props;
	const router = useRouter();

	const data = [
		{ label:"PRIVACY POLICY", path:"/privacy-policy" },
		{ label:"TERMS AND CONDITION", path:"/terms-and-condition" },
		{ label:"TERMS OF USE", path:"/terms-of-use" },
		{ label:"CONTACT US", path:"https://growfinance.tech", target:"_blank" },
		{ label:"FAQ", path:"/faq", disabled:true },
	]

    return (
		<>
			<HtmlHead title={title}/>
			<div className="overflow-y-auto relative flex bg-[#F1F5F9]">
				<div className="sticky top-0 w-1/2 hidden lg:block">
					<div className="relative bg-cover bg-center bg-no-repeat bg-[url(/images/bg.svg)]">
						<div className="h-screen container lg:mx-20 max-w-md flex flex-col justify-between items-center">
							<Image src={"/images/curvetop.svg"} alt={""} width={815} height={815} priority/>
							<Image src={"/images/curvecenter.png"} alt={""} width={567} height={556} priority/>
							<Image src={"/images/curvebottom.svg"} alt={""} width={815} height={815} priority/>
						</div>

						<div className="absolute bottom-0">
							<div className="text-light text-xxs md:text-xs py-2 md:py-4 px-2 flex-center flex-wrap gap-2">
								{data.map((item,i)=>(
									<div key={item.path+i} className="flex-item gap-2">
										{!!i&&(
											<div className="w-1 h-1 bg-light rounded-full"/>
										)}
										<Link target={item.target} key={"TH"+i} href={item.disabled?"#":item.path}>
											<p className="p-2">
												{item.label}
											</p>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="w-full min-h-screen lg:min-h-full my-auto lg:flex-1 ">
					<div className="container my-auto max-w-lg p-2 py-10 lg:mx-20">
						<div className="p-5 lg:p-10 bg rounded-xl">
							<div className={inter.className}>
								{logo&&(
									<div className="flex-center">
										<Logo/>
									</div>
								)}
								{children}
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 lg:hidden">
						<div className="text text-xxs md:text-xs py-2 md:py-4 px-2 flex-center flex-wrap gap-2">
							{data.map((item,i)=>(
								<div key={item.path+i} className="flex-item gap-2">
									{!!i&&(
										<div className="w-1 h-1 bg-light rounded-full"/>
									)}
									<Link target={item.target} key={"TH"+i} href={item.disabled?"#":item.path}>
										<p className="p-2">
											{item.label}
										</p>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>

			</div>
		</>
    );
};

export default Layout;
