import React from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

class TeacherAddDaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(value) {
    this.setState({ text: value });
    console.log(this.state.text);
  }
  handleSubmit(event) {
    const userInput = this.state.text;
    alert(userInput);
    event.preventDefault();
  }
  render() {
    return (
      <div
        style={{
          marginButtom: "20%"
        }}
      >
        <button
          style={{ clear: "both", marginLeft: "20%" }}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
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
    );
  }
}

export default TeacherAddDaily;