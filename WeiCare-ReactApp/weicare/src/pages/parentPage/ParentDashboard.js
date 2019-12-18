import React, { useEffect, useState } from "react";
import getClassInfo from "../../modules/getParentDashInfo.js";
import Paper from "@material-ui/core/Paper";

function TeacherDashBoard() {
  const [classInfo, setClassInfo] = useState([]);

  useEffect(() => {
    getClassInfo(setClassInfo);
  }, []);

  function className(classID){
    if(classID === 1) return "Red"; 
    if(classID === 2) return "Blue"; 
  }

  return (
    <div style={{ marginLeft: "40%", marginRight: "10%", marginBottom: "5%" }}>
      <Paper
        style={{ paddingLeft: "10%", paddingTop: "2%", paddingBottom: "5%" }}
      >
        <h3>Teacher Info: </h3>
        {classInfo.length ? (
          classInfo.map(classInfo => (
            <div>
              <ul>
                <li> Student: {classInfo.StudentFirstName} {classInfo.StudentLastName}</li>
                <li> Teacher: {classInfo.FirstName} {classInfo.LastName} </li>
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

export default TeacherDashBoard;
