import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userContext from "./userContext";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

/** Jobly Site
 * 
 * Props
 * -none
 * 
 * State
 * -user: information about the user like:
 *  {username, firstName, lastName, email, applications[]}
 * -isLoading: Boolean if loading
 * 
 * App -> {Navigation, RoutesList}
 */
function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  /** Checks for logged in user, and keeps them logged in  */
  useEffect(function checkTokenOnMount() {
    async function checkToken() {
      if(localStorage.token) {
        JoblyApi.token = localStorage.token
        setUser(await JoblyApi.getSignedInUser());
      }

      setIsLoading(true);
    }

    checkToken();
  }, [])


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

  /** Clear token from api and localstorage and set user to null */
  function logout() {
    localStorage.removeItem("token");
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
      {isLoading ?
        <userContext.Provider value={{ user: user }}>
          <BrowserRouter>
            <Navigation logout={logout} />
            <RoutesList
              user={user}
              editProfile={editProfile}
              login={login}
              signUp={signUp}
            />
          </BrowserRouter>
        </userContext.Provider>
        :
        <div>is loading...</div>
      }
    </div>
  );
}

export default App;
