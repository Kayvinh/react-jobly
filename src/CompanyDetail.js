import React from 'react';
import { useParams } from 'react-router-dom/dist';
import { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Display specific company detail
 * 
 * 
 * Props
 * -none
 * 
 * State: 
 *  - companyDetails: object {handle,name,description...}
 * 
 * RoutesList -> CompanyDetail -> JobCardList
 * 
 */
function CompanyDetail() {
  const [ companyDetails, setCompanyDetails ] = useState(null);
  const { handle } = useParams();

  console.log(companyDetails) // null here
  
  useEffect(() => {
    async function getCompanyDetail() {
      setCompanyDetails(await JoblyApi.getCompany(handle));
    }

    getCompanyDetail();
  }, [handle]);

  function renderCompanyDetails () {
    if (!companyDetails) return <div>Loading...</div>;

    return (
      <>
        <div>{companyDetails.handle}</div>
        <div>{companyDetails.description}</div>
        <JobCardList jobs={companyDetails.jobs}/>
      </>
    );
  }

  return (

    <div className='CompanyDetail'>
      {renderCompanyDetails()}
    </div>
  )
}

export default CompanyDetail