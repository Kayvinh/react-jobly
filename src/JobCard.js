import React, { useContext } from 'react';
import './JobCard.css';
import userContext from './userContext';

/** Renders information about a single job
 * 
 * Props
 * -job: {id, title, salary, equity, companyName}
 * -apply(): for applying to a job
 * 
 * State:
 * -none
 * 
 * JobCardList -> JobCard
 */
function JobCard({ id, title, companyName, salary, equity, apply }) {
  const { user } = useContext(userContext);
  const applications = user.applications;
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
        {applications.includes(id)
          ? <button className='btn btn-danger' disabled>Applied</button>
          : <button className='btn btn-danger' onClick={() => apply(id)}>Apply</button>
        }
      </div>
    </div>
  );
}

export default JobCard;