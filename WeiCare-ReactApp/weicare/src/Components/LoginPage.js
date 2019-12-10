import React, { Component } from 'react';

/**

 */
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.userName = 'Guest'
        this.passWord = '';
    }

  handleClick(){
    console.log("Hello");

  }

  getStyle = () => ({
    margin: '100px auto 20px auto',
    //clear:'both'
  });

  render() {

    return (
      <div style={this.getStyle()}>
        <form>
            UserName: <input type = 'text' id = 'user-name'></input>
            <br></br>
            Password: <input type = 'password' id = 'password'></input>
            <br></br>
        </form>
        <button onClick = {this.handleClick}>Log In</button>
      </div>
    );
  }
}


export default LoginPage;
