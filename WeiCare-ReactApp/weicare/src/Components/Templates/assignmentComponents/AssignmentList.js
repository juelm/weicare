import React, { Component } from 'react';
import AssignmentRow from './AssignmentRow';

/**
 * The AssignmentList component takes the assignments props from The
 * AssignmentsPage parent component and maps out each individual Assignment
 * to an AssignmentRow component.
 */
class AssignmentList extends Component {
  /**
   * The get style method assigns the styling to the given element when called.
   * This particular styling was built to center the table in the middle of
   * it's parent component.
   */
  getStyle = () => (
    {
      background: '#f4f4f4',
      padding: '20px',
      border: '2px solid',
      width: '35%',
      float: 'left',
      margin: '40px 0 0 10%',
      textAlign: 'center',
    });

  /**
   * This function handles the onClick action from it's child and bubbles
   * the action up to it's parent comnponent, AssignmentsPage.  It will
   * result in the overall assignments view changing to an individual
   * assignment view with the id in the params.
   *
   * @param {string} id - an id identifying the assignment acted upon.
   */
  assignmentSelected = (id) => {
    const { assignmentSelected } = this.props;
    assignmentSelected(id);
  }

  render() {
    const { assignments } = this.props;

    return assignments.map(assignment => (
      <AssignmentRow
        style={this.getStyle()}
        key={assignment.id}
        assignment={assignment}
        id={assignment.id}
        assignmentSelected={this.assignmentSelected}
      />
    ));
  }
}

export default AssignmentList;
