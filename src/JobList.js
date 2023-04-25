import React from 'react'
import JobCardList from './JobCardList'
import SearchForm from './SearchForm'

/** Display list of all jobs
 * 
 * state: 
 *  - jobs: array of all jobs [{id,title,salary,companyname...},...]
 *  - isLoading: Boolean
 * 
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 * 
 */
function JobList({ jobs }) {
    return (
        <div>JobList
            <SearchForm />
            <JobCardList jobs={[{ id: 1, title: "title 1", salary: 100, equity: 0.001 },
            { id: 2, title: "title 2", salary: 200, equity: 0.002 },
            { id: 3, title: "title 3", salary: 300, equity: 0.003 }]} />
        </div>
    )
}

export default JobList