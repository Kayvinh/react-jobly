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
function JobCard({ title, companyName, salary, equity }) {
  return (
    <div className='JobCard card'>
      <div className='card-body'>
        <div className='card-title'>
          <h6>
            <b>{title}</b>
            <p>{companyName}</p>
          </h6>
        </div>
        <small>
          <div>Salary: {salary}</div>
          <div>Equity: {equity}</div>
        </small>
      </div>
    </div>
  );
}

export default JobCard;