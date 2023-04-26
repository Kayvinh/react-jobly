import React from 'react';

/**Renders a simple home page
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * RoutesList -> Homepage
 */

function Homepage() {
    return (
        <div className='Homepage'>
            <div className="container text-center">
                <h1 className='mb-4 fw-bold'>Jobly</h1>
                <p className='lead'> All the jobs in one, convenient place.</p>
            </div>
        </div>
    )
}

export default Homepage