import React, { Component } from 'react';
import ClassesTab from './ClassesTab';
import TeachersTab from './TeachersTab';
import AssignmentsTab from './AssignmentsTab';


class LhsBar extends Component {
  constructor(props){
    super(props)

    this.markSelected = this.markSelected.bind(this);

    this.state = {
      selected: 1,
    }
  }

  getTabsStyle = () => ({
    float: 'left',
    margin: '0px 0px 0px 0px ',
    position: 'fixed',
    display: 'inline-block',
    
  })

  getStyle = () => ({
    minHeight: '800px',
    marginTop: '175px',
    marginLeft: '20px',
    textAlign: 'center',
    width: '10%',
    float:'left',
    display:'inline-block',
    position: 'fixed'
  })

  markSelected(id){
    console.log(id);
    if (id === "Home") {
      this.setState({
        selected: 1,
      });
    } else if (id === "About Us") {
      this.setState({
        selected: 2,
      });
    } else if (id === "Login") {
      this.setState({
        selected: 3,
      });
    }
  }

  render() {
    let teacherColor = 'gray';
    let classesColor = 'gray';
    let assignmentsColor = 'gray';
    const { selected } = this.state;

    // Selects the Page to be displayed and that pages
    // tab gets assigned a teal color
    if (selected === 1) {
      teacherColor = 'teal';
    } else if (selected === 2) {
      classesColor = 'teal';
    } else if (selected === 3) {
      assignmentsColor = 'teal';
    }
    //console.log(selected);
    
    return (
      <div style = {this.getStyle()}>
        <ClassesTab markSelected = {this.markSelected}/>
        <TeachersTab markSelected = {this.markSelected}/>
        <AssignmentsTab markSelected = {this.markSelected}/>
      </div>
    );
  }
}


export default LhsBar;
