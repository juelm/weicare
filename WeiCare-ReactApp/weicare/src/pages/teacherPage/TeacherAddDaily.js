import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import postDaily from "../../modules/postDailyMod.js";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class TeacherAddDaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: " ", title: "", classRoom: "" }; 
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


  handleSubmit(event) {
    const dailyDetail = this.state.text;
    const title = this.state.title;
    const classRoom = this.state.classRoom;
    const user = localStorage.getItem("username");

    event.preventDefault();

    if((classRoom == "1")|| (classRoom == "2") && (dailyDetail.Length > 0)){
       postDaily(dailyDetail, title, user, classRoom);
       alert("Success!"); 
    }
    else{
      alert("Daily detail can't be empty/ Class Room code has to be valide!");
    }

  }

  render() {
    return (
      <div>
        <Box mx="auto" bgcolor="background.paper" pb={6} pt={10}>
          <div
            style={{
              marginButtom: "20%"
            }}
          >
          <h1 style={{textAlign: "center"}}>Add Daily</h1>
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
            <br />

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
        <Button
          variant="contained"
          color="primary"
          style={{
            display: "block",
            marginLeft: "45%",

          }}
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default TeacherAddDaily;
