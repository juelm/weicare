import React, { Component } from 'react';
import ClassesTab from './ClassesTab';
import TeachersTab from './TeachersTab';
import AssignmentsTab from './AssignmentsTab';
import TeachersPage from './TeachersPage';
import ClassesPage from './ClassesPage';


/**
 * The DetailsPage component is the parent component of the Details Snapshot.
 * This component handles the navigation of it's three main sub components:
 * The Assignments, Classes, and Teachers Pages.
 */
class LhsBar extends Component {
  constructor(props){
    super(props)

    this.markSelected = this.markSelected.bind(this);

    this.state = {
      selected: 1,
    }
  }
  // state = {
  //   selected: 1,
  // }

  /**
   * This function defines basic styling for the individual details tabs.
   */
  getTabsStyle = () => ({
    float: 'left',
    margin: '0px 0px 0px 0px ',
    position: 'fixed',
    display: 'inline-block',
    
  })

  /**
   * This function defines the basic styling for
   * the Details Snapshot Page main view.
   */
  getStyle = () => ({
    //background: '#e9e0c9',
    //background: 'tan',
    // padding: '20px',
    //border: '2px solid',
    //width: '60%',
    minHeight: '800px',
    marginTop: '175px',
    marginLeft: '20px',
    textAlign: 'center',
    width: '10%',
    float:'left',
    display:'inline-block',
    position: 'fixed'
  })

  /**
   * This function handles the navigation of the Details Snapshot.
   * It controls which of the three details pages is currently
   * being shown.
   *
   * @param {string} id - an id identifying which page is to be shown.
   */

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
    console.log(selected);
    

  //   <div style={this.getTabsStyle()}>
  //   <TeachersTab fontColor={teacherColor} markSelected={this.markSelected} />
  //   <ClassesTab fontColor={classesColor} markSelected={this.markSelected} />
  //   <AssignmentsTab fontColor={assignmentsColor} markSelected={this.markSelected} />
  // </div>

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
