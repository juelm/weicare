import React, { Component } from 'react';

class ClassesPage extends Component {

  getStyle = () => ({
    margin: '100px auto 20px auto',
    //clear: 'both'
  });

  render() {

    return (
      <div style={this.getStyle()}>
        <h1>Classes Page!</h1>
      </div>
    );
  }
}


export default ClassesPage;
