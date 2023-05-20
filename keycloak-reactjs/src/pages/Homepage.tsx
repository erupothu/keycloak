import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {

    const { keycloak } = useKeycloak();

    const logout = () => {
        keycloak.logout();
    }

    return (
        <div>
            <h4> Welcome to home Page </h4>

            <button onClick={() => keycloak.logout()}> Logout </button>
        </div>
    )
}

export default Home;