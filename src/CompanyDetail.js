import React from 'react';
import { useParams } from 'react-router-dom/dist';
import JobCardList from './JobCardList';

/** Display specific company detail
 * 
 * 
 * Props
 * -none
 * 
 * State: 
 *  - companyDetails: object {handle,name,description...}
 *  - isLoading: Boolean
 * 
 * RoutesList -> CompanyDetail -> JobCardList
 * 
 */
function CompanyDetail() {
  const { handle } = useParams()
  return (
    <div>
      <p>{handle}</p>
      <JobCardList jobs={[{ id: 1, title: "title 1", salary: 100, equity: 0.001 },
      { id: 2, title: "title 2", salary: 200, equity: 0.002 },
      { id: 3, title: "title 3", salary: 300, equity: 0.003 }]} />
    </div>
  )
}

export default CompanyDetail