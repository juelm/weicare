import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import postDaily from '../../modules/postDailyMod.js';
import { spacing } from '@material-ui/system';
import Box from "@material-ui/core/Box";

class TeacherAddDaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: " ", title: "", classRoom: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeClassName = this.handleChangeClassName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    console.log(this.state.text);
  }
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeClassName(event) {
    this.setState({ classRoom: event.target.value });
  }

  // handleChangeTitle(value) {
  //   this.setState({ title: value });
  //   console.log(this.state.title);
  // }


  handleSubmit(event) {
    const dailyDetail = this.state.text;
    const title = this.state.title;
    const classRoom = this.state.classRoom;
    const user = localStorage.getItem("username");

    event.preventDefault();

    //CHANGE UI TO GET THESE AS INPUT
    // let title = "dailyTitle";
    // let user = "sullivana";
    // let className = 1;
    postDaily(dailyDetail, title, user, classRoom);
  }

  render() {
    return (
      <Box mx="auto" bgcolor="background.paper" pb={10}>
        <div
          style={{
            marginButtom: "20%"
          }}
        >
          <button
            style={{ display: "block", marginLeft: "20%", color: "blue" }}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <br/>
          <form action="">
            <label style={{ marginLeft: "20%" }}>
              Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleChangeTitle}
              />
            </label>
            <label style={{ marginLeft: "20%" }}>
              Class Room:
              <input
                type="text"
                value={this.state.classRoom}
                onChange={this.handleChangeClassName}
              />
            </label>
          </form>
          <br/>

          <ReactQuill
            style={{
              theme: "snow",
              marginLeft: "20%",
              marginButtom: "20%",
              width: "60%",
              height: 600
            }}
            theme="snow"
            value={this.state.text}
            onChange={this.handleChange}
          ></ReactQuill>
        </div>
        </Box>
  
    );
  }
}

export default TeacherAddDaily;