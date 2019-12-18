import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import postDaily from "../../modules/postDailyMod.js";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ENGINE_METHOD_STORE } from "constants";


class TeacherAddDaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: " ", title: "", classRoom: "" }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeClassName = this.handleChangeClassName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
    this.quillRef = null;
    this.reactQuillRef = null;
    this.setState = this.setState.bind(this);

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

  attachQuillRefs() {
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    // Skip if Quill reference is defined:
    if (this.quillRef != null) return;
    
    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef != null) this.quillRef = quillRef;
  }

  // handleChangeTitle(value) {
  //   this.setState({ title: value });
  //   console.log(this.state.title);
  // }

  componentDidMount(){
    this.attachQuillRefs();
  }

  handleSubmit(event) {
    const dailyDetail = this.state.text;
    const title = this.state.title;
    const classRoom = this.state.classRoom;
    const user = localStorage.getItem("username");

    event.preventDefault();

    if((classRoom == "1")|| (classRoom == "2") && (dailyDetail.Length > 0)){
      postDaily(dailyDetail, title, user, classRoom, this.setState);
    }
    else{
      alert("Daily detail can't be empty/ Class Room code has to be valide!");
    }
    


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
          <br />
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
            ref={(el) => { this.reactQuillRef = el }}
            name = 'editor'
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
          ></ReactQuill>; 
        </div>
      </Box>
    );
  }
}

export default TeacherAddDaily;
