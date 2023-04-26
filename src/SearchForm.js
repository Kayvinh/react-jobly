import React from 'react';

/**Form for searching for specific company/job
 * 
 * Props
 * -search()
 * 
 * State
 * formData: search term
 * 
 *  {CompanyList, JobList} -> SearchForm
 */
function SearchForm({ search }) {
  return (
    <form onSubmit={search}>
      <input type='text'></input>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;