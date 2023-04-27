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
    setUser(await JoblyApi.signUp(formData))
  }

  return (
    <div className="App" >
      <userContext.Provider value={{user: user}}>
        <BrowserRouter>
          <Navigation />
          <RoutesList signUp={signUp}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
