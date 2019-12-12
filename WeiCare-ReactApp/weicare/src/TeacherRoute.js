import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./context/auth"

function TeacherRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
    console.log("This is in teacher route: " + authTokens);
  
  return(
    <Route 
        {...rest}
        render={(props) => 
            (authTokens === "Teacher") ? (
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

export default TeacherRoute;