import React from 'react';

/**
 * The AssignmentView Component is responsible for showing the
 * individual assignment and it's accompanying details.
 * It has a single button which handles a click and feeds the
 * response back up the the AssignmentsPage so as to return
 * the user to the overall Assignments View details snapshot.
 */
function AssignmentView({ assignment, showAssignmentDetails }) {
  const {
    id,
    title,
    dateCreated,
    dueDate,
    submissions,
    numComments,
  } = assignment;

  return (
    <div>
      <button onClick={showAssignmentDetails} >
        return to view of assignments
      </button>
      <p>
        {id}
      </p>
      <p>
        {title}
      </p>
      <p>
        Date created: {dateCreated}
      </p>
      <p>
        Date due: {dueDate}
      </p>
      <p>
        Number of submissions: {submissions.total}
      </p>
      <p>
        Number of comments: {numComments}
      </p>
    </div>
  );
}

export default AssignmentView;
