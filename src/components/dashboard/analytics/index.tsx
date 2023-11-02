import React from 'react';
import {useApp} from "@/store/contexts/app-context";
import {quick1, quick3, quick4, vendor} from "@/svg/quick";
import {Svg, useQuery} from "@/components/rn-alpha";
import PATHS from "@/paths";

type AnalyticsProps = {}

const Analytics: React.FC<AnalyticsProps> = (props) => {
    const {} = props;
	const {user} = useApp();
	const {loading,error,data} = useQuery(PATHS.getMetrics)

	const colors = [
		"#FF5F1533",
		"#D9E9FF",
		"#E0FFED",
		"#D9E9FF",
		"#FF5F1533",
		"#9B51E033"
	]

	if (loading && !data){
		return (
			<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
				{colors.map((_,i)=>(
					<div key={"ldg"+i} className="bg shadow py-5 rounded-md flex-between items-start px-5">
						<div className="">
							<div className={`w-10 h-10 rounded-full flex-center bg-shade animate-pulse`}/>
							<div className="h-2 w-40 bg-shade mt-5 rounded animate-pulse"/>
						</div>
						<div className="">
							<div className="h-4 w-4 bg-shade rounded animate-pulse"/>
						</div>
					</div>
				))}
			</section>
		)
	}
	else if (data){
		return (
			<>
				<section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
					{Object.keys(data).filter(r=>r!=="timestamp").map((key,i)=>(
						<div key={"dsd"+i} className="relative">
							<div className="h-32"></div>
							<div className="h-10 bg-[#F1F5F9] -mt-10 shadow-lg rounded-2xl mx-5"></div>
							<div className="absolute inset-0">
								<div className="bg shadow-lg py-5 rounded-2xl flex-between items-start px-5">
									<div className="">
										<div className={`w-10 h-10 rounded-full flex-center`} style={{backgroundColor:colors[Math.floor(Math.random() * 6)]}}>
											<Svg icon={quick1} color={""} className={`w-5 text-medium`}/>
										</div>
										<p className="text text-xs mt-5">{key}</p>
									</div>
									<div className="">
										<p className="text-2xl">{data[key]}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</section>
			</>
		);
	}
	return <div/>

};

export default Analytics;
