import React, { Component } from 'react';

/**
 * The TeachersTab component represents a navigational component in
 * The DetailsSnapshot page.  This component listens for a click
 * action which will bubble up to the parent component and send
 * the user to the TeachersPage in the DetailsSnapshot.
 */
class TeachersTab extends Component {
  state = {
    id: 1,
  }

  /**
   * This function returns basic styling for the TeachersTab
   */
  getStyle = () => {
    const { fontColor } = this.props;
    return {
      background: '#f4f4f4',
      border: '2px solid',
      borderRadius: '15px',
      display: 'block',
      margin: '2%',
      textAlign: 'center',
      color: fontColor,
    };
  }

  render() {
    const { id } = this.state;
    return (
      <div
        style={this.getStyle()}
        onClick={this.props.markSelected.bind(this, id)}
      >
        <h3> Teachers </h3>
        <img
          src="./baseline_people_black_48dp.png"
          alt="Teachers"
        />
      </div>
    );
  }
}

export default TeachersTab;
