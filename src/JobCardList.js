import React from 'react';
import JobCard from './JobCard';


/** Renders a list of jobs 
 * 
 * Props
 * -jobs: [{id, title, salary, equity, companyName}, ...]
 * 
 * State
 * -none
 * 
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
*/

function JobCardList({ jobs }) {
  return (
    <div className='JobCardList'>
      {jobs.map(j => 
        <JobCard 
          key={j.id} 
          title={j.title} 
          companyName={j.companyName}  
          salary={j.salary}
          equity={j.equity}
        />)}
    </div>
  );
}

export default JobCardList;