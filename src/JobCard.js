import React from 'react'


/** Renders information about a single job
 * 
 * Props
 * -job: {id, title, salary, equity}
 */
function JobCard({ job }) {
  return (
    <div>{job.title}</div>
  )
}

export default JobCard