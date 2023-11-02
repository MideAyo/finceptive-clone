import React from 'react';
import {useApp} from "@/store/contexts/app-context";
import {Role, Type} from "@/types";

type VisibilityProps = {
	children: React.ReactNode
	types: Type[]|"*",
	roles?: Role[]
	exclude?: Type[]
	customerID?: string
}

const Visibility: React.FC<VisibilityProps> = (props) => {
    const {
		children,
		types,
		roles,
		customerID,
	    exclude
	} = props;
	const {user} = useApp();

	if (user?.Type && (types.includes(user.Type) || types === "*") && !exclude?.includes(user.Type)){
		if (customerID && user.CustomerID !== customerID) return <>{children}</>
		if (!roles || roles.length < 1 || user?.Role && roles.includes(user.Role)) return <>{children}</>
		return <div/>;
	}
    return <div/>;
};

export default Visibility;
