import React, { Component } from 'react';
import AssignmentList from './AssignmentList';
import FilterIcon from '../../genericDetailComponents/filterIcon';
import AssignmentView from './AssignmentView';

/**
 * The Assignments Page component is the main view and navigation
 * controller for the Assignments details snapshot.  This view
 * allows for the overall view of all the assignments as well as
 * for the capability to click an individual assignment and view
 * that assignments specifics.
 */
class AssignmentsPage extends Component {
  state = {
    view: 'details',
  }

  /**
   * This function returns basic styling to center the table on the page.
   */
  getStyle = () => ({
    margin: '100px auto 20px auto',
  })

  /**
   * This function handles the click of it's child component on a
   * specific assignment row and changes the view from the overall
   * assignments view to the view of an individual assignment.
   *
   * @param {string} id - an id identifying the assignment acted upon.
   */
  assignmentSelected = (id) => {
    const { assignments } = this.props;
    const assignment = assignments.find(x => x.id === id);
    this.setState({
      view: 'assignment',
      assignmentView: assignment,
    });
  }

  /**
   * This function handles the click of it's child components button
   * which returns the user to the overall assignments view from
   * the individual assignent view.
   */
  showAssignmentDetails = () => {
    this.setState({
      view: 'details',
    });
  }

  render() {
    let pageView;
    const { view, assignmentView } = this.state;
    const { assignments } = this.props;
    if (view === 'details') {
      pageView = (
        <table style={this.getStyle()}>
          <thead>
            <tr>
              <th>Assignment <FilterIcon id="assignment" onClick={this.props.onClick} /></th>
              <th>Creation Date <FilterIcon id="creationDate" onClick={this.props.onClick} /></th>
              <th>Due Date <FilterIcon id="dueDate" onClick={this.props.onClick} /></th>
              <th>Submissions <FilterIcon id="submissions" onClick={this.props.onClick} /></th>
              <th>Avg Versions / Submission <FilterIcon id="avgSubmissions" onClick={this.props.onClick} /></th>
              <th>Number of Comments <FilterIcon id="comments" onClick={this.props.onClick} /></th>
            </tr>
          </thead>
          <tbody>
            <AssignmentList
              assignments={assignments}
              assignmentSelected={this.assignmentSelected}
            />
          </tbody>
        </table>
      );
    } else {
      pageView = (
        <div>
          <AssignmentView
            assignment={assignmentView}
            showAssignmentDetails={this.showAssignmentDetails}
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


export default AssignmentsPage;
