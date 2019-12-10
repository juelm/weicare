import React, { Component } from 'react';

/**

 */
class LoginPage extends Component {

  getStyle = () => ({
    margin: '100px auto 20px auto',
    //clear:'both'
  });

  render() {

    return (
      <div style={this.getStyle()}>
        <form>
            UserName: <input type = 'text'></input>
            <br></br>
            Password: <input type = 'text'></input>
            <br></br>
            <input type = "submit"></input>
        </form>
      </div>
    );
  }
}


export default LoginPage;
