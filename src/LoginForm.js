import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./LoginForm.css"

const initialFormData = {
    username: "",
    password: "",
}

/** Form for logging in user
 * 
 * Props
 * -login()
 * 
 * State
 * -formData: user login data
 *  {username, password}
 * -errors: array of errors on bad submission
 * 
 *  RoutesList -> LoginForm
 */

function LoginForm ({ login })  {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(null);

    /** Send {name, quantity} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
      evt.preventDefault();
      const {username, password} = formData
      try {
        await login({username, password});
        return <Navigate to="/" />
      } catch(err) {
        setErrors(err);
      }
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
      <div className="LoginForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name">Username:</label>
              <input
                className='form-control'
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="password">Password:</label>
              <input
                className='form-control'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button className='btn btn-primary'>Submit</button>
            </form>
            {errors && errors.map(e =>
              <div className='text-danger'>{e}!</div>
            )}
          </div>
        </div>
      </div>
    );
}

export default LoginForm