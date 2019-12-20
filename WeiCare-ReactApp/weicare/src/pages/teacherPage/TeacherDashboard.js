import React, { useEffect, useState } from "react";
import getClassRoster from "../../modules/getClassRosterMod.js";
import Paper from "@material-ui/core/Paper";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link } from "react-router-dom";


function TeacherDashBoard() {
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    getClassRoster(setRoster);
  }, []);

  return (
    <div style={{marginLeft: "5%", width: "90%", marginRight:"10%", marginBottom:"5%", marginTop: "5%"}}>
      <Link to="/update">
        <AccountBoxIcon style = {{float: 'right'}}/>
      </Link>
      
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
