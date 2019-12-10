import React, { Component } from 'react';

/**

 */
class Assignments extends Component {

  getStyle = () => ({
    margin: '100px auto 20px auto',
  });

  render() {

    return (
      <div style={this.getStyle()}>
        <h1>Assignments Page!</h1>
      </div>
    );
  }
}


export default Assignments;
