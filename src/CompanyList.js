import React from 'react';
import { useState, useEffect } from 'react';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

/** Display list of all companies
 * 
 * Props
 * -none
 * 
 * State: 
 *  - companies: array of all companies [{handle,name,description...},...]
 * 
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState(null);
    const [batches, setBatches] = useState(0);

    /** gets companies on initial render */
    useEffect(function getCompaniesDataOnMount () {
        async function getCompaniesData() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getCompaniesData();
    }, []);

    /**gets list of companies, filtered by name, and updates state */
    async function search(searchTerm) {
        setCompanies(await JoblyApi.searchCompany(searchTerm));
    }

    /** Render company card
    *   
    *   If companies are still loading, display Loading...
    */
    function renderCompanies() {
        if (!companies) return <div>Loading...</div>;

        return (
            <div>
                <SearchForm search={search}/>
                
                <ul>
                    {/* {companies.map((c =>
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                    ))} */}

                    { companies.map((c =>
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                     )).filter((c, idx) => 
                        idx >= batches * 20 && idx <= (batches + 1) * 20
                     )
                    }
                </ul>
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