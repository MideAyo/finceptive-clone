import React, {useState} from 'react';
import {Button, Checkbox, Loader, SearchInput, Svg, useQuery} from "@/components/rn-alpha";
import {bank} from "@/utils/icons/icons";
import {NewRequest} from "@/types";
import PATHS from "@/paths";

type SelectIssuersProps = {
	setIssuer:(value:string)=>void
	issuer:string
	na:boolean
	setNa:(value:boolean)=>void
}

const SelectIssuers: React.FC<SelectIssuersProps&NewRequest> = (props) => {
    const {
		next,
	    previous,
	    setIssuer,
	    issuer,
		na,
		setNa
	} = props;

	const [search,setSearch] = useState("");

	const {loading,error,data, fetchMore, refetch} =
		useQuery(PATHS.getEntitiesByRole, {
			variables:{
				limit:20,
				role:"Issuer",
				"offset":0,
				search
			},
			networkPolicy:"network-and-cache"
		})

	const onSelect=(CustomerID:any)=>{
		setNa(false)
		setIssuer(CustomerID)
	}

	const setSearchFunc=(value:string)=>{
		if (na){
			setIssuer(value)
		}
		setSearch(value)
		if (value.length >= 3){
			refetch({search:value})
		}
	}

	const setNaFunc=(value:boolean)=>{
		if (value){
			setIssuer(search)
		}else {
			setIssuer("")
		}
		setNa(value)
	}

    return (
        <div>
	        <h2 className="text-lg lg:text-xl font-semibold text">Issuer</h2>
	        <p className="text-sm mt-2 font-light text-medium mb-5">Select the issuer</p>

			<SearchInput filter={search} setFilter={setSearchFunc} onSubmit={()=>refetch({search})}/>

			<Loader loading={loading && (!!search|| (!data || data.data?.length<1))}/>

			<div className="shadow bg mt-2 max-h-72 overflow-y-auto">
				{!loading && (!data || data?.data?.length< 1)&&(
					<p className="text-sm py-5 text-center text-medium">No record found</p>
				)}
				{data?.data?.filter((r:any)=>r.Name?.toLowerCase().indexOf(search.toLowerCase()) > -1)
					.sort((a:any, b:any)=> {
						return a.Name.localeCompare(b.Name);
					})
					.map((item:any, i:number)=>(
					<div onClick={()=>onSelect(item.CustomerID)} key={"dhsdss"+i} className="flex-item border-b gap-4 px-5 py-3 cursor-pointer">
						<div className="w-10 h-10 border rounded-full flex-center">
							<Svg icon={bank} className="w-5 text-primary"/>
						</div>
						<div className="flex-1">
							<p className="text-sm">{item.Name}</p>
						</div>
						<Checkbox selected={item.CustomerID===issuer} setSelected={()=>onSelect(item.CustomerID)}  color={"secondary"}/>
					</div>
				))}
				<div onClick={()=>setNaFunc(!na)} className="flex-item border-b gap-4 px-5 py-3 cursor-pointer">
					<div className="w-10 h-10 border rounded-full flex-center">
						<Svg icon={bank} className="w-5 text-primary"/>
					</div>
					<div className="flex-1">
						<p className="text-sm">Others</p>
					</div>
					<Checkbox
						selected={na}
						setSelected={()=>setNaFunc(!na)}
						color={"secondary"}
					/>
				</div>
			</div>

	        <div className="mt-10 flex flex-row-reverse gap-2">
		        <Button
			        title={"Next"}
			        className={"btn-primary w-auto"}
			        onClick={next}
			        disabled={!issuer}
		        />
		        <Button
			        title={"Previous"}
			        className={"w-auto bg border"}
			        onClick={previous}
		        />
	        </div>

        </div>
    );
};

export default SelectIssuers;
