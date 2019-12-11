import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import { Card, Logo, Form, Input, Button, Error, } from '../components/AuthForm';
import { useAuth, AuthContext } from "../context/auth";
var json = require('../users.json');

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    //const referer = props.location.state.referer || '/';

    function handleClick(){
        let user = (json[userName]);
        console.log(user);
        if(user){
            console.log(user.password);
            console.log(password);
            console.log(AuthContext);
            if(json[userName].password === password){
                setAuthTokens(json[userName].userType);
                setLoggedIn(true);
                console.log(AuthContext);
            }
        }
      }

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    // if (isLoggedIn) {
    //     return <Redirect to={referer} />;
    // }

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
                <Link to="/signup">Don't have an account?</Link>
                {isError && <Error>The username or password provided were incorrect!</Error>}
            </Card>
        </div>
    );
}


export default Login;