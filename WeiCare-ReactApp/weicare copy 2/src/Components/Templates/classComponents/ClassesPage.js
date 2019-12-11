import React, { Component } from 'react';
import ClassesMod from '../../../Data/classesMod';
import Classes from './Classes';
import CourseView from './CourseView';
import FilterIcon from '../../genericDetailComponents/filterIcon';
import sortDetails from '../../../Data/sortDetail';

/**
 * The ClassesPage is the top level component of the Class Details snapshot.
 * The classes Page controls the sub navigation of class details.
 * It controls the logic for whether or not a specific class
 * is being viewed, or if the default view, the overall view\
 * of all the classes is being shown.
 * This component brings in the data used to populate the page from the
 * ClassesMod module.
 * This class sets up the table for the overall view passing the Class Data
 * imported from the ClassesMod to the Classes component.
 */
class ClassesPage extends Component {
  state = {
    classes: [{
      title: 'loading',
      numStudents: 'loading',
      assignments: [],
    }],
    view: 'details',
  }

  /**
    * This method calls the ClassesMod Module to retrieve all the class
    * data necessary to populate the Class Details Snapshot.
    */
  async componentDidMount() {
    const classes = await ClassesMod.getClassDetails();
    this.setState({ classes });
  }

  /**
    * This function takes a click event on a particular class and
    * assigns the state of this components courseView to that class.
    * This will change the view to a detailed listing of that
    * class selected and change the component rendered to a CourseView.
    */
  courseSelected = (id) => {
    // get the classes from state list of classes
    const { classes } = this.state;
    const course = classes.find(x => x.id === id);
    console.log(course)
    this.setState({
      view: 'course',
      courseView: course,
    });
  }
      
   /**
   * This function receives data when a sort icon is clicked on the Classes Detail page.
   * It then processes that data and calls the approrpiate method in the sortDetail module 
   * to sort the results based on the attribute clicked and return them to the Classes Detail page.
   */ 
  onClick = (e) => {
       switch(e.target.id){
           case "class":
               const classNameSorted = sortDetails.sortClassName(this.state.classes);
               this.setState({classes: classNameSorted});
               break;
           case "numStudents":
               const numStudentsSorted = sortDetails.sortNumStudents(this.state.classes);
               this.setState({classes: numStudentsSorted});
               break;

       }
    }

  /**
    * This function handles the button clicked action from the courseView
    * component and switches the view back to the overall class detailsSnapshot.
    */
  showClassesDetails = () => {
    this.setState({
      view: 'details',
    });
  }

  /**
    * This function sets styling for the table insdie This
    * ClassesPage component.  It centers the table in the middle of the page
    * and it adds a slight margin to the tops and bottom of the table.
    */
  getStyle = () => ({
    margin: '100px auto 20px auto',
  })

  render() {
    console.log(this.state.classes);
    let pageView;
    const { view, courseView, classes } = this.state;
    if (view === 'details') {
      pageView = (
        <div>
          <table style={this.getStyle()}>
            <thead>
              <tr>
                <th> Class Name <FilterIcon id="class" onClick={this.onClick} /> </th>
                <th> Number of Students in Class <FilterIcon id="numStudents" onClick={this.onClick} /> </th>
                <th> Assignments </th>
              </tr>
            </thead>
            <tbody>
              <Classes
                classes={classes}
                courseSelected={this.courseSelected}
              />
            </tbody>
          </table>
        </div>
      );
    } else {
      pageView = (
        <div>
          <CourseView
            course={courseView}
            showClassesDetails={this.showClassesDetails}
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


export default ClassesPage;
