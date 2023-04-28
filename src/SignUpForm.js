import React from 'react';
import { useState } from 'react';
import './SignUpForm.css';
import { Navigate } from 'react-router-dom';

const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
}

/**renders and manages form for signup
 * 
 * Props
 * -signUp(): handles signing up
 * 
 * State
 * -formData:
 *  {username, password, firstName, lastName, email}
 * -errors: array of errors on bad submission
 * 
 * RoutesList -> signUpForm
 */
function SignUpForm({ signUp }) {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(null);

    /** Send formData to parent
     *  Redirect to home
     */

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await signUp(formData);
        } catch (err) {
            setErrors(err);
        }
        return <Navigate to="/" />
    }

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** render form */
    return (
        <div className="SignUpForm">
            <div className='container col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Username:</label>
                                <input
                                    className='form-control'
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    className='form-control'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name:</label>
                                <input
                                    className='form-control'
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name:</label>
                                <input
                                    className='form-control'
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    className='form-control'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                        {errors &&
                            <div className='text-danger'>{errors.map((e, idx) =>
                                (<div>{e.slice(e.indexOf(".") + 1)}</div>))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;