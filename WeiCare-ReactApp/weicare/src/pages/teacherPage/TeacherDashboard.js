import React, { useEffect, useState } from "react";
import getClassRoster from "../../modules/getClassRosterMod.js";
import Paper from "@material-ui/core/Paper";


function TeacherDashBoard() {
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    getClassRoster(setRoster);
  }, []);

  return (
    <div style={{marginLeft: "40%", marginRight:"10%", marginBottom:"5%"}}>
      <Paper style={{paddingLeft:"10%", paddingTop:"2%", paddingBottom:"5%"}}>
        <h3>Students: </h3>
        {roster.length ? (
          roster.map(roster => (
            <div>
              <ul>
                <li>
                  {roster.FirstName} {roster.LastName}
                </li>
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
