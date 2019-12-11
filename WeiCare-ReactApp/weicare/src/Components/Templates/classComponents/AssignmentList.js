import React, { Component } from 'react';
import Assignment from './Assignment';

/**
 * The Assignment List is the parent component of
 * Assignment.  The Assignment list creates an unordered
 * list of all assignments associated with a class
 * and maps each assignment to an Assignment component.
 */
class AssignmentList extends Component {
  render() {
    const { assignments } = this.props;
    return assignments.map(assignment => (
      <Assignment
        key={assignment.id}
        assignment={assignment}
      />
    ));
  }
}

export default AssignmentList;
