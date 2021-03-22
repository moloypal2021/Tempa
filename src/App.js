import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Homepage from "./pages/homepage/HomePage";
import Category from "./pages/category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductListing from "./pages/productListing/ProductListing";
import ShopingCart from "./pages/shopingCart/ShopingCart";
function App() {
  return (
    <div className="App">
      <Router>
        {/* Header Navbar  */}
        <Header />

        {/* Router Pages */}
        <Switch>
          <Route path="/shopingcart" component={ShopingCart} />
          <Route path="/productlisting" component={ProductListing} />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/category" component={Category} />
          <Route path="/" exact component={Homepage} />
        </Switch>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
