import React from 'react';


/** Renders information about a single job
 * 
 * Props
 * -job: {id, title, salary, equity}
 * 
 * State:
 * -none
 * 
 * JobCardList -> JobCard
 */
function JobCard({ job }) {
  return (
    <div>{job.title}</div>
  )
}

export default JobCard