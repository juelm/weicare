import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * This component comprises the Classes tab in the detailsSnapshot
 * view.  It has a click listener which is fired when
 * The user clicks the tab.  The click navigates the users
 * to the Classes Snapshot page.
 */
class ClassesTab extends Component {
  state = {
    id: 2,
  }

  getStyle = () => ({
    background: '#f4f4f4',
    color: this.props.fontColor,
    border: '2px solid',
    display: 'block',
    margin: '2%',
    textAlign: 'center',
    borderRadius: "15px"
  })

  render() {
    return (
        <div style={this.getStyle()}>
          <h3> Classes </h3>
          <img src="./baseline_school_black_48dp.png" />
        </div>
    );
  }
}

export default ClassesTab;
