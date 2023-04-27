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

  /**signs up a user */
  async function signUp(formData) {
    setUser(await JoblyApi.signUp(formData));
  }

  async function login(formData) {
    setUser(await JoblyApi.login(formData));
  }

  /** Clear token and set user to null */
  function logout() {
    JoblyApi.clearToken();
    setUser(null);
  }

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
