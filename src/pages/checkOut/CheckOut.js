import React, { Component } from "react";
import CartBox from "../../component/cart/CartBox";
import CartInfo from "../../component/cartInfo/CartInfo";
export default class CheckOut extends Component {
  render() {
    return (
      <div>
        <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-7">
          <div className="grid lg:grid-cols-2 divide-x divide-border">
            <div className="px-14">
              <CartInfo />
            </div>
            <div className="px-14">
              <CartBox />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
