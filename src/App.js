import { Route } from "react-router-dom";
import Users from "./Components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Users} />
    </div>
  );
}

export default App;
