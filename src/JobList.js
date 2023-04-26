import React, { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import JoblyApi from './api'

/** Display list of all jobs
 * 
 * Props
 * -none
 * 
 * State: 
 *  - jobs: 
 *     array of jobs [{id,title,salary,companyname, equity, handle...},...]
 * 
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 * 
 */
function JobList() {
    const [jobs, setJobs] = useState(null)

    /** gets all jobs on first render */
    useEffect(function getJobsOnMount() {
        async function getJobs() {
            setJobs(await JoblyApi.getJobs())
        }
        getJobs();
    }, [])


    /** searches for jobs by title and updates state*/
    async function search(searchTerm) {
        setJobs(await JoblyApi.searchJobs(searchTerm))
    }

    /** renders jobs once they have loaded */
    function renderJobs() {
        if (!jobs) {
            return <div>Loading...</div>
        }

        return (
            <div className='container'>
                <SearchForm search={search} />
                <JobCardList jobs={jobs} />
            </div>
        )
    }

    return (
        <div className='JobList'>
            {renderJobs()}
        </div>
    )
}

export default JobList