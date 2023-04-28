import React from 'react';
import JobCard from './JobCard';


/** Renders a list of jobs 
 * 
 * Props
 * -jobs: [{id, title, salary, equity, companyName}, ...]
 * -apply(): for applying to jobs
 * 
 * State
 * -none
 * 
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
*/

function JobCardList({ jobs, apply }) {
  return (
    <div className='JobCardList'>
      {jobs.map(j => 
        <JobCard 
          key={j.id}
          id={j.id} 
          title={j.title} 
          companyName={j.companyName}  
          salary={j.salary}
          equity={j.equity}
          apply={apply}
        />)}
    </div>
  );
}

export default JobCardList;