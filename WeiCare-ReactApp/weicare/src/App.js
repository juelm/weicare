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
import TeacherRoute from "./TeacherRoute";
import ParentRoute from "./ParentRoute";
import { AuthContext } from "./context/auth";
import "./App.css";

function App() {
  const [authTokens, setAuthTokens] = useState(setStorageToTokens());

  const setTokens = (data) => {
    console.log(localStorage.getItem("tokens"));
    console.log(localStorage.getItem("username"));

    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
    if (data === null) {
      setAuthTokens(null)
      localStorage.setItem("tokens", null);
      localStorage.setItem("username", null);
    } else {
      setAuthTokens(data["tokens"])
      localStorage.setItem("tokens", data["tokens"]);
      localStorage.setItem("username", data["username"]);
    }
    console.log("authToken: " + authTokens + "  localstorage: " + localStorage.getItem("tokens"));
  }

  function setStorageToTokens() {
    if (localStorage.getItem("tokens") === "null") {
      return null;
    } else {
      return localStorage.getItem("tokens");
    }
  }

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
          <Route path="/view-pictures" component={ViewPictures} />
          <PrivateRoute path="/logout" component={Logout} />
          <TeacherRoute path="/teacher/view-daily" component={TeacherViewDaily} />
          <TeacherRoute path="/teacher/add-daily" component={TeacherAddDaily} />
          <ParentRoute path="/parent/view-daily" component={ParentViewDaily} />}
          </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;