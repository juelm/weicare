import React, { Component } from 'react';
import TeachersPage from '../components/PageComponents/TeachersPage.js';
import ClassesPage from '../components/PageComponents/ClassesPage.js';
import LoginPage from '../components/PageComponents/LoginPage.js';
import Header from '../components/NavigationComponents/Header.js';
import { Z_FIXED } from 'zlib';
import LhsBar from '../components/NavigationComponents/LhsBar.js';


class HomePage extends Component {
  constructor(props){
    super(props)

    this.markSelected = this.markSelected.bind(this);
    this.changeUser = this.changeUser.bind(this);

    this.state = {
      selected: 1,
      user: 'guest'
    }
  }

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
    background: 'white',
    padding: '20px',
    //border: '2px solid',
    width: '60%',
    minHeight: '800px',
    margin: '175px 18% 20px 20%',
    textAlign: 'center',
    float: 'right'
  })

  changeUser(userName){
    this.setState({user: userName});
  }

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
    let lhs;
    let message;

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
      pageSelected = <LoginPage changeUser = {this.changeUser}/>;
      title = 'Login Page';
      assignmentsColor = 'teal';
    }

    if(this.state.user != 'guest') {
        lhs = <LhsBar />;
        message = "Welcome " + this.state.user;
    }
    //console.log(this.state.user);
    console.log(lhs);

    return (
      <div>
        <Header markSelected = {this.markSelected} welcome = {message}/>
        {lhs}
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


export default HomePage;