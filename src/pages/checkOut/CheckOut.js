import React, { Component } from "react";
import CartInfo from "../../component/cartInfo/CartInfo";
import OrderSummary from "../../component/orderSummary/OrderSummary";
export default class CheckOut extends Component {
  render() {
    return (
      <div>
        <section className="container mx-auto px-5 sm:px-6 lg:px-0 xl:px-10 xl:py-16 lg:py-12 md:py-10 sm:py-8 py-7">
          <div className="grid lg:grid-cols-2 lg:divide-x divide-border">
            <div className="xl:px-14 lg:px-10">
              <CartInfo />
            </div>
            <div className="xl:px-14 lg:px-10">
              <OrderSummary />
            </div>
          </div>
          <div className="flex justify-center xl:pt-28 md:pt-24 sm:pt-16 pt-14 pb-6">
            <button className="xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 md:py-4 py-2 bg-dark-button rounded-lg md:text-lg text-base font-bold text-white">
              Pay now
            </button>
          </div>
        </section>
      </div>
    );
  }
}
