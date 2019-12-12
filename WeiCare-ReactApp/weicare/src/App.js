import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import TeacherNav from "./components/TeacherNav.js";
import ParentNav from "./components/ParentNav.js";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ViewPictures from "./pages/ViewPictures";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import TeacherViewDaily from "./pages/teacherPage/TeacherViewDaily";
import TeacherAddDaily from "./pages/teacherPage/TeacherAddDaily";
import ParentViewDaily from "./pages/parentPage/ParentViewDaily";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import "./App.css";
import { longStackSupport } from "q";

function App() {
    const [authTokens, setAuthTokens] = useState();
  
    const setTokens = (data) => {
      console.log("this is in setTokens - " + data);
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }

    // if (localStorage.getItem("tokens") !== null) {
    //   setAuthTokens(localStorage.getItem("tokens"));
    // }
  
    console.log("User Identity - " + authTokens);
    return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <div>
            <Header />
            {authTokens === "Parent" && <ParentNav />}
            {authTokens === "Teacher" && <TeacherNav />}
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/viewpictures" component={ViewPictures} />
            <PrivateRoute path="/logout" component={Logout} />
            <PrivateRoute path="/teacher/view-daily" component={TeacherViewDaily} />
            <PrivateRoute path="/teacher/add-daily" componenet={TeacherAddDaily} />
            <PrivateRoute path="/parent/view-daily" component={ParentViewDaily} />}
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
  
  export default App;