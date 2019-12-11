import React, { Component } from 'react';
import Teachers from '../../../Data/teacherMod';
import Details from './Details';
import FilterIcon from '../../genericDetailComponents/filterIcon';
import sortDetails from '../../../Data/sortDetail';
import TeacherView from './TeacherView';

/**
 * The TeachersPage is the top level coponent of the Teacher Details snapshot.
 * It pulls in the Teacher data from the Teachers module and uses that
 * data to populate the table which constitutes the main view of this page.
 * This component handles the navigation of the overall teachers view and
 * the individual level teachers view.
 */
class TeachersPage extends Component {
  state = {
    Teachers,
    view: 'details',
  }

  /**
    * This function sets styling for the table insdie This
    * TeachersPage component.  It centers the table in the middle of the page
    * and it adds a slight margin to the tops and bottom of the table.
    */
  getStyle = () => ({
    margin: '100px auto 20px auto',
  });

  /**
   * This function handles the view switching from the overall teachers
   * view to the invidual level teachers view when a teacher row is clicked
   * on a few components deeper which has bubbled up.
   */
  teacherSelected = (id) => {
    const teacher = Teachers.find(x => x.id === id);
    this.setState({
      view: 'teacher',
      teacherView: teacher,
    });
  }

  /**
   * This function handles the view switching from the individual level
   * teacher view to the overall level teacher view when the return to
   * overall teachers view button is clicked in the TeacherDetail component.
   */
  showTeacherDetails = () => {
    this.setState({
      view: 'details',
    });
  }
  
  
  /**
   * This function receives data when a sort icon is clicked on the Teachers Detail page.
   * It then processes that data and calls the approrpiate method in the sortDetail module 
   * to sort the results based on the attribute clicked and return them to the Teachers detail page.
   */
  onClick = (e) => {
    switch (e.target.id) {
      case 'firstName':
        const fNameSorted = sortDetails.sortFirstName(Teachers);
        this.setState({Teachers: fNameSorted});
        break;
      case 'lastName':
        const lNameSorted = sortDetails.sortLastName(Teachers);
        this.setState({Teachers: lNameSorted});
        break;
      case 'displayName':
        const dNameSorted = sortDetails.sortDisplayName(Teachers);
        this.setState({Teachers: dNameSorted});
        break;
      case 'school':
        const schoolSorted = sortDetails.sortSchool(Teachers);
        this.setState({Teachers: schoolSorted});
        break;
      case 'lastLogin':
        const lastLogSorted = sortDetails.sortLastLogin(Teachers);
        this.setState({Teachers: lastLogSorted});
        break;
      case 'numClasses':
        const numClassesSorted = sortDetails.sortClassNum(Teachers);
        this.setState({Teachers: numClassesSorted});
        break;
      default:
        break;
    }
  }

  render() {
    let pageView;
    const { view, teacherView, Teachers } = this.state;
    if (view === 'details') {
      pageView = (
        <div>
          <table style={this.getStyle()}>
            <thead>
              <tr>
                <th> First Name <FilterIcon id = "firstName" onClick = {this.onClick}/> </th>
                <th> Last Name <FilterIcon id = "lastName" onClick = {this.onClick}/></th>
                <th> Display Name <FilterIcon id = "displayName" onClick = {this.onClick}/></th>
                <th> School <FilterIcon id = "school" onClick = {this.onClick}/></th>
                <th id = "email"> Email </th>
                <th id = "lastLogin"> Last Login <FilterIcon id = "lastLogin" onClick = {this.onClick} /> </th>
                <th id = "numClasses"> Number of Class <FilterIcon id = "numClasses" onClick = {this.onClick}  /> </th>
                <th> Class List </th>
              </tr>
            </thead>
            <tbody>
              <Details
                details={Teachers}
                teacherSelected={this.teacherSelected}
              />
            </tbody>
          </table>
        </div>
      );
    } else {
      pageView = (
        <div>
          <TeacherView
            teacher={teacherView}
            showTeacherDetails={this.showTeacherDetails}
          />
        </div>
      );
    }

    return (
      <div style={this.getStyle()}>
        {pageView}
      </div>
    );
  }
}


export default TeachersPage;
