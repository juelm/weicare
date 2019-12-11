import React, { Component } from 'react';
import AssignmentList from './AssignmentList';

/**
 * The CourseDetail component represents an individual course from
 * a list of courses.  It renders that course as a and individual row in a
 * table of all of all the courses.  This component sends it's courses
 * related assignment data to an assignment class for further attention.
 * This component also assigns a click listener to the title of the course.
 * So if this course is clicked on, a call to action will bubble up to the
 * top parent component so that the individual course can be viewed in greater
 * detail.
 */
class CourseDetail extends Component {
  getStyle = () => ({
    background: '#f4f4f4',
    padding: '20px',
    border: '2px solid',
    width: '35%',
    float: 'left',
    margin: '40px 0 0 10%',
    textAlign: 'center',
  })

  render() {
    const { courseSelected, course } = this.props;
    const {
      title,
      numStudents,
      assignments,
      id,
    } = course;

    return (

      <tr>
        <td id = {id} onClick={courseSelected.bind(this, id)}>
          { title }
        </td>
        <td>
          { numStudents }
        </td>
        <td>
          <ul>
            <AssignmentList assignments={assignments} />
          </ul>
        </td>
      </tr>

    );
  }
}

export default CourseDetail;
