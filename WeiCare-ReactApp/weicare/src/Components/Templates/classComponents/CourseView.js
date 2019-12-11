import React, { Component } from 'react';

/**
 * This component is a detailed view of a particular class
 * that is accessed from the classes snapshot.
 *
 */
class CourseView extends Component {
state = {
  teacherName: '',
}

/**
  * This function waits for the component to mount in order to
  * call setTeacherNameState().
  */
async componentDidMount() {
  await this.setTeacherNameState();
}

/**
  * This function searches through the roster and assigns the teacherName
  * in state to the user with the Role === 'Teacher'.
  */
  setTeacherNameState = () => {
    const keysOfRoster = Object.entries(this.props.course.roster.roster);
    keysOfRoster.map((user) => {
      const userInfo = 1;
      let teacherName;
      if (user[userInfo].Role === 'Teacher') {
        teacherName = user[userInfo].First_Name + ' '  + user[userInfo].Last_Name;
        this.setState({ teacherName })
      }
    });
  }

  render() {
    const { teacherName } = this.state;
    const { title, numStudents, id } = this.props.course;
    return (
      <div>
        <button onClick={this.props.showClassesDetails} >
          return to view of classes
        </button>
        <p>
          Course Title:
          { title }
        </p>
        <p>
          Teacher:
          { teacherName }
        </p>
        <p>
          Number of Students in course:
          { numStudents }
        </p>
        <p>
          Course ID:
          { id }
        </p>
      </div>
    );
  }
}

export default CourseView;
