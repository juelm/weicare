import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TeacherHeader extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Teacher Page</h1>
        <Link to="/">
          <button>View Daily</button>
        </Link>
        <Link to="/">
          <button>View Picture</button>
        </Link>
        <Link to="/addDaily">
          <button>Add Daily</button>
        </Link>
        <Link to="/addpicture">
          <button>Add Picture</button>
        </Link>
      </div>
    );
  }
}

export default TeacherHeader;
