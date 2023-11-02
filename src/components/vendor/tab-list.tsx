import React from 'react';

type TabListProps = {
	tab:number
	setTab:(tab:number)=>void
}

const TabList: React.FC<TabListProps> = (props) => {
    const {tab, setTab} = props;
	const list = [
		"Users",
		"Directors",
		"KYC Docs",
		"Bank Details"
	]

    return (
		<section className="border-b">
			<div className="container max-w-7xl px-5 lg:px-10 flex gap-5">
				{list.map((item,i)=>(
					<div
						onClick={()=>setTab(i)}
						key={"lis"+i}
						className={`py-3 px-2 cursor-pointer text-sm ${tab===i?'border-b-2 border-primary text-primary':'text'}`}
					>
						<p className="">{item}</p>
					</div>
				))}
			</div>
		</section>
    );
};

export default TabList;
