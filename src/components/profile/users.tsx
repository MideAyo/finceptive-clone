import React, {useState} from 'react';
import Table from "@/components/global/table";
import PATHS from "@/paths";
import {Button, useQuery} from "@/components/rn-alpha";
import {useApp} from "@/store/contexts/app-context";
import {plus} from "@/svg/icons";
import AddUser from "@/components/profile/add-user";
import {useRouter} from "next/router";
import Visibility from "@/components/layouts/visibility";

type UsersProps = {}

const Users: React.FC<UsersProps> = (props) => {
    const {} = props;
	const {auth,user} = useApp();
	const variables = {"customerID":user.CustomerID}
	const {loading,error,data} = useQuery(PATHS.entityUsers, {variables, networkPolicy:"network-and-cache"})
	const [modal,setModal] = useState(false);
	const router = useRouter();

    return (
        <div className="mt-4">
	        <Table
		        header={["#", "Name", "Email", "Mobile", "Role", "Status"]}
		        headerRight={
					<div>
						<Visibility types={["Vendor", "Issuer"]}>
							<Button
								title={"Add Users"}
								className={"btn-primary"}
								onClick={()=>{router.push("/profile/add-user")}}
								icon={plus}
								iconClassName={"w-3"}
							/>
						</Visibility>
					</div>
		        }
		        data={data?.map((item:any,i:number)=>(
			        [
				        i+1,
						item.FirstName+" "+item.LastName,
				        item.Email,
						item.Mobile,
				        item.Role,
						item.Status,
			        ]
		        ))||[]}
		        statusIndex={5}
		        title={"Users"}
		        emptyText={""}
		        loading={(loading && (!data || data?.length < 1))}
	        />
        </div>
    );
};

export default Users;
