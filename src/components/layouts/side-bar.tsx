import React, {ForwardedRef} from 'react';
import Logo from "@/components/layouts/logo";
import Svg from "@/components/global/svg";
import SideBarContent from "@/components/layouts/side-bar-content";
import {close} from "@/svg/icons";
import {useApp} from "@/store/contexts/app-context";

type SideBarProps = {
	ref:ForwardedRef<HTMLDivElement>
	onToggle:()=>void
}

const SideBar = React.forwardRef((props:SideBarProps,ref:any)=>{
	const {onToggle} = props;
	const {user} = useApp();

	return (
		<>
			<div ref={ref} className="hidden fixed inset-0 border-r bg-modal z-2000">
				<div className="flex h-full">
					<aside className={`w-72 ${user?.Type==="BackOffice"?"bg-black":"bg-primary"} h-full relative pl-5`}>
						<div className="absolute top-0 right-2 pt-2">
							<div onClick={onToggle} className="p-2 rounded-full bg-medium-shade">
								<Svg icon={close} className="w-5 text"/>
							</div>
						</div>
						<div className="px-2 pt-4 pb-2">
							<Logo light/>
						</div>
						<div className="mt-10">
							<SideBarContent/>
						</div>
					</aside>
					<div className="flex-1 h-full" onClick={onToggle}></div>
				</div>
			</div>

			<aside className={`hidden lg:flex w-74 sticky top-0 h-screen ${user?.Type==="BackOffice"?"bg-black":"bg-primary"} pl-10 -mr-5 z-2000`}>
				<div className="">
					<div className="py-5 px-2 lg:px-5">
						<Logo light/>
					</div>
					<div className="mt-10">
						<SideBarContent/>
					</div>
				</div>
				<div className="w-20 bg-[#F1F5F9] rounded-tl-[2.0rem] rounded-bl-[2.0rem]"/>
			</aside>
		</>
	);
});

export default SideBar;
