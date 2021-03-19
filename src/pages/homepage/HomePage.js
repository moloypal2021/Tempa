import React, { Component } from "react";
import Heros from "../../component/heros/Heros";
import HerosContent from "../../component/herosContent/HerosContent";
import PopularProduct from "../../component/popularProduct/PopularProduct";
import Category from "../../component/category/Category";
import About from "../../component/about/About";
export class HomePage extends Component {
  render() {
    return (
      <div>
        <Heros />
        <HerosContent />
        <PopularProduct />
        <Category />
        <About />
      </div>
    );
  }
}

export default HomePage;
