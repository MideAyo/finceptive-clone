import React, {useState,useEffect} from 'react';
import {ModalProps} from "@/types";
import {Button, Input, Svg} from "@/components/rn-alpha";
import {chevronDown} from "@/utils/icons/icons";
import Textarea from "@/components/inputs/textarea";
import {useRouter} from "next/router";
import Link from "next/link";

type ContactProps = {}

const Contact: React.FC<ContactProps&ModalProps> = (props) => {
	const {setModal, modal} = props;
	const router = useRouter();

	useEffect(()=>{
		if (modal){
			document.body.classList.add("overflow-hidden")
		}else {
			document.body.classList.remove("overflow-hidden")
		}
	},[modal]);

	const [email,setEmail] = useState("");
	const [subject,setSubject] = useState("");
	const [body,setBody] = useState("");

	return (
		<>
			{modal&&(
				<div className="fixed inset-0 bg-modal z-2000">
					<div className="flex w-full h-full px-2 lg:px-10 py-10">
						<div className="flex-1" onClick={()=>setModal(false)}/>
						<div className="w-full lg:w-1/3 bg rounded-lg overflow-hidden shadow-2xl">
							<div className="bg-primary relative py-5">
								<h1 className="font-semibold text-center text-white">Leave us a message</h1>
								<div className="absolute right-0 top-0 bottom-0 flex-center px-2">
									<div className="w-10 h-10 flex-center cursor-pointer" onClick={()=>setModal(false)}>
										<Svg icon={chevronDown} className="w-4 text-light"/>
									</div>
								</div>
							</div>
							<div className="h-full overflow-y-auto px-5 py-10">
								<form action="mailto:enquires@finceptive.co">
									<Input
										label={"Email Address"}
										setValue={setEmail}
										value={email}
										name={"Name"}
									/>
									<Input
										label={"Subject"}
										setValue={setSubject}
										value={subject}
										mt={25}
										name={"Subject"}
									/>
									<Textarea
										label={"Description"}
										setValue={setBody}
										value={body}
										className="h-40"
										mt={25}
										name={"body"}
									/>
									<div className="flex flex-row-reverse py-10">
										<a className="btn btn-primary w-auto" target="_blank" href={"mailto:enquires@finceptive.co?email=${email}&subject=${subject}&body=${body}"}>
											Send
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Contact;
