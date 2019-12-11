import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseDetail from './CourseDetail';

/**
 * The Classes Module is the intemdiary between the
 * ClassesPage module and the components that make up the
 * overall view of all of the classes.  It's passed an
 * array of classes from it's parent component and assigns
 * each class object in that array an id for identification purposes.
 * It passes each Class to a CourseDetail component which will
 * further define the class as an individual row in the table
 * presented to the viewer.
 */
class Classes extends Component {
  /**
   * This function handles the click from it's child component and sends
   * the event up with the course ID as a parameter up to it's parent
   * component.
   *
   * @param {string} id - an id identifying the class acted upon.
   */
  courseSelected = (id) => {
    const { courseSelected } = this.props;
    courseSelected(id);
  }

  render() {
    const { classes } = this.props;
    return classes.map(course => (
      <CourseDetail
        key={course.id}
        course={course}
        courseSelected={this.courseSelected}
      />
    ));
  }
}

/**
  * An array of custom Class objects.
  */
Classes.propTypes = {
  classes: PropTypes.arrayOf.isRequired,
};

export default Classes;
