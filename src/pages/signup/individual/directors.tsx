import React, {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import useCache from "@/hooks/use-cache";
import CorporateLayout from "@/components/signup/corporate-layout";
import DirectorsForm from "@/components/signup/directors-form";
import IndividualLayout from "@/components/signup/individual-layout";
import {Preloader, useMutation} from "@/components/rn-alpha";
import PATHS from "@/paths";
import {useApp} from "@/store/contexts/app-context";

type DirectorsProps = {}

const Directors: React.FC<DirectorsProps> = (props) => {
	const router = useRouter();
	const [list,setList] = useState([0]);

	const {getData, setCache, deleteCache} = useCache();
	const {mutate,loading,error,data} = useMutation(PATHS.registerIndividual)
	const {Toast} = useApp();

	useEffect(()=>{
	    setList(getData("regDirectors")?.map(()=>0)||[0])
	},[]);

	const save=(index:number, values:any)=>{
		const spr = [...(getData("regDirectors")||[])]
		spr[index] = values
		setCache("regDirectors", spr)
	}

	const remove=(index:number)=>{
		const spr = [...(getData("regDirectors")||[])]
		spr.splice(index, 1)
		setList(prevState => {
			const spr = [...prevState]
			spr.splice(index, 1)
			return spr
		})
		setCache("regDirectors", spr)
	}

	const next=()=>{
		router.push("/signup/individual/contact")
	}

	const formHandler=()=>{
		const data = getData("regInContact")
		const directors = getData("regDirectors")
		let variables = {
			...data,
			directors,
		}
		variables = JSON.parse(JSON.stringify(variables));
		mutate(variables).then(({status, data, error})=>{
			if (status === 200){
				deleteCache("regInContact")
				deleteCache("regDirectors")
				setCache("customerID", data.customerID)
				router.push(`/signup/individual/documents?customerID=${data.customerID}`)
			}else {
				Toast(error||"", "red")
			}
		})
	}

	return (
		<IndividualLayout
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
					next={formHandler}
				/>
			))}
			<Preloader loading={loading}/>
		</IndividualLayout>
	);
};

export default Directors;
