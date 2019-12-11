import React from 'react';

/**
 * This component builds an individual row in the assignments table
 * representing an assignment in the assignments details page.
 */
function Assignment({ assignment, id, assignmentSelected }) {
  const {
    title, dueDate, dateCreated, submissions, numComments,
  } = assignment;

  // Set the averageSubs and formatAvgSubs variables.
  const averageSubs = submissions.versions / submissions.total;
  const formatAvgSubs = averageSubs.toFixed(0);

  return (
    <tr id={id} onClick={assignmentSelected.bind(this, id)}>
      <td>{ title }</td>
      <td>{ dateCreated }</td>
      <td>{ dueDate }</td>
      <td>{ submissions.total }</td>
      {/* eslint-disable-next-line no-restricted-globals */}
      <td>{ isNaN(formatAvgSubs) ? 0 : formatAvgSubs }</td>
      <td>{ numComments }</td>
    </tr>
  );
}

export default Assignment;
