import React from 'react';
import './Homepage.css';
import userContext from './userContext';
import { useContext } from 'react';

/**Renders a simple home page
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * uses context: user.firstName
 * 
 * RoutesList -> Homepage
 */

function Homepage() {
    const { user } = useContext(userContext);

    return (
        <div className='Homepage d-flex justify-content-start'>
            <div className="container text-center">
                <h1 className='mb-4 fw-bold'>Jobly</h1>
                <p className='lead'> All the jobs in one, convenient place.</p>
                {user && <h2>Welcome Back, {user.firstName}!</h2>}
            </div>
        </div>
    )
}

export default Homepage