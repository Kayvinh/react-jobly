import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom/dist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
