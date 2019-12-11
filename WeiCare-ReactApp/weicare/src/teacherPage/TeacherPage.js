import React, { Component } from 'react'; 
import TeacherHeader from './TeacherHeader';
import AddDaily from './daily/AddDaily';
import { BrowserRouter as Router, Route } from "react-router-dom";


export class TeacherPage extends Component {
 
  render() {
    return (
      <Router>
        <TeacherHeader/>
          <Route path="/addDaily" component={AddDaily} />

      </Router>
    );
  }
}

export default TeacherPage

