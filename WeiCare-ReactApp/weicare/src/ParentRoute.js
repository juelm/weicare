import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./context/auth"

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    console.log("This is in private route: " + authTokens);
  
  return(
    <Route 
        {...rest}
        render={(props) => 
            (authTokens === "Parent") ? (
                <Component {...props} />
            ) : (
                <Redirect 
                  to={{ pathname: "/login", state: { referer: props.location} }}
                />
            )
        }
    />
  );
}

export default PrivateRoute;