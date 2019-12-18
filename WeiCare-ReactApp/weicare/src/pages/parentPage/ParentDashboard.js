import React, { useEffect, useState } from "react";
import getClassInfo from "../../modules/getParentDashInfo.js";
import Paper from "@material-ui/core/Paper";

function ParentDashBoard() {
  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    getClassInfo(setClassInfo,localStorage.getItem("username"));
  }, []);

  function className(classID){
    if(classID === 1) return "Red"; 
    if(classID === 2) return "Blue"; 
  }

  return (
    <div
      style={{ width: "90%"}}
    >
      <Paper
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "10%",
          padding: 20
        }}
      >
        <h3>Teacher Info: </h3>
        {classInfo.length ? (
          classInfo.map(classInfo => (
            <div>
              <ul>
                <li>
                  {" "}
                  Student: {classInfo.StudentFirstName}{" "}
                  {classInfo.StudentLastName}
                </li>
                <li>
                  {" "}
                  Teacher: {classInfo.FirstName} {classInfo.LastName}{" "}
                </li>
                <li> Email: {classInfo.Email}</li>
                <li> Class Room: {className(classInfo.classID)} </li>
              </ul>
            </div>
          ))
        ) : (
          <h3>loading</h3>
        )}
      </Paper>
    </div>
  );
}

export default ParentDashBoard;
