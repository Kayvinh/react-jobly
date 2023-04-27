import React from 'react'
import { useState } from 'react';

const initialFormData = {
    username: "",
    password: "",
}

function LoginForm ({ login })  {
    const [formData, setFormData] = useState(initialFormData);

    /** Send {name, quantity} to parent
     *    & clear form. */
    function handleSubmit(evt) {
      evt.preventDefault();
      login(formData);
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
        <label htmlFor="name">Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
  
        <button>Submit</button>
      </form>
    );
}

export default LoginForm