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
//TODO: consider passing down job data explicitly
function JobCardList({ jobs }) {
  return (
    <div className='JobCardList'>
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  )
}

export default JobCardList