import React, { Component } from 'react';
var json = require('../users.json');

/**

 */
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.changeUser = this.props.changeUser;
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            userName: 'NotGuest',
            password: ''
        }
        
    }

  handleClick(){
    let user = (json[this.state.userName]);
    console.log(user);
    if(user){
        console.log(user.password);
        console.log(this.state.password);
        if(json[this.state.userName].password === this.state.password){
            this.changeUser(this.state.userName);
        }
    }
  }

  handleUserChange(event){
    this.setState({userName: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  getStyle = () => ({
    margin: '100px auto 20px auto',
    //clear:'both'
  });

  render() {

    // let userNm = this.userName;
    // console.log(userNm);
    // console.log(json[userNm]);

    return (
      <div style={this.getStyle()}>
        <form>
            UserName: <input type = 'text' id = 'user-name' onChange = {this.handleUserChange}></input>
            <br></br>
            Password: <input type = 'password' id = 'password'onChange = {this.handlePasswordChange}></input>
            <br></br>
        </form>
        <button onClick = {()=>{this.handleClick(this.userName)}}>Log In</button>
        <p></p>
      </div>
    );
  }
}


export default LoginPage;
