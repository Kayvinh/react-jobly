import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/** Display specific company detail
 * 
 * 
 * Props
 * -apply(): function for applying to jobs
 * 
 * State: 
 *  - companyDetails: object {handle,name,description...}
 * 
 * RoutesList -> CompanyDetail -> JobCardList
 * 
 */
function CompanyDetail({ apply }) {
  const [companyDetails, setCompanyDetails] = useState(null);
  const { handle } = useParams();

  /**gets company details on initial render */
  useEffect(function getCompanyDetailOnMount() {
    async function getCompanyDetail() {
      setCompanyDetails(await JoblyApi.getCompany(handle));
    }

    getCompanyDetail();
  }, [handle]);

  /** renders company details if loaded */
  function renderCompanyDetails() {
    if (!companyDetails) return <div>Loading...</div>;

    return (
      <>
        <div className='col-md-8 offset-md-2'>
          <h6>{companyDetails.name}</h6>
          <div>{companyDetails.description}</div>
        </div>
        <JobCardList jobs={companyDetails.jobs} apply={apply} />
      </>
    );
  }

  return (

    <div className='CompanyDetail container'>
      {renderCompanyDetails()}
    </div>
  );
}

export default CompanyDetail;