import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Homepage from "./pages/homepage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Navbar  */}
        <Header />

        {/* Router Pages */}
        <Switch>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
