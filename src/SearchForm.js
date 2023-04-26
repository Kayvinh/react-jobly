import React from 'react';
import { useState } from 'react';
import { debounce } from "lodash";

const initialSearchTerm = {
  searchTerm: ""
}


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
  const [formData, setFormData] = useState(initialSearchTerm);

  const debounceSearch = debounce(search, 100);

  /** Update form input. */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));

    debounceSearch(formData.searchTerm);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData.searchTerm);
    setFormData(initialSearchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchTerm"
        className="form-control"
        placeholder="Enter search term..."
        onChange={handleChange}
        value={formData.searchTerm}
        aria-label="searchTerm"
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;