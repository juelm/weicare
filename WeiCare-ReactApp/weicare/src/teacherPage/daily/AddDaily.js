import React, { Component } from "react";

const fs = require("fs");

export class AddDaily extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // write file to db

  handleSubmit(event) {
    const userInput = this.state.value;
    alert(userInput);

    event.preventDefault();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Add Daily</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter today's daily:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddDaily;
