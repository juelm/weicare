import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import ValidateCredentials from "../modules/validateUser";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";


function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { authTokens, setAuthTokens } = useAuth();
    const referer = props.location.state ? props.location.state.referer : decideCorrectHomepage();

    function decideCorrectHomepage() {
        if (isLoggedIn) {
            if (authTokens === "Parent") return "/parent/dashboard";
            if (authTokens === "Teacher") return "/teacher/dashboard";
        } else {
            return "/";
        }
    }

        async function handleClick(){
        if(userName){
            let validation = await ValidateCredentials(userName, password)
            console.log("validation result - " + validation)
            if(validation){
                setAuthTokens({
                    "tokens": validation,
                    "username": userName
                });
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }
      }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
      <Paper
        style={{
          width: "20%",
          marginLeft: "40%",
          marginTop: "10%",
          padding: 20
        }}
      >
        <div style={{ textAlign: "center" }}>
         <FormControl>
            <TextField
              type="username"
              value={userName}
              onChange={e => {
                setUserName(e.target.value);
              }}
              placeholder="Username"
            />
            <div><br /></div>

            <TextField
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <div><br /></div>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Sign In
            </Button>
          </FormControl>
          {isError && (
            <p>The username or password provided were incorrect!</p>
          )}
        </div>
      </Paper>
    );
}


export default Login;