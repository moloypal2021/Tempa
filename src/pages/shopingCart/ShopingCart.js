import React, { Component } from "react";
import Title from "../../component/categoryTitle/Title";
import CartBox from "../../component/cart/CartBox";

export default class ShopingCart extends Component {
  render() {
    return (
      <div>
        <Title title="Shopping cart" />
        <CartBox />
      </div>
    );
  }
}
