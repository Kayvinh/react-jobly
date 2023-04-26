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
    <div className='JobCard'>
      <div>{job.title}</div>
      <div>{job.salary}</div>
      <div>{job.equity}</div>
    </div>
  )
}

export default JobCard