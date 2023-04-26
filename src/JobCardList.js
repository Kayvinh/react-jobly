import React from 'react';
import JobCard from './JobCard';


/** Renders a list of jobs 
 * 
 * Props
 * -jobs: [{id, title, salary, equity}, ...]
 * 
 * State
 * -none
 * 
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
*/

function JobCardList({ jobs }) {
  return (
    <div className='JobCardList'>
      {jobs.map(j => <JobCard job={j} />)}
    </div>
  )
}

export default JobCardList