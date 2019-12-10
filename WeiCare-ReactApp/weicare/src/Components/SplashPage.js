import React, { Component } from 'react';
// import ClassesTab from './ClassesTab';
// import TeachersTab from './TeachersTab';
// import AssignmentsTab from './AssignmentsTab';
import TeachersPage from './TeachersPage';
import ClassesPage from './ClassesPage';
import LoginPage from './LoginPage.js';
import Header from './Header';
import { Z_FIXED } from 'zlib';

/**
 * The DetailsPage component is the parent component of the Details Snapshot.
 * This component handles the navigation of it's three main sub components:
 * The Assignments, Classes, and Teachers Pages.
 */
class SplashPage extends Component {
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
    background: 'white',
    padding: '20px',
    border: '2px solid',
    width: '60%',
    minHeight: '800px',
    margin: '175px 18% 20px 20%',
    textAlign: 'center',
    clear: 'both',
    //position: 'fixed'
    //display: 'block',
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
    let pageSelected;
    let title = 'Details Page';
    const { selected } = this.state;

    // Selects the Page to be displayed and that pages
    // tab gets assigned a teal color
    if (selected === 1) {
      pageSelected = <TeachersPage />;
      title = 'Teachers Detail';
      teacherColor = 'teal';
    } else if (selected === 2) {
      pageSelected = <ClassesPage />;
      title = 'Classes Detail';
      classesColor = 'teal';
    } else if (selected === 3) {
      pageSelected = <LoginPage />;
      title = 'Login Page';
      assignmentsColor = 'teal';
    }
    console.log(selected);
    

  //   <div style={this.getTabsStyle()}>
  //   <TeachersTab fontColor={teacherColor} markSelected={this.markSelected} />
  //   <ClassesTab fontColor={classesColor} markSelected={this.markSelected} />
  //   <AssignmentsTab fontColor={assignmentsColor} markSelected={this.markSelected} />
  // </div>

    return (
      <div>
        <Header markSelected = {this.markSelected}/>
        <div style={this.getStyle()}>
          <h1> {title} </h1>
          <div>
            {pageSelected}
          </div>
        </div>
      </div>
    );
  }
}


export default SplashPage;
