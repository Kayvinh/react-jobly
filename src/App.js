import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom/dist";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
