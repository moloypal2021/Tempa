import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Homepage from "./pages/homepage/HomePage";
import Category from "./pages/category/Category";
function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Navbar  */}
        <Header />
        {/* Router Pages */}
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/" component={Homepage} />
        </Switch>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
