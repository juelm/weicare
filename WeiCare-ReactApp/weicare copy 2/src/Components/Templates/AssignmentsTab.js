import React, { Component } from 'react';

/**
* The AssignmentsTab component represents a navigational component in
* The DetailsSnapshot page.  This component listens for a click
* action which will bubble up to the parent component and send
* the user to the AssignmentsPage in the DetailsSnapshot.
 */
class AssignmentsTab extends Component {
  state = {
    id: 3,
  }

  /**
   * This function returns basic styling for the TeachersTab
   */
  getStyle = () => {
    const { fontColor } = this.props;
    return {
      background: '#f4f4f4',
      padding: '10px',
      border: '2px solid',
      display: 'block',
      margin: '2%',
      textAlign: 'center',
      borderRadius: '15px',
      color: fontColor,
    };
  }

  render() {
    return (
      <div
        style={this.getStyle()}
        onClick={this.props.markSelected.bind(this, this.state.id)}
      >
        <h3> Assignments </h3>
        <img
          src="./baseline_import_contacts_black_48dp.png"
          alt="Assignments"
        />
      </div>
    );
  }
}

export default AssignmentsTab;
