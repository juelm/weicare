import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Form, Input, Button, Error, } from '../components/AuthForm';
import { useAuth } from "../context/auth";
var json = require('../users.json');

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state ? props.location.state.referer : "/";


    function handleClick(){
        let user = (json[userName]);
        console.log(user);
        if(user){
            console.log("Proper password - " + user.password);
            console.log("Entered Password - " + password);
            if(json[userName].password === password){
                setAuthTokens({
                    "tokens": json[userName].userType,
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
        <div style={{ margin: '175px 40%' }}>
            <Card>
                <Form>
                    <Input
                        type="username"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                        placeholder="username" />
                    <Input
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                    />
                    <Button onClick={handleClick}>Sign In</Button>
                </Form>
                {isError && <Error>The username or password provided were incorrect!</Error>}
            </Card>
        </div>
    );
}


export default Login;