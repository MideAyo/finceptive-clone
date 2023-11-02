import React, {useState,useEffect} from 'react';
import Layout from "@/components/layouts";
import ChangePassword from "@/components/profile/change-password";

type SettingsChangePasswordProps = {}

const SettingsChangePassword: React.FC<SettingsChangePasswordProps> = (props) => {
    const {} = props;
    return (
        <Layout back>
            <div className="bg p-5 max-w-2xl rounded">
                <ChangePassword/>
            </div>
        </Layout>
    );
};

export default SettingsChangePassword;
