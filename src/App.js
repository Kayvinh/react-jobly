import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userContext from "./userContext";
import { useState } from "react";
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
  const [user, setUser] = useState(null)
  console.log("user:", user);

  /**signs up and logs in user
   * keeps token in joblyApi
   * 
   * userData like {username, password, firstName, lastName, email}
  */
  async function signUp(userData) {
    setUser(await JoblyApi.signUp(userData));
  }

  /** logs in a user 
   * keeps token in joblyApi
   * 
   * credentials like: {username, password}
  */
  async function login(credentials) {
    setUser(await JoblyApi.login(credentials));
  }

  /** Clear token and set user to null */
  function logout() {
    JoblyApi.clearToken();
    setUser(null);
  }

  /** edits user info
   * takes {username, firstName, lastName, email}
   * username cannot be edited.
   */
  async function editProfile(editData) {
    setUser(await JoblyApi.editProfile(editData));
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
