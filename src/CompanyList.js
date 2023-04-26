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
 *  - isLoading: Boolean
 * 
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getCompaniesData() {
            setCompanies(await JoblyApi.getCompanies());
        }

        getCompaniesData();
    }, []);



    /** Render company card
    *   
    *   If companies are still loading, display Loading...
    */
    function renderCompanies() {
        if (!companies) return <div>Loading...</div>;

        return (
            <ul>
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


    async function search(formData) {
        setCompanies(await JoblyApi.searchCompany(formData.searchTerm));
    }


    return (
        <div className='CompanyList'>
            <SearchForm search={search}/>
            {renderCompanies()}
        </div>
    )
}

export default CompanyList