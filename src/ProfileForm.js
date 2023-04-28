import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from './userContext';
import './SignUpForm.css';


/**renders and manages form for signup
 * 
 * Props
 * -editProfile(): edit logged in user data, cannot edit username
 * 
 * State
 * -formData:
 *  {username, firstName, lastName, email}
 * 
 * uses context: user.username, user.firstName, user.lastName, user.email
 * 
 * RoutesList -> ProfileForm
 */
function ProfileForm ({ editProfile })  {//TODO: pass specifically as a prop
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const initialFormData = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  }
  
  const [formData, setFormData] = useState(initialFormData);


    //TODO: handle errors here
    /** Send formData to parent
     *  Redirect to home
     */
    async function handleSubmit(evt) {
        evt.preventDefault();
        await editProfile(formData);
        navigate("/");
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
                                    disabled
                                    className='form-control'
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name:</label>
                                <input
                                    required
                                    className='form-control'
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name:</label>
                                <input
                                    required
                                    className='form-control'
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    required
                                    minLength={6}
                                    className='form-control'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;