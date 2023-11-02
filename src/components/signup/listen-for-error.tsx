import React, {useState,useEffect} from 'react';

type ListenForErrorProps = {
	errors: any
	onSuccess:()=>void
	onClick:()=>void
	children:React.ReactNode
}

const ListenForError: React.FC<ListenForErrorProps> = (props) => {
    const {errors,onClick,children,onSuccess} = props;
	const [click,setClick] = useState(false);
	console.log(errors);
	
	useEffect(()=>{
		if (click){
			if (Object.keys(errors)?.length < 1){
				onSuccess()
			}
			setClick(false)
		}
	},[click]);

    return (
        <div className="cursor-pointer" onClick={()=> {
	        onClick()
	        setTimeout(()=>{
		        setClick(true)
	        },200)
        }}>
	        {children}
        </div>
    );
};

export default ListenForError;
