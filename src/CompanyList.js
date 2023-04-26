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
    const [companies, setCompanies] = useState([]);//TODO: [] to null
    //TODO: give functions names in useEffect
    /** gets companies on initial render */
    useEffect(() => {
        async function getCompaniesData() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getCompaniesData();
    }, []);
    //TODO: handle destructuring in search form
    /**gets list of companies, filtered by name, and updates state */
    async function search({searchTerm}) {
        setCompanies(await JoblyApi.searchCompany(searchTerm));
    }

    /** Render company card
    *   
    *   If companies are still loading, display Loading...
    */
    function renderCompanies() {
        if (!companies) return <div>Loading...</div>;

        return (
            <ul>
                <SearchForm search={search}/>
                {companies.map((c =>
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                ))}
            </ul>
        );
    }

    return (
        <div className='CompanyList'>

            {renderCompanies()}
        </div>
    )
}

export default CompanyList