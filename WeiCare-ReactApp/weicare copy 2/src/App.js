import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from './pages/Home';
import { AuthContext } from "./context/auth";
import "./App.css";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> 
          <PrivateRoute path="/admin" component={Admin} />*/} 
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;