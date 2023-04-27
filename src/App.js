import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import userContext from "./userContext";
import { useState } from "react";

/** Jobly Site
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * App -> {Navigation, RoutesList}
 */
function App() {
  const [user, setUser] = useState(null)
  const [apiKey, setApiKey] = useState(null)


  return (
    <div className="App" >
      <userContext.Provider value={{user: user}}>
        <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
