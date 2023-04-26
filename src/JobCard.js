import React from 'react';
import './JobCard.css';

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
    <div className='JobCard card'>
      <div className='card-body'>
        <div className='card-title'>
          <h6>
            <b>{job.title}</b>
            <p>{job.companyName}</p>
          </h6>
        </div>
        <small>
          <div>Salary: {job.salary}</div>
          <div>Equity: {job.equity}</div>
        </small>
      </div>
    </div>
  );
}

export default JobCard;