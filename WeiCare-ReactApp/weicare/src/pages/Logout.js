import React from "react";
import { useAuth } from "../context/auth";

function Logout() {
    const { setAuthTokens } = useAuth();

    function handleLogOut() {
        setAuthTokens(null);
    }

    return (
        <div style={{ margin: '200px 40%' }}>
            <button onClick={handleLogOut}>LOGOUT</button>
        </div>
    );
}

export default Logout;