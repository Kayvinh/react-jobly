import React from 'react';
import { useState } from 'react';

const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
}

function SignUpForm ({ signUp })  {
    const [formData, setFormData] = useState(initialFormData);

    /** Send {name, quantity} to parent
     *    & clear form. */
    function handleSubmit(evt) {
      evt.preventDefault();
      signUp(formData);
      setFormData(initialFormData);
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

        <label htmlFor="lastName">Last name:</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
  
        <button>Submit</button>
      </form>
    );
}

export default SignUpForm;