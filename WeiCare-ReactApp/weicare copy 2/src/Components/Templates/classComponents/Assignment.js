import React from 'react';

/**
 * The Assignment component is simply a list item
 * with the title listed for each assignment
 * associated with a class.
 */
function Assignment({ assignment }) {
  const { title, id } = assignment;
  return (
    <li>{ title } </li>
  );
}

export default Assignment;
