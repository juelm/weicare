import React, { Component } from 'react';


/**

 */
class TeachersPage extends Component {

  getStyle = () => ({
    margin: '170px 170px 20px auto',
    padding:'170px 170px 20px auto',
    //clear: 'both'
    display: 'inline-block'
  });

  render() {

    return (
      <div style={this.getStyle()}>
        <h1>Teachers Page!</h1>
      </div>
    );
  }
}


export default TeachersPage;
