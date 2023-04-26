import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';


/** Display company information
 * 
 * Props:
 *  - name: Company name
 *  - description: Company description
 *  - logoUrl: Company logo image
 * 
 * State
 * -none
 * 
 *  CompanyList -> CompanyCard
 */
function CompanyCard({ name, handle, description, logoUrl }) {
  return (
    <div className="CompanyCard card">
      <Link to={`/companies/${handle}`}>
      <div className='card-body '>
        <h6 className='card-title'>
          {name}
          {logoUrl && <img className="float-end ms-5"src={logoUrl} alt={name}/>}
        </h6>
        <p>
          <small>
            {description}
          </small>
        </p>
      </div>
      </Link>
    </div>

  )
}

export default CompanyCard