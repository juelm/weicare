import React, { Component } from 'react';
import AssignmentsPage from './AssignmentsPage';
import db from '../../../Data/db';
import repos from '../../../Data/summaryMod';
import sortDetails from '../../../Data/sortDetail';
import AssignmentsMod from '../../../Data/AssignmentsMod';


/**
 * This is the parent level component of the assignments details snapshot.
 * The component brings in the data from the AssignmentsMod to populate
 * this components child components.
 */
export default class Assignments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignments: [],
    };
  }

  /**
   * This function makes an asynchronous call to the AssignmentsModule
   * to grab all the assignments which are then set in state.
   */
  async componentDidMount() {
    const assignments = await AssignmentsMod.getAssignments();
    this.setState({ assignments });
  }

  /**
   * This function receives data when a sort icon is clicked on the Assignmebnts Detail page.
   * It then processes that data and calls the approrpiate method in the sortDetail module 
   * to sort the results based on the attribute clicked and return them to the Assignments Detail page.
   */
    onClick = (e) => {
       switch(e.target.id){
           case "assignment":
               const assignmentSorted = sortDetails.sortAssignments(this.state.assignments);
               this.setState({assignments: assignmentSorted});
               break;
           case "creationDate":
               const dateCreatedSorted = sortDetails.sortDateCreated(this.state.assignments);
               this.setState({assignments: dateCreatedSorted});
               break;
            case "dueDate":
               const dueDateSorted = sortDetails.sortDateDue(this.state.assignments);
               this.setState({assignments: dueDateSorted});
               break;
            case "submissions":
               const submissionsSorted = sortDetails.sortSubmissions(this.state.assignments);
               this.setState({assignments: submissionsSorted});
               break;
            case "avgSubmissions":
               const avgSubmissionsSorted = sortDetails.sortAvgSubmissions(this.state.assignments);
               console.log(avgSubmissionsSorted)
               this.setState({assignments: avgSubmissionsSorted});
               break;
            case "comments":
               const commentsSorted = sortDetails.sortNumComments(this.state.assignments);
               this.setState({assignments: commentsSorted});
               break;

       }
    }


  render() {
    const { assignments } = this.state;

    return (
      <AssignmentsPage
        assignments={assignments} onClick={this.onClick}
      />
    );
  }
}
