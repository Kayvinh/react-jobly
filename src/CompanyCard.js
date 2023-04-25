import React from 'react'


/** Display company information
 * 
 * props:
 *  - name: Company name
 *  - description: Company description
 *  - logoUrl: Company logo image
 * 
 *  CompanyList -> CompanyCard
 */
function CompanyCard({ name, description, logoUrl }) {
  return (
    <li>{name}</li>

  )
}

export default CompanyCard