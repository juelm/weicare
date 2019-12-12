import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ViewDaily from "./pages/teacherPage/ViewDaily";
import AddDaily from "./pages/teacherPage/AddDaily";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import TeacherPage from "./pages/teacherPage/TeacherPage"; 

import "./App.css";


function App(props) {
    const [authTokens, setAuthTokens] = useState();
  
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }
  
    console.log("User Identity - " + authTokens);
    return (

        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
            <div>
              <Header />
              {authTokens === "Parent" && <SideBar />}
              {authTokens === "Teacher" && <TeacherPage />}
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/viewdaily" component={ViewDaily} />
              <PrivateRoute path="/adddaily" component={AddDaily} />
            </div>
          </Router>
        </AuthContext.Provider>
 
    );
  }
  
  export default App;