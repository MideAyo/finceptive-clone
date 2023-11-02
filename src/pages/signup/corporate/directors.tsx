import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";
import CorporateLayout from "@/components/signup/corporate-layout";
import DirectorsForm from "@/components/signup/directors-form";

type DirectorsProps = {}

const Directors: React.FC<DirectorsProps> = (props) => {
	const router = useRouter();
	const {getData, setCache} = useCache();
	const [list,setList] = useState([0]);

	useEffect(()=>{
	    setList(getData("regDirectors")?.map(()=>0)||[0])
	},[]);
	  console.log(list);
	  
	const save=(index:number, values:any)=>{
		const spr = [...(getData("regDirectors")||[])]
		spr[index] = values
		setCache("regDirectors", spr)
	}

	const remove=(index:number)=>{
		const spr = [...(getData("regDirectors")||[])]
		console.log(spr);
		
		spr.splice(index, 1)
		setList(prevState => {
			const spr = [...prevState]
			spr.splice(index, 1)
			return spr
		})
		setCache("regDirectors", spr)
	}

	const next=()=>{
		router.push("/signup/corporate/contact")
	}

	return (
		<CorporateLayout
			title={"Directors"}
			text={"Fill in the details below. You can add multiple directors"}
			step={2}
		>

			{list.map((_,i)=>(
				<DirectorsForm
					index={i}
					last={list.length -1}
					key={"ddh"+_+i}
					save={(values)=>save(i,values)}
					onRemove={remove}
					add={()=>{
						setList(prevState => [...prevState, 0])
					}}
					next={next}
				/>
			))}

		</CorporateLayout>
	);
};

export default Directors;
