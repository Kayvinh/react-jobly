import React from 'react';
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import NextPrevButtons from './NextPrevButtons';

/** Display list of all companies
 * 
 * Props
 * -none
 * 
 * State: 
 *  - companies: array of all companies [{handle,name,description...},...]
 *  - batch: index for current batch of results being shown
 * 
 * RoutesList -> CompanyList -> {SearchForm, NextPrevButtons CompanyCard}
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState(null);
    const [batch, setBatch] = useState(0);
    const batchSize = 10;

    /** gets companies on initial render */
    useEffect(function getCompaniesDataOnMount() {
        async function getCompaniesData() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getCompaniesData();
    }, []);

    /**gets list of companies, filtered by name, and updates state */
    async function search(searchTerm) {
        setCompanies(await JoblyApi.searchCompany(searchTerm));
        setBatch(0);
    }

    /** updates state to show next set of companies */
    function showNext() {
        setBatch(b => b + 1)
    }

    /** updates state to show previous set of companies */
    function showPrevious() {
        setBatch(b => b - 1)
    }

    /** Render company card
    *   
    *   If companies are still loading, display Loading...
    */
    function renderCompanies() {
        if (!companies) return <div>Loading...</div>;
        return (
            <div>
                <SearchForm search={search} />
                <NextPrevButtons 
                next={showNext} 
                prev={showPrevious} 
                numBatches={companies.length/batchSize - 1}
                currentBatch={batch} />
                <ul>
                    {companies.map((c =>
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                    ))
                        .filter((c, idx) =>
                            idx >= batch * batchSize && 
                            idx < (batch + 1) * batchSize
                        )
                    }
                </ul>
                <NextPrevButtons 
                next={showNext} 
                prev={showPrevious} 
                numBatches={companies.length/batchSize}
                currentBatch={batch} />
            </div>
        );
    }

    return (
        <div className='CompanyList container'>

            {renderCompanies()}
        </div>
    )
}

export default CompanyList