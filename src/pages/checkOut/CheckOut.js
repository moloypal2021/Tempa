import React, { Component } from "react";
import CartInfo from "../../component/cartInfo/CartInfo";
import OrderSummary from "../../component/orderSummary/OrderSummary";
export default class CheckOut extends Component {
  render() {
    return (
      <div>
        <section className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-7">
          <div className="grid lg:grid-cols-2 lg:divide-x divide-border">
            <div className="xl:px-14 lg:px-10">
              <CartInfo />
            </div>
            <div className="xl:px-14 lg:px-10">
              <OrderSummary />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
