import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from "./api";

/** Jobly Site
 * 
 * Props
 * -none
 * 
 * State
 * -user: information about the user like:
 *  {username, firstName, lastName, email, applications[]}
 * 
 * App -> {Navigation, RoutesList}
 */
function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null)
  console.log("user:", user);
  JoblyApi.token = token;

  useEffect(function updateUserOnTokenChange() {
    async function getUser(){
      setUser(token ? await JoblyApi.getSignedInUser() : null)
    }
    getUser();
  }, [token])

  /**signs up and logs in user
   * keeps token in joblyApi
  */
  async function signUp(formData) {
    setToken(await JoblyApi.signUp(formData));
  }

  /** logs in a user 
   * keeps token in joblyApi
  */
  async function login(formData) {
    setToken(await JoblyApi.login(formData));
  }

  /** Clear token  */
  function logout() {
    setToken(null);
  }

  /** edits user info
   * takes {username, firstName, lastName, email}
   * username cannot be edited.
   */
  async function editProfile(formData) {
    setUser(await JoblyApi.editProfile(formData));
  }

  return (
    <div className="App" >
      <userContext.Provider value={{user: user}}>
        <BrowserRouter>
          <Navigation logout={logout}/>
          <RoutesList editProfile={editProfile} login={login} signUp={signUp}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
