import React, { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import JoblyApi from './api'
import NextPrevButtons from './NextPrevButtons';

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
    const [jobs, setJobs] = useState(null);
    const [batch, setBatch] = useState(0);
    const batchSize = 10;

    /** gets all jobs on first render */
    useEffect(function getJobsOnMount() {
        async function getJobs() {
            setJobs(await JoblyApi.getJobs())
        }
        getJobs();
    }, [])


    /** searches for jobs by title and updates state*/
    async function search(searchTerm) {
        setJobs(await JoblyApi.searchJobs(searchTerm));
        setBatch(0);
    }

    /** updates state to show next set of cjobs */
    function showNext() {
        setBatch(b => b + 1);
    }
    
    /** updates state to show previous set of jobs */
    function showPrevious() {
        setBatch(b => b - 1);
    }

    /** renders jobs once they have loaded */
    function renderJobs() {
        if (!jobs) {
            return <div>Loading...</div>
        }

        return (
            <div >
                <SearchForm search={search} />
                <NextPrevButtons 
                next={showNext} 
                prev={showPrevious} 
                numBatches={jobs.length/batchSize - 1}
                currentBatch={batch} />
                <div className='container'>

            
                <JobCardList jobs={jobs.filter((j, idx) =>
                            idx >= batch * batchSize && 
                            idx < (batch + 1) * batchSize
                        )} />
                    </div>
                <NextPrevButtons 
                next={showNext} 
                prev={showPrevious} 
                numBatches={jobs.length/batchSize - 1}
                currentBatch={batch} />
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